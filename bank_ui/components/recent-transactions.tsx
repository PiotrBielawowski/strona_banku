import { Avatar } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Transaction } from "@/lib/types"
import { formatCurrency, formatDate } from "@/lib/utils"

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const recentTransactions = transactions.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>You have {transactions.length} total transactions this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <div
                  className={`h-full w-full rounded-full ${
                    transaction.type === "deposit" ? "bg-green-500" : "bg-red-500"
                  }`}
                />
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{formatDate(transaction.date)}</p>
              </div>
              <div
                className={`ml-auto font-medium ${transaction.type === "deposit" ? "text-green-500" : "text-red-500"}`}
              >
                {transaction.type === "deposit" ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

