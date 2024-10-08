import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{ "id": "1", "name": "User1", "role": "engineer" },
    { "id": "2", "name": "User2", "role": "doctor" },
    { "id": "3", "name": "User3", "role": "admin" },
    { "id": "4", "name": "User4", "role": "engineer" },
    { "id": "5", "name": "User5", "role": "engineer" },
    { "id": "6", "name": "User6", "role": "engineer" },
    { "id": "7", "name": "User7", "role": "engineer" },
    { "id": "8", "name": "User8", "role": "admin" },
    { "id": "9", "name": "User9", "role": "doctor" },
    { "id": "10", "name": "User10", "role": "engineer" },
    { "id": "11", "name": "User11", "role": "engineer" },
    { "id": "12", "name": "User12", "role": "doctor" },
    { "id": "13", "name": "User13", "role": "doctor" },
    { "id": "14", "name": "User14", "role": "doctor" },
    { "id": "15", "name": "User15", "role": "admin" },
    { "id": "16", "name": "User16", "role": "doctor" },
    { "id": "17", "name": "User17", "role": "doctor" },
    { "id": "18", "name": "User18", "role": "engineer" },
    { "id": "19", "name": "User19", "role": "doctor" },
    { "id": "20", "name": "User20", "role": "engineer" }]

    findAllQuery(role?: 'doctor' | 'engineer' | 'admin') {
        if (role) {
            return this.users.filter((user: any) => user.role === role)
        } {
            return this.users
        }
    }

    findOne(id: string) {
        if (id) {
            return this.users.find(user => user.id === id)
        }
    }
    create(user: { name: string, role: string }) {
        const usersByHighestId = [...this.users].sort((a, b) => parseInt(b.id) - parseInt(a.id));
        const newUser = {
            id: (parseInt(usersByHighestId[0].id) + 1).toString(),
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: string, updatedUser: { name?: string, role?: string }) {
        const updatedUsers= this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
           
            return user
        })
        this.users = updatedUsers;
        return this.findOne(id)
    }
    delete(id: string) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
