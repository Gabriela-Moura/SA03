//--------------------------------------------- CLIMA ----------------------------------------------------------------
const buscar = document.querySelector("#buscar");
const resultadoClima = document.querySelector("#resultadoClima");
const titulo_clima = document.querySelector("#titulo_clima");

async function buscarClima() {

    // Solicita permissão ao usuário para acessar sua localização
    navigator.geolocation.getCurrentPosition(
        async (posicao) => {

            //Busca a localização do usuário - latitude e longitude
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            try {

                titulo_clima.style.display = "none";
                buscar.style.display = "none";
                
                //Requisição para a API Open-Meteo usando a localização do usuário
                const respostaClima = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
                );

                //Transforma a resposta em JSON
                const dadosClima = await respostaClima.json();

                console.log("Clima:", dadosClima);

                //Mostra o clima para o usuário na página 
                //Acessa os dados atuais do clima (current) e pega a temperatura medida a 2 metros de altura (temperature_2m), a velocidade do vento media a 10 metros e a umidade a 2 metros de altura
                resultadoClima.innerHTML = `
                    <h2>Clima atual</h2>

                    <p><strong>Temperatura: </strong>
                        ${dadosClima.current.temperature_2m} °C
                    </p>

                    <p><strong>Umidade: </strong>
                        ${dadosClima.current.relative_humidity_2m}%
                    </p>

                    <p><strong>Vento: </strong>
                        ${dadosClima.current.wind_speed_10m} km/h
                    </p>
                `;

            } catch (erro) {

                console.log("Erro ao buscar clima:", erro);

                resultadoClima.textContent =
                    "Não foi possível buscar o clima.";
            }
        },

        (erro) => {
            
            //É executado caso o usuário não permita que o sistema acesse a localização
            console.log("Erro de localização:", erro);

            resultadoClima.textContent =
                "Não foi possível acessar sua localização.";
        }
    );
}

buscar.addEventListener("click", buscarClima);