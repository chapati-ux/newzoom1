let btn = document.querySelector("#btn")
let form = document.querySelector("#form")
let count =0;

btn.addEventListener("click",()=>{
    // form.style.transform="translateX(-100%)"
    // form.style.backgroundColor="white";
    // alert()

    if(count===0)
        {
            form.style.transform="translateX(-100%)"
            count++;
        }
        else 
        {
            form.style.transform="translateX(100%)"
            count--;   
        }
})

