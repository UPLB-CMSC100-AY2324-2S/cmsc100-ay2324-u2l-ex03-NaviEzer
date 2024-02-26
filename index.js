password1 = "iamaPassword1";
password2 = "iamaPassword1";

function validatePassword (password1,password2) {
    x = password1.length;
    y = password2.length;
    hasNumber = false;
    hasUpperChara = false;
    hasLowerChara = false;

    // checking conditions, if both passwords are the same and have at least 8 characters
    if (password1===password2 && x>=8 && y>=8) { 
        for (var i=0; i<x; i++) {
            z = password1.charAt(i);    //charAt lets you access the element of a string at a given value
            // checks if there is lowercase character
            if (z >= 'a' && z <= 'z') { //no need to check 2nd password since they are same
                hasLowerChara = true;
            }
            // checks if there is uppercase character
            if (z >= 'A' && z <= 'Z') {
                hasUpperChara = true;
            }
            // checks if there is a number
            if (z >= '0' && z <= '9') {
                hasNumber = true;
            }
        }
        if (hasLowerChara===true && hasUpperChara===true && hasNumber===true) {
            return true;
        }else return false;
    }else return false;
}

// // testing validatePasswword function
// if (validatePassword(password1,password2)) {
//     console.log("True");
// }else {
//     console.log("False");
// }

function reversePassword (password) {
    x = password.length;
    temp = "";

    for (i = x-1; i >= 0; i--) {
        // we are counting in reversse, so we can concatenate the temp string with the last elements
        temp += password[i];
    }
    return temp;
}
// // testing reversePassword function
// console.log(reversePassword(password1));

function storePassword (name, password1, password2) {
    // initialize new password to store for object
    newPassword = "";
    // check if passwords are valid
    if (validatePassword(password1,password2)) {
        //reverse password for new password
        newPassword = reversePassword(password1);
        // object to be returned
        user = {
            name: name,
            password: newPassword
        }
        return user;
    }else {
        console.log("Wrong Password!");
        return null;
    }
}

// testing store password function
console.log(storePassword("Ivan", password1,password2));