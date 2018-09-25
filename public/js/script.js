const mainHeader = document.getElementById('header');

document.addEventListener('scroll', ()=>{
    mainHeader.style.backgroundPositionY = `${window.scrollY/50 + 50}%`;
});
