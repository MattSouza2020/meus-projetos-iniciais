let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body')

for(let i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML=="Clear"){
                value.innerHTML = ""
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    body.classList.toggle('dark')
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);