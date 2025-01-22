export interface Transaction {
  id: string
  amount: number
  type: "deposit" | "withdrawal"
  date: Date
  description: string
}

export interface Account {
  balance: number
  transactions: Transaction[]
}

