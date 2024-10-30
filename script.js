// the buttonn Id
let mybutton = document.getElementById("myBtn");

// When the user scroll down 10px from the top of the document, show the button
window.onscroll = () => {
    document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 ?  mybutton.style.display = "block" : mybutton.style.display = "none"; 

};