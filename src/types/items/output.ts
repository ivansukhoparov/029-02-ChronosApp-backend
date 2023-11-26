export type ItemType = {
    id: string
    name: string
    status: boolean
    intervals: [{
        date: string
        duration: number
    }]
}
