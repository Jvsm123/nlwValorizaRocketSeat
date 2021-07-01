//Essa é a parte central, onde podemos dizer que é nosso servidor,
//ele vai "Juntar tudo"
import Express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import "reflect-metadata";

import { router } from "./rotas";

import "./database";

const app = Express();

app.use( Express.json() );

app.use( router );

//Nosso middleware de erro:
app.use( ( err: Error, req: Request, res: Response, next: NextFunction ) =>
{
  if( err instanceof Error )
  {
    return res.status( 400 ).json(
    {
      error: err.message
    });
  }

  return res.status( 500 ).json(
  {
    status: "error",
    message: "Internal Server Error!!!",
  });
});

app.listen(8080, () =>
{
  console.log('servidor está rodando!');
});
