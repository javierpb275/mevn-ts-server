import { Router, Request, Response } from "express";
import Task, { ITask } from "../models/Task";

const router: Router = Router();

router.get("/tasks", async (req: Request, res: Response): Promise<Response> => {
  const tasks: ITask[] = await Task.find();
  return res.json(tasks);
});

router.get(
  "/tasks/:id",
  async (req: Request, res: Response): Promise<Response> => {
    return res.send("get /tasks/:id");
  }
);

router.post(
  "/tasks",
  async (req: Request, res: Response): Promise<Response> => {
    const { title, description } = req.body;
    const task: ITask = new Task({ title, description });
    await task.save();
    return res.status(201).json(task);
  }
);

router.put(
  "/tasks/:id",
  async (req: Request, res: Response): Promise<Response> => {
    return res.send("put /tasks/:id");
  }
);

router.delete(
  "/tasks/:id",
  async (req: Request, res: Response): Promise<Response> => {
    return res.send("delete /tasks/:id");
  }
);

export default router;
