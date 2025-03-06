import { Request, Response } from "express";
import { CustumError, PaginateDto } from "../../domain";
import { AdminService } from "../services";
import { StateModel } from "../../data";




export class AdminController {



    constructor( 
        private readonly adminService: AdminService,
    ) { }



    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustumError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.log(`${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }


    getlistState = (req: Request, res: Response) => {

        const { page = 1, limit = 10 } = req.query;
        const [error, paginationDto] = PaginateDto.create(+page, +limit);
        if (error) return res.status(400).json({ error });

        
        this.adminService.listStates( paginationDto! )
            .then((states) => res.json(states))
            .catch(error => this.handleError(error, res))
    }



}

