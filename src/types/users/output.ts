export type UserType = {
    id: string
    name: string
    login: string
    password: string
    email: string
    lists: Array<{
        listId: string
        listName: string
    }>
}
