/*$("#btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })


})*/
/* NA HORA DE DIGITAR O CEP COMPLENTAR OS RESTANTES AUTOMATICAMENTE
document.querySelector('#cep').addEventListener('blur', async (event) => {

    //capturando valor do campo cep e armazenando na variável cep
    let cep = document.querySelector('#cep').value;

    //
    let results = await fetch(`http://viacep.com.br/ws/${cep}/json/`);


    //verifica se a resposta obtida do fetch foi concluída que no caso seria 200
    if (results.status === 200) {

        //convertendo os resultados para json
        let json = await results.json();
        showCep(json)
    
    }
  
}); */

//VALIDAR 
document.querySelector('#cep').addEventListener('blur', async (event) => {

    //capturando valor do campo cep e armazenando na variável cep
    let cep = document.querySelector('#cep').value;

    //
    let results = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    //convertendo os resultados para json
    let json = await results.json();

    //verifica se a resposta obtida do fetch foi concluída que no caso seria 200
    if (json.erro != true) {
        showCep(json)

    } else if (json.erro === true) {
        alert('Cep inválido')
    }

});


function showCep(json) {
    document.querySelector('#uf').value = `${json.uf}`;
    document.querySelector('#cidade').value = `${json.localidade}`;
    document.querySelector('#logradouro').value = `${json.logradouro}`;
    document.querySelector('#bairro').value = `${json.bairro}`;

}






