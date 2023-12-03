import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { ColorChooser, ImageLoader, MessageDisplay } from "@/components/common";
import { ProductShowcaseGrid } from "@/components/product";
import { RECOMMENDED_PRODUCTS, SHOP } from "@/constants/routes";
import { displayMoney } from "@/helpers/utils";
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";

const Contactus = () => {
  const inlineStyles = {
    color: "blue",
    fontSize: "16px",
    // textAlign: "center",
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;
  };
  return (
    <main className="container">
      <div className="title">Contact Us</div>
      <div className="description">
        Email: kjat20842@gmail.com, KritikaP35@gmail.com
      </div>
    </main>
  );
};

export default Contactus;
