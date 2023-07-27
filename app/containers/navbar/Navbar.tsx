import Logo from "@/app/components/logo/Logo";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
};

export default Navbar;
