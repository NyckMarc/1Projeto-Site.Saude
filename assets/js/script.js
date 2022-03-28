const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18.5) {
            classification = 'MAGREZA'
        } else if (imc >= 18.5 && imc < 25) {
            classification = 'NORMAL'
        } else if (imc >= 25 && imc < 30) {
            classification = 'SOBREPESO'
        } else if (imc >= 30 && imc < 40) {
            classification = 'OBESIDADE'
        } else {
            classification = 'Obesidade Grave'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else {
        resultado.innerHTML = 'Preencha os campos'
    }
}