import {CreateUserType, UpdateUserType} from "../types/users/input";
import {usersCollection} from "../db/db-collections";
import {createId} from "../utils/common";


export class UsersRepository {
    static async getUserById(id: string) {
    }

    static async addNewUser(createData: CreateUserType) {
        const newId = createId();
        const result = await usersCollection.insertOne({
            ...createData,
            id: newId,
            lists: []
        });
        if (result.insertedId) return newId;
        else return null;
    }

    static async updateUser(id: string, updateData: UpdateUserType) {
        const result = await usersCollection.updateOne({id: id}, {
            ...updateData
        });
        return !!result.matchedCount;
    }

    static async deleteUser(id: string) {
        const result = await usersCollection.deleteOne({id: id});
        return !!result.deletedCount;
    }
}
