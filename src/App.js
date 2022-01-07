import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import { Template } from './Template/HomeTemplate/Template'
import Home from './Views/Home/Home';
import './Sass/main.scss'
import { UseEffectScroll } from 'react-use-smooth-scroll';
import Work from './Views/Work/Work';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template Component={Home}/>}></Route>
      <Route path="/work" element={<Template Component={Work}/>}></Route>
      </Routes>
 </BrowserRouter>
  );
}

export default App;
