import { imgfun } from "./image.js"
import { infofunc } from "./info.js"
import { infofunc2 } from "./info.js"
import { cardfunc } from "./card.js"

let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')

let obj1 = {
    title   : "ONE 1G",
    par     : "LIntroducing One Garage: Empowering Dreams, Building Futures Are you ready to turn your <br>entrepreneurial dreams into reality? Look no further than One Garage, your ultimate <br>destination for innovation, collaboration, and success! At One Garage, we believe that everyone deserves a <br>chance to pursue their passion and build a brighter future. Whether you're an aspiring startup founder, <br>a seasoned entrepreneur, or simply someone with a game-changing idea, we're<br> here to help you every step of the way.What sets <br>One Garage apart? It's more than just a workspace <br> it's a thriving community where creativity knows no bounds. Here's what you can expect:",
    button  : "Contact me",
    img     : "img4.png"
}

const { title, par, button, img } = obj1

let obj2 = {
    image   : "img2.jpg",
    desc    : "ITS ALL ABOUT R1M ",
    button1 : "learn more",
    title2  : "PROJECT COMPLETED"
}

const { image, desc, button1, title2 } = obj2

section1.append(infofunc(title, par, button))
section1.append(imgfun(img))
section3.append(infofunc2(title2))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))
section2.append(cardfunc(image, desc, button1))