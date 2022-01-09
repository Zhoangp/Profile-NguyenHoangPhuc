import react from "react";
import { useRef } from "react";
import About from "./Home/About/About";
const Refs = (props) => {
    const refAbout = useRef(null)
    return (
        <About ref={refAbout}/>
    )
}
export default Refs