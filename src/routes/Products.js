import { useParams } from "react-router-dom";
import Nav from "../components/Navigator";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { NoticeEditModal } from "../components/Modal";
import "../css/screens/products.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const { type } = useParams();
  const [modal, setModal] = useState(false);
  const [login] = useState(localStorage.getItem("login"));
  const [notice, setNotice] = useState("");
  const [productList, setProductList] = useState([]);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    async function axiosNotice() {
      const res = await axios({
        method: "get",
        url: `http://localhost:4000/api/notice`,
      });
      setNotice(res.data.notice);
    }
    axiosNotice();
  }, []);

  useEffect(() => {
    async function axiosSWList() {
      const res = await axios({
        method: "get",
        url: `http://localhost:4000/api/sw/list/${type}`,
      });
      setProductList(res.data);
    }
    axiosSWList();
  }, [type]);

  return (
    <div className="base">
      <Nav />
      <div className="notice">
        <h3>
          <i className="fa-solid fa-circle-exclamation"></i> {notice}
        </h3>
        <button
          className={`notice__edit ${login ? "" : "hidden"}`}
          onClick={openModal}
        >
          공지사항 관리
        </button>
        <NoticeEditModal
          open={modal}
          notice={notice}
          setNotice={setNotice}
          handleClose={closeModal}
        />
        <div className="excel-down">
          <img
            src={process.env.PUBLIC_URL + "/img/excel.png"}
            alt="excel download"
          />
        </div>
      </div>

      <div className="products">
        {productList.map((product, index) => (
          <Product product={product} type={type} key={index} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;

const testproductlist = [
  {
    name: "CL",
    type: "CL",
    model: "EVR-SA0000",
    fileName: "",
    notice: "민수",
  },
  {
    name: "CL-WS",
    type: "CL",
    model: "HMR-SA000XL",
    fileName: "",
    notice: "조달",
  },
  {
    name: "CEL",
    type: "CEL",
    model: "HMR-SA204 CEL",
    fileName: "",
    notice: "",
  },
];
