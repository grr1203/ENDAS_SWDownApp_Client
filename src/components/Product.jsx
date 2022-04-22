import style from "../css/components/product.module.scss";
import { AddSWModal } from "../components/Modal";
import { useState } from "react";

function Product({ product }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={style.product}>
      <div className={style.name}>{product.name}</div>
      <div>{product.model}</div>
      <div className={style.filename}>
        <i class="fa-solid fa-file"></i>
        {product.fileName}
      </div>
      <div className={style.notice}>{product.notice}</div>
      <button onClick={openModal}>새 펌웨어 추가</button>
      <AddSWModal open={modal} handleClose={closeModal} />
    </div>
  );
}

export default Product;
