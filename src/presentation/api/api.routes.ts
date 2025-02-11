import { Router } from 'express';
import { ApiController } from './api.controller';





export class APIRoutes {


  static get routes(): Router {

    const router = Router();

    const authController = new ApiController(  );
    // Definir las rutas
     router.get('/', authController.IndexCtrl );


    return router;
  }


}

