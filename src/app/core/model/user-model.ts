export class UserModel {
}
export class Note {
    title : string
    description : string
    color : string
    id : string
    reminder: [Date]
    isArchived: boolean
}
export class Label{
    "label": string;
    "isDeleted": false;
    "userId": string;
}