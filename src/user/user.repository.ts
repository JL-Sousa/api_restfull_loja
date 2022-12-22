export class UserRepository {
  private users = [
    {
      name: 'Jonyelson Lopes',
      email: 'rose@gmail.com',
      password: '1234',
    },
    {
      name: 'Ezequias Sousa',
      email: 'ezequias@gmail.com',
      password: '123456',
    },
  ];

  async save(user) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }
}
