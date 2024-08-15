let h2=document.querySelector('h2');
let gameSeq=[];
let userSeq=[];
let level=0;
let btns=["red","yellow","green","purple"];
let gameStart=false;

document.addEventListener("keypress",()=>{
    if(gameStart==false){
        levelUp();
        gameStart=true;
    }
})

function reset(){
    h2.innerHTML=`Game Over Your score was ${level}<br>Press any key to start Game again`;
    gameStart=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText="Level "+level;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    flashUp(randbtn);


}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        reset();
    }
}

function flashUp(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash')
    },200);
}
function btnPress(){
    let btn=this;
    flashUp(btn);
    let color=btn.getAttribute('id');
    userSeq.push(color);
    checkAns(userSeq.length - 1);

}

let allbtn=document.querySelectorAll('.box');

for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

