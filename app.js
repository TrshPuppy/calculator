// Generate numpad:
let numpad = document.querySelector('.numpad')
numpad.style.gridTemplateColumns = 'repeat(4, 1fr)';
numpad.style.gridTemplateRows = 'repeat(4, 1fr)';
numpad.style.gap = '10px';

for(let i = 1; i <=16; i++)
{
    let numpadButton = document.createElement('button');
    numpadButton.backgroundColor = 'purple';
    numpadButton.innerText = i;
    numpadButton.style.textAlign = 'center';
    numpadButton.dataset.symbol = i;
    numpad.insertAdjacentElement('beforeend', numpadButton);
}