export type TransactionType = "income" | "expense";

export type TransactionCategory =
  | "Food"
  | "Transport"
  | "Bills"
  | "Shopping"
  | "Entertainment"
  | "Health"
  | "Salary"
  | "Other";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
  date: string;
  note?: string;
}