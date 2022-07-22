let a = prompt('Как вас зовут?')
let name = 'Alex'
let money = 10000
let account = '7777'
if (a === name) {
    let b = prompt('Номер счета?')
    if (b === account) {
        let c = prompt('Сколько обналичить?')
        if ( c <= money) {
            let sms = 'Всё отлично, ваш баланс:'
            let balanc = money - c
            let we = sms + ` ` + balanc
            alert(we)
        } else {
            alert('Недостаточно средств!')
        }
    } else {
        alert('Неправильно!')
    }
} else {
    alert('Пользователь не найден')
}



