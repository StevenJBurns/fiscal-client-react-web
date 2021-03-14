export interface Transaction {
  id: number,
  date: string,
  cleared: boolean,
  type: TransactionType,
};

enum TransactionType {
  None,
  Credit,
  Debit,
};