function isNumber(number) {
    if (number === '') {
        console.log('Первое число не указано');
        return false;
    }
    if (isNaN(number)) {
        console.log('Некорректный ввод чисел');
        return false;
    }
    return true;
}

function isMathSign(sign) {
    switch (sign) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default: {
            if (sign === '') {
                console.log('Не введён знак');
            } else {
                console.log('Программа не поддерживает такую операцию');
            }
        }
    }
    return false;
}

function calc(firstNum, sign, secondNum) {
    let firstOperand = Number(firstNum);
    let secondOperand = Number(secondNum);
    switch (sign) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
    }
 }

function calculator(step, firstNum, sign) {
    switch (step) {
        case 1:
            firstNum = prompt('Введите первое число');
            if (isNumber(firstNum)) {
                step = 2;
            }
            calculator(step, firstNum)
            break;
        case 2:
            sign = prompt('Введите знак арифметического действия');
            if (isMathSign(sign)) {
                step = 3;
            }
            calculator(step, firstNum, sign);
            break;
        case 3:
            let secondNum = prompt('Введите второе число');
            if (isNumber(secondNum)) {
               let result = calc(firstNum, sign, secondNum);
               console.log(result);
               break;
            }
            calculator(step, firstNum, sign);
            break;
    }
}

calculator(1)
