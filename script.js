const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você acha que o homem tem ralação direta com a existência atual de enchentes e inundações",
        alternativas: [
            {
                texto: "Sim, acredito que tenha relação",
                afirmacao: " As enchentes são fenomenos naturais, mas a ação humana intensifica esse problema. Os rios raissa têm leitos maiores e menores, e em áreas planas(planícies de inundações), o leito maior é inundado durante cheias  "  
       ,
            },
            {
                texto: "Não, acredito que não tenha relação ",
                afirmacao: " As enchentes também ocorrem naturalmente, independentemente da ação humana. As elaborações dos cursos d'ag."
            }
        ]
    },
    {
        enunciado: "PERGUNTA 2",
        alternativas: [
            {
                texto: "RESPOSTA 1",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "RESPOSTA 2",
                afirmacao: "AFIRMATIVA RESPOSTA 2"
            }
        ]
    },
    {
        enunciado: "PERGUNTA 3",
        alternativas: [
            {
                texto: "RESPOSTA 1",
                afirmacao: "AFIRMATIVA RESPOSTA 1"
            },
            {
                texto: "RESPOSTA 2",
                afirmacao: "AFIRMATIVA RESPOSTA 2."
            }
        ]
    },
      
];