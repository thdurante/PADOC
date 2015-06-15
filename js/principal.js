// VARIÁVEIS GLOBAIS
var GLOBAL_requestResponse;
var GLOBAL_left;
var GLOBAL_right;

// INICIALIZAÇÃO BÁSICA PARA TESTES
var usuario = "fabio@inf.ufg.br";
var senha = "123tetinha";
var siape = "6302300";
var inicioPeriodo1 = "01/01/1992";
var fimPeriodo1 = "31/12/2009";
var inicioPeriodo2 = "01/01/2010";
var fimPeriodo2 = "31/12/2014";

// CONTADOR DE PERIODOS
var cont_periodos = 0;

// CONTADOR DE REGISTROS DE CADA TABELA
var cont_dadosDoDocente = 0;
var cont_afastamento = 0;
var cont_atividadesDeEnsino = {};
var cont_atividadesDeOrientacao = {};
var cont_atividadesEmProjetos = {};
var cont_atividadesDeExtensao = {};
var cont_atividadesDeQualificacao = {};
var cont_atividadesAcademicasEspeciais = {};
var cont_atividadesAdministrativas = {};
var cont_produtos = {};

// ------------------------- EDIÇÃO
var arr_TR_linhasOriginais = []; // recebe as tr
var arr_TR_linhasAlteradas = []; // recebe as tr
var mapAux = {};

// ------------------------- ADIÇÃO
var arr_ID_linhasAdicionadas = []; // recebe as id

// ------------------------- REMOÇÃO
var arr_TR_linhasRemovidas = []; // recebe as tr


// DADOS INICIAIS RECUPERADOS DE INDEX
// console.log("Tamanho do sessionStorage: " +sessionStorage.length);
// console.log("Nome do professor: " +sessionStorage.getItem("professor"));
// console.log("Data Inicio: " +sessionStorage.getItem("dataInicio"));
// console.log("Data Fim: " +sessionStorage.getItem("dataFim"));

function removeLinha(linha){
    document.getElementById(linha).className = "removida";
    arr_TR_linhasRemovidas.push(document.getElementById(linha));
    document.getElementById(linha).remove();
}

