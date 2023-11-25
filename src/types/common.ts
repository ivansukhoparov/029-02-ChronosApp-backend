type ItemType = {
    id: string
    name: string
    status: boolean
    intervals: [{
        date:string
        duration:number
    }]
}

type UserType = {
    id: string
    name: string
    login: string
    password: string
    email: string
    list: Array<{
        itemId: string
        itemName: string
        itemStatus: boolean
        totalTime: number
    }>
}

