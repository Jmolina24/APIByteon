import { Request, Response } from "express";
import { StateDto, CustumError, PaginateDto } from "../../../domain";
import { StateService } from "../../services";




export class documentTypeController {



    constructor(
        private readonly stateService: StateService,
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
        if (error) {
            res.status(400).json({ error });
            return;
        }
        this.stateService.listStates(paginationDto!)
            .then((states) => res.json(states))
            .catch(error => this.handleError(error, res))
    }


    createState = (req: Request, res: Response) => {
        const [error, createStateDto] = StateDto.validateAndBuild(req.body);
        if (error) { res.status(400).json({ error }); return }
        this.stateService.createState(createStateDto!)
            .then((data) => res.status(201).json(data))
            .catch(error => this.handleError(error, res));
    }

    updateState = async (req: Request, res: Response) => {
        const { idState } = req.params;
        this.stateService.updateState(idState, req.body)
        .then((data) => res.json(data))
        .catch(error => this.handleError(error, res));
    };
    

}

