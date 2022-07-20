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

// Add event listeners to right row operators:
let rightRowButtons = document.querySelectorAll('.right-row button');
rightRowButtons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            operatorClicked = e.target.dataset.symbol;
            console.log(operatorClicked);
        })
    })
console.log(rightRowButtons);

// Add event listeners to bottom row:
let bottomRowButtons = document.querySelectorAll('.bottom-row button')
bottomRowButtons.forEach(button =>
    {
        button.addEventListener('click', e =>
        {
            if(e.target.dataset.symbol == "0" || e.target.dataset.symbol == ".")
            {
                numberClicked = e.target.dataset.symbol;
                console.log(numberClicked);
            }
            else
            {
                operatorClicked = e.target.dataset.symbol;
                console.log(operatorClicked);
            }
        });
    });
console.log(bottomRowButtons);