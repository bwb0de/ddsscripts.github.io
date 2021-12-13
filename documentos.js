family_members = [];

doc_info_estudante = []
doc_info_moradia = {}
doc_info_grupo_familiar = {}

MAX_SAUDE = 13
MID_SAUDE = 8
MIN_SAUDE = 3

MAX_RENDA = 22

VETOR_ARBITRARIO = 0.5

observacao_cpf = false;
observacao_pa = false;

translator_tipo_renda = {
    tipo_vinculo_00: [22, "Servidor efetivo"],
    tipo_vinculo_01: [22, "Aposentado"],
    tipo_vinculo_02: [22, "Rendimentos"],
    tipo_vinculo_03: [14.08, "Servidor temporário/comissão"],
    tipo_vinculo_04: [14.08, "Microempreendedor"],
    tipo_vinculo_21: [14.08, "Atividade produção agrícola"],
    tipo_vinculo_22: [4.4, "Atividade produção agrícola/familiar/subsistência - indígenas, quilombolas e assentados"],
    tipo_vinculo_05: [14.08, "Trabalho formal"],
    tipo_vinculo_06: [14.08, "PA formal"],
    tipo_vinculo_07: [14.08, "Pensão por morte"],
    tipo_vinculo_08: [14.08, "Pensão por morte"],
    tipo_vinculo_09: [9.68, "INSS"],
    tipo_vinculo_10: [9.68, "Estágio"],
    tipo_vinculo_11: [9.68, "Bolsa Acadêmica"],
    tipo_vinculo_12: [9.68, "Bolsa pós-graduação"],
    tipo_vinculo_13: [9.68, "Bolsa PNAES"],
    tipo_vinculo_14: [2.64, "PA informal"],
    tipo_vinculo_15: [4.4, "Assistência Social"],
    tipo_vinculo_16: [4.4, "Autônomo"],
    tipo_vinculo_17: [2.64, "Poupança"],
    tipo_vinculo_18: [2.64, "Seguro-desemprego"],
    tipo_vinculo_20: [2.64, "Ajuda de terceiros"],
    tipo_vinculo_19: [0, "Sem renda"]
}


translator_saude = {
    saude_00: [MAX_SAUDE, "Sem agravo"],
    saude_01: [MID_SAUDE, "Doença crônica"],
    saude_02: [MIN_SAUDE, "Doença grave"],
    saude_03: [MIN_SAUDE, "Deficiência"]
}

translator_estrangeiro = {
    estrangeiro_00: [0, "Não"],
    estrangeiro_01: [0, "Sim, estrangeiro refugiado"],
    estrangeiro_02: [0, "Sim, estrangeiro não-refugiado"]
}

translator_pessoa_com_deficiencia = {
    com_deficiencia_00: [0, "Sem deficiência"],
    com_deficiencia_01: [0, "Pessoa com deficiência"]
}

translator_irpf = {
    irpf_00: [0, "Não"],
    irpf_01: [0, "Sim"]
}

translator_pais_separados = {
    pais_separados_00: [0, "Meus pais não são separados"],
    pais_separados_01: [0, "Meus pais são formalmente separados"],
    pais_separados_02: [0, "Meus pais são informalmente separados"],
    pais_separados_03: [0, "Meus pais nunca foram formalmente casados"]
}

translator_mais_de_24 = {
    mais_de_24_00: [0, "Não"],
    mais_de_24_01: [0, "Sim"]
}

translator_pa = {
    pa_00: [0, "Não"],
    pa_01: [0, "Sim"]
}


translator_pais_falecidos = {
    pais_falecidos_00: [0, "Não"],
    pais_falecidos_01: [0, "Sim"]
}


translator_tipo_moradia = {
    tipo_imovel_00: [0, "Próprio quitado"],
    tipo_imovel_01: [0, "Casa do Estudante Universitário"],
    tipo_imovel_02: [0, "Própria em aquisição"],
    tipo_imovel_03: [0, "Cedido"],
    tipo_imovel_04: [0, "Alugado/república/pensionato"],
    tipo_imovel_05: [0, "De favor (morando com pessoas que não fazem parte do grupo familiar)"],
    tipo_imovel_06: [0, "Assentamento"],
    tipo_imovel_07: [0, "Comunidade quilombola"],
    tipo_imovel_12: [0, "Aldeia indígena"],
    tipo_imovel_08: [0, "Ocupação irregular"],
    tipo_imovel_09: [0, "Moradia com risco de remoção sub judice"],
    tipo_imovel_10: [0, "Sem moradia, em situação de rua"],
    tipo_imovel_11: [0, "Outra situação de moradia"]
}


