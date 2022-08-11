let win1=0
let win2=0

let score1 = 0
let score2 = 0

let score1El = document.getElementById("score1-el")
let win1El = document.getElementById("win1-el")

let score2El = document.getElementById("score2-el")
let win2El = document.getElementById("win2-el")

let winEl = document.getElementById("win-el")

let msg = ""

let nameEl = document.querySelector(".name-el")
let nameEl1 = document.querySelector(".name-el1")
let nameP= ""

function shoot()
{ if ( win1 < 3 && win2 < 3 && nameP !== ""){
let x = Math.floor((Math.random() * 2) + 1)
if (x === 1)
{ let y = Math.floor((Math.random() * 10) + 1)
    score1 += y
    score1El.textContent = score1 
    if (score1 > 50)
    { win1++;
     win1El.textContent = win1
     score1 = 0
     score2 = 0
     score1El.textContent = 0
     score2El.textContent = 0

       if( win1 >= 3)  
       {
        msg = "Hurray! "+nameP +" has won the game"
        document.getElementById("flip").src="shooter2.jpg"
        } 
    }
}
else
{y = Math.floor((Math.random() * 10) + 1)
    score2 += y
    score2El.textContent = score2 
    if (score2 > 50)
    { win2++;
     win2El.textContent = win2
     score1 = 0
     score2 = 0
     score1El.textContent = 0
     score2El.textContent = 0
       if( win2 >= 3)  
       {msg = "System has won the game, Better luck next time!"
       document.getElementById("firstimg").src="shooter2.jpg"
        } 

}
}
}
else 
{
  msg = "Game has already ended or not yet Start! Please choose: Start or Reset"
  winEl.textContent = msg
}
winEl.textContent= msg
}

function start()
{
  nameP = prompt("Enter your name","Player1")
  nameEl.textContent = nameP
  nameEl1.textContent = nameP
  msg=""
  winEl.textContent = msg
}
function reset()
{
  win1El.textContent = ""
  win2El.textContent = ""
  
  win1 = 0
  win2 = 0

  score1 = 0
  score2 = 0
  
  score1El.textContent = ""
  score2El.textContent = ""
 
  winEl.textContent = ""
  msg  = ""
  
  document.getElementById("firstimg").src="shooter.jpg"
  document.getElementById("flip").src="shooter.jpg"
}