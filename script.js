const button = document.getElementById("convertButton");
const select = document.getElementById("currencyTo")

const realValueText = document.getElementById("real-value-text");
const convertValueText = document.getElementById("convert-value-text");

const dolar = 5.2;
const euro = 5.9;
const bitcoin = 104828.06
const coin = ''

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const flag = document.getElementById('flag')
    
    if (select.value == 'euro') {
        currencyName.innerHTML = "Euro"
        flag.src = 'assets/eur.png'

    } else if (select.value == 'bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        flag.src = 'assets/bitcoin.png'

    } else if (select.value == 'dolar') {
        currencyName.innerHTML = "Dólar"
        flag.src = 'assets/usa.png'
    }

    convertValues()
}

const convertValues = () => {
    const amount = document.getElementById("amount").value;

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
    ).format(amount);

    if (select.value == 'dolar') {
        const amountConverted = amount / dolar;

        convertValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
        ).format(amountConverted);

    } else if (select.value == 'euro') {
        const amountConverted = amount / euro;

        convertValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: 'EUR',
        }).format(amountConverted);

    } else if (select.value == 'bitcoin') {
        const amountConverted = amount / bitcoin;

        convertValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: 'BTC',
        }).format(amountConverted);
    }
};

select.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)