translator_docs = {
    doc00: "Se estrangeiro, anexe relatório do banco o central relativo às operações de câmbio e extratos bancários de todas as contas dos últimos 6 meses.",
    doc01: "Se estrangeiro e não-refugiado, anexe a declaração da embaixada informando se há ou não recebimento de bolsas/auxílios financeiros.",
    doc02: "CPF",
    doc03: "RG, frente e verso, ou certidão de nascimento, no caso de crianças/adolescentes ",
    doc04: "Carteira de trabalho ou declaração de não possuí-la, conforme orientações do edital (obrigatório para pessoas com mais de 18 anos)",
    doc05: "Documento de comprovação de existência de renda (ver o tipo exigido no edital, conforme a natureza do vinculo empregatício) ou declaração de ausência de renda, conforme modelo do edital.",
    doc06: "Declaração completa de imposto de renda, com recibo de entrega, ou declaração emitira pelo site da Receita Federal indicando a inesistência deste documento (obrigatório para maiores de 18 anos)",
    doc07: "Comprovação de existência ou inexistência de pensão alimentícia, caso existam crianças/adolescentes no grupo familiar em que os pais sejam separados",
    doc08: "Certificado de conclusão de curso de graduação ou tecnólogo",
    doc09: "Histórico de conclusão do ensino médio (apenas para o estudante e somente se estiver concorrendo ao Programa de Moradia Estudantil) ◦ Observação: para avaliação de proveniência do estudante...",
    doc10: "Comprovantes de residência (água ou luz) e situção do imóvel (contrato de aluguel, IPTU ou demais documentos que comprovem a situação de moradia declarada no questionário",
    doc11: "Relatório médico ou laudo com CID, necessário àquelas pessoas que possuam agravos de saúde ou deficiência",
    doc12: "Certidão de nascimento do(a) filho(a)",
    doc13: "Certidão de óbito no caso de pai/mãe/mantenedor do grupo familiar falecido;",
    doc14: "Documentos complementares solicitados pelo/a assistente social"
}



function check_form() {
    //Verifica se todas questões foram preechidas
    if ( document.getElementById("dn").value == "" ) {
        return 0;
    
    } else if ( document.getElementById("nome").value == "" ) {
        return 0;
    } 
    
    if ( check_if_checked("renda") == 0 ) {
        return 0;
    }
    
    if ( check_if_checked("saude") == 0 ) {
        return 0;
    }
    
    return 1
}

function init_state() {
    document.getElementById('intro').style.visibility = 'visible';
    clear_init_fields();
    document.getElementById('btn1').style.visibility = 'hidden';
    document.getElementById('btn2').style.visibility = 'hidden';
    document.getElementById('form_integrantes_explicacao').style.visibility = 'hidden';
    document.getElementById('form_estudante').style.visibility = 'hidden';
    document.getElementById('form_moradia').style.visibility = 'hidden';
    document.getElementById('form_integrantes').style.visibility = 'hidden';
    document.getElementById('simulation_result').style.visibility = 'hidden';
}

function show_form_estudante() {
    document.getElementById('intro').remove();
    document.getElementById('form_estudante').style.visibility = 'visible';
}



function push_and_show_form_moradia() {
    estrangeiro = get_selected_op('entrangeiro', translator_estrangeiro).split(';')[0];
    com_deficiencia = get_selected_op('com_deficiencia', translator_pessoa_com_deficiencia).split(';')[0];
    pais_separados = get_selected_op('pais_separados', translator_pais_separados).split(';')[0];
    mais_de_24 = get_selected_op('mais_de_24', translator_mais_de_24).split(';')[0];
    pais_falecidos = get_selected_op('pais_falecidos', translator_pais_falecidos).split(';')[0];
    pensao_alimenticia = get_selected_op('pa', translator_pa).split(';')[0];


    doc_info_estudante.push("Apresentar RG (frente e verso) e CPF.");

    //Estrangeiro
    if (estrangeiro == "Sim, estrangeiro refugiado" ) {
        doc_info_estudante.push("Relatório do banco o central relativo às operações de câmbio e extratos bancários de todas as contas dos últimos 6 meses.")
    
    } else if (estrangeiro == "Sim, estrangeiro não-refugiado") {
        doc_info_estudante.push("Relatório do banco o central relativo às operações de câmbio e extratos bancários de todas as contas dos últimos 6 meses.")
        doc_info_estudante.push("Declaração da embaixada informando se há ou não recebimento de bolsas/auxílios financeiros.")
    }

    //Deficiente
    if (com_deficiencia == "Pessoa com deficiência" ) {
        doc_info_estudante.push("Anexar documento oficial de pessoa com deficiência ou relatório/laudo médico com CID.")
    }

    //Pensionista
    if (pensao_alimenticia == "Não" && pais_falecidos == "Não" ) {
        if (pais_separados == "Meus pais são formalmente separados" && mais_de_24 == "Não" ) {
            doc_info_estudante.push("Anexar comprovante de justificativa do não recebimento de pensão alimentícia... [0] se o pedido de pensão estiver em tramitação, comprovante de existência do processo com identificação das partes; [2] se a pensão tiver sido interrompida por falta de pagamento, anexe o comprovante da decisão favorável a concessão da pensão e os extratos bancários que demonstrem claramente a interrupção do repasse do recurso.")
    
        } else if (pais_separados == "Meus pais são informalmente separados" && mais_de_24 == "Não") {
            doc_info_estudante.push("Apresentar declaração de não recebimento de pensão, ver modelo nos anexos do edital.")
    
        } else if (pais_separados == "Meus pais nunca foram formalmente casados" && mais_de_24 == "Não") {
            doc_info_estudante.push("Apresentar declaração de não recebimento de pensão, ver modelo nos anexos do edital.")
            doc_info_estudante.push("Incluir na questão número [18] do Cadastro Único (SIGAA) os motivos de não ter solicitado pensão formal.")
        }

    } else if (pensao_alimenticia == "Sim") {
        if (pais_separados == "Meus pais são formalmente separados" && mais_de_24 == "Não" ) {
            doc_info_estudante.push("Anexar cópia da decisão judicial em favor da pensão e comprovantes que atestem o valor transferido.")
    
        } else if (pais_separados == "Meus pais são informalmente separados" && mais_de_24 == "Não") {
            doc_info_estudante.push("Anexar <a href='https://drive.google.com/file/d/1e_MVjxtRXAKDdAcr82hXT9IzMK20oYXT/view?usp=sharing' target='_blank'>declaração de recebimento de pensão informal</a>, conforme o modelo do edital, com comprovantes que atestem o valor transferido.")
    
        } else if (pais_separados == "Meus pais nunca foram formalmente casados" && mais_de_24 == "Não") {
            doc_info_estudante.push("Anexar <a href='https://drive.google.com/file/d/1e_MVjxtRXAKDdAcr82hXT9IzMK20oYXT/view?usp=sharing' target='_blank'>declaração de recebimento de pensão informal</a>, conforme o modelo do edital, com comprovantes que atestem o valor transferido.")
        }
    }

    //Pais falecidos
    if (pais_falecidos == "Sim" ) {
        doc_info_estudante.push("Anexar certidão de óbito do genitor falecido.")
    }
    
    document.getElementById('form_estudante').remove();
    document.getElementById('form_moradia').style.visibility = 'visible';
}

