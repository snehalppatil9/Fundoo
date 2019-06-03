export class UserModel {
    "firstName":string
    "lastName": string
    "username": string
    "password":  string
    "cpassword":  string
}
export class Note {
    title : string
    description : string
    color : string
    id : string
    reminder: [Date]
    userId : string
    data : any
    collaberators	:[{}]
    isArchived: boolean
    isDeleted : boolean
    isPined : boolean
    imageUrl : string
}
export class Label{
    "label": string;
    "isDeleted": false;
    "userId": string;
}
export class User {
    "id":string;
    "firstName": string;
    "lastName": string;
    "email": string;
    "password": string;
    "confirmPassword": string;
    "service": string;
}
export class Collaborator {
    "firstName" :string;
    "lastName" : string;
    "email" :string;
    "id":string;
}
