var progressBar = document.querySelector('.progress-bar');
  var progressBar1 = document.querySelector('.progress-bar1');
  var progress = 0;
        
        document.getElementById("c11").style.display = "inline";
       document.getElementById("c22").style.display = "none";
  function fillProgressBar() {
    if (progress <= 100) {

      progressBar.style.height = progress + '%';
      progress=progress+10;
      setTimeout(fillProgressBar, 500);
    }
    else
    {
      progressBar.style.height="0%";
      progressBar1.style.height="0%";
      progress=0;
       document.getElementById("c11").style.display = "none";
       document.getElementById("c22").style.display = "inline";
      fillProgressBar2();
    }
  }
   function fillProgressBar2() 
    {
      if (progress <= 100)
       {
      progressBar1.style.height = progress + '%';
       progress=progress+10;
      setTimeout(fillProgressBar2, 500);
    }
    else
    {
      progressBar.style.height="0%";
      progressBar1.style.height="0%";
       progress=0;
           document.getElementById("c11").style.display = "inline";
       document.getElementById("c22").style.display = "none";
      fillProgressBar();
    }
  }
  
  fillProgressBar();