export interface UserInterface {
  name: { first: string, last: string, title: string };
  gender: string;
  email: string;
  login: { username: string, uuid: string };
  dob: { date: string, age: number };
  phone: string;
}
