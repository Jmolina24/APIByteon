import { Router } from 'express';
import { AdminController } from './state.controller';
import { StateService } from '../../services';



export class AdminRoutes {


    static get routes(): Router {

        const router = Router();

        const stateService = new StateService();
        const adminController = new AdminController( stateService );

        // Definir las rutas
        router.get('/states', adminController.getlistState );
        router.post('/states', adminController.createState );
        router.put('/states/:idState', adminController.updateState );

        return router;

    }

}

