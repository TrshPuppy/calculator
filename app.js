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

    }
    // Choose operator
    chooseOperator(operator)
    {

    }
    // Compute operation
    compute()
    {

    }
    // Update screen
    updateScreen()
    {

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

