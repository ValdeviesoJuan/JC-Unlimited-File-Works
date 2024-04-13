function createNewRow(name, email, role){
    var tbody = document.querySelector('#onlyTable tbody');
    var id = tbody.rows.length + 1;

    var newRow = document.createElement('tr');
    newRow.className = 'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border dark:border-gray-700 text-black';

    var cell1 = document.createElement('th');
    cell1.className = 'px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white border border-slate-300';
    cell1.textContent = id; // You may want to generate an ID dynamically

    var cell2 = document.createElement('td');
    cell2.className = 'px-6 py-4 border border-slate-300';
    cell2.textContent = name;

    var cell3 = document.createElement('td');
    cell3.className = 'px-6 py-4 border border-slate-300';
    cell3.textContent = email;

    var cell4 = document.createElement('td');
    cell4.className = 'px-6 py-4 border border-slate-300';
    cell4.textContent = role;

    var cell5 = document.createElement('td');
    cell5.className = 'px-6 py-4 border border-slate-300 text-center';
    cell5.innerHTML = '<button id="edit-btn" class="cursor-pointer"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button> <button id="delete-btn" class="cursor-pointer"><i class="fa-solid fa-trash-can" style="color: #ff0000;"></i></button>';

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);

    cell5.querySelector("#edit-btn").addEventListener("click", function(event) {
        var row = event.target.closest("tr");
        // Call your edit function here passing the row reference
        editRow(row);
    });

    cell5.querySelector("#delete-btn").addEventListener("click", function(event) {
        var row = event.target.closest("tr");
        // Call your delete function here passing the row reference
        row.remove();
    });

    return newRow;
}

function appendValues() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var role = document.getElementById("Role").value;
    var tablebody = document.getElementById("onlyTable").getElementsByTagName('tbody')[0];
    var newRow = createNewRow(name, email, role);
    tablebody.appendChild(newRow);

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
}

function toggleEditMode(row) {
    var cells = row.cells;
    var editButton = row.querySelector('#edit-btn');
    var isEditMode = editButton.classList.contains('edit-mode');

    if (!isEditMode) {
        for (var i = 1; i < cells.length - 1; i++) {
            var textContent = cells[i].textContent;
            cells[i].innerHTML = '<input type="text" class="w-full border border-gray-300 px-2 py-1" value="' + textContent + '">';
        }
        editButton.innerHTML = '<i class="fa-solid fa-save" style="color: #005eff;"></i>';
        editButton.classList.add('edit-mode');
    } 
    else { // If the row is in edit mode, switch to view mode and save changes
        for (var i = 1; i < cells.length - 1; i++) {
            var input = cells[i].querySelector('input');
            var value = input.value;
            cells[i].textContent = value;
        }
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i>';
        editButton.classList.remove('edit-mode');
    }
}

function editRow(row) {
    toggleEditMode(row);
}

function saveRow(row) {
    toggleEditMode(row);
}

document.getElementById('onlyForm').addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name.trim() === '' && email.trim() === ''){
        alert("Please fill out all fields");
        return;
    }
    else if(name.trim() === ''){
        alert("Please fill out Name");
        return;
    }
    else if(email.trim() === ''){
        alert("Please fill out Email");
        return;
    }
    
    appendValues();
});

document.querySelectorAll('#delete-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var row = this.closest('tr');
        row.remove();
    });
});

document.querySelectorAll('#edit-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var row = this.closest('tr');
        editRow(row);
    });
});