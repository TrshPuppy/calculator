// Calculator blueprint:
class Calculator
{
    constructor(previousScreenTextElement, currentScreenTextElement)
    {
        this.previousScreenTextElement = previousScreenTextElement;
        this.currentScreenTextElement = currentScreenTextElement;
    }

    // Clear screen
    clearScreen()
    {
        this.currentScreen = '';
        this.previousScreen = '';
        this.operation = undefined;
    }
    // Delete single number from current screen:
    deleteNumber()
    {

    }
    // Append number to current screen:
    appendNumber(num)
    {
        this.currentScreenTextElement.innerText += num.toString();
    }
    // Choose operator
    chooseOperator(operator)
    {
        this.previousScreenTextElement.innerText += currentScreenTextElement.innerText.toString() + operator.toString();
        this.currentScreenTextElement.innerText = '';
    }
    // Compute operation
    compute()
    {

    }
    // Update screen
    updateScreen()
    {
        this.currentScreenTextElement.innerText = currentScreenTextElement;
    }
}

// Buttons:
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

// Screen:
const previousScreenTextElement = document.querySelector('[data-previous-operand]');
const currentScreenTextElement = document.querySelector('[data-current-operand]');

// Create calculator instance:
const calculator = new Calculator(previousScreenTextElement, currentScreenTextElement);

// Add event listeners to buttons:
numberButtons.forEach(number =>
    {
        number.addEventListener('click', () =>
        {
            calculator.appendNumber(number.innerText);
            calculator.updateScreen;
            console.log(number.innerText);
        })
    })

operatorButtons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            calculator.chooseOperator(button.innerText);
        })
    })

// equalsButton.addEventListener('click', () =>
// {
//     calculator.compute();
// })

