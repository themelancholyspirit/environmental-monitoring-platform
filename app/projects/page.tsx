"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplet, Users, Shield, Target, TrendingUp, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const projects = [
  {
    id: "kaparchina",
    title: "Kaparchina River: Climate Resilience & Citizen Monitoring",
    description:
      "Comprehensive environmental monitoring and community engagement program for the Kaparchina River ecosystem, combining scientific data collection with citizen participation.",
    status: "Active",
    duration: "2023 - 2025",
    icon: Droplet,
    color: "bg-blue-600",
    goals: ["Water quality monitoring", "Pollution mapping", "Community engagement", "Policy recommendations"],
  },
  {
    id: "c-ron",
    title: "Community River Observers Network (C-RON)",
    description:
      "Training and empowering local citizens to become active environmental monitors through structured observation protocols and data collection methods.",
    status: "Active",
    duration: "2024 - Ongoing",
    icon: Users,
    color: "bg-green-600",
    goals: ["Train 50+ observers", "Monthly monitoring", "Youth involvement", "Data reporting system"],
  },
  {
    id: "governance",
    title: "Local Climate Governance Initiatives",
    description:
      "Building capacity for climate action through evidence-based policy recommendations and dialogue with local authorities to strengthen environmental governance.",
    status: "Active",
    duration: "2024 - 2026",
    icon: Shield,
    color: "bg-slate-700",
    goals: ["Policy briefs", "Stakeholder workshops", "Advocacy campaigns", "Institutional strengthening"],
  },
  {
    id: "youth",
    title: "Youth Environmental Leadership Program",
    description:
      "Engaging young people in environmental stewardship through education, field activities, and leadership development opportunities.",
    status: "Planning",
    duration: "2025 - 2026",
    icon: Target,
    color: "bg-orange-600",
    goals: ["Youth training", "School programs", "Leadership skills", "Peer education"],
  },
]

export default function ProjectsPage() {
  const { t, language } = useLanguage()
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.headerTitle[language]}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {t.projects.headerDesc[language]}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Active Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">{t.projects.activeTitle[language]}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.status === "Active")
              .map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="default" className="bg-green-600">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 text-balance">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">{t.projects.keyGoals[language]}</div>
                      <div className="flex flex-wrap gap-2">
                        {project.goals.map((goal, i) => (
                          <Badge key={i} variant="outline" className="bg-transparent">
                            {goal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/projects/${project.id}`}>{t.projects.viewDetails[language]}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Planning Phase Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">{t.projects.inPlanningTitle[language]}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.status === "Planning")
              .map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center`}>
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 text-balance">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">{t.projects.keyGoals[language]}</div>
                      <div className="flex flex-wrap gap-2">
                        {project.goals.map((goal, i) => (
                          <Badge key={i} variant="outline" className="bg-transparent">
                            {goal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/projects/${project.id}`}>{t.projects.learnMore[language]}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="bg-blue-900 text-white border-0">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold mb-4">{t.projects.ctaWant[language]}</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                {t.projects.ctaBody[language]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Link href="/join">{t.projects.ctaObserver[language]}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/contact">{t.projects.ctaPartner[language]}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
