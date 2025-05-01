import type {User} from "../domain/User.ts";

export class GetListUsers {
    constructor() {}

    public async getAll(): Promise<User[]> {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data: User[] = await response.json();
        return data;
    }
}