interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

interface UserResponse {
  ok: boolean;
  user: User;
}

export type { User, UserResponse };
