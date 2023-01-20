import styles from "../header/Header.module.css";

import IgniteLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do Ignite" />
    </header>
  );
}
