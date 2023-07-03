function editTask() {
    const blurDiv = document.createElement('div'); // Blur Div
    const editOption = document.createElement('div');
    const acceptEdit = document.createElement('div');
    const dontSaveEditTask = document.createElement('div');
    const editInPut = document.createElement('input');

    document.body.appendChild(blurDiv);
    blurDiv.appendChild(editOption);
    editOption.appendChild(editInPut);
    editOption.appendChild(acceptEdit);
    editOption.appendChild(dontSaveEditTask);

    blurDiv.classList.add('blur-div');
    editOption.classList.add('edit-option');
    editInPut.classList.add('edit-input');
    acceptEdit.classList.add('accept-edit'); // accept
    dontSaveEditTask.classList.add('dont-save-edit-task') // Noop 

    editInPut.placeholder = 'ערוך משימה'
    acceptEdit.textContent = 'שמור'
    dontSaveEditTask.textContent = 'ביטול';


    acceptEdit.addEventListener('click', () => {
        if (editInPut.value == '') {
            editInPut.placeholder = '*כתוב לעריכה'
            editInPut.classList.add('new-edit-input-color');


        } else if (editInPut.value.length >= 2) {
            div.querySelector('p').textContent = editInPut.value;
            editOption.remove();
            blurDiv.remove();
        }

    });

    dontSaveEditTask.addEventListener('click', () => {
        editOption.remove();
        blurDiv.remove();
    });
};