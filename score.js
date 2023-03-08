family_members = [];

MAX_SAUDE = 13
MID_SAUDE = 8
MIN_SAUDE = 3

MAX_RENDA = 22

VETOR_ARBITRARIO = 0.5


translator_tipo_renda = {
    tipo_vinculo_00: [22, "Servidor efetivo"],
    tipo_vinculo_01: [22, "Aposentado"],
    tipo_vinculo_02: [22, "Rendimentos"],
    tipo_vinculo_03: [14.08, "Servidor temporário/comissão"],
    tipo_vinculo_04: [14.08, "Microempreendedor"],
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



function push_family_member() {

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

        new_info = {
            nome: nome,
            dn: dn,
            idade: calculate_age(dn),
            renda: renda,
            renda_score: renda_score,
            saude: saude,
            saude_score: saude_score,
            saude_vector: saude_vector,
            renda_vector: renda_vector
        }

        family_members.push(new_info);
        print_info();
        clear_fields();
    } else {
        alert("É necessário preencher todos os campos do formuláio")
    }
};



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
    output += make_score(family_members).toString();
    return output
};


function print_info() {
    document.getElementById('info').innerHTML = load_family_members();
}


function clear_fields() {
    document.getElementById('nome').value = "";
    document.getElementById('dn').value = "";
    clear_radio_selection('renda');
    clear_radio_selection('saude');

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
    return 0;
};


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


    output += "<b style='color: rgb(214, 133, 133);'>Pontuação por integrante familiar conforme situação de saúde: </b>" + scores_saude.toString() + "<br>"
    output += "<b style='color: rgb(214, 133, 133)'>Vetores de saúde: </b>" + vetores_saude_view.toString() +"<br>"
    output += "<b style='color: rgb(214, 133, 133)'>Vetor global de saúde: </b>[" + global_saude_vector.toString() +"]<br>"
    output += "<b style='color: rgb(214, 133, 133)'>Media ponderada da situação de saúde e cuidados: </b>" + media_ponderada_score_saude.toString() +"<br>"
    output += "<b style='color: rgb(214, 133, 133)'>Cosseno do vetor resultante para peso dos cuidadores + 1: </b>" + cosseno_do_vetor_resultante_saude_mais_um.toString() +"<br>"
    output += "<b>Score relativo à situação de saúde: " + score_saude_view.toString() +"</b><br><br>"

    output += "<h2 style='color: red;'>Pontuação total: " + score_total.toString() +"</h2>"

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
