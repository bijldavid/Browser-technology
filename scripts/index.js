// REMOVE VALIDATION WHEN EMPTY
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




// DISABLE CONTENT 1B 
let oneBradioButtons = document.querySelectorAll('.one-b--row-one input');

oneBradioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let optionalFieldsets = document.querySelectorAll('.one-b .skipped');
        if (optionalFieldsets.length > 0) {
            optionalFieldsets.forEach(function (optionalFieldset) {
                if (document.querySelector('.one-b .skip').checked) {
                    optionalFieldset.setAttribute('disabled', 'disabled');
                } else {
                    optionalFieldset.removeAttribute('disabled');
                }
            });
        }
    });
});

// DISABLE CONTENT 2A
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

// DISABLE CONTENT 3A
let threeAradioButtons = document.querySelectorAll('.three-a--row-one input');

threeAradioButtons.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let optionalFieldsets = document.querySelectorAll('.three-a .skipped');
        if (optionalFieldsets.length > 0) {
            optionalFieldsets.forEach(function (optionalFieldset) {
                if (document.querySelector('.three-a .skip').checked) {
                    optionalFieldset.setAttribute('disabled', 'disabled');
                } else {
                    optionalFieldset.removeAttribute('disabled');
                }
            });
        }
    });
});



// VALIDATION API
// CREDIT: Sybren
const volgendeLinks = document.querySelectorAll('.volgende');

volgendeLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        const section = this.closest('[id^=page]');

        const errorMessage = section.querySelector('.error-message');
        const errorList = errorMessage.querySelector('ul');

        errorList.innerHTML = '';

        const inputs = section.querySelectorAll('input[required]');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                allFilled = false;

                const fieldName = input.getAttribute('name');
                const listItem = document.createElement('li');
                listItem.textContent = fieldName;
                errorList.appendChild(listItem);

                if (input.type !== 'radio' && input.type !== 'checkbox') {
                    input.classList.add('invalid-input');

                    input.addEventListener('input', function () {
                        this.classList.remove('invalid-input');
                    });
                }
            }
        });

        if (!allFilled) {
            event.preventDefault();
            errorMessage.classList.remove('disabled');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            errorMessage.classList.add('disabled');
        }
    });
});