function show_form_integrantes_ex() {
    document.getElementById('form_moradia').remove();
    document.getElementById('form_integrantes_explicacao').style.visibility = 'visible';
}

function show_form_integrantes() {
    document.getElementById('form_integrantes_explicacao').remove()
    document.getElementById('form_integrantes').style.visibility = 'visible';
}


function show_simulation_result() {
    document.getElementById('form_integrantes').remove();

    populate_result();

    document.getElementById('simulation_result').style.visibility = 'visible';
    document.getElementById('info').remove();
}


function push_moradia() {
    document.getElementById('btn1').style.visibility = 'visible';
    moradia_ident = document.getElementById('moradia_id').value
    moradia_tipo = get_selected_op('tipo_imovel', translator_tipo_moradia).split(';')[0];


    tmp_array = []

    if ( moradia_tipo == "Próprio quitado" ) {
        tmp_array.push("Anexar IPTU e comprovantes de gastos da residência: agua, luz, telefone.")

    } else if ( moradia_tipo == "Casa do Estudante Universitário" ) {
        tmp_array.push("Informar situação de moradia na questão [18] do Cadastro Único.")

    } else if ( moradia_tipo == "Própria em aquisição" ) {
        tmp_array.push("Apresentar boleto de pagamento do financiamento.")

    } else if ( moradia_tipo == "Cedido" ) {
        tmp_array.push("Apresentar <a href='https://drive.google.com/file/d/17NKJRJh2pogTpn65cD5I4YqYbiTVeanW/view?usp=sharing' target='_blank'>declaração de residência em Imóvel Cedido</a>, conforme o edital, com a cópia do RG do cedente ou com reconhecimento da assinatura em cartório.")

    } else if ( moradia_tipo == "Alugado/república/pensionato" ) {
        tmp_array.push("Apresentar contrato de aluguel vigente em que conste o valor da locação.")

    } else if ( moradia_tipo == "Alugado informalmente" ) {
        tmp_array.push("Apresentar <a href='https://drive.google.com/file/d/1ThKt4pauvj9XAm5NJSHtEF-Nl2TDzgo3/view?usp=sharing' target='_blank'>declaração de aluguel informal</a>, conforme orientações do edital. No caso do aluguel ser compartilhado com outros, indicar o valor da parcela paga na questão [18] do Cadastro Único.")


    } else if ( moradia_tipo == "De favor (morando com pessoas que não fazem parte do grupo familiar)" ) {
        tmp_array.push("Apresentar <a href='https://drive.google.com/file/d/1xhXYmt7RO_5_6JDO4h7VCQd-PDTpXE57/view?usp=sharing' target='_blank'>declaração de residência de Moradia com Outros</a> (“de favor”), conforme o edital, com a cópia do documento de identificação do declarante ou com firma reconhecida em cartório.")

    } else if ( moradia_tipo == "Assentamento" ) {
        tmp_array.push("Para assentados, apresentar comprovante/declaração da situação informada ou Contrato de Concessão de Uso (CCU) ou Título de Domínio (TD) ou Declaração de Aptidão ao Programa Nacional de Fortalecimento da Agricultura Familiar (DAP/PRONAF).")

    } else if ( moradia_tipo == "Comunidade quilombola" ) {
        tmp_array.push("Apresentar declaração de pertencimento à comunidade declarada.")

    } else if ( moradia_tipo == "Aldeia indígena" ) {
        tmp_array.push("Declaração de liderança indígena ou órgão oficial (FUNAI) sobre residência do estudante e grupo familiar ou Declaração de Aptidão ao Programa Nacional de Fortalecimento da Agricultura Familiar (DAP).")

    } else if ( moradia_tipo == "Ocupação irregular" ) {
        tmp_array.push("Apresentar termo de cessão de direitos da propriedade ou comprovante/declaração da situação informada.")

    } else if ( moradia_tipo == "Moradia com risco de remoção sub judice" ) {
        tmp_array.push("Apresentar decisão judicial ou notificação de órgão público responsável sobre a determinação da desocupação da área (moradia com risco de remoção).")

    } else if ( moradia_tipo == "Sem moradia, em situação de rua" ) {
        tmp_array.push("Declaração de atendimento emitida pelo Centro de Referência para População em Situação de Rua (Centro Pop) ou autodeclaração do estudante.")

    } else if ( moradia_tipo == "Outra situação de moradia" ) {
        tmp_array.push("Solicitar entrevista com profissional pelo email sps@unb.br.")
    }

    doc_info_moradia[moradia_ident] = tmp_array

    clear_moradia_fields();

    alert("Informação de moradia inserida...")

}


