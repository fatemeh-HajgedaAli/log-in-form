let userNameInput=document.querySelector('#userName')
let passwordInput=document.querySelector('#userPassword')
let alarmText=document.querySelector('.modalText')

let loginForm=document.querySelector('.logIn')


function clickBtn(){

let userNameValue=userNameInput.value
let passwordValue=passwordInput.value

if(userNameValue.length<12 || passwordInput.length<8){
    alarmText.style.display='inline'
}else{
    alarmText.innerHTML="that's nice!" 
    alarmText.style.background='rgb(100, 221, 23)'
    alarmText.style.background='green'
    alarmText.style.display='inline'  
}

setTimeout(function(){
    alarmText.style.display='none' 
},5000);
}

loginForm.addEventListener('submit',function(event){
event.preventDefault()
})