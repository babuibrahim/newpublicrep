var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var numberError = document.getElementById('phone-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')


function validateName(){
    var name=document.getElementById("contact-name").value

    if(name.length==0){
        nameError.innerHTML='Name is Required'
        return false
    }
    else if(name.length==2){
        nameError.innerHTML='Full Name is Required'
        return false
    }

    else if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML='A Valid Full Name is Required'
    return false
    }else{
    nameError.innerHTML=''
    return true
    }
    
}

function validateNumber(){
    var num=document.getElementById("contact-number").value

    if(num.length==0){
        numberError.innerHTML='A Valid 10 Digit Number is required'
        return false
    }
    if(!num.length==10){
        numberError.innerHTML='A Valid 10 Digit Number is required'
        return false
    }
    if(!num.match(/^[0-9]{10}$/)){
        numberError.innerHTML='A Valid 10 Digit Number is required'
    return false
    }
    numberError.innerHTML=''
    return true
    
}

function validateEmail(){
    var email=document.getElementById("contact-email").value

    if(email.length==0){
        emailError.innerHTML='A Valid Email is required'
        return false
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    )){
        emailError.innerHTML='A Valid Email is required with @,.'
    return false
    }
       emailError.innerHTML=''
    return true
}
function validateMessage(){
    var message=document.getElementById("message").value
    var required = 30
    var left =required - message.length
    

    if(left>0 && left <30){
        messageError.innerHTML = left + 'More Characters Required'
        return false
    }
        messageError.innerHTML= ''
        return true
    

}
function validateSubmit(){
    if(!validateName()||validateMessage()||validateEmail()||validateNumber() ){
        submitError.style.display='block'
           submitError.innerHTML='Please fix values'
           setTimeout(function(){submitError.style.display='none'},3000)
           return false
    }
}
