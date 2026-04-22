import { Request, Response } from "express";
import * as authService from "./service";

export async function register(req: Request, res: Response) {
  try {
    const result = await authService.register(req.body);
    return res.status(201).json({
      message: "Registered successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const result = await authService.login(req.body);

    return res.json({
      message: "Login successful",
      data: result,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
}
