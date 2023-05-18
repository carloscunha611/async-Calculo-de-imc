async function imc(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number')
    return Promise.reject('--Arguments must be of type number!--')
  return (weight / height ** 2).toFixed(2)
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para o peso ${weight} e altura ${height}...`)

    const result = await imc(weight, height)
    console.log(`O resultado do IMC foi de ${result}.`)

    if (result < 18.5) console.log('Situação: Magreza.')
    else if (result < 25) console.log('Situação: Normal.')
    else if (result < 30) console.log('Situação: Sobrepeso.')
    else if (result < 40) console.log('Situação: Obesidade.')
    else console.log('Situação: Obesidade grave.')
  } catch (error) {
    console.log(error)
  }
}

showImc(75, 'asd')
showImc(45, 1.68)
showImc(80, 1.9)
showImc(80, 1.7)
showImc(100, 1.5)
