import style from "../css/components/Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__row}>
        <div className={style.footer__col}>
          <h2>ENDAS</h2>
        </div>
        <div className={style.footer__col}>
          <h6>Copyright</h6>
          <span>© 2022 ENDAS R&D</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
