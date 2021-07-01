//Esse controller é útil para fazer a intermediação entre nosso service e o usuario
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthUserController } from './controllers/AuthUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureUserLoged } from './middlewares/ensureUserLoged';
import { AllComplimentReceiverController } from './controllers/AllComplimentReceiverController';
import { AllComplimentSenderController } from './controllers/AllComplimentSenderController';
import { AllTagsController } from './controllers/AllTagsController';
import { AllUsersController } from './controllers/AllUsersController';
import { Router } from 'express';

//Exportando essa rota para o server.ts
export const router = Router();

//Para usarmos o controller, fazemos uma nova instância dele!
const UserController = new CreateUserController();
const TagController = new CreateTagController();
const AuthController = new AuthUserController();
const ComplimentController = new CreateComplimentController();
const ComplimentSenderController = new AllComplimentReceiverController();
const ComplimentReceiverController = new AllComplimentSenderController();
const AllUsers = new AllUsersController();
const AllTags = new AllTagsController();

//Essa rota user vai ser chamada e como retorno, teremos o nosso controller
//Como o tratamento que vai analisar se está tudo certo!
router.post('/users', UserController.tratamento);

router.post('/tags', ensureUserLoged, ensureAdmin, TagController.tratamento);

router.post('/session', AuthController.tratamento);

router.post('/compliments', ensureUserLoged, ComplimentController.tratameno);

router.get('/compliments/sender', ensureUserLoged, ComplimentSenderController.tratamento);
router.get('/compliments/receiver', ensureUserLoged, ComplimentReceiverController.tratamento);
router.get('/tags', ensureUserLoged, AllTags.tratamento);
router.get('/users', ensureUserLoged, AllUsers.tratamento);
