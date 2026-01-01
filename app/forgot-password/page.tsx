"use client"
 
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ForgotPasswordPage() {
  const { t, language } = useLanguage()
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">{t.forgotPage.title[language]}</CardTitle>
          <CardDescription>{t.forgotPage.desc[language]}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.forgotPage.email[language]}</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required />
            </div>
            <Button type="submit" className="w-full">
              {t.forgotPage.sendLink[language]}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            {t.forgotPage.backToLogin[language]}
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
