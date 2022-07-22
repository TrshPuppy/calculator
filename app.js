class Calculator
{
    constructor(previousScreenText, currentScreenText)
    {
        this.previousScreenText = previousScreenText;
        this.currentScreenText = currentScreenText;
        this.clearScreen();
    }

    clearScreen() // w/ default values
    {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    deleteNumber()
    {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number)
    {
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperator(operator)
    {
        if(this.currentOperand === '') return;
        if(this.previousOperand !== '')
        {
            this.calculate();
        }
        this.operation = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate()
    {
        let result;
        let previousNum = parseFloat(this.previousOperand);
        let currentNum = parseFloat(this.currentOperand);
        let operation = this.operation;

        switch(operation)
        {
            case '+':
                result = previousNum + currentNum
                break
            case '-':
                result = previousNum - currentNum
                break
            case '*':
                result = previousNum * currentNum
                break
            case '÷':
                result = previousNum / currentNum
                break
            default:
                return
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
        console.log(result);
    }

    updateScreen()
    {
        this.currentScreenText.innerText = this.currentOperand;
        this.previousScreenText.innerText = this.previousOperand;
        if(this.operation != undefined)
        {
            this.previousScreenText.innerText = this.previousOperand + this.operation;
        }
    }
}

// Buttons:
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

// Screen:
const previousScreenText = document.querySelector('[data-previous-operand]');
const currentScreenText = document.querySelector('[data-current-operand]');

// Start calculator instance:
const calculator = new Calculator(previousScreenText, currentScreenText);

// Add event listeners:
numberButtons.forEach(button => 
    button.addEventListener('click', () =>
    {
        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
    }))

operatorButtons.forEach(button => 
    button.addEventListener('click', () =>
    {
        calculator.chooseOperator(button.innerText);
        calculator.updateScreen();
    }))

equalsButton.addEventListener('click', () =>
{
    calculator.calculate();
    calculator.updateScreen();
})

clearButton.addEventListener('click', () =>
{
    calculator.clearScreen();
    calculator.updateScreen();
})

deleteButton.addEventListener('click', () =>
{
    calculator.deleteNumber();
    calculator.updateScreen();
})


































// // Calculator blueprint:
// class Calculator
// {
//     constructor(previousScreenText, currentScreenText, currentOperator)
//     {
//         this.previousScreenText = previousScreenText;
//         this.currentScreenText = currentScreenText;
//     }

//     // Clear screen
//     clearScreen()
//     {
        
//     }
//     // Delete single number from current screen:
//     deleteNumber()
//     {

//     }
//     // Append number to current screen:
//     appendNumber(num)
//     {
//         if(num === '.' && currentScreenText.textContent.includes('.')) return;
//         currentScreenText.textContent += num;
//     }
//     // Choose operator
//     chooseOperator(operator)
//     {
//         currentOperator = operator;
//         console.log(currentOperator);
//     }
//     // Compute operation
//     compute()
//     {
//         console.log('click');
//         let computation;
//         let previous = parseFloat(this.previousScreenText.textContent);
//         console.log(previous);
//         let current = parseFloat(this.currentScreenText.textContent);
//         console.log(current);
//         switch (currentOperator)
//         {
//             case '+':
//                 computation = previous + current
//                 break
//             case '-':
//                 computation = previous - current
//                 break
//             case '*':
//                 computation = previous * current
//                 break
//             case '÷':
//                 computation = previous / current
//                 break
//             default:
//                 return
//         }
//         currentScreenText.textContent = computation;
//         console.log(computation);
//     }
//     // Update screen
//     updateScreen()
//     {
//         previousScreenText.textContent += currentScreenText.textContent + currentOperator;
//         currentScreenText.textContent = '';
//     }
// }

// // Buttons:
// const numberButtons = document.querySelectorAll('[data-number]');
// const operatorButtons = document.querySelectorAll('[data-operator]');
// const clearButton = document.querySelector('[data-clear]');
// const deleteButton = document.querySelector('[data-delete]');
// const equalsButton = document.querySelector('[data-equals]');
// let currentOperator = undefined;
// let operationString = '';

// // Screen:
// const previousScreenText = document.querySelector('[data-previous-operand]');
// const currentScreenText = document.querySelector('[data-current-operand]');

// // Create calculator instance:
// const calculator = new Calculator(previousScreenText, currentScreenText, currentOperator);

// // Add event listeners to buttons:
// numberButtons.forEach(number =>
//     {
//         number.addEventListener('click', () =>
//         {
//             calculator.appendNumber(number.textContent);
//         })
//     })

// operatorButtons.forEach(button =>
//     {
//         button.addEventListener('click', () =>
//         {
//             calculator.chooseOperator(button.textContent);
//             calculator.updateScreen();
//         })
//     })

// equalsButton.addEventListener('click', () =>
// {
//     calculator.compute();
//     calculator.chooseOperator(equalsButton.textContent);
// })

