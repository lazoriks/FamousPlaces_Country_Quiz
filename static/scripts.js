window.onload = function() {
    // Отримання збережених даних з локального сховища
    var savedPicks = JSON.parse(localStorage.getItem('selectedPicks')) || [];
    var savedMushrooms = JSON.parse(localStorage.getItem('selectedMushrooms')) || [];
    var savedTunnels = JSON.parse(localStorage.getItem('selectedTunnels')) || [];
    var savedPickers = JSON.parse(localStorage.getItem('selectedPickers')) || [];

    // Встановлення стану чекбоксів збереженими значеннями
    savedPicks.forEach(function(value) {
        var checkbox = document.getElementById('pick' + value);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    savedMushrooms.forEach(function(value) {
        var checkbox = document.getElementById('mushroom' + value);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    savedTunnels.forEach(function(value) {
        var checkbox = document.getElementById('tunnel' + value);
        if (checkbox) {
            checkbox.checked = true;
        }
    });

    savedPickers.forEach(function(value) {
        var checkbox = document.getElementById('picker' + value);
        if (checkbox) {
            checkbox.checked = true;
        }
    });
};

function saveSettings() {
    // Отримання всіх чекбоксів для номерів, грибів, тунелів та кодів пікерів
    var pickCheckboxes = document.querySelectorAll('input[id^="pick"]');
    var mushroomCheckboxes = document.querySelectorAll('input[id^="mushroom"]');
    var tunnelCheckboxes = document.querySelectorAll('input[id^="tunnel"]');
    var pickerCheckboxes = document.querySelectorAll('input[id^="picker"]');

    // Збереження вибраних значень в масиви
    var selectedPicks = [];
    var selectedMushrooms = [];
    var selectedTunnels = [];
    var selectedPickers = [];

    // Перевірка кожного чекбокса та додавання його значення до відповідного масиву, якщо він вибраний
    pickCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedPicks.push(checkbox.value);
        }
    });

    mushroomCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedMushrooms.push(checkbox.value);
        }
    });

    tunnelCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedTunnels.push(checkbox.value);
        }
    });

    pickerCheckboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            selectedPickers.push(checkbox.value);
        }
    });

    // Збереження у локальне сховище
    localStorage.setItem('selectedPicks', JSON.stringify(selectedPicks));
    localStorage.setItem('selectedMushrooms', JSON.stringify(selectedMushrooms));
    localStorage.setItem('selectedTunnels', JSON.stringify(selectedTunnels));
    localStorage.setItem('selectedPickers', JSON.stringify(selectedPickers));

    
    window.close();
    window.location.href = "index.html"; 
}
