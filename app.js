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
    let numberClicked = 0;
    numpadButton.addEventListener('click', e =>
    {
        numberClicked = parseInt(e.target.dataset.symbol);
        console.log(numberClicked);
    });
}

// Add event listeners to right row operators:
let rightRowButtons = document.querySelectorAll('.right-row button');
console.log(rightRowButtons);