"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Transaction } from "@/lib/types"

interface TransactionChartProps {
  transactions: Transaction[]
}

export function TransactionChart({ transactions }: TransactionChartProps) {
  // Group transactions by date and calculate daily balances
  const dailyData = transactions.reduce(
    (acc, transaction) => {
      const date = transaction.date.toISOString().split("T")[0]
      if (!acc[date]) {
        acc[date] = 0
      }
      acc[date] += transaction.type === "deposit" ? transaction.amount : -transaction.amount
      return acc
    },
    {} as Record<string, number>,
  )

  const chartData = Object.entries(dailyData)
    .map(([date, amount]) => ({
      date,
      amount,
    }))
    .sort((a, b) => a.date.localeCompare(b.date))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Overview</CardTitle>
        <CardDescription>Your account activity over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

