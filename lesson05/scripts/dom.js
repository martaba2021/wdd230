const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => { 
    if (input.value.trim() != '') { 
        const inputValue = input.value;
        const inputWithoutspace = inputValue.replace(/\s/g, '');
        const regex = /^[a-zA-Z]+\d+$/;

        if (regex.test(inputWithoutspace)) {
            const li = document.createElement('li');
            list.append(li);
            li.textContent = input.value;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            li.append(deleteButton);
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus()
            });
            input.focus();
            input.value = '';
        }
        else {
            alert('Plase include a chapter number');
            input.focus();
        }
    } else {
        alert('Opps! No empty values allowed. Please enter a favorite chapter from BOM')
        input.focus(); 
    }
});