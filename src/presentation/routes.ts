import { Router } from 'express';
import { APIRoutes } from './api/api.routes';
import { AdminRoutes } from './admin/states/state.routes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use('/api/v1', APIRoutes.routes );
    router.use('/api/v1/admin', AdminRoutes.routes );
    return router;
  }


}

