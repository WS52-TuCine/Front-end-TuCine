export interface Person{
  id: number;
  name: string;
  lastName:string;
  birthdate:number;
  phone:number;
  password:string;
  number_dni:number;
  Genre_id:number;
  TypeUser_id:number;
}

export interface TypeUser{
  id: number;
  name: string;
}
