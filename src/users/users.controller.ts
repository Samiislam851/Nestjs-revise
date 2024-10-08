import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }


    // GET /users
    // GET /users/:id
    // POST /users/:id
    // PATCH /users/:id
    // DELETE /users/:id


    //query param
    // If there is something given in role query param it will return the role
    // else it will return empty array
    @Get()
    findAllQuery(@Query('role') role?: 'doctor' | 'engineer' | 'admin') {
        return this.usersService.findAllQuery(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id)
    }

    @Post()         //POST /users
    create(@Body() user: { name: string, role: string }) {
        return this.usersService.create(user)
    }

    @Patch(':id') // PATCH   /users/:id
    update(@Param('id') id: string, @Body() updatedUser: {}) {
        return this.usersService.update(id,updatedUser)
    }

    @Delete(':id')  // DELETE /users/:id
    delete(@Param('id') id: string) {
        return this.usersService.delete(id)
    }
}