function push_family_member() {
    document.getElementById('btn2').style.visibility = 'visible';
    if ( check_form() ) {
        nome = document.getElementById('nome').value;
        dn = document.getElementById('dn').value;
        idade = calculate_age(dn);
        renda = get_selected_op('renda', translator_tipo_renda);
        renda_score = get_selected_op('renda', translator_tipo_renda, output_score=true);
        saude = get_selected_op('saude', translator_saude);
        saude_score = get_selected_op('saude', translator_saude, output_score=true);
        saude_vector = get_saude_vector(saude_score, idade);
        renda_vector = get_renda_vector(renda_score, idade);
        irpf = get_selected_op('irpf', translator_irpf).split(";")[0];

        new_info = {
            nome: nome,
            dn: dn,
            idade: calculate_age(dn),
            renda: renda,
            renda_score: renda_score,
            saude: saude,
            saude_score: saude_score,
            saude_vector: saude_vector,
            renda_vector: renda_vector,
            irpf: irpf
        }

        family_members.push(new_info);
        family_member_documentation(new_info);
        print_info();
        clear_fields();
    } else {
        alert("É necessário preencher todos os campos do formulário")
    }

    alert("Informação de integrante do grupo familiar inserida...")
};

function family_member_documentation(member) {
    doc_info_grupo_familiar[member.nome] = []

    if ( member.idade < 24 ) {
        observacao_pa = true;
    }

    if ( member.idade < 14 ) {
        doc_info_grupo_familiar[member.nome].push("Apresentar RG (frente e verso) ou certidão de nascimento. O número de CPF é necessário para incluir o integrante familiar no sistema.");
        observacao_cpf = true;
    } else {
        doc_info_grupo_familiar[member.nome].push("Apresentar RG (frente e verso) e CPF.");
        //doc_info_grupo_familiar[member.nome].push("Apresentar carteira de trabalho: página da foto, qualificação civil e páginas dos 'contratos de trabalho' (último registro de trabalho e a próxima página em branco) se não possuí, apresentar declaração de não possuí-la (modelo no edital).");
        if ( member.irpf == "Sim" ) {
            //doc_info_grupo_familiar[member.nome].push("Anexar o recibo e a declaração de imposto de renda completa (todas as páginas)")
        } else {
            //doc_info_grupo_familiar[member.nome].push("Acessar a página de <a href='https://servicos.receita.fazenda.gov.br/Servicos/ConsRest/Atual.app/paginas/index.asp' target='_blank'>Consulta de Restituição de IRPF, no site da Receita Federal</a> e preencher os dados solicitados referente ao último ano/ exercício vigente. Anexar o print da tela com a mensagem “<i>sua declaração não consta da base de dados da receita federal</i>")
        }
    }
    member.renda = member.renda.split("; ")
    
    for ( i in member.renda ) {
        if ( member.renda[i] == "Servidor efetivo" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar cópia dos três contracheques mais recentes.");
    
        } else if ( member.renda[i] == "Aposentado" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar comprovante mais recente de recebimento da aposentadoria.");
        
        } else if ( member.renda[i] == "Rendimentos" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar contrato(s) de locação dos imóveis com o valor expresso ou comprovante de rendimentos ou recibo de pagamento dos inquilinos.");
        
        } else if ( member.renda[i] == "Servidor temporário/comissão" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar cópia dos três contracheques mais recentes.");
        
        } else if ( member.renda[i] == "Microempreendedor" ) {
            doc_info_grupo_familiar[member.nome].push("Declaração de rendimento conforme modelo do edital ou pró labore + extratos bancários dos últimos três meses");
    
        } else if ( member.renda[i] == "Atividade produção agrícola" ) {
            doc_info_grupo_familiar[member.nome].push("Declaração do Imposto Territorial Rural - ITR + declaração de rendimento ou Declaração do Sindicato Rural da região sobre atividade exercida e renda mensal")
    
        } else if ( member.renda[i] == "Atividade produção agrícola/familiar/subsistência - indígenas, quilombolas e assentados" ) {
            doc_info_grupo_familiar[member.nome].push("<a href='https://drive.google.com/file/d/1k0GBLwWeoMD6fqBYGZWGsGzwcywgSuim/view?usp=sharing' target='_blank'>Declaração de atividade informal ou autônoma</a> conforme modelo do edital + três últimos extratos bancários ou, na ausência de extrato por não possuir conta bancária, apresentar <a href='https://www3.bcb.gov.br/nadaconsta/emitirCertidaoCCS' target='_blank'>certidão negativa do banco central</a>.")
    
        } else if ( member.renda[i] == "Trabalho formal" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar cópia dos três contracheques mais recentes.");
        
        } else if ( member.renda[i] == "PA formal" ) {
            doc_info_grupo_familiar[member.nome].push("Anexar cópia da decisão judicial em favor da pensão e comprovantes que atestem o valor transferido.");
        
        } else if ( member.renda[i] == "Estágio" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar comprovante de recebimento da bolsa de estágio ou contrato de estágio vigente, desde que o valor esteja descrito no documento.")
        
        } else if ( member.renda[i] == "Bolsa Acadêmica" ) {
            doc_info_grupo_familiar[member.nome].push("Declaração de recebimento da bolsa acadêmica com o respectivo valor emitida pelo órgão competente")
        
        } else if ( member.renda[i] == "Bolsa pós-graduação" ) {
            doc_info_grupo_familiar[member.nome].push("Declaração de recebimento da bolsa acadêmica com o respectivo valor emitida pelo órgão competente")
        
        } else if ( member.renda[i] == "Bolsa PNAES" ) {
            doc_info_grupo_familiar[member.nome].push("Informar, na questão 18 do formulário do Cadastro Único, as bolsas recebidas. Considerar, no ato do preenchimento dos valores das rendas dos integrantes da familia os valores dos programas: Auxílio Socioeconômico, Auxílio Creche e Bolsa Permanência.")
        
        } else if ( member.renda[i] == "PA informal" ) {
            doc_info_grupo_familiar[member.nome].push("Anexar <a href='https://drive.google.com/file/d/1e_MVjxtRXAKDdAcr82hXT9IzMK20oYXT/view?usp=sharing' target='_blank'>declaração de recebimento de pensão informal</a>, conforme o modelo do edital, com comprovantes que atestem o valor transferido.")
        
        } else if ( member.renda[i] == "Assistência Social" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar comprovante mais recente, com o respectivo valor, referente ao recebimento de Benefício de Assistência Social (Bolsa Familia, BPC ou outros benefícios semelhantes...)")
            
        } else if ( member.renda[i] == "Autônomo" ) {
            doc_info_grupo_familiar[member.nome].push("<a href='https://drive.google.com/file/d/1k0GBLwWeoMD6fqBYGZWGsGzwcywgSuim/view?usp=sharing' target='_blank'>Declaração de atividade informal ou autônoma</a> conforme modelo do edital + três últimos extratos bancários ou, na ausência de extrato por não possuir conta bancária, apresentar <a href='https://www3.bcb.gov.br/nadaconsta/emitirCertidaoCCS' target='_blank'>certidão negativa do banco central</a>.")
            
        } else if ( member.renda[i] == "Poupança" ) {
            doc_info_grupo_familiar[member.nome].push("Extrato bancário da poupança referente aos três últimos meses.")

        } else if ( member.renda[i] == "INSS" ) {
            doc_info_grupo_familiar[member.nome].push("Apresentar extrato do benefício do INSS.")
            
        } else if ( member.renda[i] == "Ajuda de terceiros" ) {
            doc_info_grupo_familiar[member.nome].push("<a href='https://drive.google.com/file/d/1OJJKkGYUwz6s-2FJQdfgfyADD5grJPdT/view?usp=sharing' target='_blank'>Declaração de renda referente ao recebimento de ajuda de terceiros</a> (ver modelo no edital), redigida por quem repassa o recurso informando o valor + cópia do RG do declarante ou reconhecimento de firma do declarante em cartório")
            
        } else if ( member.renda[i] == "Seguro-desemprego" ) {
            doc_info_grupo_familiar[member.nome].push("Espelho do recebimento do benefício com o valor do benefício a ser pago e em quantas parcelas")
            
        } else if ( member.renda[i] == "Sem renda" ) {
            if ( member.idade > 18) {
                doc_info_grupo_familiar[member.nome].push("Extratos bancários dos 3 últimos meses + <a href='https://drive.google.com/file/d/1Rlit43OMdjdx2-s-zVRU63kxqrCzN-1R/view?usp=sharing' target='_blank'>declaração de não possuir renda</a> conforme modelo do edital. Na ausência de extrato por não possuir conta bancária, apresentar <a href='https://www3.bcb.gov.br/nadaconsta/emitirCertidaoCCS' target='_blank'>certidão negativa do banco central</a>.")
            }
            
        }
    }
    


    if ( member.saude != "Sem agravo" ) {
        doc_info_grupo_familiar[member.nome].push("Relatório ou laudo médico ou psicológico, com o número da CID")
    }

    
}


