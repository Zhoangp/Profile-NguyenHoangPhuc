import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Fragment, useEffect, useState } from "react";
import Header from "./Header/Header";
import { UseEffectScroll } from "react-use-smooth-scroll";
import "react-use-smooth-scroll/dist/index.css";
import Footer from "./Footer/Footer";
import { useRef } from "react";
export const Template = (props) => {
  const { Component } = props;
  const listRefs = useRef([])
  const [arr, setArr] = useState([])

  useEffect(() => {
    if(listRefs.current) {
    listRefs.current.map((item) => {
      setArr(arr => [...arr,item.getBoundingClientRect().top])
    }, listRefs)
  }
  }, [listRefs])
  return (
    <Fragment>
      
          {/*   <UseEffectScroll> */}
         {/*  <ParallaxProvider>
        <Parallax y={[50, -50]}>
        </Parallax> */}
          <Header ref={listRefs} listPos={arr}/>
        <Component ref={listRefs}  />
      <Footer />
      {/* </ParallaxProvider> */}
    </Fragment>
  );
};
