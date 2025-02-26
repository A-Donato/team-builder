export interface Team {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Player {
  id: string;
  team_id: string;
  name: string;
  position: string;
  created_at: string;
  updated_at: string;
}

export interface Match {
  id: string;
  team_id: string;
  opponent: string;
  date: string;
  created_at: string;
  updated_at: string;
} 