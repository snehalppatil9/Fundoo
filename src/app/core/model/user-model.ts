export class UserModel {
      
}
export class Note {
title : string
description : string
}
export interface Label{
    "id": string
    "label": string
    "isDeleted": boolean
    "userId": string
}