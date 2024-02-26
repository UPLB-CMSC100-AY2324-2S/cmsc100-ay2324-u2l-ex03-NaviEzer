password1 = "iamapassword1";
password2 = "iamapassword1";

function validatePassword (password1,password2) {
    x = password1.length;
    y = password2.length;
    hasNumber = false;
    hasUpperChara = false;
    hasLowerChara = false;

    // checking conditions, if both passwords are the same and have at least 8 characters
    if (password1===password2 && x>=8 && y>=8) { 
        
        for (var i=0; i<x; i++) {
            // checks if there is lowercase character
            if (password1.charAt(i) >= 'a' && password1.charAt(i) <= 'z') { //no need to check 2nd password since they are same
                hasLowerChara = true;
            }
            // checks if there is uppercase character
            if (password1.charAt(i) >= 'A' && password1.charAt(i) <= 'Z') {
                hasUpperChara = true;
            }
            // checks if there is a number
            if (password1.charAt(i) >= '0' && password1.charAt(i) <= '9') {
                hasNumber = true;
            }
        }
        if (hasLowerChara == true && hasUpperChara == true && hasNumber == true) {
            return true;
        }else return false;
    }else return false;
}

function reversePassword (password) {
    
}

if (validatePassword(password1,password2)) {
    console.log("True");
}else {
    console.log("False");
}