import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./Header/Header";
import { UseEffectScroll } from "react-use-smooth-scroll";
import "react-use-smooth-scroll/dist/index.css";
import Footer from "./Footer/Footer";
export const Template = (props) => {
  const { Component } = props;
  return (
    <Fragment>
      <UseEffectScroll>
        <Header />
        <Component />
      </UseEffectScroll>
      <Footer />
    </Fragment>
  );
};
