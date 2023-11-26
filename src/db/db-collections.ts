import {client} from "./db";
import {ItemType} from "../types/items/output";
import {UserType} from "../types/users/output";
import {ListType} from "../types/lists/output";

export const db = client.db("node-chatter-chrono");

export const usersCollection = db.collection<UserType>("users");
export const listsCollection = db.collection<ListType>("users");
export const itemsCollection = db.collection<ItemType>("users");
