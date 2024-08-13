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
        enunciado: "a urbanizacao desorganizada contribui para as enchentes no brasil?",
        alternativas: [
            { 
                texto: "sim, contribui",
                afirmacao: "sim, a urbanizaçao desordenada tem relacao ditera com as enchentes do brasil. desde a segunda metade do seculo xx, o crescimento urbano sem planejamento adequado resultou em problemas com a impermeabilizacao do solo e a ocupacao indevida das margens do rios"
            },
            {
                texto: "Nao, nao contribui",
                afirmacao: "embora a preservacao da natureza seja crucial, as enhentes tambem tem causas naturais, como chuvas intensas e drerretimento da neve. Alem disso, a  urbanizacao desordenada e o desmatamnento podem agravar o problema, memsmo com esforços de preservaçao"
            }
        ]
    },
      
];


let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();