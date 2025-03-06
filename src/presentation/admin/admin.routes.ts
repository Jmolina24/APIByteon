import { Router } from 'express';
import { AdminController } from './admin.controller';
import { AdminService } from '../services';





export class AdminRoutes {


    static get routes(): Router {

        const router = Router();

        const adminService = new AdminService();
        const adminController = new AdminController( adminService );      

        // Definir las rutas
        router.get('/states', adminController.getlistState );


        return router;

    }


}

