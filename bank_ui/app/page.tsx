"use client"

import { useState } from "react"
import { MetricsCards } from "@/components/metrics-cards"
import { TransactionForm } from "@/components/transaction-form"
import { TransactionChart } from "@/components/transaction-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import type { Transaction } from "@/lib/types"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Download, TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", amount: 500, type: "deposit", date: new Date(2023, 0, 1), description: "Salary" },
    { id: "2", amount: 50, type: "withdrawal", date: new Date(2023, 0, 5), description: "Groceries" },
    { id: "3", amount: 200, type: "deposit", date: new Date(2023, 0, 10), description: "Freelance work" },
    { id: "4", amount: 100, type: "withdrawal", date: new Date(2023, 0, 15), description: "Utilities" },
    { id: "5", amount: 1000, type: "deposit", date: new Date(2023, 0, 20), description: "Bonus" },
  ])

  const balance = transactions.reduce(
    (sum, transaction) => sum + (transaction.type === "deposit" ? transaction.amount : -transaction.amount),
    0,
  )

  const depositsCount = transactions.filter((t) => t.type === "deposit").length
  const withdrawalsCount = transactions.filter((t) => t.type === "withdrawal").length

  const handleTransaction = (amount: number, type: "deposit" | "withdrawal", description: string) => {
    const newTransaction: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      amount,
      type,
      date: new Date(),
      description,
    }

    setTransactions((prev) => [...prev, newTransaction])
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <ThemeToggle />
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 md:p-6 space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">Here's an overview of your account.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
              <TransactionForm onSubmit={handleTransaction} />
            </div>
          </div>

          <MetricsCards balance={balance} depositsCount={depositsCount} withdrawalsCount={withdrawalsCount} />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Balance History</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <TransactionChart transactions={transactions} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RecentTransactions transactions={transactions} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Spending Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    {/* Placeholder for a pie chart */}
                    <div className="flex h-full items-center justify-center bg-muted">
                      Pie Chart: Spending Categories
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Income Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-2xl font-bold">+5.2%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Compared to last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Expense Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-2xl font-bold">-2.1%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Compared to last month</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Total Income: $5,750</li>
                    <li>Total Expenses: $3,200</li>
                    <li>Savings: $2,550</li>
                    <li>Top Spending Category: Groceries ($800)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Annual Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your annual financial report is now available.</p>
                  <Button className="mt-4">Download Annual Report</Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                      <div>
                        <p className="font-medium">New Feature Available</p>
                        <p className="text-sm text-muted-foreground">We've added a new budgeting tool. Check it out!</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                      <div>
                        <p className="font-medium">Unusual Activity Detected</p>
                        <p className="text-sm text-muted-foreground">We noticed a large transaction on your account.</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <p className="font-medium">Goal Achieved</p>
                        <p className="text-sm text-muted-foreground">
                          Congratulations! You've reached your savings goal.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

