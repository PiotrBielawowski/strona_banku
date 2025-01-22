import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SettingsPage() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 items-center border-b bg-background px-6">
        <h1 className="text-lg font-semibold">Settings</h1>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 md:p-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize the appearance of the app. Automatically switch between day and night themes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="theme-toggle"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Theme
                  </label>
                  <p className="text-[13px] text-muted-foreground">Select your preferred theme</p>
                </div>
                <ThemeToggle />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

