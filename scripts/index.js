// generated code
function resetEmptyInputValidation() {
    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('empty-input');
        } else {
            input.classList.remove('empty-input');
        }
    });
}

const style = document.createElement('style');
style.textContent = `input.empty-input:user-valid,
                    input.empty-input:user-invalid {
                    border-left: 1px solid #ccc !important;
                    background-image: none !important;
                    }`;

document.head.appendChild(style);
document.addEventListener('input', resetEmptyInputValidation);






let radioButtons = document.querySelectorAll('.one-b .skip');

radioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let optionalFieldsets = document.querySelectorAll('.skipped');
        if (optionalFieldsets.length > 0) {
            optionalFieldsets.forEach(function (optionalFieldset) {
                if (document.querySelector('input.skip').checked) {
                    optionalFieldset.setAttribute('disabled', 'disabled');
                } else {
                    optionalFieldset.removeAttribute('disabled');
                }
            });
        }
    });
});

const kiesInputs = document.querySelectorAll('.two-a .skip');

kiesInputs.forEach(kiesinput => {
    kiesinput.addEventListener('input', function () {
        if (this.value.trim() !== '') {
            kiesInputs.forEach(otherInput => {
                if (otherInput !== this) {
                    otherInput.setAttribute('disabled', 'disabled');
                }
            });
        } else {
            kiesInputs.forEach(otherInput => {
                otherInput.removeAttribute('disabled');
            });
        }
    });
});




// credit naar Sybren:
// const volgendeLinks = document.querySelectorAll('a[id^=volgende]');
// const sections = document.querySelectorAll('[id^=page]');

// volgendeLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         const section = this.closest('[id^=page]');
//         const inputs = section.querySelectorAll('input[required]');
//         let allFilled = true;

//         inputs.forEach(input => {
//             if (!input.checkValidity()) {
//                 allFilled = false;
//             }
//         });

//         if (!allFilled) {
//             event.preventDefault();
//             alert('Please fill all the required input fields in the section.');
//         }
//     });
// });


