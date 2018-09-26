const mainHeader = document.getElementById('header');
const figImgs = document.querySelectorAll('.quoteImg');
const body = document.getElementById('body');
document.addEventListener('scroll', ()=>{
    mainHeader.style.backgroundPositionY = `${window.scrollY/50 + 50}%`;
    body.style.backgroundPositionY = `${window.scrollY/100 + 50}%`;

    figImgs.forEach((element, i)=> {
        figImgs[i].style.top = `${(window.scrollY  / 60) - 40}%`;
    });

});
