import { createConnection } from 'typeorm';

//Usando essa API fornecida pelo typeorm para fazer a comunicação com o ormconfig.json
//Assim, entrar com sucesso no postgressql
createConnection();
