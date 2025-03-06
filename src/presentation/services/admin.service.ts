import { StateModel } from "../../data";
import { CustumError, PaginateDto, } from "../../domain";


export class AdminService {

    constructor() { }


    public async listStates(paginationDto: PaginateDto) {

        const { page, limit } = paginationDto;

        try {
            const [total, states] = await Promise.all([
                StateModel.countDocuments(),
                StateModel.find()
                    .skip((page - 1) * limit)
                    .limit(limit)
            ])

            return {
                page: page,
                limit: limit,
                total: total,
                next: `/api/v1/states?page=${(page + 1)}&limit=${limit} `,
                prev: (page - 1 > 0) ? ` /api/v1/states?page=${(page - 1)}&limit=${limit} ` : null,
                states:states

            }

        } catch (error) {
            throw CustumError.internalServe(`${error}`)
        }


    }

}

