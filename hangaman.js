const hangmanWords = [
  { 
    word: "javascript", 
    hint: "Popular programming language for web development" 
},
  { 
    word: "pyramid", 
    hint: "Ancient triangular structure found in Egypt" 
},
  { 
    word: "galaxy", 
    hint: "A massive system of stars, dust, and dark matter"
 },
  { 
    word: "violin",
     hint: "String instrument played with a bow" 
},
{
     word: "tornado", 
     hint: "A violent rotating column of air"
},
{ 
    word: "bicycle", 
    hint: "Two-wheeled mode of transport" 
},
{ 
    word: "kangaroo", 
    hint: "Australian animal that hops" 
},
{ 
    word: "umbrella",
     hint: "Used on rainy days to stay dry" 
},
{ 
    word: "eclipse", 
    hint: "When the moon blocks the sun"
},
{ 
    word: "chocolate", 
    hint: "Sweet treat made from cocoa beans"
},
{ 
    word: "volcano", 
    hint: "Mountain that erupts with lava" 
},
{ 
    word: "oxygen", 
    hint: "Gas essential for human breathing" 
},
{ 
    word: "satellite", 
    hint: "Object orbiting a planet or star" 
},
{ 
    word: "puzzle", 
    hint: "Game or problem that tests ingenuity" 
},
{ 
    word: "penguin", 
    hint: "Flightless bird found in Antarctica" 
},
{ 
    word: "robot", 
    hint: "Machine programmed to perform tasks" 
},
{ 
    word: "castle", 
    hint: "Large fortified building from medieval times" 
},
{ 
    word: "rainbow", 
    hint: "Colorful arc seen after rain" 
},
{ 
    word: "mirror", 
    hint: "Reflects what is in front of it" 
},
{ 
    word: "avocado", 
    hint: "Green fruit often used in guacamole"
 },
 { 
    word: "force",
     hint: "Push or pull action"
},
{ 
    word: "energy",
    hint: "Can't be created or destroyed"
},
{ 
    word: "gravity", 
    hint: "Keeps you grounded... literally" 
},
{ 
    word: "crust", 
    hint: "Earth's outer layer" 
},
{ 
    word: "planet", 
    hint: "Orbits a star" 
},
{ 
    word: "comet", 
    hint: "Icy rock with a glowing tail" 
}
];
let curenntWord;
var wrongguesses = 0;
let maxnoofguesses = 6;
let guessed = [];
let correct_letters =[];
let showHEad = false;
const randomItem = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
const targetWord = randomItem.word;
const wordDispay = document.querySelector(".word-display");
curenntWord = targetWord;
wordDispay.innerHTML = targetWord.split("").map(()=> `<li class="letter"></li>`).join("");
let wordHint = randomItem.hint;
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const h2 = document.querySelector("h2");
const p = document.querySelector("#para1");
const guessestext = document.querySelector("h4");
const keyboardd = document.querySelector("#keyboardd");
const hint = document.querySelector(".contsianer");
const hintbox = document.querySelector("#Hint");
const main_hint = document.getElementById('m-cont');
const hint_close = document.getElementById('cllose');
const tips = document.querySelector("#tip");
const main_c = document.getElementById('main-cont');
const close = document.getElementById('close');
const canvas = document.querySelector("#canvas");
const context = canvas.getContext('2d'); 
let lose = document.querySelector("#lose-cont");
let c_home = document.querySelector("#Home");
let lose_p = document.querySelector("#losep");
let win = document.querySelector("#win-cont");
let win_homw = document.querySelector("#home");
let rules = document.querySelector("#rules");
let win_back = document.querySelector("#win_back");
let back = document.querySelector("#back");
//------------------------------------------------------------------
btn.addEventListener('click',()=>{
h2.innerText = "HANGMAN BEGINS!";
p.innerText ="GUESS THE WORD! FOR HINT CLICK THE DESCRIPTION BUTTON";
guessestext.innerHTML="INCORRECT GUESSES :";
var myAudio = document.getElementById("audioelement");
myAudio.volume = 0.9;
myAudio.play();
var dott_display = document.querySelector(".word-display");
dott_display.style.display = "flex";
dott_display.style.position ="absolute";
dott_display.style.left="200px";
keyboardd.style.display ="grid";
keyboardd.style.position = "absolute"; 
hint.style.display = "flex";
const canvas = document.querySelector("#canvas");
canvas.style.display ="block";
container.style.display ="none";
canvas.style.position = "absolute";
canvas.style.right = "0px";
canvas.style.top = "2px";
const c = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;
hnagman(c);
})
//-------------------------------------------------------------------------
function restart() 
{
    const canvas = document.querySelector("#canvas");
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, canvas.width, canvas.height);
    hnagman(c);
    wrongguesses = 0;
    guessed = [];
    correct_letters = [];
    const randomItem = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
    const targetWord = randomItem.word;
    curenntWord = targetWord;
    wordDispay.innerHTML = targetWord.split("").map(()=> `<li class="letter"></li>`).join("");
    wordHint = randomItem.hint;
    const para2 = document.querySelector("#para2");
    para2.innerText = "";
    const key_button = document.querySelectorAll(".kkey");
    key_button.forEach(btn => {
        btn.disabled = false;
        btn.style.backgroundColor = '#fff';
        btn.style.cursor = 'pointer';
    });
    guessestext.innerText = "INCORRECT GUESSES :";
}
//----------------------------------------------------------------------------------
function hnagman(c)
{
//boxs
c.strokeStyle = "#ffd700";
c.lineWidth = 5;
c.beginPath();
c.moveTo(225, 510);      // base start
c.lineTo(600, 510);      // base end
c.moveTo(300, 510);      // rod start
c.lineTo(300, 225);      // rod 
c.lineTo(500, 200);      // hanger 
c.lineTo(500, 220);      
c.stroke();
}
//------------------------------------------------------------------------------------
hintbox.addEventListener('click',()=>{
    document.querySelector("#keyboardd").style.display = "none";
    const para2 = document.querySelector("#para2");
    para2.innerText = wordHint.toUpperCase();
    main_hint.classList.add("show");
})

