import { Router } from 'express';
import { documentTypeController } from './documentType.controller';
import { StateService } from '../../services';



export class documentTypeRoutes {


    static get routes(): Router {

        const router = Router();

        const stateService = new StateService();
        const adminController = new documentTypeController( stateService );

        // Definir las rutas
        router.get('/documentType', adminController.getlistState );
        router.post('/documentType', adminController.createState );
        router.put('/documentType/:idState', adminController.updateState );

        return router;

    }

}

