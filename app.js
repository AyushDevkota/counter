const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const value = document.getElementById('value');
decrease.addEventListener('click', () => {
    value.innerText--;
    checkColor(value.innerText);
});
reset.addEventListener('click', () => {
    value.innerText = 0;
    checkColor(value.innerText);
});
increase.addEventListener('click', () => {
    value.innerText++;
    checkColor(value.innerText);
});
checkColor = count => count > 0 ? value.style.color = 'green' : count < 0 ? value.style.color = 'red' : value.style.color = '#222';