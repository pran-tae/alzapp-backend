import { Injectable } from '@nestjs/common';

export type User = {
  _id: string;
  name: string;
  email: string;
};
@Injectable()
export class UserService {
  getOne(id: string): User {
    // return 1 user
    const user = {
      _id: id,
      name: 'Term',
      email: 'test@mail.com',
    };
    console.log('users/getOne', user);
    return user;
  }
}
