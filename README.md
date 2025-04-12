# newzoom1
<div class='h-screen w-[100%] bg-red-300 overflow-hidden relative'>
        <!-- <Nav/> -->
        <div class="w-full h-auto  flex items-center absolute z-50  px-2 ">
            <div>
                <img src="./assets/image/lozo11.png" alt="" class="object-cover h-14" />
            </div>
            <div class="w-[25.5rem] h-[2.75rem] rounded-[1.375rem] bg-white ml-[28rem] flex items-center justify-around text-[1rem] font-[500]">
                <a href="/about"><button>About us</button></a>
                <a href="/projects"><p>Projects</p></a>
                <a href="/reviews"><p>Reviews</p></a>
                <a href="/contactus"><p>Contact Us</p></a>
            </div>
        
            <button  class=" w-[13.25rem] h-[2.75rem] rounded-[2.4375rem] bg-white ml-[18rem] flex items-center justify-evenly text-[1.1rem] font-[500]">
                <span>+</span>
                <span>Become</span>
                <span>a</span>
                <span>Client</span>
            </button>
        
            <div id="btn" class="flex w-10 h-10 p-1.5 justify-center items-center rounded-full bg-white ml-4">
                <img src="./assets/image/tabler_menu-3.svg" alt="" />
            </div>

            
        </div>

 
          
         <!-- home -->
         <div class="h-auto w-auto absolute  top-[30%] left-[10%] text-[9.125rem] font-[550] text-white leading-[8.5rem] border-b border-white border-solid bg-red-300">
            <h1>WE CREATE</h1>
            <h1 class="font-[550] flex items-center">
                <img src="./assets/image/arrow.svg" alt="" class="bg-white w-[4.4375rem] h-[4.4375rem] rounded-full rotate-90 p-2" />AWSOME
            </h1>
            <h1>BRANDING</h1>
        </div>
       

        <p class="text-white font-[400] text-[1.125rem] absolute top-[90%] w-full flex justify-center">
            our clients don't just work with us - they grow with us.
        </p>

        <div class="w-[20.6875rem] h-[13.3125rem] bg-black absolute top-[70%] left-[77%] rounded-[0.5rem]">
            <img src="./assets/image/playbtn.svg" alt="" class="w-[6.4375rem] h-[6.4375rem] transform -translate-[50%]" />
            <img src="./assets/image/text2.png" alt="" class=" w-[12rem] h-[12rem] transform -translate-[50%] absolute top-0" />
        </div>
 <!-- form -->
 <div id="form1" class="w-[36rem] h-[52rem] bg-red-400 absolute   p-5" 
 style="transform: translateX(10%); left: 50%;">
<div class="flex justify-between">
<h1 class="text-[2.6rem] font-semibold">Hey! Tell us about <br> your Projects</h1>
<img src="assets/image/cross.svg" alt="Close icon" class="h-[2.4375rem] bg-gray-200 rounded-full p-2">
</div>

<div class="flex justify-between mt-5">
<div>
  <p class="font-medium">Name & Company</p>
  <input class="w-[15.5rem] h-[2.25rem] rounded bg-gray-200 p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
         type="text" placeholder="Enter your name and company">
</div>
<div>
  <p class="font-medium">Your Email</p>
  <input class="w-[15.5rem] h-[2.25rem] rounded bg-gray-200 p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
         type="email" placeholder="Enter your email">
</div>
</div>

<div class="mt-5">
<p class="font-medium">Tell us more about project and services you require?</p>
<input class="w-full h-[27.4375rem] bg-gray-200 mt-2 p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
       type="text" placeholder="Describe your project...">
</div>
</div>
   
        <video src="./assets/video/web side.mp4" control="hidden" muted autoPlay  loop class="h-[100%] w-[100%] object-cover obsolute z-1"></video>
               
        
       
        </div>





        @import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Tsukimi+Rounded&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: poppins;
  text-decoration: none;
  overflow-x: hidden;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
#main {
  height: 100%;
  width: 100%;
  position: relative;
}

nav {
  height: auto;
  width: 100%;
  /* background-color: green; */
  padding: 0.5rem 1.5rem;
  display: flex;
  position: absolute;
  z-index: 111;
}
nav img {
  height: 3rem;
  width: 8rem;
  object-fit: cover;
}

