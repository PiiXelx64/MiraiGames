window.onscroll = function parallax() {

    var y = Math.floor(window.scrollY);
    console.log(+y)

      if (document.body.scrollTop > 592 || document.documentElement.scrollTop > 592) 
      {
    document.getElementById("Parallax").style.backgroundPositionY = y*1.2+"px";
      } else {
    document.getElementById("Parallax").style.backgroundPositionY = y*0.7+"px";
      }

    }
    console.log(document.body.scrollTop);