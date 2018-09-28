const mainHeader = document.getElementById('header');
const figImgs = document.querySelectorAll('.quoteImg');


document.addEventListener('scroll', ()=>{
    mainHeader.style.backgroundPositionY = `${window.scrollY/50 + 50}%`;
    main.style.backgroundPositionY = `${window.scrollY/700}%`;

    figImgs.forEach((element, i)=> {
        figImgs[i].style.top = `${(window.scrollY  / 60) - 40}%`;
    });

});



// Animations
    // Set the styles on the parent 
    mainHeader.style.position = 'relative';

    // make randomNumber generator to pick random location on header
    function randomNumber (min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    // Grab the icon's. 
        // put src's in a list
        const src = '../img/aniicon/'
        const pngList = [
            src + 'algorithm.png',
            src + 'applications.png',
            src + 'coding.png',
            src + 'html.png',
            src + 'open-book.png',
            src + 'programming.png'
        ]
        
    // Make a class to set the icon's to the page
    class AnimatedIcon {
        constructor(){
            this.id = 'icon' + randomNumber(0, 3000) + randomNumber(0, 3000);
            // Pick random icons
            this.src = () => {
                return pngList[randomNumber(0, pngList.length - 1)];
            }

            // pick random start-locations
            this.posY = ()=> {
                return (randomNumber(0, mainHeader.offsetHeight) - mainHeader.offsetHeight + 'px');
            }
            this.posX = () => {
                return (randomNumber(0, mainHeader.offsetWidth) - mainHeader.offsetWidth + 'px');
            }

            // Create the element
            this.spawn = () => {
                let size = 70 + 'px';
                let icon = new Image();
                let posX = this.posX();
                let posY = this.posY();
                icon.src = this.src();
                mainHeader.appendChild(icon);
                icon.style.position = 'absolute';
                icon.style.left = posX;
                icon.style.top = posY;
                icon.style.maxWidth = size;
                icon.style.maxHeight = size;
                icon.style.backgroundColor = 'rgba(255, 255, 255, .4)';
                icon.style.borderRadius = '10px';
                icon.style.padding = '10px';
                icon.style.transition = 'all 2s ease';
                icon.id = this.id;
            }
            
            this.animation = () => {
                let icon = document.getElementById(this.id);
                let headericon = document.getElementById('logoicon');
                let headericonRects= headericon.getBoundingClientRect();
                icon.style.left = headericonRects.left + 30 + "px";
                icon.style.top = headericonRects.top + "px";
                icon.style.transform = 'translateY(50%) translateX(100%)'
                setTimeout(() => {
                icon.style.transform = 'scale(.1) translateY(50%) translateX(100%)'      
                    setTimeout(() => {
                        mainHeader.removeChild(icon);
                    }, 2000);             
                }, 1800);
            }
        }
    }
    
    // Start the object animations 

        window.onload = () => {
            let headericon = document.getElementById('logoicon');
            headericon.style.transition = 'all 1s ease';
            headericon.style.transform = 'scale(1.5)';
            
            setTimeout(() => {
                
                for ( let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        let obj = new AnimatedIcon();
                        obj.spawn();
                        obj.animation();
                    }, (100*i));
                    
                }
                console.log('and theeeeen')
                setTimeout(() => {
                headericon.style.transform = 'scale(1)';
            headericon.style.transition = 'all .2s ease';

                headericon.style.transform = '';

                }, 6500);
            }, 500);
        };