function resultant_vector(arr) {
    x = 0;
    y = 0;

    for ( idx in arr ) {
        x += arr[idx][0];
        y += arr[idx][1];
    }

    return [x,y]
};


function get_global_saude_vector() {

};


function calculate_dgtx(family_members) {
    numerador = 0;
    denominador = 0;
    
    for ( idx in family_members ) {
        pessoa = family_members[idx];

        denominador += 1
        
        if ( pessoa.saude_score == MIN_SAUDE ) {
            numerador += 1
        }
    }
    return (numerador/denominador) * 3;
};


function calculate_dctx(family_members) {
    numerador = 0;
    denominador = 0;
    
    for ( idx in family_members ) {
        pessoa = family_members[idx];

        denominador += 1
        
        if ( pessoa.saude_score == MID_SAUDE ) {
            numerador += 1
        }
    }
    return (numerador/denominador) * 2;
};


function calculate_tx_com_renda(family_members) {
    numerador = 0;
    denominador = 0;
    
    for ( idx in family_members ) {
        pessoa = family_members[idx];

        denominador += 1
        
        if ( pessoa.renda_score !== 0 ) {
            numerador += 1
        }
    }
    return (numerador/denominador);
};



function get_renda_vector(renda_score, idade, ) {
    // renda_vector = [x,y]
    // estabilidade_de_renda => y
    // dependencia => x

    x = dependencia_by_age_group(idade);

    if ( renda_score == 22 ) {
        y = 6
    } else if ( renda_score == 14.08 ) {
        y = 3.84
    } else if ( renda_score == 9.68 ) {
        y = 2.64
    } else if ( renda_score == 4.4 ) {
        y = 1.2
    } else if ( renda_score == 2.64 ) {
        y = 0.72
    } else if ( renda_score == 0 ) {
        y = 0
    }
    return [x,y];
};


