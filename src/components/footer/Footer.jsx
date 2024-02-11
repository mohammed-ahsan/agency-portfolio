import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mohammed Ahsan</div>
      <div className={styles.text}>
      Mohammed Ahsan © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
