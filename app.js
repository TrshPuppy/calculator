// Calculator blueprint:
class Calculator
{
    constructor(previousScreen, currentScreen)
    {
        this.previousScreen = previousScreen;
        this.currentScreen = currentScreen;
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
        this.currentScreen.innerText += num;
    }
    // Choose operator
    chooseOperator(operator)
    {
        this.previousScreen.innerText += this.currentScreen.innerText + operator;
        this.currentScreen.innerText = '';
    }
    // Compute operation
    compute()
    {

    }
    // Update screen
    updateScreen()
    {
        this.currentScreen.innerText = this.currentScreen;
        this.previousScreen.innerText = this.previousScreen;
    }
}

// Buttons:
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

// Screen:
const previousScreen = document.querySelector('[data-previous-operand]');
const currentScreen = document.querySelector('[data-current-operand]');

// Create calculator instance:
const calculator = new Calculator(previousScreen, currentScreen);

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

