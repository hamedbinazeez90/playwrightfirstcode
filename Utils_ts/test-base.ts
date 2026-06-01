import {test as BaseTest} from '@playwright/test';
interface TestDataForOrders{
    username : string,
    password : string,
    prouductName : string
};
 
export const customTest = BaseTest.extend<{testdatafororders: TestDataForOrders}> (
    {
        testdatafororders : { 
        username :"hamed@gmail.com",
        password :"Learning@123",
        prouductName:"ZARA COAT 3"
        } 
    }
)