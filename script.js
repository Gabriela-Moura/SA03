const conteudo = document.querySelector("#conteudo");

// URL da API
const url = "https://freenewsapi.ai/v1/search?country=BR&lang=pt&size=20";


class Noticia {
    // Método construtor
    constructor(title, description, url, publishedAt, image) {

        // Atributos - características
        this.titulo = title;
        this.descricao = description;
        this.url = url;
        this.data_hora = publishedAt;
        this.imagem = image;
    }

    // Método - ação
    exibir_noticia() {
        const data = new Date(this.data_hora);

    const dataFormatada = data.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    });

        conteudo.innerHTML += `
            <div id="noticia">
                <h2>${this.titulo}</h2>
                <img src="${this.imagem}" alt="${this.titulo}">
                <p>${this.descricao || "Descrição não disponível."}</p>
                <p><strong>Data: </strong> ${dataFormatada}</p>
                <a id="botao" href="${this.url}" target="_blank">Leia a notícia</a>
            </div>
        `;
    }
}

async function buscarNoticias() {

    try {
        // Faz a requisição para a API
        const resposta = await fetch(url);

        // Transforma a resposta em JSON
        const dados = await resposta.json();

        // Transforma cada notícia em um objeto da classe Noticia
        const noticias = dados.results.map(noticia => {

            return new Noticia(
                noticia.title,
                noticia.description,
                noticia.url,
                noticia.published_at,
                noticia.image,
            );

        });

        console.log(noticias[0].dados);

        console.log(noticias[0].image);

        noticias.forEach(noticia => {
            noticia.exibir_noticia();
            console.log(noticia.titulo);
            console.log("Imagem:", noticia.imagem);
        });

        // console.log(noticias[0].titulo);
        // console.log(noticias[0].descricao);
        // console.log(noticias[0].imagem);
        // console.log(noticias[0].url);
        // console.log(noticias[0].data_hora);

    } catch (erro) {

        console.log("Erro:", erro);

    }
}

buscarNoticias();