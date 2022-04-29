import style from "../css/components/product.module.scss";
import { AddSWModal } from "../components/Modal";
import { useState } from "react";
import axios from "axios";

function Product({ product, type, index }) {
  const [modal, setModal] = useState(false);
  const [loading, setloading] = useState(false);
  const [login] = useState(localStorage.getItem("login"));

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const downloadSW = async () => {
    setloading(true);
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SERVER_URL + "/api/sw/download",
      data: {
        swName: product.name,
      },
      responseType: "blob",
    });
    if (res.status !== 200) return;

    const fileName = decodeURIComponent(
      res.headers["content-disposition"].split('"')[1]
    );
    const swUrl = URL.createObjectURL(new Blob([res.data]));
    downloadFile(swUrl, fileName);
    setloading(false);
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
      <div className={loading ? style.loading : ""}></div>
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
