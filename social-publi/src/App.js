import './App.css';
import Influencer from './components/Influencer/influencer.jsx';
import './components/Influencer/influencer.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services/services.jsx';
import Brands from './components/Brands/brands.jsx';
import Tools from './components/Tools/tools.jsx';
import Home from './components/Home/home.jsx';
import TestimonialProfile from './components/Testimonial-profile';
import ContactUs from './components/contactUs';
import { BrowserRouter as Router,Routes ,Switch ,Route, BrowserRouter } from 'react-router-dom';
import LetsTalk from './components/LetsTalk';
function App() {  
  return (
    <>

    <Router>
<<<<<<< HEAD
         <Navbar/>
             <Routes>
             <Route path='/' exact element={<Home/>}/>
             <Route path='/influencer' element={<Influencer/>}/>
             <Route path='/contactus' element={<ContactUs/>}/>
             <Route path='/services' element={<Services/>}/>
             <Route path='/brands' element={<Brands/>}/>
             <Route path='/tools' element={<Tools/>}/>
             <Route path='/influencer/testimonial' element={<TestimonialProfile
               />}/>
             </Routes>
             
=======
        <Navbar/>
            <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/influencer' element={<Influencer/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/brands' element={<Brands/>}/>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/influencer/testimonial' element={<TestimonialProfile/>}/>
            </Routes>
>>>>>>> 083ea1ef0b93da1d6d877abd1d94a640de843518
        <LetsTalk/>
        <Footer/>
    
        </Router>
    
    </>
  );
}

export default App;
