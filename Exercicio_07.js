let multa = {
    date: new Date(),
    valorMulta: 500
}

function multaInfracao(multa) {
    let multaInfracao = {
        datePagamento: addDays(multa.date,90),
        desconto: multa.valorMulta * 0.8
    }
    return JSON.stringify(multaInfracao)
}

function addDays(data, dias) {
    const dataFinal = new Date(Number(data))
    dataFinal.setDate(date.getDate() + dias)
    return dataFinal
  }

  let carro = {
    marca: "Mustang",
    modelo: "ToGunner",
    anoFabricacao: Date.now(),
    precoVenda: 450000.00
}

function CalculaPrecoVista(carro) {
    return carro.precoVenda * 0.95;
}

function CalculaPrecoPrazo(carro) {
    let precoPrazo = {
        entrada: carro.precoVenda/2,
        parcela: carro.precoVenda/24,
        quantidadeParcela: 12
    }
    return JSON.stringify(precoPrazo)
}
