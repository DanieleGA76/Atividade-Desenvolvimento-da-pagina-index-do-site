//efeito de esconder formulário de cadastro
$(document).ready(function(){
    $("botao-cadastrar").click(function(){
        $("form-cadastrar").sideTogle("Slow");
        $("#section-login").slideTogle("Slow");
        $("#botao-cadastrar").hide();
    })
})