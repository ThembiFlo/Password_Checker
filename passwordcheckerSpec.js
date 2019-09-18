describe ("password_is_valid", function(){
it("should be larger than 8 characters", function(){
    let passwordCheck = password_is_valid("ThEmbi190")  
    expect(function () {throw("password must contain uppercase and lowercase letters and at least one number")}).toThrow("password must contain uppercase and lowercase letters and at least one number");
})
it("should not be null", function(){
    let passwordCheck = password_is_valid("mbi190")
    expect(passwordCheck).toBe(false);
})
it("should have at least one uppercase letter",function(){
    let passwordCheck = password_is_valid("ThEmbi190")
    expect(passwordCheck).toBe(true);
})
it("should have at at least one lowercase letter", function(){
    let passwordCheck = password_is_valid("ThEmbi190")
    expect(passwordCheck).toBe(true);
})
it("should have at least one number", function(){
    let passwordCheck = password_is_valid("ThEmbi190")
    expect(passwordCheck).toBe(true);
})
});

describe("password_is_ok", function(){
    it("should be larger than 8 characters, it should not be null and have at least one uppercase", function(){
    let pass = password_is_ok("THEMBISILE")
    expect(pass).toBe(true);
})
it("should be larger than 8 characters, it should not be null and have at least one lowercase", function(){
    let pass = password_is_ok("sunflower")
    expect(pass).toBe(true)
})
it("should be larger than 8 characters, it should not be null and have at least one number", function(){
    let pass = password_is_ok("01278954179")
    expect(pass).toBe(true)
})
it("password is not ok if it does not have more than 8 characters and is null", function(){
    let pass = password_is_ok("Them2")
    expect(pass).toBe(false)
}) 
})