window.onload = function() {
    // Отримання збережених значень з локального сховища
    var savedPicks = JSON.parse(localStorage.getItem('selectedPicks')) || [];
    var savedMushrooms = JSON.parse(localStorage.getItem('selectedMushrooms')) || [];
    var savedTunnels = JSON.parse(localStorage.getItem('selectedTunnels')) || [];
    var savedPickers = JSON.parse(localStorage.getItem('selectedPickers')) || [];

    // Заповнення випадаючих списків збереженими значеннями
    var pickNumberSelect = document.getElementById('pickNumber');
    var tunnelNumberSelect = document.getElementById('tunnelNumber');
    var pickerCodeSelect = document.getElementById('pickerCode');
    var mushroomCodeSelect = document.getElementById('mushroomCode');

    savedPicks.forEach(function(value) {
        var option = document.createElement('option');
        option.text = value;
        pickNumberSelect.add(option);
    });

    savedMushrooms.forEach(function(value) {
        var option = document.createElement('option');
        option.text = value;
        mushroomCodeSelect.add(option);
    });

    savedTunnels.forEach(function(value) {
        var option = document.createElement('option');
        option.text = value;
        tunnelNumberSelect.add(option);
    });

    savedPickers.forEach(function(value) {
        var option = document.createElement('option');
        option.text = value;
        pickerCodeSelect.add(option);
    });
};
function savePicking() {
    // Отримання введених даних
    var pickNumber = document.getElementById('pickNumber').value;
    var tunnelNumber = document.getElementById('tunnelNumber').value;
    var pickerCode = document.getElementById('pickerCode').value;
    var mushroomCode = document.getElementById('mushroomCode').value;
    var quantity = document.getElementById('quantity').value;

    // Можете зберегти ці дані у локальному сховищі, базі даних або відправити на сервер
    // Наприклад, у локальне сховище:
    localStorage.setItem('pickingData', JSON.stringify({
        'pickNumber': pickNumber,
        'tunnelNumber': tunnelNumber,
        'pickerCode': pickerCode,
        'mushroomCode': mushroomCode,
        'quantity': quantity
    }));
}
function saveHours() {
    // Отримання введених даних
    var pickerCodeHours = document.getElementById('pickerCodeHours').value;
    var inputOutput = document.getElementById('inputOutput').value;
    var hour = document.getElementById('hour').value;

    // Збереження даних
    // Аналогічно savePicking(), ви можете зберегти ці дані у локальному сховищі, базі даних або відправити на сервер
    localStorage.setItem('hoursData', JSON.stringify({
        'pickerCodeHours': pickerCodeHours,
        'inputOutput': inputOutput,
        'hour': hour
    }));
}
