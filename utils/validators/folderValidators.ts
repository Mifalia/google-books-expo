export interface IFolder {
  id?: number;
  title: string;
  description?: string | null;
  status: "pending" | "in-review" | "approved" | "rejected";
  createdAt?: string;
  updatedAt?: string;
  createdBy?: number;
  assignedTo?: number | null;
  Creator?: object;
  Assignee?: null | object;
}
