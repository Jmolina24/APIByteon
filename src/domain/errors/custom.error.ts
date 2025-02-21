


export class CustumError extends Error {



    constructor(
        public readonly statusCode: number,
        public readonly messege: string,
    ) {
        super(messege)
    }


    static badRequest(messege: string) {
        return new CustumError(400, messege);
    }

    static unauthorized(messege: string) {
        return new CustumError(401, messege);
    }

    static forbidden(messege: string) {
        return new CustumError(403, messege);
    }

    static notFound(messege: string) {
        return new CustumError(404, messege);
    }

    static internalServe(messege: string) {
        return new CustumError(500, messege);
    }

}