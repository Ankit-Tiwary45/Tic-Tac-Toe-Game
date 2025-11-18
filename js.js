const playagain=document.querySelector("#playAgain");

let userChoice;
let compChoice;

let user1Wait = false;
let user2Wait = true;

let originalArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(originalArr);

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");

const allBtn = document.querySelectorAll(".special");
const optBtn = document.querySelectorAll(".opt");
console.log(allBtn);
console.log(optBtn);

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].style.fontSize = "40px";
}

function winner(arr) {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (arr[a] === arr[b] && arr[b] === arr[c] && isNaN(arr[a])) {
            console.log(`Winner declared: ${arr[a]}`);
            for (let i = 0; i < allBtn.length; i++) {
                allBtn[i].disabled = true;
            }
            alert(`Greetings! Ladies and Gentleman : ${arr[a]} is the Winner of this Game`);

            return;
        }
    }
}


option1.addEventListener('click', () => {
    option1.style.height = "90px";
    option1.style.width = '78px';
    user1Choice = option1.innerText;
    console.log("User1Choice " + user1Choice);
    user2Choice = option2.innerText;
    console.log("user2Choice " + user2Choice);
    option1.disabled = true;
    option2.disabled = true;
});

option2.addEventListener('click', () => {
    option2.style.height = "90px";
    option2.style.width = '78px';
    user1Choice = option2.innerText;
    console.log("User1Choice " + user1Choice);
    user2Choice = option1.innerText;
    console.log("user2Choice " + user2Choice);
    option1.disabled = true;
    option2.disabled = true;
});

btn1.addEventListener('click', () => {
    if (user1Wait == false) {
        btn1.innerText = user1Choice;
        originalArr[0] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn1.disabled = true;
    }
    else {
        btn1.innerText = user2Choice;
        originalArr[0] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn1.disabled = true;
    }
    winner(originalArr);
});

btn2.addEventListener('click', () => {
    if (user1Wait == false) {
        btn2.innerText = user1Choice;
        originalArr[1] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn2.disabled = true;
    }
    else {
        btn2.innerText = user2Choice;
        originalArr[1] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn2.disabled = true;
    }
    winner(originalArr);
});

btn3.addEventListener('click', () => {
    if (user1Wait == false) {
        btn3.innerText = user1Choice;
        originalArr[2] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn3.disabled = true;
    }
    else {
        btn3.innerText = user2Choice;
        originalArr[2] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn3.disabled = true;
    }
    winner(originalArr);
});

btn4.addEventListener('click', () => {
    if (user1Wait == false) {
        btn4.innerText = user1Choice;
        originalArr[3] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn4.disabled = true;
    }
    else {
        btn4.innerText = user2Choice;
        originalArr[3] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn4.disabled = true;
    }
    winner(originalArr);
});

btn5.addEventListener('click', () => {
    if (user1Wait == false) {
        btn5.innerText = user1Choice;
        originalArr[4] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn5.disabled = true;
    }
    else {
        btn5.innerText = user2Choice;
        originalArr[4] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn5.disabled = true;
    }
    winner(originalArr);
});

btn6.addEventListener('click', () => {
    if (user1Wait == false) {
        btn6.innerText = user1Choice;
        originalArr[5] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn6.disabled = true;
    }
    else {
        btn6.innerText = user2Choice;
        originalArr[5] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn6.disabled = true;
    }
    winner(originalArr);
});

btn7.addEventListener('click', () => {
    if (user1Wait == false) {
        btn7.innerText = user1Choice;
        originalArr[6] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn7.disabled = true;
    }
    else {
        btn7.innerText = user2Choice;
        originalArr[6] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn7.disabled = true;
    }
    winner(originalArr);
});

btn8.addEventListener('click', () => {
    if (user1Wait == false) {
        btn8.innerText = user1Choice;
        originalArr[7] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn8.disabled = true;
    }
    else {
        btn8.innerText = user2Choice;
        originalArr[7] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn8.disabled = true;
    }
    winner(originalArr);
});
btn9.addEventListener('click', () => {
    if (user1Wait == false) {
        btn9.innerText = user1Choice;
        originalArr[8] = user1Choice;
        user1Wait = true;
        user2Wait = false;
        btn9.disabled = true;
    }
    else {
        btn9.innerText = user2Choice;
        originalArr[8] = user2Choice;
        user2Wait = true;
        user1Wait = false;
        btn9.disabled = true;
    }
    winner(originalArr);
});


playagain.addEventListener('click', () => {
    allBtn.forEach((btn, idx) => {
        btn.innerText = "";
        btn.disabled = false;
        originalArr[idx] = idx;
    });

    user1Wait = false;
    user2Wait = true;

    option1.innerText="O";
    option2.innerText="X";

    option1.disabled = false;
    option2.disabled = false;
    option1.style.height = "90px";
    option1.style.width = "78px";
    option2.style.height = "90px";
    option2.style.width = "78px";
    
    console.clear();
});
