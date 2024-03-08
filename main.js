const input = document.querySelector('input[type="text"]');
const myForm = document.querySelector('form');

const pattern = {
    email: /^([a-z\d-\.]+)@([a-z\d]{3,20})\.([a-z\d]{2,20})$/i,
};

function validate (field, regex) {
    let parentDiv = field.parentElement;
    let para = parentDiv.querySelector('p');

    if(regex.test(field.value)) {
        field.style.border = '2px solid green';
        para.style.display = 'none';
    } else {
        field.style.border = '2px solid red';
        para.style.display = 'block';
    };

}

input.addEventListener('keyup', (e) => {
    validate(e.target, pattern[e.target.name]);
});

function submitForm(e) {
    e.preventDefault();
    submitBtn.click(); // stimulate click 
}

const submitBtn = myForm.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', submitForm);