const menubar = document.getElementById('menubar');
console.log(menubar);
const navlinks = document.getElementById('navlinks');
console.log(navlinks);




menubar.addEventListener('click',()=>{
    navlinks.classList.toggle('active');

    if (navlinks.classList.contains('active')) {
        menubar.src="img/Close.svg";
    } else {
        menubar.src="img/menubar.svg";
    }
})
  


