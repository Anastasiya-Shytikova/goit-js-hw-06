const formRef = document.querySelector('.login-form');

function onHandleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget
    if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
        return alert('Все поля должны форм быть заполнены')
    } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
    }
}
formRef.addEventListener('submit', onHandleSubmit);