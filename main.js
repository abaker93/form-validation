const formSubmit = document.getElementById('form-submit')
const userName = document.getElementById('user-name')
const modal = document.getElementById('form-submit-modal')

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

name.addEventListener('input', () => {
    userName.innerText = name.value

    if (name.validity.valid) {
        nameError.innerHTML = ''
        nameError.className = 'error'
        name.parentElement.className = 'valid-input'
    } else {
        showNameError()
        name.parentElement.className = 'error-input'
    }
})

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.innerHTML = ''
        emailError.className = 'error'
        email.parentElement.className = 'valid-input'
    } else {
        showEmailError()
        email.parentElement.className = 'error-input'
    }
})

country.addEventListener('input', () => {
    if (country.validity.valid) {
        countryError.innerHTML = ''
        countryError.className = 'error'
        country.parentElement.className = 'valid-input'
    } else {
        showCountryError()
        country.parentElement.className = 'error-input'
    }
})

zip.addEventListener('input', () => {
    if (zip.validity.valid) {
        zipError.innerHTML = ''
        zipError.className = 'error'
        zip.parentElement.className = 'valid-input'
    } else {
        showZipError()
        zip.parentElement.className = 'error-input'
    }
})

pass.addEventListener('input', () => {
    if (pass.validity.valid) {
        passError.innerHTML = ''
        passError.className = 'error'
        pass.parentElement.className = 'valid-input'
    } else {
        showPassError()
        pass.parentElement.className = 'error-input'
    }

    if (passConfirm.value === pass.value) {
        passConfirmError.innerHTML = ''
        passConfirmError.className = 'error'
        passConfirm.parentElement.className = 'valid-input'
    } else {
        showPassConfirmError()
        passConfirm.parentElement.className = 'error-input'
    }
})

passConfirm.addEventListener('input', () => {
    if (passConfirm.value === pass.value) {
        passConfirmError.innerHTML = ''
        passConfirmError.className = 'error'
        passConfirm.parentElement.className = 'valid-input'
    } else {
        showPassConfirmError()
        passConfirm.parentElement.className = 'error-input'
    }
})

formSubmit.addEventListener('click', () => {
    if (!name.validity.valid) {
        showNameError()
        name.parentElement.className = 'error-input'
    }

    if (!email.validity.valid) {
        showEmailError()
        email.parentElement.className = 'error-input'
    }

    if (!country.validity.valid) {
        showCountryError()
        country.parentElement.className = 'error-input'
    }

    if (!zip.validity.valid) {
        showZipError()
        zip.parentElement.className = 'error-input'
    }

    if (!pass.validity.valid) {
        showPassError()
        pass.parentElement.className = 'error-input'
    }

    if (!passConfirm.validity.valid) {
        showPassConfirmError()
        passConfirm.parentElement.className = 'error-input'
    }

    if (name.validity.valid && email.validity.valid && country.validity.valid && zip.validity.valid && pass.validity.valid && passConfirm.validity.valid) {
        console.log('it worked!')
        modal.classList.add('show')
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

const highFiveAni = () => {
    const img = document.getElementById('high-five-img')
    const btn = document.getElementById('high-five-btn')

    img.classList.add('animation')
    btn.classList.add('disabled')

    const removeClass = () => {
        img.classList.remove('animation')
        btn.classList.remove('disabled')
    }
    
    setTimeout(removeClass, 1000)
}

document.getElementById('modal-close-btn').addEventListener('click', () => {
    modal.classList.remove('show')
})