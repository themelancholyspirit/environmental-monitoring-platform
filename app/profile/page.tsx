"use client"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Calendar, Award, AlertTriangle, FileText, Users } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "Profile - CPC Georgia",
  description: "Your CPC Georgia profile",
}

export default function ProfilePage() {
  const { t, language } = useLanguage()
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/abstract-geometric-shapes.png" alt="Profile picture" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <Badge variant="secondary" className="w-fit">
                  <Award className="h-3 w-3 mr-1" />
                  {t.profilePage.observer[language]}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  john.doe@example.com
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Poti, Georgia
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {t.profilePage.joined[language]}
                </div>
              </div>
            </div>

            <Link href="/profile/settings">
              <Button variant="outline">{t.profilePage.editProfile[language]}</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Activity Stats */}
          <Card>
            <CardHeader>
              <CardTitle>{t.profilePage.activityOverview[language]}</CardTitle>
              <CardDescription>{t.profilePage.activityDesc[language]}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.profilePage.reportsSubmitted[language]}</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-green-600">8</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.profilePage.verifiedIssues[language]}</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-secondary">5</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.profilePage.eventsAttended[language]}</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-accent">156</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.profilePage.impactPoints[language]}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>{t.profilePage.recentReports[language]}</CardTitle>
              <CardDescription>{t.profilePage.recentDesc[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-status-problem/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-status-problem" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium">Water Pollution Detected</h3>
                    <Badge variant="destructive" className="flex-shrink-0">
                      Critical
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Industrial discharge near Kaparchina River delta</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>Dec 20, 2024</span>
                    <span>Status: Under Review</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-status-risk/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-status-risk" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium">Erosion Risk Identified</h3>
                    <Badge variant="outline" className="flex-shrink-0 border-status-risk text-status-risk">
                      Moderate
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Riverbank erosion increasing near residential area
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>Dec 15, 2024</span>
                    <span>Status: Verified</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-status-normal/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-status-normal" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium">Water Quality Sample</h3>
                    <Badge variant="outline" className="flex-shrink-0 border-status-normal text-status-normal">
                      Normal
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Monthly water quality monitoring at Station A3</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>Dec 10, 2024</span>
                    <span>Status: Completed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>{t.profilePage.achievements[language]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">First Reporter</div>
                  <div className="text-xs text-muted-foreground">Submitted first report</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Community Member</div>
                  <div className="text-xs text-muted-foreground">Attended 5 events</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm">Alert Champion</div>
                  <div className="text-xs text-muted-foreground">10 verified reports</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>{t.profilePage.quickActions[language]}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/report">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  {t.profilePage.submitNewReport[language]}
                </Button>
              </Link>
              <Link href="/map">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MapPin className="h-4 w-4 mr-2" />
                  {t.profilePage.viewMap[language]}
                </Button>
              </Link>
              <Link href="/join">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Users className="h-4 w-4 mr-2" />
                  {t.profilePage.joinTraining[language]}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
