import { Request, Response } from "express";





export class ApiController {



    constructor() { }


    IndexCtrl = (req: Request, res: Response) => {
        const data = {
            "Api": "Rest Api Byteon",
            "Version": `1.0.0`,
            "Year": "2022",
            "Developer": "Desarrollado por Byteon",
            "URL": "https://www.instagram.com/jamolina24/"
        }
        res.json(data);

    }




}

