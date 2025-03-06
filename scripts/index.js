let phoneInputs = document.querySelectorAll('.mobile');
let pcInputs = document.querySelectorAll('.pc');


const finePointer = window.matchMedia("(pointer: fine)");
const coarsePointer = window.matchMedia("(pointer: coarse)");

function pointerType() {
    if (finePointer.matches) {
        phoneInputs.forEach((phoneInput) => {
            phoneInput.classList.add('disabled');
        });
        pcInputs.forEach((pcInput) => {
            pcInput.classList.remove('disabled');
        });
    } else if (coarsePointer.matches) {
        phoneInputs.forEach((phoneInput) => {
            phoneInput.classList.remove('disabled');
        });
        pcInputs.forEach((pcInput) => {
            pcInput.classList.add('disabled');
        });
    }
}

pointerType();

finePointer.addEventListener('change', pointerType);
coarsePointer.addEventListener('change', pointerType);




// Met behulp van chadGPT
const dateInputs = document.querySelectorAll('.date-input');

dateInputs.forEach((dateInput, index) => {
    dateInput.addEventListener('input', function () {
        if (dateInput.value.length === dateInput.maxLength) {
            const nextInput = dateInputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
});
