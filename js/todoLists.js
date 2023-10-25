import { Task } from "../models/Task";

const t1 = new Task("Tvätta");
const t2 = new Task("Dammsuga");
const t3 = new Task("Diska");

export let todos = [t1, t2, t3];
export let tasksDone = [];
