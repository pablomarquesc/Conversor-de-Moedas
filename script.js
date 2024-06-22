// API que busca os valores das moedas
let api = `https://v6.exchangerate-api.com/v6/677f9238ca2a651933c0f29c/latest/USD`;



moedas = [
    "BRL",
    "USD",
    "EUR",
    "JPY",
    "ARS"
    ];


const fromDropDown = document.getElementById
("da-moeda");
const toDropDown = document.getElementById("para-moeda");


//criando dropdown com as moedas
moedas.forEach((moedas) => {
    const option = document.createElement("option");
    option.value = moedas;
    option.text = moedas;
    fromDropDown.add(option);
});

//repetindo o dropdown para a moeda a converter
moedas.forEach((moedas) => {
    const option = document.createElement("option");
    option.Value = moedas;
    option.text = moedas;
    toDropDown.add(option);
});


fromDropDown.Value = "BRL";
toDropDown.Value = "USD";

let convertMoedas = () => {
    //Create References
    const valor = document.querySelector("#valor").value;
    const daMoedas = fromDropDown.value;
    const paraMoedas = toDropDown.value;

    //verificando se o valor foi preenchido
    if (valor.length != 0) {
        fetch(api)
          .then((resp) => resp.json())
          .then((data) => {
            let doValor = data.conversion_rates[daMoedas];
            let paraValor = data.conversion_rates[paraMoedas];
            const valorConvertido = (valor / doValor) * paraValor;
            result.innerHTML = `${valor} ${daMoedas} = ${valorConvertido.toFixed(
              2
            )} ${paraMoedas}`;
          });
    }else{
        alert("Por favor preencha o valor.");
    }
};

document
.querySelector("#botao-converter")
.addEventListener("click", convertMoedas);
window.addEventListener("load", convertMoedas);