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
Aula 3 23 min



