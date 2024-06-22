export interface IMetaRow {
  id: number;
  label: string;
  size: number;
}

export interface IRow {
  id: number;
  createdDate: string;
  createdTime: string;
  username: string;
  email: string;
  type: string;
  score: string | null;
  status: string;
}
