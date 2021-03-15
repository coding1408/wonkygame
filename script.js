let count = 0;
function createSquare(){
    count++;
     if (count > 5){
        count =0;
    }

    const square = document.createElement("div");
    square.id=`square${count}`;
    square.classList.add("square")
    

    square.style.left = Math.random()*95+"vw";
    square.style.animationDuration = Math.random()*0+100+"s";

    square.innerText = "1";

    document.body.appendChild(square);

    setTimeout(() => {
      square.remove();  
    }, 5000);

    if (count+1){

    const clickSquare = document.getElementById("square1");
    const clickSquare2 = document.getElementById("square2");

    clickSquare.addEventListener("mouseover", () =>{
        alert("You clicked number 1")

     
    })

    clickSquare2.addEventListener("mouseover", () =>{
        alert("You clicked number 2")
   
        
       })}



}
setInterval(createSquare, 1000);

