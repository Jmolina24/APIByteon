
export class PaginateDto {

    private constructor(
        public readonly page: number,
        public readonly limit: number
    ) { }


    static create(page: number = 1, limit: number = 10): [string?, PaginateDto?] {

        if (isNaN(page) || isNaN(limit)) return ['Page and Limit must be numbers'];

        if ( page <= 0 ) return ['Page must be greater than 0'];
        if ( limit <= 0 ) return ['Limit must be greater than 0'];

        return [undefined, new PaginateDto ( page, limit )]

    }


}


