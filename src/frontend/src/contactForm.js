
const myForm=document.querySelector('.contact-form2'); // form class name
const inputs=document.querySelectorAll('input');
const required=["fname", "lname", "email","phone_number"]; // id for each input

myForm.addEventListener("submit",formValidation);

function formValidation(e) {
 
    e.preventDefault();
  
    let error=false;
    inputs.forEach(function(el) {
        let temp=el.getAttribute("id");
        if(temp!=null){
            if (temp==="fname" || temp == "lname") {
                let exp= /[A-Za-z]+$/;
                let result= exp.test(el.value);
                if (!result){
                    addError(el,"Invalid name",temp);
                    error=true;
                }
                else {
                   return ;
                }
            }
            if (temp === "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "Invalid email", temp);
                error = true;
                }
                else {
                    return ;
                }
            }
            if (temp==="phone_number") {
                let exp = /^[0-9]\d{9}$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Invalid phone number", temp);
                    error = true;
                }
                else {
                   
                    return ;
                }
            }
            if(el.value.length===0 && required.includes(temp)){
                addError(el,"Required Field",temp);
                error= true; 
            }
           
        }
    });
    if (!error) {
        let succss= document.createElement('div');
        let section=document.querySelector(".contact-info");
        section.appendChild(succss);
        succss.textContent="Your message has been sent successfully!";
        succss.style.width="50%";
        succss.style.height="20%";
        succss.style.backgroundColor="";
        succss.style.color="green";
        succss.style.fontSize = "large";
        succss.style.textAlign ="center";
        succss.style.padding = "5% 5%"
        setTimeout(()=> {
            myForm.submit()
        },3000)
    }
}

function addError(el ,message,fieldName) {
    let errorText=el.nextElementSibling;
    errorText.innerHTML=fieldName + " " + message;
    errorText.style.color="red";
    el.focus();
}


