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

