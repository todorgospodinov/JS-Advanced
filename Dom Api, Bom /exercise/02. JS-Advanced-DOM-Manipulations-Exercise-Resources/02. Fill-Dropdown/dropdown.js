function addItem() {
    let text = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;
    let dropDownMenu = document.getElementById('menu');
    
    if (text === '' && inputValue === '') {
        alert('Please insert some info')
    }

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = text;
    newOptionElement.value = inputValue;
    
    dropDownMenu.appendChild(newOptionElement);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

    
}