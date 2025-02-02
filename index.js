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

// function to handle registration functionality declared here
function register() {
    const fullNameInput = document.getElementById('reg-full-name')
    const emailInput = document.getElementById('reg-email')
    const passwordInput = document.getElementById('reg-password')

    if (!fullNameInput.value) {
        alert('Please, enter your full name!!')
        return
    }

    if (!emailInput.value) {
        alert('Please, enter your email!!')
        return
    }

    if (!passwordInput.value) {
        alert('Please, enter your password!!')
        return
    }

    const user = { fullName: fullNameInput.value, email: emailInput.value, password: passwordInput.value }

    localStorage.setItem(emailInput.value, JSON.stringify(user))

    alert('Registration successful!! You can now login to your account...')

    fullNameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''

    showForm('login')
}