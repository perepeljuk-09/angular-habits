import { difficultType } from "../enums/difficultType";
import { positiveType } from "../enums/positiveType";
import { resetType } from "../enums/resetType";

export interface ITodo {
    id: number;
    title: string;
    description: string;
    positiveType: positiveType;
    difficultType: difficultType;
    resetType: resetType;
}