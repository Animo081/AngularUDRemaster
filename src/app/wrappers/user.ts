export class User {
  userId: number;
  username: string;
  email: string;
  description: string;

  constructor(userId: number, username: string, email: string, description: string) {
    this.userId = userId;
    this.username = username;
    this.email = email;
    this.description = description;
  }
}
