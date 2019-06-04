function password_is_valid(password){
   
    let validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{9,}$)/
    if(validPassword.test(password) === false){
        return "password must contain uppercase and lowercase letters and at least one number"
    }
   
    return validPassword.test(password);
   }


   function password_is_ok(password){
        let pass1 = /[A-Za-z0-9]{9,}/;
       let pass2 = /(?=.*[A-Z])[A-Z]+/;
       let pass3 = /(?=.*[a-z])[a-z]+/;
       let pass4 = /(?=.*[0-9])[0-9]+/;
       if(password !== null && pass1.test(password) == true && pass2.test(password) == true){
           return true;
       } 
       if(password !== null && pass1.test(password)&& pass1.test(password) == true && pass3.test(password) == true){
        return true;
   }
   if(password !== null && pass1.test(password) == true && pass4.test(password) == true){
    return true;
   }
else {
    return false;
}
   }
   console.log(password_is_valid("Thembi"));


