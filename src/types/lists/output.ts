export type ListType = {
    id: string
    items: Array<{
        itemId: string
        itemName: string
        itemStatus: boolean
        totalTime: number
    }>
}
