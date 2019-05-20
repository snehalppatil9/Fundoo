export class UserModel {
      
}
export class Note {
title : string
description : string
color : string
}
export interface Label{
    "id": string
    "label": string
    "isDeleted": boolean
    "userId": string
}