let text = document.getElementById ('text')
let hill1 = document.getElementById('hill1')
let hill2 = document.getElementById('hill2')
let scrolloff = document.querySelectorAll('#scrolloff1, #scrolloff2, #scrolloff3')
let scrollon = document.querySelectorAll('#scrollon1, #scrollon2, #scrollon3')


window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 0.5 + 'px';
  hill1.style.left = value * -2.5 + 'px';
  hill2.style.left = value * 2.5 + 'px';
});


const nav = document.querySelector("nav"),
      toggleBtn = nav.querySelector(".toggle-btn");
    
    toggleBtn.addEventListener('click', () =>{
    nav.classList.toggle("open");
  });


scrolloff.forEach(scrolloff=>scrolloff.addEventListener('click', ()=>{
  document.getElementsByTagName('body')[0].style.overflowY="hidden"
  document.body.scroll = "no"
})
);

scrollon.forEach(scrollon=>scrollon.addEventListener('click', ()=>{
  document.getElementsByTagName('body')[0].style.overflowY="visible"
})
);

