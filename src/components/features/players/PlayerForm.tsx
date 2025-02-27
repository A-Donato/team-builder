import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

export function PlayerForm() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send data to the backend API
    const response = await fetch('/api/addPlayer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, position }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Player added:", data);
      // Optionally reset the form or provide feedback
      setName("");
      setPosition("");
    } else {
      console.error("Error adding player");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Position</Label>
        <Select onValueChange={setPosition}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            {positions.map((pos) => (
              <SelectItem key={pos} value={pos}>
                {pos}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full">
        Add Player
      </Button>
    </form>
  );
} 