const base =require('@playwright/test');
 
exports.customtest_hamed = base.test.extend(
    {
        testdatafororders : { 
        username :"hamed@gmail.com",
        password :"Learning@123",
        prouductName:"ZARA COAT 3"
        } 
    }
)