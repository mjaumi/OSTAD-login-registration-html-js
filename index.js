// function to show login/registration form based on button click declared here
function showForm(formType) {
    // adding display none class as default here
    document.getElementById('registration-form').classList.add('d-none')
    document.getElementById('login-form').classList.add('d-none')

    // showing forms based on types here
    if (formType === 'login') {
        document.getElementById('login-form').classList.remove('d-none')
    } else if (formType === 'registration') {
        document.getElementById('registration-form').classList.remove('d-none')
    }
}