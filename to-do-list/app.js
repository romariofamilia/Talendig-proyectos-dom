const inputTask = document.querySelector('#inputTask');
const submit = document.querySelector('#sendTask');
const list = document.querySelector('#list');


submit.addEventListener('click', addTask);

function addTask() {
    const itemList = document.createElement('li');
    const del = document.createElement('span');

    itemList.setAttribute('class', 'item-list');
    del.setAttribute('class', 'del-button');

    del.textContent = 'DEL';
    itemList.textContent = inputTask.value;
    itemList.appendChild(del)
    list.appendChild(itemList);

    del.addEventListener('click', (e) => {
        itemList.remove()
        
    })

    itemList.addEventListener('dblclick', () => {
        itemList.classList.toggle('item-list-done')
    })

    inputTask.value = ''
    console.log(DB);
}




