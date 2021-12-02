//chamando o modulo express que cria/simula servidores e armezenando na constante express, o express renderiza toodo o javascript e o ejs para ser visualizado no navegador
const express = require('express');
//instanciando o express e guardando na constante app
const app = express();
//aqui nos estamos usando falando parao express que a nossa view engine ou seja dizendo que a ferramenta que vamos utilizar para renderizar o html é o EJS
app.set("view engine", "ejs");

//aqui estamos definindo a nossa rota uttilizando metodo get que o app herdou do express, no primeiro argumento esta o endereço da nosssa rota, e no seguindo argumento esta a função que vai ser executada quando essa rota for chamada
app.get("/", (req, res) => {
    //o res é o que vai retornar de resposta da chamada da rota com o método render que vai renderixar o nosso index que é o que esta como argumento nessa chamada. OBS: não há necessidade de colocar a extensão EJS pq já dizemos no app.set na linha 6 que estariamos trabalhando com arquivos do tipo EJS
    const items = [
        {
            title: 'D',
            message: "esenvolver aplicações/serviço de forma fácil",
        },
        {
            title: "E",
            message: "JS usa javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: " Nota é 10"
        },
        {
            title: "I",
            message: "nstale o EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "uma linguagem de modelagem para criação de páginas HTML utilizando javascript"

    res.render("pages/index", {
        qualidades: items,
        subtitle: subtitle
    });
});

//obs: o res e o req são parâmetros padôes recebidos por essa função 
app.get("/sobre", (req, res) => {

    

    res.render("pages/about");
});

//o listen é o método/função que escuta uma porta, nesse caso a 8080, isso diz pro nosso servidor que ele esta rodando na nossa maquina e quando a gente chamar a porta 8080, ele chama tudo o que esta aqui 
app.listen(3000);

console.log("O Servidor está rodando!");