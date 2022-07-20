// Some globals:
let numberClicked = 0;
let operatorClicked;

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
    numpad.insertAdjacentElement('beforeend', numpadButton);

    // Add event listeners to numpad buttons:
    numpadButton.addEventListener('click', e =>
    {
        numberClicked = parseInt(e.target.dataset.symbol);
        console.log(numberClicked);
    });
}

// Add event listeners to operators:
let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            operatorClicked = e.target.dataset.symbol;
            console.log(operatorClicked);
        })
    })
console.log(operatorClicked);

// Add event listeners to bottom row:

console.log(bottomRowButtons);