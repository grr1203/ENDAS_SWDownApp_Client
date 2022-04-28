import style from "../css/components/product.module.scss";
import { AddSWModal } from "../components/Modal";
import { useState } from "react";
import axios from "axios";

function Product({ product, type, index }) {
  const [modal, setModal] = useState(false);
  const [login] = useState(localStorage.getItem("login"));

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const downloadSW = async () => {
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SERVER_URL + "/api/sw/download",
      data: {
        swName: product.name,
      },
      responseType: "blob",
    });
    if (res.status !== 200) return;

    const fileName = res.headers["content-disposition"].slice(22, -1);
    const swUrl = URL.createObjectURL(new Blob([res.data]));
    downloadFile(swUrl, fileName);
  };

  //front change
  const setProduct = (model, fileName, notice) => {
    product.model = model;
    product.fileName = fileName;
    product.notice = notice;
  };

  return (
    <div className={style.product}>
      <div className={style.name} onClick={downloadSW}>
        {product.name}
      </div>
      <div className={style.model}>{product.model}</div>
      <div className={style.filename} onClick={downloadSW}>
        <i className="fa-solid fa-file"></i>
        {product.fileName}
      </div>
      <div className={style.notice}>{product.notice}</div>
      <button className={login ? "" : "hidden"} onClick={openModal}>
        새 펌웨어 업로드
      </button>
      <AddSWModal
        open={modal}
        handleClose={closeModal}
        product={product}
        type={type}
        index={index}
        setProduct={setProduct}
      />
    </div>
  );
}

const downloadFile = (fileUrl, fileName) => {
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
};

export default Product;
