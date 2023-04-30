export class User{
  
  fName!: string;
  lName!: string;
  email!: string;
  password!: string;
  id!: string;

  constructor(fname: string, lname: string, email: string, password: string, id: string = "") {
    this.fName = fname;
    this.lName = lname;
    this.email = email;
    this.id = id;
    this.password = password;
  }

  get_email() : string {
    return this.email;
  }

  get_password(): string {
    return this.password;
  }
}