.n1 {
  width: 30.5rem;
  height: 2.75rem;
  background-color: white;
  margin-left: 28rem;
  border-radius: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.n1 a{
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: black;
  }
@media (width<450px) {
  nav {
    /* background-color: red; */
    justify-content: space-between;
  }
  nav img {
    height: 3.5rem;
    width: 8rem;
    object-fit: cover;
  }
  .n1 {
    display: none;
  }
}
@media (width<390px) {
  nav img {
    height: 3rem;
    width: 5rem;
    object-fit: cover;
  }
}
@media (width<450px) {
}

.client {
  width: 13.25rem;
  height: 2.75rem;
  border-radius: 2.4375rem;
  margin-left: 18rem;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:yellow; */
  background-color: white;
}
.client button{
    height: 100%;
    width: 100%;
    background-color: transparent;
    /* border-radius: 50%; */
    border-radius: 2.4375rem;
    border: none;
 }
.client:hover {
  background-color: #00aaf3;
}
@media (width<450px) {
  .client {
    /* width: 12.25rem;
    height: 2.75rem;
    font-size: 1.1rem;
    font-weight: 500;
    margin-left: -55rem; */
    display: none;
  }
}
.btn {
  width: 2.7rem;
  height: 2.5rem;
  margin-left: 1rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
}
.btn img {
  height: 100%;
  width: 100%;
}
.i1 {
  display: block;
}
.i2 {
  display: none;
}
@media (width<450px) {
  .btn {
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.6rem;
  }
}
.home {
  height: 100vh;
  width: 100%;
  /* background-color: red; */
  position: relative;
  display: flex;
  overflow: hidden;
}

/** form */

.form {
  width: 36rem;
  height: 52rem;
  background-color: white;
  position: absolute;
  left: 100%;
  padding: 1rem;
  transform: translateX(100%);
  transition: 0.5s all ease;
  z-index: 222;
}
.fcros {
  position: absolute;
  top: 2%;
  left: 95%;
  transform: translateX(-100%);
}
.form h1 {
  color: #000;
  font-size: 2.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.form p {
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1rem;
}
.finput {
  height: auto;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.f1,
.f2 {
  height: auto;
  width: 50%;
  /* background-color: red; */
}
.finput input {
  width: 15.5rem;
  height: 2.25rem;
  flex-shrink: 0;
  padding: 0 0.5rem;
  background-color: #f1f1f1;
  border: none;
}
.form textarea {
  width: 32.25rem;
  height: 22.4375rem;
  margin-top: 1rem;
  flex-shrink: 0;
  border-radius: 0.125rem;
  background: #f1f1f1;
  border: none;
}
#fbtn {
  display: inline-flex;
  padding: 0.4375rem 0.625rem 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border-radius: 2.625rem;
  background: #343434;
  color: #fff;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
/* .menu{
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 11;
  background-color: red;
  display: flex;
  justify-content: space-between;
  display: none;
} */
.menu1 {
  position: absolute;
  top: 100%;
  left: 0;
  height: 100vh;
  width: 20%;
  background-color: #6749ff;
  /* margin-left: 20%; */
  padding: 2rem 0;
  z-index: 1;
  transition: 0.5s all ease;
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  align-items: end;
  justify-content: center;
}
.menu2 {
  position: absolute;
  top: -100%;
  left: 20%;
  z-index: 1;
  height: 100vh;
  width: 80%;
  /* margin-left: 20%; */
  padding: 5rem;
  background-color: #5836ff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  transition: 0.5s all ease;
}
.menu2 a {
  font-size: 5rem;
  font-weight: 500;
  color: white;
  transition: 0.5s;
}
.menu2 a:hover {
  transform: translateX(5rem);
}
@media (width<450px) {
  .menu1 {
    display: none;
  }
  .menu2 {
    height: 100vh;
    width: 100%;
    left: 0;
    padding: 1rem;
  }
  .menu2 a {
    font-size: 3rem;
    /* line-height: 7rem; */
    padding: 1rem;
  }
}
@media (width<390px) {
  .menu2 a {
    font-size: 3.5rem;
  }
}




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="contact.css">
     <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
    <div id="main">
        <nav>
            <img onclick="location.href='index.html'" src="./assets/image/lozo11.png" alt="">
            <div class="n1">
                <a href="index.html">Home</a>
                <!-- <a href="">About us</a> -->
                <a href="">Our Services</a>
                <!-- <a href="">Projects</a> -->
                <a href="">Blogs</a>
            </div>

            <div id="btn" class="client">
                <button>
                    <span>+</span>
                    <span>Become</span>
                    <span>a</span>
                    <span>Client</span>
                </button>
            </div>

            <div class="btn">
                <img class="i1" src="./assets/image/tabler_menu-3.svg" alt="" />
                <img class="i2" src="./assets/image/cross.svg" alt="">
            </div>

        </nav>
<!-- ^home -->
<div class="home">
 
    <!-- ^menu -->
        <div class="menu1">
            <p>Awesome services for awesome <br>
                businesses</p>
        </div>
        <div class="menu2">
            <a href="">Home</a>
            <a href=".service1" onclick="location.href='.service1'" >Our Services</a>
            <!-- <a href="">Projects</a> -->
            <a href="">Blogs</a>
            <a href="">Contact Us</a>
        </div>
        <!-- ^form -->
        <div id="form" class="form">
            <h1>Hey! Tell us about <br>
                you Projects </h1>
            <img class="fcros" src="./assets/image/cross.svg" alt="">
            <div class="finput">
                <div class="f1">
                    <label for="">Name & Company</label><br>
                    <input type="text" placeholder="Name">
                </div>

                <div class="f2">
                    <label for="">Your Email</label>
                    <input type="email" placeholder="Email">
                </div>

                <div class="f3">
                    <label for="">Your Contact Number</label>
                    <br>
                    <input type="tel" placeholder="Contact Number">
                </div>
            </div>

            <p>Tell us more about project and services you require?</p>
            <textarea name="" id="" placeholder="Something about your great idea"></textarea>

            <button id="fbtn">Submit the request</button>
        </div>

    <img src="./assets/image/page-header-bg-1-1 1.png" alt="">
    </div>

        <!--^ main ends -->
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.7/gsap.min.js"
    integrity="sha512-f6bQMg6nkSRw/xfHw5BCbISe/dJjXrVGfz9BSDwhZtiErHwk7ifbmBEtF9vFW8UNIQPhV2uEFVyI/UHob9r7Cw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
</html>