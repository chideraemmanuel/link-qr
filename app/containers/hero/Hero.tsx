import WordWrap from "@/app/components/wordWrap/WordWrap";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <h2>
        Generate and Publish <br />{" "}
        {/* <div>
          <span>Dynamic</span>
        </div>{" "} */}
        <WordWrap>Dynamic</WordWrap> QR Codes
      </h2>
      <p>
        LinkQR is a dynamic QR code generator for websites, social media
        profiles and more! Its allows users to easily create customized QR codes
        for sharing.
      </p>
    </div>
  );
};

export default Hero;
