//Positive or negative?
const number = -2;
if(number === 0){
    console.log(number, 'is zero')
} else if(number > 0){
    console.log(number, 'is a positive number')
} else {
    console.log(number, 'is a negative number')
}

//Greatest of three numbers
const number1 = 3;
const number2 = 5;
const number3 = 7;
if (number1 > number2 && number1 > number3) {
    console.log(number1, 'is the gratest number')
} else if (number2 > number1 && number2 > number3) {
    console.log(number2, 'is the gratest number')
} else {
    console.log(number3, 'is the gratest number')
}
//Days until the weekend
let text = 'Sunday';
switch(text) {
    case 'Monday':
        text = '5 days left to Weekend';
        console.log(text)
        break;
    case 'Tuesday':
        text = '4 days left to Weekend';
        console.log(text)
        break;
    case 'Wednesday' :
        text = '3 days left to Weekend';
        console.log(text)
        break;
    case 'Thursday':
        text = '2 days left to Weekend';
        console.log(text)
        break;
    case 'Friday' :
        text = '1 day left to Weekend';
        console.log(text)
        break;
    default:
        text = 'Maybe it is already the weekend'
        console.log(text)
        break;
}
    
//vegatable prices
const vegetable = 'carrots';
switch(vegetable) {
    case 'potato':
    case 'carrots':
        console.log( 'the price of '+ vegetable + ' is 5 per kg');
        break;
    case 'brocolli':
        console.log( 'the price of '+ vegetable +' is 7 per kg');
        break;
    case 'cabbage':
        console.log( 'the price of '+ vegetable +' is 4 per kg')
        break;
    default:
        console.log('this item is unknown')
        break;
}
