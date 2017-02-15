/**
 * Created by asus on 2017/1/18.
 */
function add(x, y) {
    return x + y;
}
result = add(10, 12);
console.log(result);

function validateSsn(ssn) {
    if (/^\d{3}-\d{2}-\d{4}$/.exec(ssn))
        console.log('Valid SSN');
    else
        console.log('Invalid SSN');
}
function validatePhone(phone) {
    if (/^\(\d{3}\)\d{3}-\d{4}$/.exec(phone))
        console.log('Valid Phone Number');
    else
        console.log('Invalid Phone Number');
}

function validataValue(value, regex, type) {
    if (regex.exec(value)) {
        console.log('valid ' + type);
    }
    else {
        console.log('invalid ' + type);
    }
}
var value = '(123)456-7890';
var regex = /^\(\d{3}\)\d{3}-\d{4}$/;
var type = 'Phone Number';
console.log(validataValue(value, regex, type));

function validateAddress(address) {
    if (parseAddress(address))
        console.log('Valid Address');
    else console.log('Invalid Address');
}
function validateName(name) {
    if (parseName(name))
        console.log('Valid Name');
    else console.log('Invalid Name');
}
function validateValueWithFunc(value, parseFunc, type) {
    if (parseFunc(value))
        console.log('Invalid ' + type);
    else
        console.log('Valid ' + type);
}
function parseAddress(value) {
    if (value === '123 Main St.')
        return true;
    else
        return false;
}
function parseName(value) {
    if (value === 'Joe Mama')
        return true;
    else
        return false;
}

validateValueWithFunc('123 Main St.', parseAddress, 'Address');
validateValueWithFunc('Joe Mama', parseName, 'Name');
validateValueWithFunc('123-45-6789', /^\d{3}-\d{2}-\d{4}$/.exec, 'SSN');
validateValueWithFunc('(123)456-7890', /^\(\d{3}\)\d{3}-\d{4}$/.exec, 'Phone');
//高阶函数返回值为函数
function makeAdder(constantValue) {
    return function adder(value) {
        return constantValue + value;
    };
}
//add10为makeAdder函数返回的adder函数

/*注意adder函数即使被makeAdder函数返回了，它仍然能获取makeAdder的常量。
因为当adder创建时，这个常量就在它的作用域中了。
*
* 闭包
* */
var add10 = makeAdder(10);
console.log(add10(20)); // prints 30
console.log(add10(30)); // prints 40
console.log(add10(40)); // prints 50