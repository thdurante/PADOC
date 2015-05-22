// VARIÁVEIS GLOBAIS
var GLOBAL_requestResponse;

// INICIALIZAÇÃO BÁSICA PARA TESTES
var usuario = "fabio@inf.ufg.br";
var senha = "123tetinha";
var siape = "6302300";
var inicioPeriodo1 = "01/01/1992";
var fimPeriodo1 = "31/12/2009";
var inicioPeriodo2 = "01/01/2010";
var fimPeriodo2 = "31/12/2014";

// DADOS INICIAIS RECUPERADOS DE INDEX
// console.log("Tamanho do sessionStorage: " +sessionStorage.length);
// console.log("Nome do professor: " +sessionStorage.getItem("professor"));
// console.log("Data Inicio: " +sessionStorage.getItem("dataInicio"));
// console.log("Data Fim: " +sessionStorage.getItem("dataFim"));


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

        },
        dataType: "json",
        success: function(response){
            //PEGANDO VARIÁVEIS GLOBAIS NECESSÁRIAS
            GLOBAL_requestResponse = response;


            $("#siape").append(response["siape"]);
            $("#ingressoUfg").append(response["data-ingresso-na-ufg"]);
            $("#ingressoServicoPublico").append(response["data-ingresso-servico-publico"]);

            for (i = 0; i < response["periodos"].length; i++) {
                var retorno = "";

                // ABRINDO PAINEL
                retorno += '<div class="row"><div class="col-lg-12"><div class="panel panel-primary">';
                retorno += '<div class="panel-heading"><h3 class="panel-title">';
                retorno += response["periodos"][i]["periodo"].inicio;
                retorno += ' - ';
                retorno += response["periodos"][i]["periodo"].fim;
                retorno += '</h3></div>'; // fim do panel-heading
                retorno += '<div class="panel-body">';

                // INICIO DADOS DO DOCENTE
                retorno += '<h4>DADOS DO DOCENTE</h4>';
                retorno += '<table class="table table-bordered table-editable" id="dados-do-docente-' +i +'">';
                retorno += '<thead><tr><th>nome</th><th>unidade</th><th>titulacao</th><th>regime-de-trabalho</th><th>classe</th><th>nivel</th><th>ch-contratada</th><th>ch-executada</th><th>email</th></tr></thead>';
                retorno += '<tbody><tr>';
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
                retorno += '<h4>AFASTAMENTO</h4>';
                retorno += '<table class="table table-bordered table-editable" id="afastamento-' +i +'">';
                retorno += '<thead><tr><th>AFASTAMENTO</th></tr></thead>';
                retorno += '<tbody><tr>';
                retorno += '<td>AFASTAMENTO</td>'
                retorno += '</tr></tbody></table><br/>'; //fim tbody. fim table
                // FIM AFASTAMENTO

                // INICIO ATIVIDADES DE ENSINO
                retorno += '<h4>ATIVIDADES DE ENSINO</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-ensino-' +i +'">';
                retorno += '<thead><tr><th>curso</th><th>disciplina</th><th>cha</th><th>ano</th><th>sem</th><th>turma</th><th>sub</th><th>numero-alunos</th><th>numero-sub</th><th>cht</th><th>chp</th><th>chac</th><th>conjugada</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-ensino"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE ENSINO

                // INICIO ATIVIDADES DE ORIENTAÇÃO
                retorno += '<h4>ATIVIDADES DE ORIENTAÇÃO</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-orientacao-' +i +'">';
                retorno += '<thead><tr><th>titulo-do-trabalho</th><th>tabela</th><th>estudante</th><th>matricula</th><th>funcao-do-docente</th><th>nivel</th><th>curso</th><th>ies</th><th>cha</th><th>inicio</th><th>fim</th><th>tipo-orientacao</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-orientacao"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE ORIENTAÇÃO

                // INICIO ATIVIDADES EM PROJETOS
                retorno += '<h4>ATIVIDADES EM PROJETOS</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-em-projetos-' +i +'">';
                retorno += '<thead><tr><th>titulo-do-projeto</th><th>tabela</th><th>unidade-responsavel</th><th>tipo</th><th>situacao</th><th>funcao</th><th>financiado</th><th>cha</th><th>inicio</th><th>fim</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-em-projetos"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES EM PROJETOS

                // INICIO ATIVIDADES DE EXTENSÃO
                retorno += '<h4>ATIVIDADES DE EXTENSÃO</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-extensao-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>cha</th><th>inicio</th><th>fim</th><th>descricao</th><th>clientela</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-extensao"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE EXTENSÃO

                // INICIO ATIVIDADES DE QUALIFICAÇÃO
                retorno += '<h4>ATIVIDADES DE QUALIFICAÇÃO</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-de-qualificacao-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>descricao</th><th>cha</th><th>inicio</th><th>fim</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-de-qualificacao"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES DE QUALIFICAÇÃO

                // INICIO ATIVIDADES ACADÊMICAS ESPECIAIS
                retorno += '<h4>ATIVIDADES ACADÊMICAS ESPECIAIS</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-academicas-especiais-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>cha</th><th>inicio</th><th>fim</th><th>descricao</th><th>clientela</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-academicas-especiais"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES ACADÊMICAS ESPECIAIS

                // INICIO ATIVIDADES ADMINISTRATIVAS
                retorno += '<h4>ATIVIDADES ADMINISTRATIVAS</h4>';
                retorno += '<table class="table table-bordered table-editable" id="atividades-administrativas-' +i +'">';
                retorno += '<thead><tr><th>tabela</th><th>cha</th><th>inicio</th><th>fim</th><th>descricao</th><th>emissor</th><th>orgao-servido</th><th>portaria</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["atividades-administrativas"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM ATIVIDADES ADMINISTRATIVAS

                // INICIO PRODUTOS
                retorno += '<h4>PRODUTOS</h4>';
                retorno += '<table class="table table-bordered table-editable" id="produtos-' +i +'">';
                retorno += '<thead><tr><th>descricao</th><th>titulo</th><th>autoria</th><th>associacao-do-produto</th><th>projeto-associado</th><th>veiculacao</th><th>local</th><th>data</th><th>ano-da-publicacao</th><th>pagina-inicial</th><th>pagina-final</th><th>numero-de-paginas</th><th>numero-da-patente</th></tr></thead>';
                retorno += '<tbody>';
                for (j = 0; j < response["periodos"][i]["produtos"].length; j++) {
                    retorno += '<tr><td><div contenteditable="true">';
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
                    retorno += '</div></td></tr>';
                }
                retorno += '</tbody></table><br/>'; //fim tbody. fim table
                // FIM PRODUTOS

                // FECHANDO PAINEL
                retorno += '</div>'; // fim panel-body
                retorno += '</div></div></div><br/><br/>'; // fim do panel-default. fim da col. fim da row
                
                $("#retornoJson").append(retorno);
            }
        }
    }); // fim da requisição ajax
} // fim da função carregaJsonEntrada()