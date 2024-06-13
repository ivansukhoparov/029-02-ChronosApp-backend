export class User {
    id: string
    login: string
    name: string
    email: string
    hash: string
    createsAt: string
    categoriesList: Array<CategoryModel>
}

export class CategoryModel {
    id: number
    name: string
    icon: string | null
}
