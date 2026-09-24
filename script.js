const conteudo = document.querySelector("#conteudo");

// URL da API freenewsapi.ai
const url = "https://freenewsapi.ai/v1/search?country=BR&lang=pt&size=20";

//Utilizei a orientação a objetos para declarar os atributos que todas as notícias devem ter. Esses atributos são recebidos pela API.
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

        // Formatei a data pois antes ela aparecia em um formato difícil de entender para o usuário.
        const data = new Date(this.data_hora);
        // toLocaleString() transforma a data para o formato usado no Brasil

        // "pt-BR" é o padrão brasileiro
        const dataFormatada = data.toLocaleString("pt-BR", {
            //dateStyle: "short" mostra a data de forma curta. Exemplo: 24/09/2026.
            dateStyle: "short",
            //timeStyle: "short" mostra a hora de forma curta. Exemplo: 12:01.
            timeStyle: "short"
        });

        //Mostra a notícia na index
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
        //map() percorre e transforma cada notícia em um objeto da classe Noticia
            return new Noticia(
                noticia.title,
                noticia.description,
                noticia.url,
                noticia.published_at,
                noticia.image,
            );

        });

        noticias.forEach(noticia => {
            noticia.exibir_noticia();
            console.log(noticia.titulo);
            console.log("Imagem:", noticia.imagem);
        });

    } catch (erro) {

        console.log("Erro:", erro);

    }
}

buscarNoticias();