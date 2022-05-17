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

Aula 5 12'

