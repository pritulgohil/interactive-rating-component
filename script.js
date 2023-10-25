let submitBtn = document.getElementById("btnSubmit");
let content = document.getElementById("content-card");
let secondGlance = document.getElementById("content-card1");
let selection = document.getElementById("selection-text");

let rating1 = document.getElementById("rating1");
let one = document.getElementById("one").innerHTML;

let rating2 = document.getElementById("rating2");
let two = document.getElementById("two").innerHTML;

let rating3 = document.getElementById("rating3");
let three = document.getElementById("three").innerHTML;

let rating4 = document.getElementById("rating4");
let four = document.getElementById("four").innerHTML;

let rating5 = document.getElementById("rating5");
let five = document.getElementById("five").innerHTML;

submitBtn.addEventListener("click",function(){
    content.classList.add("hide");
    secondGlance.classList.remove("hide");
})

rating1.addEventListener("click",function(){
    selection.innerHTML = `You selected ${one} out of 5`;
})

rating2.addEventListener("click",function(){
    selection.innerHTML = `You selected ${two} out of 5`;
})

rating3.addEventListener("click",function(){
    selection.innerHTML = `You selected ${three} out of 5`;
})

rating4.addEventListener("click",function(){
    selection.innerHTML = `You selected ${four} out of 5`;
})

rating5.addEventListener("click",function(){
    selection.innerHTML = `You selected ${five} out of 5`;
})



