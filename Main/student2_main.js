
// main page script files

//menu button for scales <700px

 document.querySelector(".menuBtn").addEventListener
 ("click",()=> document.querySelector(".main-menu").classList.toggle("show"));

       //back to top button
       var topbutton = document.getElementById("topbtn");

function backtopFunction(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

//zoom button

var result = document.getElementById("zoomBtn");

var currentText = 20;

function bigFont() {
 ++currentText;
 result.style.fontSize = currentText + 'px';
}

function smallFont() {
 --currentText;
 result.style.fontSize = currentText + 'px';
}


// form page script files

function formValidation() {
    var x = document.forms["myForm"]["uname"].value;
    var y = document.forms["myForm"]["umail"].value;
    var z = document.forms["myForm"]["ucom"].value;
    var w = document.forms["myForm"]["rate"].value;
    if (x=="",y=="",z=="",w=="") {
      alert("You Should fill all the entries");
      return false;
    } else{
      
            popWin = window.open("","PopWin","width=400,height=300,status=no,toolbar=no,align=centre")
            message = "Dear " + x + ", Thank you very much for your feedback. You have"
            +" rated our site as " + w + " and your comment was, " + z + "." ;
          popWin.document.write(message);

    }
  }
