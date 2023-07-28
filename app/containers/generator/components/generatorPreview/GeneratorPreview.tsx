"use client";

import Image from "next/image";
import styles from "./GeneratorPreview.module.scss";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreTypes } from "@/app/redux/store";
// @ts-ignore
import { saveAs } from "file-saver";

const GeneratorPreview: React.FC = () => {
  const { previewImageSrc } = useSelector(
    (store: StoreTypes) => store.qrGenerator
  );

  const downloadQrCode = () => {
    saveAs(previewImageSrc, "qrcode.jpg");
  };

  return (
    <div className={styles.generatorPreview}>
      <div className={styles.generatorPreview__image}>
        {/* @ts-ignore */}
        <img src={previewImageSrc} alt="QR Code Preview" />
      </div>

      <button
        onClick={downloadQrCode}
        disabled={previewImageSrc.length === 0 ? true : false}
      >
        Download
      </button>
    </div>
  );
};

export default GeneratorPreview;
