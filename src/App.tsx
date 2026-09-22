import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Shell from "./components/layout/Shell";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import { mockTransactions } from "./data/mockTransactions";
import type { Transaction } from "./types/transactions";

const App = () => {
  const [transactions, setTransactions] =
    useState<Transaction[]>(mockTransactions);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((current) => [
      transaction,
      ...current,
    ]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((current) =>
      current.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route
            path="/"
            element={
              <Dashboard
                transactions={transactions}
                onDelete={deleteTransaction}
              />
            }
          />

          <Route
            path="/transactions"
            element={
              <Transactions
                transactions={transactions}
                onAdd={addTransaction}
                onDelete={deleteTransaction}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};