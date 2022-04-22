import style from "../css/components/Modal.module.scss";

function Modal({ open, header, children }) {
  return (
    <div className={`${style.modal} ${open ? style.visible : ""}`}>
      <section>
        <header>{header}</header>
        {children}
      </section>
    </div>
  );
}

export function NoticeEditModal({ open, handleClose }) {
  return (
    <Modal open={open} header="공지사항 관리">
      <main>
        <textarea></textarea>
      </main>
      <footer>
        <button>저장</button>
        <button onClick={handleClose}>취소</button>
      </footer>
    </Modal>
  );
}

export function AddSWModal({ open, handleClose }) {
  return (
    <Modal open={open} header="펌웨어 추가">
      <main>
        <form id="modal-form">
          <input name="model" placeholder="모델명"></input>
          <input name="file" type="file"></input>
          <input name="notice" placeholder="비고"></input>
        </form>
        <footer>
          <button>저장</button>
          <button onClick={handleClose}>취소</button>
        </footer>
      </main>
    </Modal>
  );
}
