import { Validators } from "../../config";
import { StateModel } from "../../data";
import { StateDto, CustumError, PaginateDto, } from "../../domain";


export class AdminService {

    constructor() { }


    public listStates = async (paginationDto: PaginateDto) => {

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
                states: states

            }

        } catch (error) {
            throw CustumError.internalServe(`${error}`)
        }


    }


    public createState = async (createStateDto: StateDto) => {

        const codeStateExits = await StateModel.findOne({ nameState: createStateDto.codeState })
        if (codeStateExits) throw CustumError.badRequest('codeState already exists');

        const nameStateExits = await StateModel.findOne({ nameState: createStateDto.nameState })
        if (nameStateExits) throw CustumError.badRequest('NameState already exists');

        try {
            const state = new StateModel(createStateDto);

            await state.save();
            return {
                id: state.id,
                nameState: state.nameState,
                codeState: state.codeState,
                available: state.available
            };


        } catch (error) {
            throw CustumError.internalServe(`${error}`)
        }


    }

    public updateState = async (idState: string, updateStateDto: StateDto) => {

        if (!Validators.isMongoID(idState)) {
            throw CustumError.badRequest(`Invalid idState format: ${idState}`);
        }

        const stateData = await StateModel.findOne({ _id: idState })
        if (!stateData) throw CustumError.badRequest('idState not exists');
        
        try {
            const { _id, ...updateData } = updateStateDto;
            const updatedState = await StateModel.findByIdAndUpdate(
                idState,
                updateData,
                { new: true }
            );

            return {
                id: updatedState?._id,
                nameState: updatedState?.nameState,
                codeState: updatedState?.codeState,
                available: updatedState?.available,
                updatedAt: updatedState?.updatedAt
            };
        } catch (error) {
            throw CustumError.internalServe(`${error}`)
        }

    }



}

