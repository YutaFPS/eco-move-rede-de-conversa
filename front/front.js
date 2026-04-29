async function post_atividades() {
    const res = await fetch(
        'http://localhost:3001/atividades',
        {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body   : ''
        }
    );
}

async function get_atividades() {
    const res = await fetch(
        'http://localhost:3001/atividades'
    );

    let atividades = await res.json();
    console.log(atividades);
    render_atividades(atividades);
}


function render_atividades(atividades) {
    const main = document.getElementById('main');
    let conteudoHtml = '';
    

    for (i = 0; i < atividades.length; i++) {
        conteudoHtml += `
        <div class="atividades">
            ${atividades[i].nome} |
            ${atividades[i].tipo} |
            ${atividades[i].distancia_metros} |
            ${atividades[i].duracao_minutos} |
            ${atividades[i].foto_url} |
            ${atividades[i].co2_kg} CO2
        </div>
        `

    }
    main.innerHTML += conteudoHtml;
}
get_atividades();
post_atividades();