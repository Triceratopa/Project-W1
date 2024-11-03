const navbar= document.getElementById('navbar')

window.addEventListener('scroll',function(){
    const scrollPosition=0
    if(window.scrollY>scrollPosition){
        navbar.classList.add('scrolled');

    }else{
        navbar.classList.remove('scrolled');
     
    }
})
const svg=document.getElementById('svg')
myIterval =setInterval(svg,1000,'aria-label')
