export class User{
  
  public fName!: string;
  public lName!: string;
  public email!: string;
  public id!: string;
  public password!: string;

  constructor(fname: string, lname: string, email: string, id: string, password: string) {
    this.fName = fname;
    this.lName = lname;
    this.email = email;
    this.id = id;
    this.password = password;
  }

  get_id() : string {
    return this.id;
  }

  get_password(): string {
    return this.password;
  }
}
