import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fragment } from "react/cjs/react.production.min"
import Header from "./Header/Header"
import { UseEffectScroll } from 'react-use-smooth-scroll'
import 'react-use-smooth-scroll/dist/index.css'
export const Template = (props) => {
    const {Component} = props
    return <Fragment>
            <Header/>
            <UseEffectScroll>
                <Component/>
                </UseEffectScroll>
        </Fragment>
        
}