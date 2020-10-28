const form = document.getElementById('form')

const name = document.getElementById('name')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zip = document.getElementById('zip')
const pass = document.getElementById('pass')
const passConfirm = document.getElementById('pass-confirm')

const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const countryError = document.getElementById('country-error')
const zipError = document.getElementById('zip-error')
const passError = document.getElementById('pass-error')
const passConfirmError = document.getElementById('pass-confirm-error')

name.addEventListener('input', event => {
    if (name.validity.valid) {
        nameError.innerHTML = ''
        nameError.className = 'error'
    } else {
        showNameError()
    }
})

email.addEventListener('input', event => {
    if (email.validity.valid) {
        emailError.innerHTML = ''
        emailError.className = 'error'
    } else {
        showEmailError()
    }
})

country.addEventListener('input', event => {
    if (country.validity.valid) {
        countryError.innerHTML = ''
        countryError.className = 'error'
    } else {
        showCountryError()
    }
})

zip.addEventListener('input', event => {
    if (zip.validity.valid) {
        zipError.innerHTML = ''
        zipError.className = 'error'
    } else {
        showZipError()
    }
})

pass.addEventListener('input', event => {
    if (pass.validity.valid) {
        passError.innerHTML = ''
        passError.className = 'error'
    } else {
        showPassError()
    }
})

passConfirm.addEventListener('input', event => {
    if (passConfirm.value === pass.value) {
        passConfirmError.innerHTML = ''
        passConfirmError.className = 'error'
    } else {
        showPassConfirmError()
    }
})

form.addEventListener('submit', event => {
    if (!name.validity.valid) {
        showNameError()
        event.preventDefault()
    }

    if (!email.validity.valid) {
        showEmailError()
        event.preventDefault()
    }

    if (!country.validity.valid) {
        showCountryError()
        event.preventDefault()
    }

    if (!zip.validity.valid) {
        showZipError()
        event.preventDefault()
    }

    if (!pass.validity.valid) {
        showPassError()
        event.preventDefault()
    }

    if (!passConfirm.validity.valid) {
        showPassConfirmError()
        event.preventDefault()
    }
})

const showNameError = () => {
    if (name.validity.valueMissing) {
        nameError.innerText = 'Please enter your full name.'
        nameError.className = 'error active'
    }
}

const showEmailError = () => {
    if (email.validity.valueMissing) {
        emailError.innerText = 'Please enter email address.'
        emailError.className = 'error active'
    } else if (email.validity.typeMismatch) {
        emailError.innerText = 'The email address must include @.'
        emailError.className = 'error active'
    } else if (email.validity.tooShort) {
        emailError.innerText = `Email should be at least ${email.minLength} characters. You've entered ${email.value.length} characters.`
        emailError.className = 'error active'
    }
}

const showCountryError = () => {
    if (country.validity.valueMissing) {
        countryError.innerText = 'Please enter country.'
        countryError.className = 'error active'
    }
}

const showZipError = () => {
    if (zip.validity.valueMissing) {
        zipError.innerText = 'Please enter zip code.'
        zipError.className = 'error active'
    } else if (zip.validity.patternMismatch) {
        zipError.innerText = 'Zip code should include exactly 5 numbers.'
        zipError.className = 'error active'
    }
}

const showPassError = () => {
    if (pass.validity.valueMissing) {
        passError.innerText = 'Please enter a new password.'
        passError.className = 'error active'
    } else if (pass.validity.patternMismatch) {
        const uLett = /[A-Z]/g
        const lLett = /[a-z]/g
        const num = /[0-9]/g
        const spChar = /[#?!@$%^&*-]/g

        passError.innerHTML = ''

        if (!uLett.test(pass.value)) {
            const li = document.createElement('li')
            li.innerText = 'Must contain 1 uppercase letter'
            passError.append(li)
            passError.className = 'error active'
        }

        if (!lLett.test(pass.value)) {
            const li = document.createElement('li')
            li.innerText = 'Must contain 1 lowercase letter'
            passError.append(li)
            passError.className = 'error active'
        }

        if (!num.test(pass.value)) {
            const li = document.createElement('li')
            li.innerText = 'Must contain 1 number'
            passError.append(li)
            passError.className = 'error active'
        }

        if (!spChar.test(pass.value)) {
            const li = document.createElement('li')
            li.innerText = 'Must contain 1 special character'
            passError.append(li)
            passError.className = 'error active'
        }
        
        if (pass.value.length < pass.minLength) {
            const li = document.createElement('li')
            li.innerText = `Password must be longer than ${pass.minLength}`
            passError.append(li)
            passError.className = 'error active'
        }        
    }
}

const showPassConfirmError = () => {
    if (passConfirm.validity.valueMissing) {
        passConfirmError.innerText = 'Please reenter your password'
        passConfirmError.className = 'error active'
    } else if (passConfirm.value != pass.value) {
        passConfirmError.innerText = 'Passwords don\'t match'
        passConfirmError.className = 'error active'
    }
}