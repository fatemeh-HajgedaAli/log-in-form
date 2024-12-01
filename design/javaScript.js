let userNameInput=document.querySelector('#userName')
let passwordInput=document.querySelector('#userPassword')
let textPassword=document.querySelector('.textPassword')
let textUsername=document.querySelector('.textUsername')
let alarmText=document.querySelector('.modalText')
let loginForm=document.querySelector('.logIn')

function usernameValidation(){
    let userNameValue=userNameInput.value

 if(userNameValue.length<12){
     textUsername.style.display='inline'
 }else{
     textUsername.innerHTML="that's nice!" 
     textUsername.style.color='green' 
     textUsername.style.display='inline'  
 }
 setTimeout(function(){
    textUsername.style.display='none' 
},3000);
}
function passwordValidation(){

let passwordValue=passwordInput.value

 if(passwordValue.length<8){

    textPassword.style.display='inline'

 }else{
textPassword.innerHTML="that's true!" 
textPassword.style.color='green' 
textPassword.style.display='inline'  
}
 setTimeout(function(){
    textPassword.style.display='none' 
},3000);

}

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