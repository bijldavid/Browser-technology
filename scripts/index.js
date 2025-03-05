let phoneInputs = document.querySelectorAll('input.mobile');
let pcInputs = document.querySelectorAll('input.pc');


// function isMobileDevice() {
//     return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
// }

// if (isMobileDevice()) {
//     phoneInputs.forEach(function (phoneInput) {
//         phoneInput.classList.remove('disabled');
//     });
//     pcInputs.forEach(function (pcInput) {
//         pcInput.classList.add('disabled');
//     });
// } else {
//     phoneInputs.forEach(function (phoneInput) {
//         phoneInput.classList.add('disabled');
//     });
//     pcInputs.forEach(function (pcInput) {
//         pcInput.classList.remove('disabled');
//     });
// }

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