function get_saude_vector(saude_score, idade) {
    // saude_vector = [x,y]
    // autonomia => y
    // risco do agravo => x

    y = autonomia_by_age_group(idade);
    


    if ( saude_score == MAX_SAUDE ){
        x = 0

    } else if ( saude_score == MID_SAUDE ) {
        x = 1.5 

    } else if ( saude_score == MIN_SAUDE ) { 
        x = 3 
    
    } else if ( saude_score == 2 ) { 
        x = 4 
    
    } else if ( saude_score == 1 ) { 
        x = 5 
    }
    
    return [x,y];
};


function vector_size(vector) {
    return Math.sqrt((vector[0] * vector[0]) + (vector[1] * vector[1]));
};


function cosseno_vector(vector) {
    return vector[0] / vector_size(vector);
};



function autonomia_by_age_group(idade) {
    if ( idade < 3 ) {
        return 0//-1;
    } else if ( idade < 8 ) {
        return 0.5//-0.5;
    } else if ( idade < 12 ) {
        return 0.7//-0.3;
    } else if ( idade < 18 ) {
        return 1//0;
    } else if ( idade < 60 ) {
        return 3//2;
    } else {
        return 2//1;
    }
};


function dependencia_by_age_group(idade) {
    if ( idade < 3 ) {
        return 3;
    } else if ( idade < 8 ) {
        return 2.5;
    } else if ( idade < 12 ) {
        return 2.3;
    } else if ( idade < 18 ) {
        return 2;
    } else if ( idade < 60 ) {
        return 0;
    } else {
        return 1;
    }
};


function load_family_members() {
    output = "<h3>Grupo familiar</h3>";
    output += "<table style='width: 100%'>";
    output += "<tr><td style='width: 20%;'><b>Nome</b></td>";
    output += "<td style='width: 20%'><b>Nascimento</b></td>";
    output += "<td style='width: 10%'><b>Idade</b></td>";
    output += "<td style='width: 30%'><b>Renda</b></td>";
    output += "<td style='width: 20%'><b>Saúde</b></td></tr>";
    
    for ( index in family_members) {
        p = family_members[index]
        output += `<tr style='padding: 10px;'><td>${p.nome}</td><td>${p.dn}</td><td>${p.idade}</td><td>${p.renda}</td><td>${p.saude}</td></tr>`
    };
    output += "</table><br>";
    //output += make_score(family_members).toString();
    return output
};




