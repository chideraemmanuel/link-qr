"use client";

import Image from "next/image";
import styles from "./GeneratorPreview.module.scss";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { useRef } from "react";

interface ImageRef {
  src: string;
}

const GeneratorPreview: React.FC = () => {
  const imageRef = useRef<ImageRef>();
  console.log(imageRef.current?.src);

  return (
    <div className={styles.generatorPreview}>
      <div className={styles.generatorPreview__image}>
        <Image src={logo} alt="QR Code Preview" ref={imageRef} />
        {/* <img src={logo} alt="QR Code Preview" /> */}
      </div>

      {/* <Link href={logo}>Download</Link> */}
      <a href={imageRef.current?.src} download={"qrcode"}>
        Download
      </a>
    </div>
  );
};

export default GeneratorPreview;
