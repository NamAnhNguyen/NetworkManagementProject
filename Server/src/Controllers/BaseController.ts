interface QueryComponent {
    field: string,
    operator: string,
    value: string | number
}

class BaseController {
    model: any;

    constructor(model: any) {
        this.model = model
    }

    async queryExecute(filters: QueryComponent[]) {
        console.log(filters)
        let query = this.model.query
        filters.map(filter => {
            let { field, operator, value } = filter
            switch (operator) {
                case "=":
                    query = query.where(field, value)
                    break;
                case "!=":
                    query = query.whereNot(field, value)
                    break;
                case "contains":
                    query = query.where(field, 'like', `%${value}%`)
                    break;
                case "does not contain":
                    query = query.whereNot(field, 'like', `%${value}%`)
                    break;
                case "begins with":
                    query = query.where(field, 'like', `${value}%`)
                    break;
                case "does not begin with":
                    query = query.whereNot(field, 'like', `${value}%`)
                    break;
                case "ends with":
                    query = query.where(field, 'like', `%${value}`)
                    break;
                case "does not end with":
                    query = query.whereNot(field, 'like', `%${value}`)
                    break;
                default:
                    query = query.where(field, operator, value)
                    break;
            }
        })
        let result = await query;
        return result
    }
}

export default BaseController