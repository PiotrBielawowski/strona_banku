"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface TransactionFormProps {
  onSubmit: (amount: number, type: "deposit" | "withdrawal", description: string) => void
}

export function TransactionForm({ onSubmit }: TransactionFormProps) {
  const [amount, setAmount] = useState("")
  const [type, setType] = useState<"deposit" | "withdrawal">("deposit")
  const [description, setDescription] = useState("")
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numAmount = Number.parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) return

    onSubmit(numAmount, type, description)
    setAmount("")
    setDescription("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New Transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Transaction</DialogTitle>
          <DialogDescription>Make a deposit or withdrawal to your account.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <div className="grid gap-2">
              <Label>Transaction Type</Label>
              <RadioGroup value={type} onValueChange={(v) => setType(v as "deposit" | "withdrawal")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="deposit" id="deposit" />
                  <Label htmlFor="deposit">Deposit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="withdrawal" id="withdrawal" />
                  <Label htmlFor="withdrawal">Withdrawal</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit Transaction</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

