const button = document.querySelector('.button');
const form = document.querySelector('form');
const conteudo = document.querySelector('.conteudo');
const input_email = document.querySelector('#email')
const input_senha = document.querySelector('#senha');
const error_messages = document.querySelectorAll('.error_message');
const checkbox = document.querySelector('#check');
const box_error_checkbox = document.querySelector('#box_error_checkbox');

form.addEventListener('submit', (e) => {    
    resetError();

    if (valida()) {
        form.submit();
    } else {
        e.preventDefault();
    }
})

function valida() {
    const email = input_email.value.trim();
    const senha = input_senha.value.trim();
    let valid = true;

    if (email === '') {
        mostraErro(input_email, 'E-mail não pode ficar em branco.')
        valid = false;
    } else if (!isValid(email)) {
        mostraErro(input_email, 'E-mail inválido.')
        valid = false;
    }

    if (senha === '') {
        mostraErro(input_senha, 'Senha não pode ficar em branco.')
        valid = false;
    } else if (senha.length < 8 || senha.length > 12) {
        mostraErro(input_senha, 'Senha precisa ter entre 8 ou 12 caracteres.')
        valid = false;
    }

    if (!checkbox.checked) {
        mostraErro(box_error_checkbox, 'Por favor, aceite os Termos de Política e Privacidade para prosseguir.')
        valid = false;
    }

    return valid;

}

function mostraErro(input, msg_error) {
    const msg = input.nextElementSibling;
    msg.innerText = msg_error;
    input.parentElement.classList.add('error')
}

function resetError() {
    error_messages.forEach((error_message) => {
        error_message.innerText = ''
    })
    input_email.parentElement.classList.remove('error');
    input_senha.parentElement.classList.remove('error');
}

function isValid(value_email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value_email);
}