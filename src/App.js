// import { Router } from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/pages/About/About'
import Services from './component/pages/Services/Services';
import Tech from './component/pages/Tech/Tech'
import Footer from './component/Footer/Footer';
import Join from './component/pages/Join/Join';


const boxes = document.querySelectorAll('.sliding')

window.addEventListener('scroll', checkBoxes)

checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 6 * 4

    for(const box of boxes){
        const boxTop = box.getBoundingClientRect().top

        const Result = (boxTop < triggerBottom)?box.classList.add('show'):box.classList.remove('show');
    }

}
function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/tech" element={<Tech/>} />
        <Route path="/join" element={<Join/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
