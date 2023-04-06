import React from 'react';
import Home from './pages/Home';
import About_Demo from './pages/About_Demo';
import Blog_Demo from './pages/Blog_Demo';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Blog_Details from './pages/Blog_Details';
import Partner from './pages/Partner';
import Teams from './pages/Teams';
import Privacy_Policy from './pages/Privacy_Policy';
import Case_Study from './pages/Case_Study';
import terms_of_service from "./pages/terms_of_service";
import subscription_terms from './pages/subscription_terms';
import permitted_use_policy from './pages/permitted_use_policy';
import cookies_policy from './pages/cookies_policy';
import faq from './pages/faq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
  <React.StrictMode>
    <Router>

      <Routes>
        
        <Route exact path='' Component={Home}/>
        <Route exact  path='/home' Component={Home}/>
        <Route exact  path='/home#trysharepass' Component={Home}/>
        <Route path='/about' Component={About_Demo}/>
        <Route path='/blog' Component={Blog_Demo}/>
        <Route path='/blog' Component={Blog_Demo}/>
        <Route path='/blog_details' Component={Blog_Details}/>
        <Route path='/partner' Component={Partner}/>
        <Route path='/teams' Component={Teams}/>
        <Route path='/privacy_policy'Component={Privacy_Policy}/>

        <Route path='/case-study'Component={Case_Study}/>
        <Route path='/terms-services'Component={terms_of_service}/>
        <Route path='/subscription-terms'Component={subscription_terms}/>
        <Route path='/permitted-use-policy'Component={permitted_use_policy}/>
        <Route path='/cookies-policy'Component={cookies_policy}/>
        <Route path='/faqs'Component={faq}/>
        
      </Routes>


    </Router>
    
    <App />
    
  </React.StrictMode>
  <Footer/>
  </div>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
