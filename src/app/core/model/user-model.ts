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
export interface Label{
    "id": string
    "label": string
    "isDeleted": boolean
    "userId": string
}