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
                afirmacao: " As enchentes também ocorrem naturalmente, independentemente da ação humana. As elaborações dos cursos d'água e as cheias são parte do ciclo natural dos rios."
            }
        ]
    },
    {
        enunciado: " você acha qua a partir do momento que a populaçaõ começar a contrubuir com a preservação da natureza, as enchentes irão parar de acontecer?",
        alternativas: [
            {
                texto: " Sim, eu acho que irãõ parar",
                afirmacao: " Se a população contribuir significativamente para a oreservação da natureza, as enchentes podem ser reduzidas. Medidas como:preservar matas, raissa,descartar corretamente residuos sólidose conservar áreas de água ajudam a prevenir enchentes."
            },
            {
                texto: " Não, eu acho que não irão parar",
                afirmacao: " Embora a preservação da natureza seja crucial, as enchentes tambem têm causas naturais, como chuvas intensas e "
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