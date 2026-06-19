export interface Prof {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
    street: string;
    city: string;
  };
  company?: {
    name: string;
  };
}

export interface AgendaItem {
  id: string;
  prof: string;
  data: string;
  hora: string;
  obs: string;
}

export interface DocItem {
  id: string;
  titulo: string;
  tipo: string;
  desc: string;
}

export interface MsgItem {
  id: string;
  para: string;
  texto: string;
  data: string;
}
