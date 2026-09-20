import type { Transaction } from "../types/transactions";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    title: "Grocery shopping",
    amount: 3500,
    category: "Food",
    type: "expense",
    date: "2026-09-20",
  },
  {
    id: "2",
    title: "Salary",
    amount: 85000,
    category: "Salary",
    type: "income",
    date: "2026-09-01",
  },
  {
    id: "3",
    title: "Fuel",
    amount: 5000,
    category: "Transport",
    type: "expense",
    date: "2026-09-18",
  },
  {
    id: "4",
    title: "Netflix",
    amount: 1500,
    category: "Entertainment",
    type: "expense",
    date: "2026-09-15",
  },
];