import { rightDiv } from "./image.js"
import { leftdiv } from "./info.js"

const data ={
    title1:      "GOOD",
    title2:      "BOY BUDOY",
    para1:      "Golden Retrievers can be a great family dog for an active family due to their high energy levels, but also calm natures and intelligence. They can be easy dogs to train and can make good first dogs for new dog owners, as long as you know what you're getting into taking on a larger breed dog.",
    para2:      "Credited with being one of the best-behaved pets, Golden Retrievers are a kind and extremely gentle dog breed. They perform well as a great family dog, being extremely friendly towards children and their family members.",
    button1:    "Home",
    button2:    "View",
    button3:    "Contact Us",
    button4:    "About Us",
    myImage:    "img2.jpg",
}

const{ title1, title2, para1, para2, button1, button2, button3, button4, myImage} = data

container.append(leftdiv(title1, title2, para1, para2, button1, button2, button3, button4))
container.append(rightDiv( myImage))