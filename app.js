
let numbers=document.querySelectorAll(".number");
const circles=document.querySelectorAll(".circle");
const views=document.querySelectorAll(".content button");
const menu= document.querySelector(".menu");
const close=document.querySelector(".close");
const nav= document.querySelector("nav");
// const link=document.querySelector(".content button a");

circles.forEach((circle,i)=>{
    const percent=parseInt(circle.dataset.percent);
    const dashArray=460;
    const offset= dashArray-(dashArray*percent)/100;

    circle.style.strokeDasharray=dashArray;
    circle.style.animation= "none";

    //animate stroke
    setTimeout(()=>{
        circle.style.transition="stroke-dashoffset 2s linear";
        circle.style.strokeDashoffset = offset;
    })


    //animate number
    let counter=0;
    setInterval(()=>{
    if(counter===percent ){
        clearInterval();
    }
    else{
        counter+=1;
        numbers[i].innerHTML = counter+ "%";
    }
  }, 30)
})

views.forEach((view) => {
    const link = view.querySelector("a");
    view.addEventListener("mouseover",function() {
        
        link.style.color="#1B0E20";
        view.style.backgroundColor="#F8F9ED";
    
    });
    view.addEventListener("mouseout",function() {
        link.style.color="#F8F9ED";
        view.style.backgroundColor="#1B0E20";
    
    });
})

menu.addEventListener("click",()=>{
    nav.style.transform="translateY(0)";
})
close.addEventListener("click",()=>{
    nav.style.transform="translateY(-100%)";
})

const icon= document.getElementById("icon");

icon.onclick= function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src= "./assessment/moon.png"
    }
    else{
        icon.src= "./assessment/sun.png"
    }
}

let scrollContainer= document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft+=evt.deltaY;
    scrollContainer.style.scrollBehavior="auto";
})

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft+=900;
})
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior="smooth";
    scrollContainer.scrollLeft-=900;
})