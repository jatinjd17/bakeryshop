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

const Checkoutsuccessfull = () => {
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
      <div className="title">Product Purchased Successfully</div>
      {/* <div className="description">
        Welcome to The Cake Shop! We believe cakes should look beautiful and
        taste delicious. We love to design wedding and specialty cakes, as well
        as a daily selection of cookies and other treats ready for anyone
        looking for a little something sweet to eat.
      </div>
      <div className="title2">Owner</div>
      <div className="description2">Kiran Jat</div>
      <div className="description2">Kritika Paranchi</div> */}
    </main>
  );
};

export default Checkoutsuccessfull;
