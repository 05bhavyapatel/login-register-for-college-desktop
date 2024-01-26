const wrapper = document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopupstu=document.querySelector('.btnLogin-popupstudent');
const btnPopuptea=document.querySelector('.btnLogin-popupteacher');
const btnPopuppar=document.querySelector('.btnLogin-popupparent');
const iconClose=document.querySelector('.icon-close');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopupstu.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
btnPopuptea.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
btnPopuppar.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});