const btA = document.querySelector('#bt-a');
const btB = document.querySelector('#bt-b');
const btC = document.querySelector('#bt-c');
const total = document.querySelector('#total');

function somaTotal() {
    if(this == btA){
        total.innerText = parseFloat(total.innerText) + 5;
    } else if(this == btB){
        total.innerText = parseFloat(total.innerText) + 10;
    } else {
        total.innerText = parseFloat(total.innerText) + 20;
    }
     
}

btA.addEventListener('click', somaTotal);
btB.addEventListener('click', somaTotal);
btC.addEventListener('click', somaTotal);

