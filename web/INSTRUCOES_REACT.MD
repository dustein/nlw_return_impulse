npm create vite@latest
entra na pasta do projeto! ! (web no ex)
npm install
apagar arquivos desnecessarios (restaram App.tsx, main.tsx e vite-env.ts)
remover importacoes em main.tsx e App.tsx
Interface do typescript para dizer o que espera de um parametro
Instalacao do Tailwindcss -D (conforme doc do site oficial)
npm install -D tailwindcss postcss autoprefixer (instrucoes no "using postCSS"
npx tailwindcss init
editar o tailwind.config -> content: ["./src/**/*.tsx"],
cria arquivo no src global.css pro css global
no main.ts importar o global.css
No React quando queremos criar classes, nao usamos 'class' mas sim 'className'
Dentro do className escreveremos os codigos de tailwindcss
Dentro de src cria pasta components - arquivo Widget.tsx
Vamos usar os icones da biblioteca phosphor
npm install phosphor-react
No arquivo tailwind.config podemos estender a propriedade de cores por ex
Para acessibilidade - Aria/Leitor de tela - usaremos o headless / popover
npm install @headlessui/react
Como essa biblio ja e integrada com o react, podemos tirar a parte que codamos de useState que ele vai fazer isso
Criou o Widget. Depois o WidgetForm.
Config pra CSS diferente - responsividade - se for tela pequena celular ou tablet/desktop no WidgetForm:  w-[calc(100vw-2rem)] md:w-auto
Cria componente closebutton
Instalou plugin do tailwindcss: npm install -D @tailwindcss/forms
Conforme instrucao do plugin adicionar no tailwindcss.config "require('@tailwindcss/forms')
Para estilizar a scrollbar, instalou plugin externo no tailwind: npm install --save-dev tailwind-scrollbar. Adicionar no config o require('tailwind-scrollbar')
Para o screenshot da tela, instalar ferramente html2canvas. 
base64image tira pega a imagem que foi feita no screenshot com o html2canvas e converte para texto (veja inspecionar o elemento o texto e cole no navegador)

Para fazer a integracao com o backend usaremos a biblioteca axios
cria pasta lib (ou service, ou outra). Cria arquivo api.ts
Em FeedbackContentStep no widgetForm/Steps onde mandavamnos um console.log apenas dentro da funcao handleSubmitFeedback, vamos fazer uma chamada para a api.post na rota fedbacks, e iremos enviar os dados que a rota espera.

Configurar variavel de ambiente do vite criando o arquivo .env.local
Importar a variavel de ambiente no vite: "import.meta.env" na /lib/api.ts
Reestart o servidor, pois trocou variavel de ambiente, senao ele nao ve

Agora vamos jogar o projeto no Github pra comecar a fazer o deploy

Deploy do frontend vai ser usada a Vercel. Importar projeto no site da Vercel.
Como nao fizemos deploy do back, na configuracao de enviromment variables colocar la o VITE_API_URL mas coloca um site qualquer so para testar. Depois DEPLOY

Deploy do backend vai ser usada a Railway. Precisaremos fazer alguas modificacoes no back.
Alterar no schema.prisma o provider do banco de dados, ao inves de sqlite, vamos configurar para uso do postgress. Depois tem que setar a nova DATABASE_URL no arquivo .env
Veja que o nosso projeto e em typescript, mas o que vai pro deploy sao os arquivos em JS.
Adicionar a pasta dist no gitignore porque ela nao pode ir para producao
No tsconfig.json adicionar  "include": ["src"] para incluir apenas o que esta na pasta src na conversao de TS para JS
No package.json criar o script "build": "npx tsc",
E um script "start": "node dist/server.js", para executar o server.js dessa vez

Entrar no Railway (e tipo uma Vercel ou Heroko)
Fazer deploy do Postrgesql
Fazer deploy do diretorio github. Configurar pasta /server. Confirmuar start command para o script start que criamos (npm run start). O Healthcheck Pathsera uma rota para o Railway saber que nssa aplicacao esta funcional, depois configuramos pois nao criamos essa rota. Em variaveis, configuirar as variavde ambiente. No nosso caso colocaremos a DATABASE_URLm, e no value pegar o valor de conexao do servico do postgres criado no connect, Postgresql connection url.
Agora temos que configurar a variavel PORT para a porta que esta sendo usada pela aplicacao (estavamos usando a 3333).
No caso do Railways ele que precisa definir a porta. Entao no arquivo server usaremos process.env.PORT.



