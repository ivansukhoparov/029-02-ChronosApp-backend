export type UpdateItemType = {
    name?: string
    status?: boolean
    intervals?: [{
        date?:string
        duration?:number
    }]
}
