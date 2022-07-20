// Generate numpad:
let numpad = document.querySelector('.numpad')
numpad.style.gridTemplateColumns = 'repeat(4, 1fr)';
numpad.style.gridTemplateRows = 'repeat(4, 1fr)';

for(let i = 0; i < 16; i++)
{
    let numpadSymbol = 0;
    let numpadButton = document.createElement('div');
    numpadButton.backgroundColor = 'purple';
    numpad.insertAdjacentElement('beforeend', numpadButton);
}