// let coarseInputs = document.querySelectorAll('.coarse');
// let fineInputs = document.querySelectorAll('.fine');


// const finePointer = window.matchMedia("(pointer: fine)");
// const coarsePointer = window.matchMedia("(pointer: coarse)");

// function pointerType() {
//     if (finePointer.matches) {
//         coarseInputs.forEach((coarseInput) => {
//             coarseInput.classList.add('disabled');
//         });
//         fineInputs.forEach((fineInput) => {
//             fineInput.classList.remove('disabled');
//         });
//     } else if (coarsePointer.matches) {
//         coarseInputs.forEach((coarseInput) => {
//             coarseInput.classList.remove('disabled');
//         });
//         fineInputs.forEach((fineInput) => {
//             fineInput.classList.add('disabled');
//         });
//     }
// }

// pointerType();

// finePointer.addEventListener('change', pointerType);
// coarsePointer.addEventListener('change', pointerType);



// let skipOption = document.querySelector('.skip');

// skipOption.addEventListener('change', function() {
//     let optionalFieldset = document.querySelector('.skipped');
//     if (optionalFieldset) {
//         optionalFieldset.disabled = skipOption.checked;
//     }
// });



// chadgpt
let radioButtons = document.querySelectorAll('.skip');

radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
        let optionalFieldsets = document.querySelectorAll('.skipped');
        if (optionalFieldsets.length > 0) {
            optionalFieldsets.forEach(function(optionalFieldset) {
                if (document.querySelector('input.skip').checked) {
                    optionalFieldset.setAttribute('disabled', 'disabled');
                } else {
                    optionalFieldset.removeAttribute('disabled');
                }
            });
        }
    });
});

