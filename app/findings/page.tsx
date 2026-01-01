"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

const resources = [
  {
    title: "Kaparchina River Baseline Study 2024",
    type: "Technical Report",
    date: "December 2024",
    description:
      "Comprehensive environmental assessment including water quality analysis, biodiversity survey, and climate risk mapping.",
    pages: 85,
    category: "Research",
  },
  {
    title: "Climate Resilience Policy Brief: Poti Urban Area",
    type: "Policy Document",
    date: "November 2024",
    description:
      "Evidence-based recommendations for local authorities on improving drainage infrastructure and flood management.",
    pages: 24,
    category: "Policy",
  },
  {
    title: "Community Monitoring Guide: River Observer Training",
    type: "Training Material",
    date: "October 2024",
    description:
      "Step-by-step guide for citizen observers on water quality monitoring, data collection, and reporting protocols.",
    pages: 42,
    category: "Training",
  },
  {
    title: "Pollution Hotspot Analysis Q3 2024",
    type: "Data Report",
    date: "September 2024",
    description:
      "Quarterly analysis of citizen-reported pollution incidents with geographic mapping and trend analysis.",
    pages: 18,
    category: "Research",
  },
  {
    title: "Youth Environmental Leadership Curriculum",
    type: "Training Material",
    date: "August 2024",
    description:
      "Educational materials for youth programs covering environmental science, civic engagement, and leadership skills.",
    pages: 56,
    category: "Training",
  },
  {
    title: "Climate Risk Assessment: Flood Vulnerability",
    type: "Technical Report",
    date: "July 2024",
    description:
      "Analysis of flood-prone areas in Poti with infrastructure recommendations and risk mitigation strategies.",
    pages: 67,
    category: "Research",
  },
]

const mediaItems = [
  {
    title: "Community Cleanup Day Success",
    outlet: "Local News Georgia",
    date: "December 15, 2024",
    type: "Article",
  },
  {
    title: "Interview: Climate Action in Poti",
    outlet: "Radio Free Europe",
    date: "November 28, 2024",
    type: "Interview",
  },
  {
    title: "Citizen Science Making Impact",
    outlet: "Georgia Today",
    date: "October 22, 2024",
    type: "Feature",
  },
]

export default function FindingsPage() {
  const { t, language } = useLanguage()
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.findings.headerTitle[language]}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {t.findings.headerDesc[language]}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Tabs (simplified) */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="default">{t.findings.filterAll[language]}</Button>
          <Button variant="outline" className="bg-transparent">
            {t.findings.filterResearch[language]}
          </Button>
          <Button variant="outline" className="bg-transparent">
            {t.findings.filterPolicy[language]}
          </Button>
          <Button variant="outline" className="bg-transparent">
            {t.findings.filterTraining[language]}
          </Button>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((resource, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="w-full h-48 bg-slate-100 rounded-md mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-slate-400" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-transparent">
                    {resource.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{resource.date}</span>
                  </div>
                </div>
                <CardTitle className="text-lg text-balance">{resource.title}</CardTitle>
                <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="text-sm text-muted-foreground mb-4">
                  {resource.type} • {resource.pages} pages
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    {t.findings.download[language]}
                  </Button>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Media Coverage Section */}
        <div className="border-t border-border pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.findings.newsMedia[language]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaItems.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {item.type}
                  </Badge>
                  <CardTitle className="text-lg text-balance">{item.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="font-medium">{item.outlet}</span>
                      <span className="text-xs">{item.date}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href="#">
                      {t.findings.readArticle[language]}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16">
          <Card className="bg-muted/50">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold mb-4">{t.findings.stayUpdated[language]}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t.findings.subscribeBody[language]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t.findings.emailPlaceholder[language]}
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
                />
                <Button>{t.common.subscribe[language]}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
