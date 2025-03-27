//  const sidebar = document.querySelector('.sidebar')
//  const cols1 = document.querySelector('.cols1')
//  const sidecancel = document.querySelector('.sidecancel')
//  const sidebarcancel = document.querySelector('.sidebar-cancel')

//  cols1.addEventListener("click",function(){
//     sidebar.style.display="block";
//     cols1.style.display="none";
//  })

//  sidecancel.addEventListener("click",function(){
//     sidebar.style.display="none";
//     cols1.style.display="block";
//  })
 
// var change_imgcol = document.querySelector('.imgcol')
// var change_imgcol1 = document.querySelector('.imgcol1')
// var title = document.querySelector('.col_title')

// change_imgcol.addEventListener("mouseover",function(){
//      title.style.opacity="1";
// })
// change_imgcol1.addEventListener("mouseover",function(){
//     title.style.opacity="1";
// })

// Select elements
const menuToggle = document.getElementById('menu-toggle');
const menuTogglemodify = document.getElementById('menu-toggle-modify');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const submenuToggles = document.querySelectorAll('.submenu-toggle');
const cols1 = document.querySelector('.cols1');
const cols2 = document.querySelector('.cols2');

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
  menuToggle.style.display="none"
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  menuToggle.style.display="block"
  menuTogglemodify.style.display="block"
});

menuTogglemodify.addEventListener('click', () => {
  sidebar.classList.add('active');
  menuTogglemodify.style.display="none"
});

// Toggle submenu visibility
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.parentElement;
    parent.classList.toggle('active');
  });
});

window.addEventListener("scroll", function() {
  var cols1 = document.querySelector('.sidemenu');
  cols1.classList.add("sticky", window.scrollY > 0);
} )
