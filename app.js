const aboutit = document.getElementById("about-it")
const solution = document.getElementById("solution")
const howtocontribute = document.getElementById("how-to-contribute")
const howcanweconnect = document.getElementById("how-can-we-connect")

aboutit.onclick=()=>{
    location.href="./aboutit.html"
}

solution.onclick=()=>{
    location.href="./solution.html"
}

howtocontribute.onclick=()=>{
    location.href="./howtocontribute.html"
}

howcanweconnect.onclick=()=>{
    location.href="./howcanweconnect.html"
}

for (i = 0; i<2; i++){
    console.log(i)
    document.write("Please help Women to get equal pay")
}

//var array_name=[item1, item2 ... ];
 
var what=["About","Contribute","Sollution","Connect"]

