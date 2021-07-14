function consulta_cep() {
    $(".barra-progresso").show();
    // . é para classe, enquanto # é para id
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);

            // com jQuery
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show(); // mostra a classe cep
            $(".barra-progresso").hide();
            /*
            // com JavaScript
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            */
        }
    });
}

$(function() {
    $(".cep").hide(); // esconde a classe cep
    $(".barra-progresso").hide();
});