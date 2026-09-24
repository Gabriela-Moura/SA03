const conteudo = document.querySelector("#conteudo");

const apiKey = "28460911888fbfabc3af2a130b3fe120";

const url = `https://gnews.io/api/v4/top-headlines?country=br&lang=pt&apikey=${apiKey}`;

class Noticia {
    //Método construtor 
    constructor(title, description, image, url, publishedAt) {
        //Atributos - características
        this.titulo = title;
        this.descricao = description;
        this.imagem = image;
        this.url = url;
        this.data_hora = publishedAt;
    }
    //Métodos - ações
    exibir_noticia() {
        conteudo.innerHTML = `
            <h2>${this.titulo}</h2>
            <p>${this.descricao}</p>
            <img src="${this.imagem}" alt="${this.titulo}">
            <a href="${this.url}" target="_blank">Leia a notícia</a>
            <p>${this.data_hora}</p>
        `;
    }
}

async function buscarNoticias() {

    try {
        const resposta = await fetch(url);
        // Transforma a resposta em JSON
        const dados = await resposta.json();

        console.log(dados);

        const noticias = dados.articles.map(noticia => {

            return new Noticia(
                noticia.title,
                noticia.description,
                noticia.image,
                noticia.url,
                noticia.publishedAt
            );

        });

        noticias[0].exibir_noticia();

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