function load_doc_hint_info() {
    output = ""
    if ( doc_info_estudante.length != 0) {
        output += "<h3>Lista de documentos para o estudante</h3>";
        output += "<ul>"
        for ( index in doc_info_estudante ) {
                output += "<li>" + doc_info_estudante[index]
        }
        output += "</ul>"
    }

    output += "<h3>Lista de documentos conforme o tipo de moradia declarada</h3>";
    for ( key in doc_info_moradia ) {
        output += "<h4>" + key + "</h4>";
        output += "<ul>";
        array = doc_info_moradia[key]
        for ( index in array ) {
            output += "<li>" + array[index];
        }    
        output += "</ul>";    
    }
 
    output += "<h3>Lista de documentos para os integrantes do grupo familiar</h3>";
    for ( key in doc_info_grupo_familiar ) {
        output += "<h4>" + key + "</h4>";
        output += "<ul>";
        array = doc_info_grupo_familiar[key]
        for ( index in array ) {
            output += "<li>" + array[index];
        }    
        output += "</ul>";    
    }

    output += "<h3>Observações finais</h3>";
    output += "<ul>";
    if ( observacao_pa ) {
        output += "<li>Caso existam integrantes no grupo familiar com idade inferior a 24 anos e cujos genitores estejam separados, será necessário apresentar comprovantes de recebimento ou não recebimento de pensão alimentícia, nos termos do edital.";
    }
    if ( observacao_cpf ) {
        output += "<li>É possível solicitar um número de CPF nas agências dos Correios, veja a orientação <a href='https://www.correios.com.br/atendimento/para-o-cidadao/cpf#tab-2' target='_blank'>aqui</a> "; 
    }
    output += "<li>Orientações sobre a criação de PDFs com múltiplas páginas: usando <a href='https://www.youtube.com/watch?v=HXEPv-GkHJE'  target='_blank'>celular</a> ou o <a href='https://www.youtube.com/watch?v=rUTKzSrWIcQ' target='_blank'>computador</a>.";
    output += "<li>Esta é uma listagem preliminar, a análise das informações registradas no cadastro e nos documentos podem indicar a necessidade de solicitar documentações adicionais.";
    output += "<li>Em caso de dúvidas, solicite atendimento mediante o email <b>sps@unb.br</b> ou leia nossa página de <a href='https://unbbr-my.sharepoint.com/:w:/g/personal/lemgruber_unb_br/EXZknwWFk7tMqghclCUo0osBXO6l98ATm8OBAM5mygJ4nQ?rtime=3Ph-zWbC2Eg'  target='_blank'>perguntas e respostas</a>.";
    output += "</ul>";

    return output
}


function print_info() {
    document.getElementById('info').innerHTML = load_family_members();
}


function populate_result() {
    document.getElementById('simulation_result').innerHTML = load_doc_hint_info();
}



function clear_fields() {
    document.getElementById('nome').value = "";
    document.getElementById('dn').value = "";
    clear_radio_selection('irpf');
    clear_radio_selection('renda');
    clear_radio_selection('saude');

};

function clear_init_fields() {
    clear_radio_selection('entrangeiro');
    clear_radio_selection('com_deficiencia');
    clear_radio_selection('pais_separados');
    clear_radio_selection('mais_de_24');
    clear_radio_selection('pa');
    clear_radio_selection('pais_falecidos');
};


function clear_moradia_fields() {
    document.getElementById('moradia_id').value = "";
    clear_radio_selection('tipo_imovel');
};


function clear_radio_selection(class_name) {
    grupo_ops = document.getElementsByClassName(class_name)
    for ( index in grupo_ops ) {
        grupo_ops[index].checked = false;
    };
};


function check_if_checked(class_name) {
    grupo_ops = document.getElementsByClassName(class_name);
    for ( index in grupo_ops ) {
        if ( grupo_ops[index].checked == true ) {
            return 1;
        }
    };
}

function get_selected_op(class_name, translator, output_score=false) {
    grupo_ops = document.getElementsByClassName(class_name);
    selected_ops = [];
    scores = []
    output = "";
    
    for ( index in grupo_ops ) {
        if ( grupo_ops[index].checked ) {
            selected_ops.push(grupo_ops[index].id);
        };
    };

    if ( selected_ops.length > 1 && class_name == 'saude' ) {
        switch_val = 0
        for ( index in selected_ops) {
            if ( selected_ops[index] == 'saude_01' ) {
                switch_val += 100
            } else if ( selected_ops[index] == 'saude_02' ) {
                switch_val += 10
            } else if ( selected_ops[index] == 'saude_03' ) {
                switch_val += 1
            } else {
                switch_val += 1000
            }
            output += translator[selected_ops[index]][1] + '; ';
        };


        //Verificação de valores cruzados
        if ( switch_val == 1000 ) {
            scores.push(13)
        } else if ( switch_val == 100 ) {
            scores.push(8)
        } else if ( switch_val == 10 ) {
            scores.push(3)
        } else if ( switch_val == 1 ) {
            scores.push(3)
        } else if ( switch_val == 11 ) {
            scores.push(1)
        } else if ( switch_val == 110 ) {
            scores.push(1)
        } else if ( switch_val == 101 ) {
            scores.push(2)
        } 
        

    } else {
        for ( index in selected_ops) {
            output += translator[selected_ops[index]][1] + '; ';
            scores.push(translator[selected_ops[index]][0])
        };
    }
    if ( output_score == false ) {
        return output;
    } else {
        return Math.max(...scores)
    }
};


function calculate_age(dn) {
    //requires moment JS from: https://momentjs.com/
    dia = dn.split('/')[0]; 
    mes = dn.split('/')[1]; 
    ano = dn.split('/')[2];

    data = `${ano}-${mes}-${dia}`;

    const now = moment(new Date());
    const past = moment(data);
    const duration = moment.duration(now.diff(past));
    
    return parseInt(duration.asYears());
};


function media(arr) {
    denominador = arr.length
    soma = somar(arr)
    return soma / denominador

}