function insereLinhaAtividadeDeEnsino_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesDeEnsino-linha" +cont_atividadesDeEnsino['"periodo-' +periodo +'"'] +"-periodo" +periodo;
    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');

    // incrementa o contador de atividades de ensino
    cont_atividadesDeEnsino['"periodo-' +periodo +'"'] = cont_atividadesDeEnsino['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaAtividadeDeOrientacao_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesDeOrientacao-linha" +cont_atividadesDeOrientacao['"periodo-' +periodo +'"'] +"-periodo" +periodo;
    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');

    // incrementa o contador de atividades de ensino
    cont_atividadesDeOrientacao['"periodo-' +periodo +'"'] = cont_atividadesDeOrientacao['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaAtividadeEmProjeto_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesEmProjetos-linha" +cont_atividadesEmProjetos['"periodo-' +periodo +'"'] +"-periodo" +periodo;

    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');

    // incrementa o contador de atividades de ensino
    cont_atividadesEmProjetos['"periodo-' +periodo +'"'] = cont_atividadesEmProjetos['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaAtividadeDeExtensao_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesDeExtensao-linha" +cont_atividadesDeExtensao['"periodo-' +periodo +'"'] +"-periodo" +periodo;

    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');

    // incrementa o contador de atividades de ensino
    cont_atividadesDeExtensao['"periodo-' +periodo +'"'] = cont_atividadesDeExtensao['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaAtividadeDeQualificacao_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesDeQualificacao-linha" +cont_atividadesDeQualificacao['"periodo-' +periodo +'"'] +"-periodo" +periodo;

    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');


    // incrementa o contador de atividades de ensino
    cont_atividadesDeQualificacao['"periodo-' +periodo +'"'] = cont_atividadesDeQualificacao['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaAtividadeAcademicaEspecial_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesAcademicasEspeciais-linha" +cont_atividadesAcademicasEspeciais['"periodo-' +periodo +'"'] +"-periodo" +periodo;

    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');


    // incrementa o contador de atividades de ensino
    cont_atividadesAcademicasEspeciais['"periodo-' +periodo +'"'] = cont_atividadesAcademicasEspeciais['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaAtividadeAdministrativa_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "atividadesAdministrativas-linha" +cont_atividadesAdministrativas['"periodo-' +periodo +'"'] +"-periodo" +periodo;

    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');


    // incrementa o contador de atividades de ensino
    cont_atividadesAdministrativas['"periodo-' +periodo +'"'] = cont_atividadesAdministrativas['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function insereLinhaProduto_generic(idTabela){

    var periodo = idTabela.charAt(idTabela.length-1);
    var idTr = "produtos-linha" +cont_produtos['"periodo-' +periodo +'"'] +"-periodo" +periodo;

    $('#'+idTabela+'').append('<tr id="' +idTr +'" class="adicionada"><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div></td><td><div contenteditable="true">000</div><td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'' +idTr +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>');


    // incrementa o contador de atividades de ensino
    cont_produtos['"periodo-' +periodo +'"'] = cont_produtos['"periodo-' +periodo +'"'] + 1;

    // visual
    var trChildNodes = document.getElementById(idTr).childNodes;
    for(var t=0; t<trChildNodes.length-1; t++) {
        document.getElementById(idTr).childNodes.item(t).childNodes.item(0).setAttribute("style", "background-color: #FDFFDA;");
    }
}

function imprimeInformacoesDocente(){
    var retorno = "";
    retorno += '<li><a href="#"><i class="fa fa-fw fa-user"></i> ';
    retorno += usuario;
    retorno += ' - SIAPE: ';
    retorno += siape;
    /*retorno += '  [';
    retorno += inicioPeriodo1;
    retorno += ' - ';
    retorno += fimPeriodo1;
    retorno += ']';
    retorno += '  [';
    retorno += inicioPeriodo2;
    retorno += ' - ';
    retorno += fimPeriodo2;
    retorno += ']';*/
    retorno += '</a></li>';

    $("#navbarTopRight").append(retorno);


    /*if(sessionStorage.length === 3){
        console.log("entrou no if");
        var append = '<li><a href="#"><i class="fa fa-fw fa-user"></i> ';
        append += sessionStorage.getItem("professor");
        append += '   [';
        append += sessionStorage.getItem("dataInicio");
        append += ' - ';
        append += sessionStorage.getItem("dataFim");
        append += ']</a></li>';

        $("#navbarTopRight").append(append);
    }*/
}

function carregaJsonEntrada(){
    $.ajax({
        type: "POST",
        url: "json/entradaJson.json",
        data: {
            parametrosDeEntrada: requestJson
        },
        dataType: "json",
        success: function(response){
            //PEGANDO VARIÁVEIS GLOBAIS NECESSÁRIAS
            GLOBAL_requestResponse = response;
            GLOBAL_left = GLOBAL_requestResponse;
            GLOBAL_left = JSON.stringify(GLOBAL_left);

            $("#siape").html("");
            $("#ingressoUfg").html("");
            $("#ingressoServicoPublico").html("");

            $("#siape").append("<strong>SIAPE: </strong>" +response["siape"]);
            $("#ingressoUfg").append("<strong>Data de ingresso na UFG: </strong>" +response["data-ingresso-na-ufg"]);
            $("#ingressoServicoPublico").append("<strong>Data de ingresso na carreira pública: </strong>" +response["data-ingresso-servico-publico"]);

            cont_periodos = response["periodos"].length;

            for (i = 0; i < response["periodos"].length; i++) {
                var retorno = "";

                // ABRINDO PAINEL
                retorno += '<div class="row"><div class="col-lg-12"><div class="panel panel-primary">';
                retorno += '<div class="panel-heading"><h3 class="panel-title">';
                retorno += response["periodos"][i]["periodo"].inicio;
                retorno += ' - ';
                retorno += response["periodos"][i]["periodo"].fim;
                retorno += '</h3></div>'; // fim do panel-heading
                retorno += '<div class="panel-body" style="overflow-x: auto;">';

                // INICIO DADOS DO DOCENTE
                retorno += '<h4>DADOS DO DOCENTE</h4>';
                retorno += '<table class="table table-bordered table-editable" id="dados-do-docente-' +i +'">';
                retorno += '<thead><tr><th>nome</th><th>unidade</th><th>titulacao</th><th>regime-de-trabalho</th><th>classe</th><th>nivel</th><th>ch-contratada</th><th>ch-executada</th><th>email</th></tr></thead>';
                retorno += '<tbody><tr id="dadosDoDocente-linha0-periodo'+i +'" class="normal">';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"].nome;
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"].unidade;
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"].titulacao;
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"]["regime-de-trabalho"];
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"].classe;
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"].nivel;
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"]["ch-contratada"];
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"]["ch-executada"];
                retorno += '</div></td>';
                retorno += '<td><div contenteditable="true">';
                retorno += response["periodos"][i]["dados-do-docente"].email;
                retorno += '</div></td>';
                retorno += '</tr></tbody></table><br/>'; //fim tbody. fim table

                // FIM DADOS DO DOCENTE

                // INICIO AFASTAMENTO
                retorno += '<h4>AFASTAMENTO <button type="button" style="border-radius: 50px;" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="afastamento-' +i +'" class="normal">';
                retorno += '<thead><tr><th>AFASTAMENTO</th></tr></thead>';
                retorno += '<tbody><tr id="afastamento-linha0-periodo' +i +'">';
                retorno += '<td>AFASTAMENTO</td>'
                retorno += '</tr></tbody></table><br/>'; //fim tbody. fim table
                // FIM AFASTAMENTO

                // INICIO ATIVIDADES DE ENSINO
                cont_atividadesDeEnsino['"periodo-' +i +'"'] = response["periodos"][i]["atividades-de-ensino"].length;
                //console.log("QTD atividades-de-ensino-periodo-" +i +": " +cont_atividadesDeEnsino['"periodo-' +i +'"']);

                retorno += '<h4>ATIVIDADES DE ENSINO <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeDeEnsino_generic(\'atividades-de-ensino-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-ensino-' +i +'">';
                retorno += '<thead><tr><th>curso</th><th>disciplina</th><th>cha</th><th>ano</th><th>sem</th><th>turma</th><th>sub</th><th>numero-alunos</th><th>numero-sub</th><th>cht</th><th>chp</th><th>chac</th><th>conjugada</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-ensino"].length; j++) {
                    retorno += '<tr id="atividadesDeEnsino-linha'+j +'-periodo' +i +'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].curso;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].disciplina;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].cha;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].ano;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].sem;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].turma;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].sub;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j]["numero-alunos"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j]["numero-sub"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].cht;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].chp;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].chac;
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-ensino"][j].conjugada;
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesDeEnsino-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE ENSINO

                // INICIO ATIVIDADES DE ORIENTAÇÃO
                cont_atividadesDeOrientacao['"periodo-' +i +'"'] = response["periodos"][i]["atividades-de-orientacao"].length;
                //console.log("QTD atividades-de-orientacao-periodo-" +i +": " +cont_atividadesDeOrientacao['"periodo-' +i +'"']);


                retorno += '<h4>ATIVIDADES DE ORIENTAÇÃO <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeDeOrientacao_generic(\'atividades-de-orientacao-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-orientacao-' +i +'">';
                retorno += '<thead><tr><th>titulo-do-trabalho</th><th>tabela</th><th>estudante</th><th>matricula</th><th>funcao-do-docente</th><th>nivel</th><th>curso</th><th>ies</th><th>cha</th><th>inicio</th><th>fim</th><th>tipo-orientacao</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-orientacao"].length; j++) {
                    retorno += '<tr id="atividadesDeOrientacao-linha'+j +'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["titulo-do-trabalho"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["tabela"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["estudante"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["matricula"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["funcao-do-docente"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["nivel"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["curso"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["ies"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["cha"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["periodo"]["inicio"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["periodo"]["fim"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-orientacao"][j]["tipo-orientacao"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesDeOrientacao-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE ORIENTAÇÃO

                // INICIO ATIVIDADES EM PROJETOS
                cont_atividadesEmProjetos['"periodo-' +i +'"'] = response["periodos"][i]["atividades-em-projetos"].length;
                //console.log("QTD atividades-em-projetos-periodo-" +i +": " +cont_atividadesEmProjetos['"periodo-' +i +'"']);

                retorno += '<h4>ATIVIDADES EM PROJETOS <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeEmProjeto_generic(\'atividades-em-projetos-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-em-projetos-' +i +'">';
                retorno += '<thead><tr><th>titulo-do-projeto</th><th>tabela</th><th>unidade-responsavel</th><th>tipo</th><th>situacao</th><th>funcao</th><th>financiado</th><th>cha</th><th>inicio</th><th>fim</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-em-projetos"].length; j++) {
                    retorno += '<tr id="atividadesEmProjetos-linha'+j+'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["titulo-do-projeto"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["tabela"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["unidade-responsavel"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["tipo"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["situacao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["funcao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["financiado"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["cha"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["periodo"]["inicio"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-em-projetos"][j]["periodo"]["fim"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesEmProjetos-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES EM PROJETOS

                // INICIO ATIVIDADES DE EXTENSÃO
                cont_atividadesDeExtensao['"periodo-' +i +'"'] = response["periodos"][i]["atividades-de-extensao"].length;
                //console.log("QTD atividades-de-extensao-periodo-" +i +": " +cont_atividadesDeExtensao['"periodo-' +i +'"']);

                retorno += '<h4>ATIVIDADES DE EXTENSÃO <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeDeExtensao_generic(\'atividades-de-extensao-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-extensao-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>cha</th><th>inicio</th><th>fim</th><th>descricao</th><th>clientela</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-extensao"].length; j++) {
                    retorno += '<tr id="atividadesDeExtensao-linha'+j+'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-extensao"][j]["tabela"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-extensao"][j]["cha"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-extensao"][j]["periodo"]["inicio"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-extensao"][j]["periodo"]["fim"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-extensao"][j]["descricao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-extensao"][j]["clientela"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesDeExtensao-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE EXTENSÃO

                // INICIO ATIVIDADES DE QUALIFICAÇÃO
                cont_atividadesDeQualificacao['"periodo-' +i +'"'] = response["periodos"][i]["atividades-de-qualificacao"].length;
                //console.log("QTD atividades-de-qualificacao-periodo-" +i +": " +cont_atividadesDeQualificacao['"periodo-' +i +'"']);

                retorno += '<h4>ATIVIDADES DE QUALIFICAÇÃO <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeDeQualificacao_generic(\'atividades-de-qualificacao-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-qualificacao-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>descricao</th><th>cha</th><th>inicio</th><th>fim</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-qualificacao"].length; j++) {
                    retorno += '<tr id="atividadesDeQualificacao-linha'+j+'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-qualificacao"][j]["tabela"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-qualificacao"][j]["descricao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-qualificacao"][j]["cha"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-qualificacao"][j]["periodo"]["inicio"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-de-qualificacao"][j]["periodo"]["fim"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesDeQualificacao-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE QUALIFICAÇÃO

                // INICIO ATIVIDADES ACADÊMICAS ESPECIAIS
                cont_atividadesAcademicasEspeciais['"periodo-' +i +'"'] = response["periodos"][i]["atividades-academicas-especiais"].length;
                //console.log("QTD atividades-academicas-especiais-periodo-" +i +": " +cont_atividadesAcademicasEspeciais['"periodo-' +i +'"']);

                retorno += '<h4>ATIVIDADES ACADÊMICAS ESPECIAIS <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeAcademicaEspecial_generic(\'atividades-academicas-especiais-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-academicas-especiais-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>cha</th><th>inicio</th><th>fim</th><th>descricao</th><th>clientela</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-academicas-especiais"].length; j++) {
                    retorno += '<tr id="atividadesAcademicasEspeciais-linha'+j+'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-academicas-especiais"][j]["tabela"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-academicas-especiais"][j]["cha"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-academicas-especiais"][j]["periodo"]["inicio"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-academicas-especiais"][j]["periodo"]["fim"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-academicas-especiais"][j]["descricao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-academicas-especiais"][j]["clientela"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesAcademicasEspeciais-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES ACADÊMICAS ESPECIAIS

                // INICIO ATIVIDADES ADMINISTRATIVAS
                cont_atividadesAdministrativas['"periodo-' +i +'"'] = response["periodos"][i]["atividades-administrativas"].length;
                //console.log("QTD atividades-administrativas-periodo-" +i +": " +cont_atividadesAdministrativas['"periodo-' +i +'"']);

                retorno += '<h4>ATIVIDADES ADMINISTRATIVAS <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaAtividadeAdministrativa_generic(\'atividades-administrativas-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-administrativas-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>cha</th><th>inicio</th><th>fim</th><th>descricao</th><th>emissor</th><th>orgao-servido</th><th>portaria</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-administrativas"].length; j++) {
                    retorno += '<tr id="atividadesAdministrativas-linha'+j+'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["tabela"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["cha"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["periodo"]["inicio"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["periodo"]["fim"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["descricao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["emissor"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["orgao-servido"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["atividades-administrativas"][j]["portaria"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'atividadesAdministrativas-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES ADMINISTRATIVAS

                // INICIO PRODUTOS
                cont_produtos['"periodo-' +i +'"'] = response["periodos"][i]["produtos"].length;
                //console.log("QTD produtos-periodo-" +i +": " +cont_produtos['"periodo-' +i +'"']);

                retorno += '<h4>PRODUTOS <button type="button" style="border-radius: 50px;" onclick="' + 'insereLinhaProduto_generic(\'produtos-' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-plus"></i></button></h4>';
                retorno += '<table class="table table-bordered table-editable" id="produtos-' +i +'">';
                retorno += '<thead><tr><th>descricao</th><th>titulo</th><th>autoria</th><th>associacao-do-produto</th><th>projeto-associado</th><th>veiculacao</th><th>local</th><th>data</th><th>ano-da-publicacao</th><th>pagina-inicial</th><th>pagina-final</th><th>numero-de-paginas</th><th>numero-da-patente</th><th></th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["produtos"].length; j++) {
                    retorno += '<tr id="produtos-linha'+j+'-periodo'+i+'" class="normal"><td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["descricao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["titulo"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["autoria"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["associacao-do-produto"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["projeto-associado"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["veiculacao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["local"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["data"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["ano-da-publicacao"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["pagina-inicial"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["pagina-final"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["numero-de-paginas"];
                    retorno += '</div></td>';
                    retorno += '<td><div contenteditable="true">';
                    retorno += response["periodos"][i]["produtos"][j]["numero-da-patente"];
                    retorno += '</div></td>';
                    retorno += '<td><button type="button" style="border-radius: 50px;" onclick="removeLinha(\'produtos-linha'+j +'-periodo' +i +'\');" class="btn btn-primary btn-circle"><i class="fa fa-minus"></i></button></td></tr>';

                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM PRODUTOS

                // FECHANDO PAINEL
                retorno += '</div>'; // fim panel-body
                retorno += '</div></div></div><br/><br/>'; // fim do panel-default. fim da col. fim da row

                $("#retornoJson").append(retorno);



                console.log("");
            } // fim do for periodos

            // ESTÁ PASSANDO SOMENTE O TEXTO NÃO FORMATADO,AINDA FALTA FORMATAR OU ENTÃO TENTAR PASSAR AO INVÉS DO TEXTO, UM OBJETO
            /*$('.normal').each(function (){
                //console.log($(this)[0]);
                //console.log("ID" + $(this).attr("id"));
                //console.log("VALOR" + $(this).text());
                mapAux[$(this).attr("id")] = $(this).text();
            });*/

            $('.normal').each(function (){
                var linhaFormatada = "{";
                var trChildNodes = this.childNodes;
                var cont = 0;
                for(var i=0; i<trChildNodes.length-1; i++){
                    linhaFormatada += '"' +this.childNodes.item(i).textContent +'"';
                    if(cont < trChildNodes.length-2){
                        linhaFormatada += ", ";
                    }
                    cont++;
                }
                linhaFormatada += "}";
                //console.log(linhaFormatada);
                mapAux[$(this).attr("id")] = linhaFormatada;
            });


            // MUDA A COR DA DIV CASO HAJA ALGUMA ALTERAÇÃO
            $("div[contenteditable='true']").bind("input", function(){
                $(this).css("background-color", "#FDFFDA");
            });

            // TODA VEZ QUE HOUVER UM INPUT, A CLASSE DA TR É MARCADA COMO MUDADO
            $("tr:has(div[contenteditable='true'])").each(function(){
                //arr_TR_linhasOriginais.push(this);
                //console.log(this);
                $(this).bind("input", function(){
                    this.className = "editada";
                    //console.log(this);
                });
            });



            
        },
        async: true
    }); // fim da requisição ajax
} // fim da função carregaJsonEntrada()