npm init
npm i typescript @types/node ts-node-dev -D
npx tsc --init 
No tsconfig mudamos a versao que sera exportada em JS para "target": "es2020",
Cria pasta src - cria arquivo server.ts
No tsconfig: "rootDir": "./src",  +  "outDir": "./dist",
Roda npx tsc (vai criar a pasta dist e o arquivo compiulado sever.js )
Adicionar no scripts: "dev": "ts-node-dev src/server.ts"
Instalou o Express : npm i express. Instalar a tipagem do express (npm i @types/express -D)
