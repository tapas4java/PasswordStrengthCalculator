
function getPasswordStrength(){
    var pass = document.getElementById("pass").value;
    if(pass.length == 0){
        document.getElementById("strength").innerHTML = "";
        return;
    }
    
    var strength = "";
    var level = 0;
    
    if(/.{6,20}/.test(pass)){
        level += /[A-Z]+/.test(pass) ? 1 : 0;
        level += /[a-z]+/.test(pass) ? 1 : 0;
        level += /[0-9]+/.test(pass) ? 1 : 0;
        level += /[!@#$&*`~%^_-|,.?><;'":]+/.test(pass) ? 1 : 0;
    }
   
    switch(level) {
        case 0:
            strength = "Invalid!";
            setColor("red");
            break;
        case 3:
            strength = "Medium!";
            setColor("yellow");
            break;
        case 4:
            strength = "Strong!"
            setColor("green");
            break;
        default:
            strength = "Weak!"
            setColor("blue");
            break;
    }
    
    document.getElementById("strength").innerHTML = strength;
}

function setColor(color){
    document.getElementById("strength").className = color;
}