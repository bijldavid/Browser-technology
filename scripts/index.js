function resetEmptyInputValidation() {
    // Get all input elements on the page
    const allInputs = document.querySelectorAll('input');
    
    // Loop through each input
    allInputs.forEach(input => {
        // Check if the input is empty
        if (input.value.trim() === '') {
            // For empty inputs, add a class that will be styled in CSS
            input.classList.add('empty-input');
        } else {
            // For non-empty inputs, remove the class
            input.classList.remove('empty-input');
        }
    });
}

// Add the CSS that will override only the validation styles
const style = document.createElement('style');
style.textContent = `
    input.empty-input:user-valid,
    input.empty-input:user-invalid {
        border-left: 1px solid #ccc !important;
        background-image: none !important;
    }
`;
document.head.appendChild(style);

// Run the function when a user interacts with any input
document.addEventListener('input', resetEmptyInputValidation);






// chadgpt
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

// chadgpt
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


