import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  position: z.enum(["Goalkeeper", "Defender", "Midfielder", "Forward"], {
    required_error: "Please select a position",
  }),
}); 