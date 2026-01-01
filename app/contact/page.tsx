'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t, language } = useLanguage()
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.headerTitle[language]}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {t.contact.headerDesc[language]}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.contact.getInTouch[language]}</CardTitle>
                <CardDescription>{t.contact.weAreHere[language]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{t.contact.email[language]}</div>
                    <a href="mailto:info@cpc-georgia.org" className="text-sm text-muted-foreground hover:text-primary">
                      info@cpc-georgia.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{t.contact.phone[language]}</div>
                    <a href="tel:+995" className="text-sm text-muted-foreground hover:text-primary">
                      +995 XXX XXX XXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{t.contact.office[language]}</div>
                    <p className="text-sm text-muted-foreground">
                      Poti, Georgia
                      <br />
                      [Address Details]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-sm">{t.contact.officeHours[language]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t.contact.sendUsMessage[language]}</CardTitle>
                <CardDescription>{t.contact.sendFormDesc[language]}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t.contact.firstName[language]}</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t.contact.lastName[language]}</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.email[language]}</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.phone[language]} (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+995 XXX XXX XXX" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.subject[language]}</Label>
                    <Input id="subject" placeholder="What is this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.message[language]}</Label>
                    <Textarea id="message" placeholder="Tell us more..." rows={6} />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto" onClick={(e) => {
                    console.log('submit button has been clicked', e);
                  }}>
                    <Send className="h-4 w-4 mr-2" />
                    {t.contact.sendMessage[language]}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.visitOffice[language]}</CardTitle>
              <CardDescription>{t.contact.findUs[language]}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Map Integration</p>
                  <p className="text-sm">Poti, Georgia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
