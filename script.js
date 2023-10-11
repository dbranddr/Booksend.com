const menu = document.querySelector('.links ul')
const openIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.closeIcon')

openIcon.addEventListener('click', () =>{
    menu.style.display ='block';
    closeIcon.style.display = "block";
})
closeIcon.addEventListener('click', () =>{
  menu.style.display ='none';
});