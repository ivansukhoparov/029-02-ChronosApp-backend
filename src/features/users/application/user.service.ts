import {UserInputModel} from "../api/models/user.input.model";
import {inject, injectable} from "inversify";
import {UsersRepository} from "../infrastructure/users.repository";
import {User} from "../types/user";
import {BcryptAdapter} from "../../../common/adapters/bcrypt.adapter";

@injectable()
export class UserService {

    constructor(@inject(UsersRepository) private readonly usersRepository: UsersRepository,
                @inject(BcryptAdapter) private readonly passwordAdapter: BcryptAdapter
    ) {
    }

    async create(inputModel: UserInputModel) {
        let user = new User()

        user.login = inputModel.login
        user.name = inputModel.login
        user.email = inputModel.email
        user.hash = await this.passwordAdapter.createHash(inputModel.password)
        user.createsAt = (new Date()).toISOString()
        user.categoriesList = []

        // userId = await this.usersRepository.create(user)

    }
}