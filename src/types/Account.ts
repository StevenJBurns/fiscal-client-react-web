import { Transaction } from 'types/Transaction';

export interface Account {
  id: string,
  label: string,
  transactions: Array<Transaction>,
};