hint_close.addEventListener('click',()=>{
    document.querySelector("#keyboardd").style.display = "grid";
    main_hint.classList.remove("show");
})
tips.addEventListener("click",()=>{
        document.querySelector("#keyboardd").style.display = "none";
        main_c.classList.add("show");
})
close.addEventListener("click",()=>{
        document.querySelector("#keyboardd").style.display = "grid";
        main_c.classList.remove("show");
})
rules.addEventListener('click',()=>{
document.querySelector(".word-display").style.display = "none";
document.querySelector("#keyboardd").style.display = "none";
document.querySelector("#canvas").style.display = "none";
hint.style.display = "none";
container.style.display = "block";
  h2.innerText = "";
  p.innerText = "";
  guessestext.innerText = "";
  btn.innerText ="RESUME GAME";
})
//----------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded',()=>{ //makes sure taht all html is looded . 
const key_button = document.querySelectorAll(".kkey");
    key_button.forEach(letter =>{
        letter.addEventListener('click',(e)=>{
            const clickel = e.target.dataset.key;
              e.target.disabled = true;
             e.target.style.backgroundColor = 'lightgray';
             e.target.style.cursor = 'not-allowed';
            handleguess(clickel);
        })
    })
})
//---------------------------------------------------------------------------------------
function handleguess(cletter)
{
    guessed.push(cletter);
    if(curenntWord.includes(cletter))
        {[...curenntWord].forEach((letter,index)=>
        {
        if( letter === cletter)
            {
            correct_letters.push(letter);
            wordDispay.querySelectorAll("li")[index].innerText = letter;
            }
        })  
    }
    else
        {
        wrongguesses = wrongguesses  + 1;
        if(wrongguesses == 1)
        { // the head
            showHEad = true;
            context.beginPath();
            context.arc(500, 250, 30, 0, Math.PI * 2, false);
            context.stroke();
        }
        else if(wrongguesses == 2)
        {// the body
            showHEad = true;
            context.beginPath();
            context.moveTo(500, 280); 
            context.lineTo(500, 400);     
            context.stroke();
        }
        else if(wrongguesses == 3)
        {//hand- right
            showHEad = true;
            context.beginPath();
            context.moveTo(500, 290); 
            context.lineTo(565, 350);     
            context.stroke();
        }
        else if(wrongguesses == 4)
        { //hand- left
            showHEad = true;
            context.beginPath();
            context.moveTo(500, 290); 
            context.lineTo(430, 350);     
            context.stroke();
        }
        else if(wrongguesses == 5)
        {//leg- right
            showHEad = true;
            context.beginPath();
            context.moveTo(500, 400); 
            context.lineTo(555, 440);     
            context.stroke();
        }
        else if(wrongguesses == 6)
        {//leg-left
            showHEad = true;
            context.beginPath();
            context.moveTo(500, 400); 
            context.lineTo(450, 440);     
            context.stroke();
        }
    }
    if(wrongguesses >= maxnoofguesses)
        {
            setTimeout(() => {
                stopgame();
            }, 500);
        }
        guessestext.innerText = `INCORRECT GUESSES: ${wrongguesses} / ${maxnoofguesses}`;
        if ([...curenntWord].every(letter => correct_letters.includes(letter))) //... spread operator: spreads every array into elements
        //will return true only if every single letter can be found . If even one letter \is not found in correctLetters,immediately stop and return false.
            { 
                setTimeout(() => {
                    win_game();
                }, 500);
            }
}
function stopgame() 
{
    const key_button = document.querySelectorAll(".kkey");
    key_button.forEach(btn => btn.disabled = true);
    lose_p.innerText =`THE CORRECT WORD WAS:  ${curenntWord}` ;
    lose.classList.add("show");
}
c_home.addEventListener('click', () => {
    lose.classList.remove("show");
    restart();
});
back.addEventListener('click',()=>{
lose.classList.remove("show");
document.querySelector(".word-display").style.display = "none";
document.querySelector("#keyboardd").style.display = "none";
document.querySelector("#canvas").style.display = "block";
hint.style.display = "none";
container.style.display = "none";
  h2.innerText = "THANKS FOR PLAYING ! DO COME AGAIN";
  h2.style.textAlign = "center";
  h2.style.position = "absolute";
  h2.style.top = "40px";
  h2.style.left = "50%";
  h2.style.transform = "translateX(-50%)"
  p.innerText = "FUN FACT: hangman can improve your vocabulary, spelling, cognitive abilities, logical thinking, and language skills.";
  guessestext.innerText = "";

})
let winp = document.querySelector("#winp");
async function win_game()
{
 win.classList.add("show");
 winp.innerText = `CONGRATULATIONS!YOU DID IT! WRONG GUESSES: ${wrongguesses} `;

}
win_back.addEventListener('click',()=>{
win.classList.remove("show");
document.querySelector(".word-display").style.display = "none";
document.querySelector("#keyboardd").style.display = "none";
document.querySelector("#canvas").style.display = "block";
hint.style.display = "none";
container.style.display = "none";
  h2.innerText = "THANKS FOR PLAYING ! DO COME AGAIN";
  h2.style.textAlign = "center";
  h2.style.position = "absolute";
  h2.style.top = "40px";
  h2.style.left = "50%";
  h2.style.transform = "translateX(-50%)"
  p.innerText = "FUN FACT: hangman can improve your vocabulary, spelling, cognitive abilities, logical thinking, and language skills.";
  guessestext.innerText = "";
})
win_homw.addEventListener('click', () => {
    win.classList.remove("show");
    restart();
});
