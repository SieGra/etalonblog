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
            src + 'javascript.png',
            src + 'html.png',
            src + 'css.png',
            src + 'php.png',
            src + 'nodejs.png',
            src + 'mongodb.jpeg'
        ]
        
    // Make a class to set the icon's to the page
    class AnimatedIcon {
        constructor(src){
            this.id = 'icon' + randomNumber(0, 3000) + randomNumber(0, 3000);
            this.parent = document.getElementById('logo'); 
            this.src = src;
            // Pick random icons


            // pick random start-locations
            this.posY = ()=> {
                return (randomNumber(-mainHeader.offsetHeight, -mainHeader.offsetHeight) + 'px');
            }
            this.posX = () => {
                return (randomNumber(-mainHeader.offsetWidth, -mainHeader.offsetWidth) + 'px');
            }

            // Create the element
            this.spawn = () => {
                let size = 70 + 'px';
                let icon = new Image();
                let posX = this.posX();
                let posY = this.posY();
                icon.src = this.src;
                
                this.parent.appendChild(icon);
                this.parent.style.position = 'relative';
                icon.style.position = 'absolute';
                icon.style.left = posX;
                icon.style.top = posY;
                icon.style.maxWidth = size;
                icon.style.maxHeight = size;
                icon.style.backgroundColor = 'rgba(255, 255, 255, .4)';
                icon.style.borderRadius = '10px';
                icon.style.opacity = 0;
                icon.style.padding = '10px';
                icon.style.transition = 'all 2s ease-out';
                icon.style.opacity = 1;
                icon.id = this.id;
            }
            
            this.animation = () => {
                let icon = document.getElementById(this.id);
                setTimeout(() => {
                    icon.style.left = "47%";
                    icon.style.top = "26%";
                }, 400);
                setTimeout(() => {
                icon.style.transform = 'scale(.1) translateY(50%) translateX(100%)'      
                    setTimeout(() => {
                        this.parent.removeChild(icon);
                    }, 2000);             
                }, 1800);
            }
        }
    }
    
    // Start the object animations 

        window.onload = () => {
            let headericon = document.getElementById('logoicon');
            headericon.style.transition = 'all 2s ease';
            headericon.style.transform = 'scale(1.5) rotateZ(40deg)';
            
            setTimeout(() => {
                for(let i = 0; i <= 2; i++) {
                    setTimeout(() => {
                        
                        for ( let i = 0; i < pngList.length; i++) {
                            setTimeout(() => {
                                let obj = new AnimatedIcon(pngList[i]);
                                obj.src = pngList[i];
                                console.log(obj.src)
                                obj.spawn();
                                obj.animation();
                            }, (100*i));
                            
                        }
                    }, 400*i);
                }
                setTimeout(() => {
                headericon.style.transform = 'scale(1)';
                headericon.style.transition = 'all 3s ease-out';
                headericon.style.transform = '';

                }, 6900);
            }, 200);
        };

