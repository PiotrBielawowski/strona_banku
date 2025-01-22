"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell, TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react"

const analysisData = [
  { name: "Total Return", value: "12.5%", icon: TrendingUp, color: "text-green-500" },
  { name: "Annual Yield", value: "3.2%", icon: Percent, color: "text-blue-500" },
  { name: "Risk Level", value: "Moderate", icon: TrendingDown, color: "text-yellow-500" },
  { name: "Estimated Income", value: "$2,500", icon: DollarSign, color: "text-purple-500" },
]

export default function AnalysisPage() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-background px-6">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Analysis</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <ThemeToggle />
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 md:p-6 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {analysisData.map((item) => (
              <Card key={item.name}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Performance Analysis</CardTitle>
              <CardDescription>Your portfolio performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                {/* Placeholder for a line chart */}
                <div className="flex h-full items-center justify-center bg-muted">Line Chart Placeholder</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>Breakdown of your portfolio risk factors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                {/* Placeholder for a bar chart */}
                <div className="flex h-full items-center justify-center bg-muted">Bar Chart Placeholder</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

