import axios from "axios";
import { useEffect, useState, useRef } from "react";
import style from "../css/components/Modal.module.scss";

function Modal({ open, header, children, loading }) {
  return (
    <div className={`${style.modal} ${open ? style.visible : ""} `}>
      <section>
        <header>{header}</header>
        {children}
        <div className={loading ? style.loading : ""}></div>
      </section>
    </div>
  );
}

export function NoticeEditModal({ open, notice, handleClose, setNotice }) {
  const [tempNotice, setTempNotice] = useState(notice);

  useEffect(() => {
    setTempNotice(notice);
  }, [notice, open]);

  const handleChangeNotice = (e) => {
    setTempNotice(e.target.value);
  };

  const handleClickSave = async () => {
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SERVER_URL + "/api/notice",
      data: {
        notice: tempNotice,
      },
    });
    if (res.status !== 200) return;

    setNotice(tempNotice);
    handleClose();
  };

  return (
    <Modal open={open} header="공지사항 관리">
      <main>
        <textarea value={tempNotice} onChange={handleChangeNotice}></textarea>
      </main>
      <footer>
        <button onClick={handleClickSave}>저장</button>
        <button onClick={handleClose}>취소</button>
      </footer>
    </Modal>
  );
}

export function AddSWModal({
  open,
  handleClose,
  product,
  index,
  type,
  setProduct,
}) {
  const [model, setModel] = useState(product.model);
  const [file, setFile] = useState();
  const [notice, setNotice] = useState(product.notice);
  const [loading, setLoading] = useState(false);
  const fileInput = useRef();

  //열 때마다 데이터 새로 불러오기
  useEffect(() => {
    setModel(product.model);
    fileInput.current.value = "";
    setFile();
    setNotice(product.notice);
  }, [open, product.model, product.notice]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "model":
        setModel(e.target.value);
        break;
      case "file":
        setFile(e.target.files[0]);
        break;
      case "notice":
        setNotice(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("type", type);
    formData.append("model", model);
    formData.append("file", file);
    formData.append("notice", notice);

    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SERVER_URL + "/api/sw/upload",
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.status !== 200) return;

    const fileName = fileInput.current.value.split("\\")[2];
    setProduct(model, fileName, notice); //상위 Component 랜더링
    setLoading(false);
    handleClose();
  };

  return (
    <Modal open={open} header="펌웨어 업로드" loading={loading}>
      <main>
        <form id={`modal-form${index}`} onSubmit={handleSubmit}>
          <input
            name="model"
            placeholder="모델명"
            value={model}
            onChange={handleChange}
          ></input>
          <input
            name="file"
            type="file"
            ref={fileInput}
            onChange={handleChange}
          ></input>
          <input
            name="notice"
            placeholder="비고"
            value={notice}
            onChange={handleChange}
          ></input>
        </form>
        <footer>
          <button type="submit" form={`modal-form${index}`}>
            저장
          </button>
          <button onClick={handleClose}>취소</button>
        </footer>
      </main>
    </Modal>
  );
}
