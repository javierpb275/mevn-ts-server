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
    try {
      const task: ITask | null = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "task not found" });
      }
      return res.send(task);
    } catch (error) {
      return res.status(500).send(error);
    }
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
    const updatedTask: ITask | null = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(updatedTask);
  }
);

router.delete(
  "/tasks/:id",
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const task: ITask | null = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ message: "task not found" });
      }
      return res.json(task);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
);

export default router;
