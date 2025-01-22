"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react"

const portfolioData = [
  { name: "Stocks", value: 45000, change: 2.5 },
  { name: "Bonds", value: 30000, change: -0.8 },
  { name: "Real Estate", value: 75000, change: 1.2 },
  { name: "Cryptocurrencies", value: 15000, change: 5.7 },
]

export default function PortfolioPage() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Portfolio</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <ThemeToggle />
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 md:p-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {portfolioData.map((item) => (
              <Card key={item.name}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${item.value.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    {item.change > 0 ? (
                      <ArrowUpRight className="inline h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="inline h-4 w-4 text-red-500" />
                    )}
                    <span className={item.change > 0 ? "text-green-500" : "text-red-500"}>
                      {Math.abs(item.change)}%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Asset Allocation</CardTitle>
              <CardDescription>Your current investment distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                {/* Placeholder for a pie chart */}
                <div className="flex h-full items-center justify-center bg-muted">Pie Chart Placeholder</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

