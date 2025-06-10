import { Validators } from "../../../config";

export class DocumentTypeDto {
    private constructor(
        public readonly codeType?: string,
        public readonly nameType?: string,
        public readonly stateType?: string,
        public readonly available: boolean = true
    ) { }

    static validateAndBuild(object: { [key: string]: any }, isUpdate = false): [string?, DocumentTypeDto?] {
        const { codeType, nameType, stateType, available } = object;

        let availableBoolean = available !== undefined ?
            (typeof available === 'boolean' ? available : available === 'true') : true;

        if (!isUpdate) {
            if (!codeType) return ['Missing codeState'];
            if (!nameType) return ['Missing nameState'];
            if (!Validators.isMongoID(stateType)) return ['Invalid stateType ID'];
        }

        return [undefined, new DocumentTypeDto(codeType, nameType, stateType, availableBoolean)];
    }
}