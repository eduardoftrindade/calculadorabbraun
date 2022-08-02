document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btn = document.querySelector("#calcular");
        btn.click();
    }
});

function calculo() {
    var qtd_programada = document.getElementById("qtd-programada").value;
    var qtd_produzida = document.getElementById("qtd-produzida").value;
    var volume_selecionado = document.querySelector(
        "input[name='volume']:checked"
    ).value;

    if (qtd_programada == "" || qtd_produzida == "") {
        var result = "Por favor, digite as quantidades acima.";
        document.getElementById("qtd-programada").focus();
        return result;
    }

    if (volume_selecionado == "100") {
        var qtd_por_carro = 1904;
        var minutos_por_carro = 29;
    } else if (volume_selecionado == "250") {
        qtd_por_carro = 1372;
        minutos_por_carro = 38;
    } else if (volume_selecionado == "500") {
        qtd_por_carro = 936;
        minutos_por_carro = 19;
    } else if (volume_selecionado == "1000") {
        qtd_por_carro = 550;
        minutos_por_carro = 18;
    } else {
        alert("Você precisa escolher um volume!");
    }

    var qtd_restante = qtd_programada - qtd_produzida;
    var carros_restantes = qtd_restante / qtd_por_carro;
    var minutos_restantes = carros_restantes * minutos_por_carro;

    if (minutos_restantes > 60) {
        var horas = (minutos_restantes / 60) | 0;
        var minutos = minutos_restantes % 60;

        result =
            "Faltam, aproximadamente, " +
            horas +
            " horas e " +
            Math.floor(minutos) +
            " minutos para o fim da solução.";
    } else {
        result =
            "Faltam, aproximadamente, " +
            Math.floor(minutos_restantes) +
            " minutos para o fim da solução.";
    }

    return result;
}
