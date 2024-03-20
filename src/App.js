import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Resume from './Pages/Projects';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Navbar/>
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='reachout/' element={<Contact/>}/>
      <Route path='projects/' element = {<Resume/>}/>
      </Routes>
      
      <Footer/>
      
    </div>
  );
}

export default App;
