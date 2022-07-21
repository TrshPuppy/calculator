// Some globals:
let numberClicked = 0;
let operatorClicked;
let screenInput = document.querySelector('.input-row');
let screenResult =document.querySelector('.result-row');

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
            //console.log(numberClicked);
            updateInput(numberClicked);
        })
    })

// Add event listeners to operators:
let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            operatorClicked = e.target.dataset.symbol;
            //console.log(operatorClicked);
            //updateResult(operatorClicked)
        })
    })

// Update screen input row:
updateInput(numberClicked);
function updateInput(num)
{
    if(screenInput.textContent == 0)
    {
        screenInput.textContent = num;
    }
    else
    {
        screenInput.textContent += num;
    }
    console.log(screenInput);
}

// Update screen result row:
// function updateResult(symbol)
// {
//     screenResult.textContent += toString(screenInput);
// }
