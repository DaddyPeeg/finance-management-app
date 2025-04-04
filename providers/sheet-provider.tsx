"use client";
import { useMountedState } from "react-use";

// Account
import NewAccountSheet from "@/features/accounts/components/new-account-sheet";
import EditAccountSheet from "@/features/accounts/components/edit-account-sheet";

// Category
import NewCategorySheet from "@/features/categories/components/new-category-sheet";
import EditCategorySheet from "@/features/categories/components/edit-category-sheet";

// Transaction
import NewTransactionSheet from "@/features/transactions/components/new-transaction-sheet";
import EditTransactionSheet from "@/features/transactions/components/edit-transaction-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      {/* Account */}
      <NewAccountSheet />
      <EditAccountSheet />
      {/* Category */}
      <NewCategorySheet />
      <EditCategorySheet />
      {/* Transaction */}
      <NewTransactionSheet />
      <EditTransactionSheet />
    </>
  );
};
