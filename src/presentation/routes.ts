import { Router } from 'express';
import { APIRoutes } from './api/api.routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/v1', APIRoutes.routes );
    return router;
  }


}

