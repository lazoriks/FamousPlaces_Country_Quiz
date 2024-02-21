// Функція для відкриття сторінки налаштувань
function openSettings() {
    window.location.href = 'settings.html';
}

// Функція для збереження введених даних про підбор
function enterPicking() {
    // Отримання введених даних
    var pickNumber = document.getElementById('pickNumber').value;
    var tunnelNumber = document.getElementById('tunnelNumber').value;
    var pickerCode = document.getElementById('pickerCode').value;
    var mushroomCode = document.getElementById('mushroomCode').value;
    var quantity = document.getElementById('quantity').value;

    // Валідація введених даних (можна додати)
    if (pickNumber && tunnelNumber && pickerCode && mushroomCode && quantity) {
        // Опціонально можна викликати функцію для збереження даних у таблицю
        savePickingData(pickNumber, tunnelNumber, pickerCode, mushroomCode, quantity);
    } else {
        alert('Please fill in all fields.');
    }
}

// Функція для збереження введених даних про години
function enterHours() {
    // Отримання введених даних
    var pickerCode = document.getElementById('pickerCode').value;
    var entryType = document.getElementById('entryType').value;
    var hour = document.getElementById('hour').value;

    // Валідація введених даних (можна додати)
    if (pickerCode && entryType && hour) {
        // Опціонально можна викликати функцію для збереження даних у таблицю
        saveHoursData(pickerCode, entryType, hour);
    } else {
        alert('Please fill in all fields.');
    }
}

// Функція для збереження даних про підбір у таблицю
function savePickingData(pickNumber, tunnelNumber, pickerCode, mushroomCode, quantity) {
    // Опціонально можна реалізувати логіку для збереження даних у таблицю
    console.log('Picking data saved:', pickNumber, tunnelNumber, pickerCode, mushroomCode, quantity);
}

// Функція для збереження даних про години у таблицю
function saveHoursData(pickerCode, entryType, hour) {
    // Опціонально можна реалізувати логіку для збереження даних у таблицю
    console.log('Hours data saved:', pickerCode, entryType, hour);
}
