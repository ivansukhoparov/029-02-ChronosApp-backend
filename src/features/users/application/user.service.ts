import {UserInputModel} from "../api/models/user.input.model";
import {inject, injectable} from "inversify";
import {UsersRepository} from "../infrastructure/users.repository";
import {User} from "../types/user";
import {BcryptAdapter} from "../../../common/adapters/bcrypt.adapter";
import {UserIdType} from "../types/output";
import {UserCreateDto} from "../types/input";

@injectable()
export class UserService {

    constructor(@inject(UsersRepository) private readonly usersRepository: UsersRepository,
               @inject(BcryptAdapter) private readonly passwordAdapter: BcryptAdapter
    ) {
    }

    async create(inputModel: UserInputModel): Promise<UserIdType> {

        const user: UserCreateDto = {
            login: inputModel.login,
            name: inputModel.login,
            email: inputModel.email,
            hash: await this.passwordAdapter.createHash(inputModel.password),
            createsAt: (new Date()).toISOString(),
            categoriesList: [],
        }
        return await this.usersRepository.create(user)
    }
}