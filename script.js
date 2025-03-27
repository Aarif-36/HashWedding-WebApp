// // document.getElementById('toggle-btn').addEventListener('click', function () {
// //     const sidebar = document.getElementById('sidebar');
// //     const content = document.querySelector('.content');

// //     if (sidebar.classList.contains('hidden')) {
// //         sidebar.classList.remove('hidden');
// //         sidebar.classList.add('visible');
// //         content.classList.remove('sidebar-hidden');
// //         content.classList.add('sidebar-visible');
// //     } else {
// //         sidebar.classList.remove('visible');
// //         sidebar.classList.add('hidden');
// //         content.classList.remove('sidebar-visible');
// //         content.classList.add('sidebar-hidden');
// //     }
// // });


// var imagess1 = document.querySelector('.imagess1')

// imagess1.addEventListener("mouseover",function(){
//     image.style.filter = "brightness(200%)";
// })
// imagess1.addEventListener("mouseout",function(){
//     image.style.filter = "brightness(50%)";
// })
// image.addEventListener("mouseover",function(){
//     image.style.filter = "brightness(200%)";
// })
// image.addEventListener("mouseout",function(){
//     image.style.filter = "brightness(50%)";
// })


// const toggleButton = document.getElementById('toggle-button');
// const navLinks = document.getElementById('nav-links');

// toggleButton.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


// Select elements
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

// Toggle sidebar visibility
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Toggle submenu visibility
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = toggle.parentElement;
    parent.classList.toggle('active');
  });
});
