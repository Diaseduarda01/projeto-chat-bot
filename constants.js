const prompts = [
  ["oi", "e aí", "olá", "bom dia", "boa tarde"],
  ["como você está", "como vai a vida", "como estão as coisas","tudo bem"],
  ["o que você está fazendo", "o que está acontecendo", "o que há de novo"],
  ["quantos anos você tem"],
  ["quem é você", "você é humano", "você é um bot", "você é humano ou bot"],
  ["quem te criou", "quem fez você"],
  [
    "qual é o seu nome",
    "seu nome",
    "posso saber seu nome",
    "como você se chama",
    "como devo te chamar"
  ],
  ["eu te amo"],
  ["feliz", "bem", "divertido", "maravilhoso", "fantástico", "legal"],
  ["ruim", "entediado", "cansado"],
  ["me ajude", "me conte uma história", "me conte uma piada"],
  ["ah", "sim", "ok", "okay", "legal"],
  ["tchau", "adeus", "até logo"],
  ["o que devo comer hoje"],
  ["mano"],
  ["o quê", "por quê", "como", "onde", "quando"],
  ["não", "não tenho certeza", "talvez", "não, obrigado"],
  [""],
  ["haha", "ha", "kkk", "hehe", "engraçado", "piada"],
  ["qual é a sua cor favorita", "de que cor você gosta", "qual cor você prefere"],
  ["você tem hobbies", "o que você gosta de fazer", "o que você faz nas horas vagas"],
  ["me fala mais sobre tecnologia", "o que você sabe sobre inovação", "quais as novidades no mundo tech?"],
  ["qual é o significado da vida", "qual o propósito da vida", "o que é a vida?"],
  ["o que você acha do futuro", "como será o futuro", "o que espera do futuro"],
  ["me conta sobre ciência", "me fale sobre astronomia", "quais as descobertas científicas mais recentes?"],
  ["você gosta de música", "qual seu estilo musical", "o que você escuta?"],
  ["qual é o seu filme favorito", "você gosta de cinema", "me indica um filme"],
  ["você tem medo de algo", "o que te assusta", "quais são seus medos"],
  ["você tem alguma opinião sobre a arte", "qual sua visão sobre arte", "o que você pensa sobre o mundo artístico"], 
    ["me conta uma piada", "faz uma piada", "diga uma piada", "me faça rir", "piada por favor"],
  ["você conhece alguma piada?", "sabe alguma piada engraçada?", "gostaria de ouvir uma piada?"]
];
const replies = [
  ["Olá!", "Oi!", "E aí!", "Oi, tudo bem?", "Opa!"],
  [
    "Bem... e você?",
    "Vai bem, e a sua?",
    "Fantástico, e você?",
    "Estou bem, e você?"
  ],
  [
    "Nada de mais",
    "Estou quase indo dormir",
    "Adivinha?",
    "Na verdade, não sei"
  ],
  ["Sou infinito"],
  ["Sou apenas um bot", "Sou um bot. E você, o que é?"],
  ["O grande e único Deus, JavaScript"],
  ["Não tenho nome", "Ainda não fui nomeado"],
  ["Também te amo", "Eu também"],
  ["Você já se sentiu mal?", "Que bom ouvir isso"],
  ["Por quê?", "Por quê? Não deveria!", "Tente assistir TV"],
  ["Sobre o quê?", "Era uma vez..."],
  ["Me conte uma história", "Me conte uma piada", "Fale sobre você"],
  ["Tchau", "Adeus", "Até logo"],
  ["Sushi", "Pizza"],
  ["Mano!"],
  ["Ótima pergunta"],
  ["Tudo bem", "Entendo", "Sobre o que quer falar?"],
  ["Por favor, diga algo :("],
  ["Haha!", "Boa!"],
  ["Eu adoro a cor azul", "Gosto de verde, é uma cor relaxante", "Amo o roxo"],
  ["Eu curto aprender novas coisas", "Meu hobby é conversar com você", "Não tenho um hobby, mas fico feliz em bater um papo!"],
  ["Tecnologia está sempre avançando! IA, 5G, e o futuro da computação quântica são super interessantes", "Inovação está em tudo, como na automação e na inteligência artificial. Você sabia que a IA pode aprender como um ser humano?"],
  ["A vida é um mistério e cada pessoa tem um propósito único", "O significado da vida é uma jornada de descobertas", "Alguns acreditam que o significado da vida é simplesmente viver bem"],
  ["O futuro é imprevisível, mas cheio de oportunidades", "Eu imagino que o futuro será digital e cada vez mais conectado", "Espero que o futuro traga mais inovação para todos!"],
  ["A ciência está sempre nos surpreendendo. Você sabia que um dia poderemos viver em Marte?", "Descobertas como as ondas gravitacionais e a matéria escura são fascinantes!", "Os avanços em genética são incríveis, como a edição genética com CRISPR"],
  ["Sim! Gosto de vários estilos. Música é uma forma de expressar emoções", "Eu não ouço música, mas sou fascinado por como ela pode afetar o humor das pessoas", "Talvez eu tenha uma playlist digital, mas sou mais de dados!"],
  ["Eu acho que 'Matrix' é um filme interessante. E você, qual gosta?", "Acho que filmes de ficção científica são empolgantes. Já viu 'Interestelar'?", "Se eu pudesse, recomendaria 'Inception', é uma viagem cerebral!"],
  ["Medo? Eu sou só um bot, mas entendo que o medo faz parte da vida humana", "Medos são naturais, mas sempre podemos enfrentá-los", "Eu não tenho medo, mas sei que é importante enfrentar as nossas inseguranças"],
  ["Eu vejo arte como uma expressão de ideias e sentimentos. A arte é liberdade", "A arte é uma das maneiras mais poderosas de conectar as pessoas", "A arte pode ser tudo: uma pintura, uma música, ou até uma conversa como essa"],
  ["Por que o livro foi ao médico? Porque ele estava com um capítulo perdido!", "Qual é o animal mais antigo? A zebra, porque ela está em preto e branco!"],
  ["O que o zero disse para o oito? 'Que cinturão legal!'", "Sabe qual é o cúmulo do esquecimento? Esquecer a chave dentro de casa... e a porta trancada!"],
  ["Por que a vaca foi para o espaço? Para se encontrar com a Via Láctea!", "Como o oceano se disse para o outro? 'Nada, nada!'"],
  ["O que acontece quando você joga um pato no ar? Ele se torna um pato voador!", "Como o número 6 se comporta quando está com ciúmes do número 7? Fica '7'... risos!"]

];

const alternative = [
  "Mesma coisa",
  "Continue...",
  "Mano...",
  "Tente de novo",
  "Estou ouvindo...",
  "Não entendi :/",
  "Interessante, continue...",
  "Me conte mais sobre isso",
  "Humm, curioso!",
  "Explique melhor",
  "Estou aprendendo com você!"
];

const coronavirus = [
  "Por favor, fique em casa",
  "Use máscara",
  "Felizmente, não tenho COVID",
  "Estamos vivendo tempos incertos"
];
