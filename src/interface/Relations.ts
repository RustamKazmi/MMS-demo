export interface Relation {
    relationId: string,
    relationName: string
}

export interface RelationResponse {
    data: {
        success: boolean,
        message: string,
        data: Relation[]
    }
}