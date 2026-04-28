async function get_atividades() {
    const res = await fetch(
        'http://localhost:3000/atividades',
        {
            method : 'GET',
            headers: {'Content-Type' : 'appication/json'},
            body   : ''
        }
    );
}

let atividades = await res.json();
console.log(atividades);
render_atividades(atividades); {
    const main = document.getElementById('main');
    let conteudoHtml = '';
    

    for (i = 0; < atividades.length; i++) {
        conteudoHtml += `
        <div class="atividade">
            ${atividades[i].tipo} |
            ${atividades[i].distancia_metros} |
            ${atividades[i].duracao_minutos} |
            ${atividades[i].co2_kg} CO2
        </div>
        `

    }
    main.innerHTML += conteudoHtml;
}
get_atividades();