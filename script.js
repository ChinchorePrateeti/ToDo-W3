document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const inputField = document.getElementById('add');
    const tableId = document.getElementById('tableContent');
    let taskCounter = 1;
    if (addButton && inputField){
        addButton.addEventListener('click', () => {
            console.log("add button clicked!!")
            const inputFieldValue = inputField.value.trim();
            if (!inputFieldValue){
                alert('you didnt enter anything to the list');
            }
            else{
                console.log(inputFieldValue)
                const addTaskToRow = tableId.insertRow();

                const taskNoColumn = addTaskToRow.insertCell(0);
                taskNoColumn.textContent = taskCounter++;

                const taskDataColumn = addTaskToRow.insertCell(1);
                taskDataColumn.textContent = inputFieldValue;

                const statusData = addTaskToRow.insertCell(2);
                statusData.textContent = 'Active';               

                const actionColumn = addTaskToRow.insertCell(3);
                const doneButton = document.createElement('button');
                doneButton.textContent = 'Done';
                doneButton.classList.add('action-buttons');
                actionColumn.appendChild(doneButton);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('action-buttons');
                actionColumn.appendChild(deleteButton);


                

                //event listener
                deleteButton.addEventListener('click', () => {
                    addTaskToRow.remove();
               
                });

                doneButton.addEventListener('click', () =>{
                    taskDataColumn.style.textDecoration = 'line-through';
                    statusData.textContent = 'Inactive';
                });


            
            }
        })
    }
});