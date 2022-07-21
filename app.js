// Some globals:
let numberClicked;
let operatorClicked;
let operationString = "";
let inputScreen = document.querySelector('.input-row');
let resultScreen = document.querySelector('.result-row');
let equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', calculateOperation);

// Generate numpad:
let numpad = document.querySelector('.numpad')
numpad.style.gridTemplateColumns = 'repeat(3, 1fr)';
numpad.style.gridTemplateRows = 'repeat(3, 1fr)';
numpad.style.gap = '10px';

for(let i = 1; i <=9; i++)
{
    let numpadButton = document.createElement('button');
    numpadButton.backgroundColor = 'purple';
    numpadButton.innerText = i;
    numpadButton.style.textAlign = 'center';
    numpadButton.dataset.symbol = i;
    numpadButton.classList = "number";
    numpad.insertAdjacentElement('beforeend', numpadButton);
}

// Add event listeners to numbers:
let numberButtons = document.querySelectorAll('.number')
numberButtons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            numberClicked = e.target.dataset.symbol;
            updateOperation(numberClicked);
            //console.log(numberClicked);
        })
    })

// Add event listeners to operators:
let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            operatorClicked = e.target.dataset.symbol;
            updateOperation(operatorClicked);
            //console.log(operatorClicked);
        })
    })

// Update current operation:
function updateOperation(buttonClicked)
{
    operationString += String(buttonClicked);
    console.log(operationString);
}

// Calculate operation:
function calculateOperation(string)
{
    let result = Number(operationString);
    console.log(parseInt(operationString));
}

// Update screen input row:


// Update screen result row:
