export class UserModel {
    "firstName": string
    "lastName": string
    "username": string
    "password": string
    "cpassword": string
    "cardId" : string
}
export class Service {
    "name": string
    "description": string
    "price": number
    "id": string
}
export class Note {
    title: string
    description: string
    color: string
    id: string
    reminder: [Date]
    userId: string
    data: any
    collaberators: [{}]
    isArchived: boolean
    isDeleted: boolean
    isPined: boolean
    labelIdList: string
    imageUrl: string
    questionAndAnswerNotes: [{}]
}
export class Label {
    label: string;
    isDeleted: false;
    userId: string;
}
export class User {
    "id": string;
    "firstName": string;
    "lastName": string;
    "email": string;
    "password": string;
    "confirmPassword": string;
    "service": string;
}
export class Collaborator {
    "firstName": string;
    "lastName": string;
    "email": string;
    "id": string;
}
export class Editor {
    "message": string
}
export class Reply {
    "message": string
}