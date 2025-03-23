let display = document.getElementById("result");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value) {
        display.value = display.value.startsWith("-") ? display.value.slice(1) : "-" + display.value;
    }
}
