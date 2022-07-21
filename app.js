// Calculator blueprint:
class Calculator
{
    constructor(previousScreenText, currentScreenText)
    {
        this.previousScreenText = previousScreenText;
        this.currentScreenText = currentScreenText;
    }

    // Clear screen
    clearScreen()
    {
        
    }
    // Delete single number from current screen:
    deleteNumber()
    {

    }
    // Append number to current screen:
    appendNumber(num)
    {
        currentScreenText.textContent += num;
        //console.log(currentScreenText.textContent);
    }
    // Choose operator
    chooseOperator(operator)
    {
        previousScreenText.textContent += (currentScreenText.textContent + operator);
        this.updateScreen();
        console.log(operator);
    }
    // Compute operation
    compute()
    {

    }
    // Update screen
    updateScreen()
    {
        currentScreenText.textContent = '';
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

// Create calculator instance:
const calculator = new Calculator(previousScreenText, currentScreenText);

// Add event listeners to buttons:
numberButtons.forEach(number =>
    {
        number.addEventListener('click', () =>
        {
            calculator.appendNumber(number.textContent);
        })
    })

operatorButtons.forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            calculator.chooseOperator(button.textContent);
        })
    })

// equalsButton.addEventListener('click', () =>
// {
//     calculator.compute();
// })

