
import './App.css';


import React from 'react';



function App() {
  var loadScript = function(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
    }

    loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js');
    loadScript('http://code.jquery.com/ui/1.10.4/jquery-ui.js');
    loadScript('_next/static/chunks/index.js');
   
    
  return(
    <div className='App'>
     
    </div>
  );
 
}


export default App;
