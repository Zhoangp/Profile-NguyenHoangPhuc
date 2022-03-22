import { BrowserRouter, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Fragment, useEffect, useState } from "react";
import Header from "./Header/Header";
import { UseEffectScroll } from "react-use-smooth-scroll";
import "react-use-smooth-scroll/dist/index.css";
import Footer from "./Footer/Footer";
import { useRef } from "react";
export const Template = (props) => {
  const {pathname} = useLocation()
  const { Component } = props;
  const listRefs = useRef([])
  const height = useRef(null)
  const [arr, setArr] = useState([])
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    if(listRefs.current) {
    listRefs.current.map((item) => {
      setArr(arr => [...arr,item.getBoundingClientRect().top])
    }, listRefs)
  }
  }, [listRefs])
  useEffect(() => {
    if(pathname === '/work') {
      document.body.classList.add('bg')
      console.log(pathname)
    }
    else {
      document.body.classList.remove('bg')
    }

  }, [pathname])


  return (
    <div ref={height}>
      
            {/* <UseEffectScroll> */}
         {/*  <ParallaxProvider>
        <Parallax y={[50, -50]}>
        </Parallax> */}
          <Header ref={listRefs} listPos={arr}/>
        <Component ref={listRefs}  />
      {/* </ParallaxProvider> */}
      {/* </UseEffectScroll> */}
    </div>
  );
};