// VERKRIJGERS TOEVOEGEN
// CREDIT: CLAUDE AI (kan ik niet uitleggen)
document.addEventListener('DOMContentLoaded', function () {
    // Keep track of the highest verkrijger number
    let highestVerkrijgerNumber = 1;

    // Function to get the highest verkrijger number
    function updateHighestNumber() {
        const allHeadings = document.querySelectorAll('section h2');
        highestVerkrijgerNumber = 1; // Reset to default

        allHeadings.forEach(heading => {
            if (heading.textContent.includes('Verkrijger')) {
                const match = heading.textContent.match(/\d+/);
                if (match) {
                    const num = parseInt(match[0]);
                    if (num > highestVerkrijgerNumber) {
                        highestVerkrijgerNumber = num;
                    }
                }
            }
        });

        console.log("Highest verkrijger number:", highestVerkrijgerNumber);
    }

    // Function to renumber all verkrijger sections sequentially
    function renumberVerkrijgerSections() {
        const allSections = document.querySelectorAll('section');
        let counter = 1;

        allSections.forEach(section => {
            const heading = section.querySelector('h2');
            if (heading && heading.textContent.includes('Verkrijger')) {
                // Update heading text
                heading.textContent = `Verkrijger ${counter}`;

                // Get parent div for this section
                const parentDiv = section.closest('div');

                // Update IDs and names in inputs
                const inputs = parentDiv.querySelectorAll('input');
                inputs.forEach(input => {
                    // Update ID
                    if (input.id && input.id.match(/\d+/)) {
                        input.id = input.id.replace(/\d+/, counter);
                    }

                    // Update name
                    if (input.name && input.name.match(/\d+/)) {
                        input.name = input.name.replace(/\d+/, counter);
                    }
                });

                // Update for labels
                const labels = parentDiv.querySelectorAll('label');
                labels.forEach(label => {
                    // Update for attribute if it exists
                    if (label.getAttribute('for') && label.getAttribute('for').match(/\d+/)) {
                        label.setAttribute('for', label.getAttribute('for').replace(/\d+/, counter));
                    }
                });

                counter++;
            }
        });

        // Update highest number
        highestVerkrijgerNumber = counter - 1;
        console.log("Renumbered sections. New highest number:", highestVerkrijgerNumber);
    }

    // Function to handle the add button click
    function handleAddClick(event) {
        // Check if "alleen" radio is checked
        if (document.getElementById('alleen') && document.getElementById('alleen').checked) {
            console.log("Cannot add more sections when 'alleen' is selected");
            return; // Don't add any sections
        }

        // Update the highest number first
        updateHighestNumber();

        // New number will be one more than the current highest
        const newNumber = highestVerkrijgerNumber + 1;

        // Create the HTML for the new verkrijger section with the new number
        const newHtml = `
        <div>
            <section>
                <h2>Verkrijger ${newNumber}</h2>
                <div>
                    <button type="button" class="add-button">+</button>
                    <button type="button" class="remove-button">-</button>
                </div>
            </section>
            <!-- 2 -->
            <fieldset class="three-a--row-two">
                <span class="left-short">
                    <legend class="blue-text">Naam</legend>
                </span>
                <div>
                    <label for="voornaam-${newNumber}">Voornaam
                        <input type="text" id="voornaam-${newNumber}" name="voornaam-${newNumber}" title="Alleen letters gebruiken"
                            maxlength="50" placeholder="e.g. David" required>
                    </label>
                    <label for="tussenvoegsels-${newNumber}">Tussenvoegsels
                        <input type="text" id="tussenvoegsels-${newNumber}" name="tussenvoegsels-${newNumber}"
                            title="Alleen letters gebruiken" maxlength="50" placeholder="e.g. van den">
                    </label>
                    <label for="achternaam-${newNumber}">Achternaam
                        <input type="text" id="achternaam-${newNumber}" name="achternaam-${newNumber}"
                            title="Alleen letters gebruiken" maxlength="50" placeholder="e.g. Bijl"
                            required>
                    </label>
                </div>
            </fieldset>
  
            <!-- 3 -->
            <div class="three-a--row-three">
                <span class="left-short">
                    <label for="bsn-verkrijger-${newNumber}" class="blue-text">Burgerservicenummer overledene</label>
                </span>
                <input class="short-input" id="bsn-verkrijger-${newNumber}" type="text" name="bsn-${newNumber}"
                    title="Alleen nummers gebruiken" placeholder="101234567" pattern="[1-9][0-9]{8}"
                    required>
            </div>
  
            <fieldset class="three-a--row-four">
                <span class="left-long">
                    <legend class="blue-text">Krijgt deze verkrijger waarvoor u geen aangifte doet het hele
                        vermogen?
                    </legend>
                </span>
                <div>
                    <label>
                        <input type="radio" name="verkrijger vermogen-${newNumber}" value="nee" required>
                        Nee
                    </label>
                    <label>
                        <input type="radio" name="verkrijger vermogen-${newNumber}" value="ja">
                        Ja
                    </label>
                </div>
            </fieldset>
  
            <fieldset class="three-a--row-five">
                <span class="left-long">
                    <legend class="blue-text">Doet deze verkrijger een beroep op diens legitieme portie
                        (wettelijke erfdeel)?
                    </legend>
                </span>
                <div>
                    <label>
                        <input type="radio" name="beroep op portie-${newNumber}" value="nee" required>
                        Nee
                    </label>
                    <label>
                        <input type="radio" name="beroep op portie-${newNumber}" value="ja">
                        Ja
                    </label>
                </div>
            </fieldset>
        </div>
      `;

        // Find the parent container
        const parentContainer = document.querySelector('section h2')
            .closest('div').parentNode;

        // Create a container for the new HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = newHtml;

        // Insert the new content
        parentContainer.appendChild(tempContainer.firstElementChild);

        // Update event listeners
        removeAllEventListeners();
        setupButtonListeners();
        updateButtonStates();

        console.log(`Added Verkrijger ${newNumber} section`);
    }

    // Function to handle the remove button click
    function handleRemoveClick(event) {
        // Find the section containing this button
        const section = event.target.closest('section');
        const heading = section.querySelector('h2');

        // Find the parent container and remove it
        const parentContainer = section.closest('div');
        parentContainer.remove();
        console.log(`Removed ${heading.textContent} section`);

        // Renumber remaining sections
        renumberVerkrijgerSections();

        // Update button states
        updateButtonStates();
    }

    // Function to remove all but the first verkrijger section
    function removeAllExtraVerkrijgerSections() {
        // Find all verkrijger sections
        const allSections = document.querySelectorAll('section h2');
        const sectionsToRemove = [];

        // Get all sections except the first one
        let foundFirst = false;
        allSections.forEach(heading => {
            if (heading.textContent.includes('Verkrijger')) {
                if (!foundFirst) {
                    foundFirst = true;
                } else {
                    // Add to removal list
                    sectionsToRemove.push(heading.closest('section'));
                }
            }
        });

        // Remove all sections in the removal list
        sectionsToRemove.forEach(section => {
            const parentContainer = section.closest('div');
            if (parentContainer) {
                parentContainer.remove();
                console.log(`Removed extra section for 'alleen' mode`);
            }
        });

        // Renumber the remaining section (should be just one)
        renumberVerkrijgerSections();
    }

    // Function to update button states based on current conditions
    function updateButtonStates() {
        const allSections = document.querySelectorAll('section h2');
        const addButtons = document.querySelectorAll('.add-button');
        const removeButtons = document.querySelectorAll('.remove-button');

        // Check if "alleen" radio is checked
        const alleenRadio = document.getElementById('alleen');
        const isAlleenMode = alleenRadio && alleenRadio.checked;

        // Handle remove buttons
        if (allSections.length <= 1 || isAlleenMode) {
            // Disable all remove buttons if there's only one section or in "alleen" mode
            removeButtons.forEach(button => {
                button.setAttribute('disabled', 'disabled');
            });
        } else {
            // Enable all remove buttons if there are multiple sections and not in "alleen" mode
            removeButtons.forEach(button => {
                button.removeAttribute('disabled');
            });
        }

        // Handle add buttons
        if (isAlleenMode) {
            // Disable all add buttons in "alleen" mode
            addButtons.forEach(button => {
                button.setAttribute('disabled', 'disabled');
            });
        } else {
            // Enable all add buttons if not in "alleen" mode
            addButtons.forEach(button => {
                button.removeAttribute('disabled');
            });
        }
    }

    // Remove all event listeners to prevent duplicates
    function removeAllEventListeners() {
        const addButtons = document.querySelectorAll('.add-button');
        const removeButtons = document.querySelectorAll('.remove-button');

        // Create new buttons to replace old ones (easiest way to remove all listeners)
        addButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });

        removeButtons.forEach(button => {
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
    }

    // Function to set up button listeners
    function setupButtonListeners() {
        // Add class names to buttons if they don't have them already
        document.querySelectorAll('section').forEach(section => {
            if (section.querySelector('h2') && section.querySelector('h2').textContent.includes('Verkrijger')) {
                const buttons = section.querySelectorAll('button');
                if (buttons.length >= 2) {
                    if (!buttons[0].classList.contains('add-button')) {
                        buttons[0].classList.add('add-button');
                    }
                    if (!buttons[1].classList.contains('remove-button')) {
                        buttons[1].classList.add('remove-button');
                    }
                }
            }
        });

        // Add event listeners to all add buttons
        document.querySelectorAll('.add-button').forEach(button => {
            button.addEventListener('click', handleAddClick);
        });

        // Add event listeners to all remove buttons
        document.querySelectorAll('.remove-button').forEach(button => {
            button.addEventListener('click', handleRemoveClick);
        });
    }

    // Set up event listener for the "alleen" radio button
    function setupAlleenListener() {
        const alleenRadio = document.getElementById('alleen');
        if (alleenRadio) {
            alleenRadio.addEventListener('change', function () {
                if (this.checked) {
                    console.log("'Alleen' radio selected - removing extra sections and disabling buttons");
                    removeAllExtraVerkrijgerSections();
                    updateButtonStates();
                }
            });

            // Also set up listeners for other radio buttons in the same group
            const radioGroup = document.querySelectorAll('input[name="' + alleenRadio.name + '"]');
            radioGroup.forEach(radio => {
                if (radio.id !== 'alleen') {
                    radio.addEventListener('change', function () {
                        if (this.checked) {
                            console.log("Other radio selected - enabling buttons");
                            updateButtonStates();
                        }
                    });
                }
            });
        }
    }

    // Initialize everything
    updateHighestNumber();
    setupButtonListeners();
    setupAlleenListener();
    updateButtonStates();
});