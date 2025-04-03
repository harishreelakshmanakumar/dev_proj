const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



registerLink.addEventListener('click',()=>{
wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click',()=>{
        wrapper.classList.add('active-popup');
        });
        iconClose.addEventListener('click',()=>{
            wrapper.classList.remove('active-popup');
            });

// Add this code to your script.js file

const registrationForm = document.querySelector('#username'); // Update the selector to match the id

registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(registrationForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    try {
        const response = await fetch('/register', {  // Use the relative URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        });
        

        if (response.ok) {
            const data = await response.json();
            console.log(data.message); // User registered successfully
        } else {
            console.error('Registration failed');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});
