"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapComponent } from "@/components/map-component"
import { MapLegend } from "@/components/map-legend"
import { MapDataModal } from "@/components/map-data-modal"
import { AlertCircle, Layers } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function MapPage() {
  const [activeLayer, setActiveLayer] = useState<string>("all")
  const [selectedPoint, setSelectedPoint] = useState<any>(null)
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.map.title[language]}</h1>
          {/* Optional: add a map description key in translations if needed */}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Layer Controls */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  <CardTitle>{t.map.layersCardTitle[language]}</CardTitle>
                </div>
                <CardDescription>{t.map.layersCardDesc[language]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeLayer === "all" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveLayer("all")}
                >
                  {t.map.layerAll[language]}
                </Button>
                <Button
                  variant={activeLayer === "water" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveLayer("water")}
                >
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  {t.map.layerWater[language]}
                </Button>
                <Button
                  variant={activeLayer === "pollution" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveLayer("pollution")}
                >
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                  {t.map.layerPollution[language]}
                </Button>
                <Button
                  variant={activeLayer === "risk" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveLayer("risk")}
                >
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  {t.map.layerRisk[language]}
                </Button>
                <Button
                  variant={activeLayer === "infrastructure" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveLayer("infrastructure")}
                >
                  <span className="w-3 h-3 rounded-full bg-slate-500 mr-2"></span>
                  {t.map.layerInfrastructure[language]}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Legend</CardTitle>
              </CardHeader>
              <CardContent>
                <MapLegend />
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  {t.map.reportIssueTitle[language]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{t.map.reportIssueHint[language]}</p>
                <Button asChild className="w-full" size="sm">
                  <Link href="/report">{t.auth.submitReport[language]}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="overflow-hidden">
              <div className="relative h-[600px] lg:h-[700px]">
                <MapComponent activeLayer={activeLayer} onPointClick={setSelectedPoint} />
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.map.quickStatsNormal[language]}</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">3</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.map.quickStatsRisk[language]}</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">2</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.map.quickStatsProblem[language]}</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">127</div>
                    <div className="text-xs text-muted-foreground mt-1">{t.map.quickStatsReports[language]}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for point details */}
      {selectedPoint && <MapDataModal point={selectedPoint} onClose={() => setSelectedPoint(null)} />}
    </div>
  )
}