export interface User {
  first_name: string;
  last_name: string;
  patronymic: string;
  gender: string;
  email: string;
  birth_date: string;
  state: 'active' | 'banned';
  about?: string;
  id?: number;
  created_at?: string;
  updated_at?: string;
}
