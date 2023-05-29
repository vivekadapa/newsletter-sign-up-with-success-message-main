const email = document.querySelector('#email');
const form = document.querySelector('form');
const error = document.querySelector('#error');
const main = document.querySelector('main');
const section = document.querySelector('section');
const secbutton = document.querySelector('section button');
const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
function validateinput() {
  if (!(regx.test(email.value))) {
    console.log("error");
    error.classList.add('err-abs');
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(4, 100%, 67%,0.2)"
    error.innerHTML = 'Valid email required';
    email.style.outline = `2px solid hsl(4, 100%, 67%)`;
    email.style.border = 'none';
    return false;
  }
  else {
    email.style.color = "black";
    email.style.backgroundColor = "white";
    email.style.outline = 'none';
    email.style.border = '1px solid hsl(231, 7%, 60%)';
    error.innerHTML = '';
    return true;
  }
}
function displaySuccess(){
  main.style.display = 'none';
  section.style.display = 'flex';
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateinput()) {
   
  }
  else {
    displaySuccess();
  }
})

secbutton.addEventListener('click',()=>{
  main.style.display = 'flex';
  section.style.display = 'none';
})