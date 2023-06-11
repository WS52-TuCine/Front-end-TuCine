export interface Gender {
    id: number;
    name: string;
}

export interface Person{
    id: any;
    first_name: string;
    last_name: string;
    Gender_id: any;
    number_dni: string;
    birthdate: string;
    phone: string;
    email: string;
    password: string;
    TypeUser_id: number;
}

export interface Customer {
    id: any;
    Person_id: number
}

export interface Owner {
    id: any;
    Person_id: number;
    bank_account: string;
}