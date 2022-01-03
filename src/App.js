import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import { Template } from './Template/HomeTemplate/Template'
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import './Sass/main.scss'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template Component={Home}/>}></Route>
      <Route path="/contact" element={<Template Component={Contact}/>}></Route>
      </Routes>
 </BrowserRouter>
  );
}

export default App;
