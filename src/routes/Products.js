import { useParams } from "react-router-dom";
import Nav from "../components/Navigator";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { NoticeEditModal } from "../components/Modal";
import "../css/screens/products.scss";
import { useState } from "react";

function Products() {
  const { name } = useParams();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="base">
      <Nav />
      <div className="notice">
        <h3>
          <i class="fa-solid fa-circle-exclamation"></i> 펌웨어 업데이트시
          공장초기화 해야합니다.
        </h3>
        <button className="notice__edit" onClick={openModal}>
          공지사항 관리
        </button>
        <NoticeEditModal open={modal} handleClose={closeModal} />
        <div className="excel-down">
          <img
            src={process.env.PUBLIC_URL + "/img/excel.png"}
            alt="excel download"
          />
        </div>
      </div>
      <div className="products">
        {productlist.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Products;

const productlist = [
  {
    name: "CL",
    model: "EVR-SA0000",
    fileName: "CL_128CH_v02_01_136T5_UNHASP_R_LNN_ubuntu.tar",
    notice:
      "테스트 버전 CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.CSS의 흔한 사용은 사용자가 마우스 커서를 메뉴 위에 올려놓을 때 그 메뉴 아이템을 하이라이팅하는 것입니다. 트랜지션을 사용하여 효과를 훨씬 더 매력적으로 만들 수 있습니다.",
  },
  {
    name: "CL-WS",
    model: "HMR-SA000XL",
    fileName: "CL-WS_128CH_v02_01_136T5_UNHASP_R_LNN_ubuntu.tar",
    notice: "테스트 버전",
  },
  {
    name: "CL-WS",
    model: "HMR-SA000XL",
    fileName: "CL-WS_128CH_v02_01_136T5_UNHASP_R_LNN_ubuntu.tar",
    notice: "테스트 버전",
  },
  {
    name: "CL-WS",
    model: "HMR-SA000XL",
    fileName: "CL-WS_128CH_v02_01_136T5_UNHASP_R_LNN_ubuntu.tar",
    notice: "테스트 버전",
  },
];
