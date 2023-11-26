export type UpdateUserType = {
    name?: string
    login?: string
    password?: string
    email?: string
    lists?: Array<{
        listId?: string
        listName?: string
    }>
}

export type CreateUserType = {

    name: string
    login: string
    password: string
    email: string
}
