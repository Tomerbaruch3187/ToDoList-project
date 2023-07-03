'use strict'

// Focus the input all the time.
// setInputFocus();

// function setInputFocus() {
//     const inputUser = document.getElementById('inputUser');
//     inputUser.focus();
// };


// Adding tasks to the page.
let num = 1;

function writeMissionOnScreen(e, btnClicked) {
    const userInfo = document.getElementById("inputUser").value.trim();
    const addToPage = document.getElementById('addToPage');
    const error = document.getElementById('error');
    const div = document.createElement('div');


    div.classList.add('check-list-item');


    if ((userInfo.length >= 2 && e.key === "Enter") || (userInfo.length >= 2 && btnClicked)) {

        div.innerHTML = `<p>${userInfo}</p>`;
        addToPage.appendChild(div);
        document.getElementById("inputUser").value = "";


        // ---- Add X button to the Task ----
        const endTask = document.createElement('div');
        endTask.classList.add('end-task');
        endTask.innerHTML = '❌';
        endTask.style.display = 'none';
        div.appendChild(endTask);

        endTask.addEventListener('click', function () {
            if (confirm('Are you sure?')) {
                div.remove();
            }

            num = 1;
        });
        // --- Add X button to the Task ----

        num++;
        error.innerHTML = '';

        // ---- mission accomplished ---- 
        const button = document.createElement('button');
        div.prepend(button);
        button.textContent = '🔔';

        button.addEventListener('click', function () {
            div.classList.toggle("accomplished");

            const isAccomplished = div.classList.contains('accomplished');

            if (isAccomplished) {
                button.textContent = '🔕';
                endTask.style.display = 'inline-block';
                editTask.style.display = 'none';
                // editTask.style.transition = 'ease-out';

            } else {
                button.textContent = '🔔';
                endTask.style.display = 'none';
                editTask.style.display = 'inline-block';
            }
        });
        // ----mission accomplished----


        //----------------------- Edit Task -----------------------------
        const editTask = document.createElement('div');
        editTask.innerHTML = '🔨';
        editTask.classList.add('edit-task');
        div.appendChild(editTask);


        // Function to EDIT the TASK
        editTask.addEventListener('click', function () {

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
        });
        // Function to EDIT the TASK

        // ----------------------- Edit Task -----------------------------


    } else if ((e.key === "Enter" && userInfo.length < 2) || (userInfo.length < 2 && btnClicked)) {
        error.innerHTML = "בבקשה כתוב לפחות 2 תוים";
    }
}


// taskCompleted - Clear All
function taskCompleted() {
    const addToPage = document.getElementById('addToPage');
    addToPage.innerHTML = '';

    num = 1;
};