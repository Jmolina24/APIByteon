export class StateDto {
    private constructor(
        public readonly _id?: string,
        public readonly codeState?: string,
        public readonly nameState?: string,
        public readonly available: boolean = true
    ) {}

    static validateAndBuild(object: { [key: string]: any }, isUpdate = false): [string?, StateDto?] {
        const { id, _id, codeState, nameState, available } = object;

        let availableBoolean = available !== undefined ? 
            (typeof available === 'boolean' ? available : available === 'true') : true;

        if (!isUpdate) {
            if (!codeState) return ['Missing codeState'];
            if (!nameState) return ['Missing nameState'];
        }

        return [undefined, new StateDto( _id || id, codeState, nameState, availableBoolean)];
    }
}