function saude_denominator(arr) {
    output = 0;
    cronic_term = 0;
    grave_term = 0;
}


function somar(arr) {
    output = 0
    for ( index in arr ) {
        output += arr[index]
    };

    return output
};


function make_score(family_members) {

    pontuacao_conforme_natureza_da_renda = []
    pontuacao_conforme_a_situacao_de_saude = []

    saude_vectors = []
    renda_vectors = []

    vetores_saude_view = "";
    vetores_renda_view = "";

    output = "";

    scores_saude = "";
    scores_renda = "";


    for ( index in family_members ) {
        pessoa = family_members[index]

        pontuacao_conforme_natureza_da_renda.push(parseFloat(pessoa.renda_score));
        scores_renda += pessoa.renda_score.toString() + " ";

        pontuacao_conforme_a_situacao_de_saude.push(parseFloat(pessoa.saude_score));
        scores_saude += pessoa.saude_score.toString() + " ";

        saude_vectors.push(pessoa.saude_vector)
        vetores_saude_view += "[" + pessoa.saude_vector + "] "
        
        renda_vectors.push(pessoa.renda_vector)
        vetores_renda_view += "[" + pessoa.renda_vector + "] "
    };

    
    global_saude_vector_y = VETOR_ARBITRARIO;
    global_saude_vector_x = (calculate_dctx(family_members) + calculate_dgtx(family_members)) //* (-1);
    global_saude_vector = [global_saude_vector_x, global_saude_vector_y]
    saude_vectors.push(global_saude_vector)
    vetor_resultante_saude = resultant_vector(saude_vectors);
    cosseno_do_vetor_resultante_saude_mais_um = 1.0 + cosseno_vector(vetor_resultante_saude);
    media_ponderada_score_saude = media(pontuacao_conforme_a_situacao_de_saude)
    resultado_score_familiar_saude = media_ponderada_score_saude / cosseno_do_vetor_resultante_saude_mais_um
    score_saude_view = Math.floor(resultado_score_familiar_saude * 100)

    global_renda_vector_x = VETOR_ARBITRARIO;
    global_renda_vector_y = calculate_tx_com_renda(family_members);
    global_renda_vector = [global_renda_vector_x, global_renda_vector_y]
    renda_vectors.push(global_renda_vector)
    vetor_resultante_renda = resultant_vector(renda_vectors);
    cosseno_do_vetor_resultante_renda_mais_um = 1.0 + cosseno_vector(vetor_resultante_renda);
    media_ponderada_natureza_renda = media(pontuacao_conforme_natureza_da_renda)
    resultado_score_familiar_renda = media_ponderada_natureza_renda / cosseno_do_vetor_resultante_renda_mais_um
    score_renda_view = Math.floor(resultado_score_familiar_renda * 100)

    score_total = score_renda_view + score_saude_view

    output += "<h3>Detalhamento da pontuação</h3>"

    output += "<b style='color: blue'>Pontuação por integrante familiar conforme natureza renda: </b>" + scores_renda.toString() + "<br>"
    output += "<b style='color: blue'>Vetores de renda: </b>" + vetores_renda_view.toString() + "<br>"
    output += "<b style='color: blue'>Vetor global de renda: </b>[" + global_renda_vector.toString() + "]<br>"
    output += "<b style='color: blue'>Media ponderada da natureza de renda: </b>" + media_ponderada_natureza_renda.toString() +"<br>"
    output += "<b style='color: blue'>Cosseno do vetor resultante para peso dos cuidadores + 1: </b>" + cosseno_do_vetor_resultante_renda_mais_um.toString() +"<br>"
    output += "<b>Score relativo à natureza de renda: " + score_renda_view.toString() +"</b><br><br>"


    output += "<b style='color: red'>Pontuação por integrante familiar conforme situação de saúde: </b>" + scores_saude.toString() + "<br>"
    output += "<b style='color: red'>Vetores de saúde: </b>" + vetores_saude_view.toString() +"<br>"
    output += "<b style='color: red'>Vetor global de saúde: </b>[" + global_saude_vector.toString() +"]<br>"
    output += "<b style='color: red'>Media ponderada da situação de saúde e cuidados: </b>" + media_ponderada_score_saude.toString() +"<br>"
    output += "<b style='color: red'>Cosseno do vetor resultante para peso dos cuidadores + 1: </b>" + cosseno_do_vetor_resultante_saude_mais_um.toString() +"<br>"
    output += "<b>Score relativo à situação de saúde: " + score_saude_view.toString() +"</b><br><br>"

    output += "<h3>Pontuação total, questão [17], SIGAA: " + score_total.toString() +"</h3>"

    return output
};




function dt_mask() {
    if ( document.getElementById("dn").value.length == 2 ) {
        document.getElementById("dn").value += "/";
    } else if ( document.getElementById("dn").value.length == 5 ) {
        document.getElementById("dn").value += "/";
    } else {
        document.getElementById("dn").value = document.getElementById("dn").value.replace(/[a-z]/i, "");
        document.getElementById("dn").value = document.getElementById("dn").value.replace(/\/\//i, "/");
    }
};
