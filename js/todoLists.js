import { Task } from "../models/Task";

const t1 = new Task("Tvätta", false);
const t2 = new Task("Dammsuga", false);
const t3 = new Task("Diska", false);

export let todos = [t1, t2, t3];
export let tasksDone = [];
