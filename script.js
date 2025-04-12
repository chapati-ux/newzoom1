let btn = document.querySelector("#btn")
let btn1 = document.querySelector(".fcros")
let form = document.querySelector("#form")
let count =0;

btn.addEventListener("click",()=>{
    // form.style.transform="translateX(-100%)"
    // form.style.backgroundColor="white";
    // alert()
    // if(count===0)
    //     {
    //         form.style.transform="translateX(-100%)"
    //         count++;
    //     }
    //     else 
    //     {
    //         form.style.transform="translateX(100%)"
    //         count--;   
    //     }
    form.style.transform="translateX(-100%)"
    //         count++;
})
btn1.addEventListener("click",()=>{
    // form.style.transform="translateX(-100%)"
    // form.style.backgroundColor="white";
    // alert()
    // if(count===0)
    //     {
    //         form.style.transform="translateX(-100%)"
    //         count++;
    //     }
    //     else 
    //     {
    //         form.style.transform="translateX(100%)"
    //         count--;   
    //     }
                 form.style.transform="translateX(100%)"

    
})

const phrases = ["BRANDING", "MARKETING", "DEVELOPMENT"];
let index = 0;
const changeText = () => {
  gsap.to("#changing-line", {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      index = (index + 1) % phrases.length;
      document.getElementById("changing-line").innerText = phrases[index];
      gsap.to("#changing-line", { opacity: 1, duration: 0.5 });
    },
  });
};
setInterval(changeText, 3000); // Change text every 2 seconds

// ^ nav //
let t1 = gsap.timeline()
// t1.from(".navimg",{
//     y:-30,
//     opacity:0,
//    duration:0.5,
//    delay:0.5
// })

// t1.from(".n1",{
//     y:-30,
//     opacity:0,
//    duration:0.5,
//     stagger:0.1,
//     delay:0.2
// })
// t1.from(".client",{
//     y:-30,
//     opacity:0,
//    duration:0.5,
//     stagger:0.1,
//     delay:0.2
// })
// t1.from(".btn",{
//     y:-30,
//     opacity:0,
// //    duration:0.5,
//     stagger:0.1,   
//     // delay:0.2
// })
// t1.from("#htext",{
//     y:30,
//     opacity:0,
//    duration:0.5,
//     stagger:0.1
// })
gsap.to(".img2",{
    rotate:360,
    duration:8,
    ease: "linear",
    repeat:-1,
})
gsap.to(".scroll",{
    x:"-100%",
    duration:8,
    ease: "linear",
    repeat:-1,
})
gsap.to(".ph",{
    x:"-100%",
    duration:20,
    ease: "linear",
    repeat:-1,
})
// gsap.from(".menu1",{
//         y:"100vh",
//         duration:0.5,
//         delay:0.5,
//         ease: "linear",
//     })
//     gsap.from(".menu2",{
//         y:"-100vh",
//         duration:0.5,
//         delay:0.5,
//         ease: "linear",
//     })


let menu = document.querySelector(".btn");
let i1 = document.querySelector(".i1");
let i2 = document.querySelector(".i2");

let mAn = document.querySelector(".menu")
let menu2 = document.querySelector(".menu2")
let menu1 = document.querySelector(".menu1")
let count1 = 0;
menu.addEventListener("click",function(){
    
    
    if(count1===0)
        {
            menu2.style.top="0%"
            menu1.style.top="0%"
            i1.style.display="none"
            i2.style.display="block"
            count1++;
        }
        else 
        {
            menu2.style.top="-100%"
            menu1.style.top="100%"
            i1.style.display="block"
            i2.style.display="none"
            count1--;   
        }
    // gsap.from(".menu1",{
    //     y:"100vh",
    //     duration:0.5,
    //     delay:0.5,
    //     ease: "linear",
    // })
    // gsap.from(".menu2",{
    //     y:"-100vh",
    //     duration:0.5,
    //     delay:0.5,
    //     ease: "linear",
    // })
})


// ^ footer text
// gsap.to(".fzoom h1",{
//     y:100,
//     duration:2,
//     ease: "linear",
//     repeat:-1,
// })
