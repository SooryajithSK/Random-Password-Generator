const inputslider=document.getElementById("inputslider");
const slidervalue=document.getElementById("slidervalue");
const passbox=document.getElementById("passbox");
const lowercaseEl=document.getElementById("lowercase");
const uppercaseEl=document.getElementById("uppercase");
const numberEl=document.getElementById("Numbers");
const symbolsEl=document.getElementById("Symbols");
const generatebtn=document.getElementById("btn");
const copyicon=document.getElementById("copyicon")

const lowercaseletters="abcdefghijklmnopqrstuvwxyz";
const uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#$%^&*()_+-=[]{};':<>,./?";

 slidervalue.textContent=inputslider.value;
 inputslider.addEventListener("input",()=>{
    slidervalue.textContent=inputslider.value;
 })


generatebtn.addEventListener("click",()=>{
    passbox.value=generatePassword();
})

function generatePassword(){
    const length=inputslider.value; 
    let   characters="";
    let   password="";
     
     

    characters += lowercaseEl.checked ? lowercaseletters : "";
    characters += uppercaseEl.checked ? uppercaseletters : "";
    characters += numberEl.checked    ? numbers : "";
    characters += symbolsEl.checked   ? symbols : "";

    for(let i=0; i<length; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
        console.log(password);
}

return password

}

copyicon.addEventListener("click",()=>{
    if(passbox.value !="" || passbox.value.length>=10) {
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        setTimeout(()=>{
            copyicon.innerHTML="content_copy";
        },3000)
    }
});















