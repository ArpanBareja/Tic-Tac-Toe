let boxes = document.querySelectorAll(".box");

function disableBoxes() {
    boxes.forEach((box) => {
       box.disabled = true ;
    }) ;
}

function resetGame() {
    boxes.forEach((box) => {
        box.innerHTML = '' ;
        box.disabled = false ;
    }) ;
    console.log("apran") ;
}

let arr = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]];
function checkWinner(turn) {
    arr.forEach((i) => {
        let p1 = boxes[i[0]].innerText ;
        let p2 = boxes[i[1]].innerText ;
        let p3 = boxes[i[2]].innerText ;
        //console.dir(p1 , p2 , p3) ;
        if( p1 == p2 && p2 == p3 && p1 != '' ) {
            console.log(`${p1} is Winner`) ;
            showWinner(p1) ;
            disableBoxes() ;
            return 1;
        }
    })
    return 0 ;
} ;

// displaying winner 
function showWinner(p1) {
  paraMsg.innerHTML = `Congratulations Winner is ${p1}` ;
  msg.classList.remove("hide") ;
}


// selecting code and assigning it will event listener

let turn = 'X' ;
boxes.forEach((everyBox) => {
    let final = 0 ;
    everyBox.addEventListener("click", (evt) => {
        let curr ;
        if( turn === 'X' ) {
            curr = 'X' ;
            everyBox.innerHTML=turn ;
            everyBox.style.color = "red" ;
            turn = 'O' ;
        }
        else {
            curr = 'O' ;
            everyBox.innerHTML=turn ;
            everyBox.style.color = "green" ;
            turn = 'X' ;
        }
        everyBox.disabled = 1  ;
        
        if(checkWinner(curr) == 1 ){ final = 1 ; }
        
    });if( final == 0 ) console.log("NO body won") ;
});


// selecting elements
let newButton = document.querySelector("#target") ;
let resetButton = document.querySelector("#target2") ;
let msg = document.querySelector(".newGame") ;
let paraMsg = document.querySelector(".newGame p") ;



const reset = () =>  {
    turn = 'X' ;
    resetGame() ;
    msg.classList.add("hide") ;
};


newButton.addEventListener("click" , reset) ;
resetButton.addEventListener("click" , reset) ; 
