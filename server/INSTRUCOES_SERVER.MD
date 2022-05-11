npm init
npm i typescript @types/node ts-node-dev -D
npx tsc --init 
No tsconfig mudamos a versao que sera exportada em JS para "target": "es2020",
Cria pasta src - cria arquivo server.ts
No tsconfig: "rootDir": "./src",  +  "outDir": "./dist",
Roda npx tsc (vai criar a pasta dist e o arquivo compiulado sever.js )
Adicionar no scripts: "dev": "ts-node-dev src/server.ts"
Instalou o Express : npm i express. Instalar a tipagem do express (npm i @types/express -D)
Em producao usaremos o banco de dados Postgress
Mas em desenvolvimento usaremos o SQLite
Usaremos a ORM Prisma para comunicar com o banco de dados
npm i prisma -D ( e mais para a producao em si (npm i @prisma/client)
Executar o npx prisma init - vai criar a pasta prisma, um arquivo .env e o .gitignore
Configurar o schema.prisma para usar o SQLite e o .env
npx prisma migrate dev - cria a tabela . Nome que pede e da ultima acao, no caso usamos "create feedbacks"
O prisma tem um visualizador do BD embutido - npx prisma studio
Comecar a configurar as rotas
Cria arquivo src/prisma.ts
Passando configuracaso no parametro do Prismaclient "log: ['query']" para cada operacao(query) no BD seja impresso o log no console para vermos as operacoes
Para envio de email, usaremos a biblioteca nodemailer (e instalar op @types/nodemailr -D)
Precisamos entao de um servico de envio de emails, que na maioria das vezes nao criamos em nossa maquina, o SMTP. Usamos um servico externo. Existem vrariosa servicos, como o mailchimp. Mas para desenvolvimento usaremos o mailtrap. Copiar a configuracao do site e jogar no server.ts
SOLID
Vamos entao separar as rotas em um arquivo proprio
Para isso no arquivo routes, temos que criar o Route() que vai substituir ali o app, e depois exportar para ser importado no server.ts para uso no app.use(routes)
Criamos pasta repositories (poderia ser 'database') sao os aqruivos que serao os responsaveis para fazer a comunicacao com o banco de dados, podemos separar um arquivo por entidade.
Dentro do repositories criamos ainda a pasta Prisma.
Criamos uma nova pasta para cada funcionalidade separada, vamos nomear use-cases (casos de uso) cada acao que um ator pode fazer dentro da aplicacao
AUla 3 1:21




