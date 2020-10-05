const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
function sendFormHandler() {
    const formElements = document.getElementById('contacts-form').elements;
    const emailData = {};
    let isInvalid = false;
    for(let i = 0 ; i < formElements.length ; i++){
        const item = formElements.item(i);

        if (!item.value && item.classList.contains('required') || item.name === 'phone' && !phoneReg.test(item.value)) {
            isInvalid = true;
        }

        if (item.name) {
            emailData[item.name] = item.value;
        }
    }

    if (!isInvalid) {
        $('#contacts-form-modal').modal('hide');
        sendEmail(emailData);
        cleanInputs(formElements);
    }
}

function cleanInputs(inputs) {
    for(let i = 0 ; i < inputs.length ; i++){
        inputs.item(i).value = '';
    }
}

document.addEventListener('DOMContentLoaded', loadHandler);

function loadHandler() {
    const inputs = document.querySelectorAll('input.input.required');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.addEventListener('blur', () => {

            if (!input.value || input.name === 'phone' && !phoneReg.test(input.value)) {
                input.classList.add('invalid');
            }
        });

        input.addEventListener('focus', () => {
            if (input.classList.contains('invalid')) {
                input.classList.remove('invalid');
            }
        });
    }


    const links = document.querySelectorAll("a");

    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    document.removeEventListener('DOMContentLoaded', loadHandler);
}
