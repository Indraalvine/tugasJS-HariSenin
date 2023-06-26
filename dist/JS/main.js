//fixed nav

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
  
    if (window.pageYOffset > 0) {
      header.style = "box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5); z-index-:1000; position:sticky; top:0";
    }else{
        header.style = "box-shadow:5"
    }
  };



//btn click

const btnNav = document.getElementById('btn-nav')
const navMenu = document.getElementById('nav-menu')

btnNav.addEventListener('click', function(){
  btnNav.classList.toggle('btnNav-active');
  navMenu.classList.toggle('hidden');
})

//click menu

const menuKatsu = document.getElementById('menu-katsu')

const katsuElm = document.getElementById('katsu')
katsuElm.style.display = "none"

const menuTeriyaki = document.getElementById('menu-teriyaki')

const teriyakiElm = document.getElementById('teriyaki')
teriyakiElm.style.display = "none"

const menuWings = document.getElementById('menu-wings')

const wingsElm = document.getElementById('wings')
wingsElm.style.display = "none"

const menuJus = document.getElementById('menu-jus')

const jusElm = document.getElementById('jus')
jusElm.style.display = "none"


menuKatsu.addEventListener('click', function(){
 if (menuKatsu.classList.toggle('menuKatsu-active')) {
  katsuElm.style.display = "block"
 }else{
  katsuElm.style.display = "none"
 }
})

menuTeriyaki.addEventListener('click', function(){
  if (menuTeriyaki.classList.toggle('menuTeriyaki-active')) {
   teriyakiElm.style.display = "block"
  }else{
   teriyakiElm.style.display = "none"
  }
 })

menuWings.addEventListener('click', function(){
  if (menuWings.classList.toggle('menuWings-active')) {
   wingsElm.style.display = "block"
  }else{
   wingsElm.style.display = "none"
  }
 })

 menuJus.addEventListener('click', function(){
  if (menuJus.classList.toggle('menuJus-active')) {
   jusElm.style.display = "block"
  }else{
   jusElm.style.display = "none"
  }
 })

// menuKatsu.addEventListener('click', function(){
//   if (katsuElm.style.display = "none") {
//     katsuElm.style.display = "block"
//   }else{
//     katsuElm.style.display = "none"
//   }
// })