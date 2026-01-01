"use client"
 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
export default function SettingsPage() {
  const { t, language } = useLanguage()
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t.settingsPage.accountSettings[language]}</h1>
        <p className="text-muted-foreground mt-2">{t.settingsPage.accountDesc[language]}</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">{t.settingsPage.tabs[language].split(',')[0]}</TabsTrigger>
          <TabsTrigger value="account">{t.settingsPage.tabs[language].split(',')[1]}</TabsTrigger>
          <TabsTrigger value="notifications">{t.settingsPage.tabs[language].split(',')[2]}</TabsTrigger>
          <TabsTrigger value="privacy">{t.settingsPage.tabs[language].split(',')[3]}</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.profileInfo[language]}</CardTitle>
              <CardDescription>Update your profile details and photo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="Profile picture" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">{t.settingsPage.updatePhoto[language]}</Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself and your environmental interests..."
                  className="min-h-[100px]"
                  defaultValue="Environmental activist and community observer passionate about protecting the Kaparchina River."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Poti, Georgia" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+995 XXX XXX XXX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expertise">Area of Expertise</Label>
                <Select defaultValue="water">
                  <SelectTrigger id="expertise">
                    <SelectValue placeholder="Select your area of expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water">Water Quality</SelectItem>
                    <SelectItem value="climate">Climate Change</SelectItem>
                    <SelectItem value="pollution">Pollution Monitoring</SelectItem>
                    <SelectItem value="wildlife">Wildlife & Biodiversity</SelectItem>
                    <SelectItem value="general">General Observer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">{t.settingsPage.cancel[language]}</Button>
                <Button>{t.settingsPage.saveChanges[language]}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Tab */}
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.emailAddress[language]}</CardTitle>
              <CardDescription>{t.settingsPage.yourCurrentEmail[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              <Button>{t.settingsPage.updateEmail[language]}</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.changePassword[language]}</CardTitle>
              <CardDescription>{t.settingsPage.updatePasswordDesc[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button>Change Password</Button>
            </CardContent>
          </Card>

          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">{t.settingsPage.dangerZone[language]}</CardTitle>
              <CardDescription>{t.settingsPage.irreversible[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.settingsPage.deleteAccount[language]}</div>
                  <div className="text-sm text-muted-foreground">{t.settingsPage.permanentlyDelete[language]}</div>
                </div>
                <Button variant="destructive">{t.settingsPage.deleteAccount[language]}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.emailNotifications[language]}</CardTitle>
              <CardDescription>{t.settingsPage.chooseUpdates[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">Environmental Alerts</div>
                  <div className="text-sm text-muted-foreground">Receive alerts about critical environmental issues</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.reportUpdates[language]}</div>
                  <div className="text-sm text-muted-foreground">Get notified when your reports are reviewed</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.communityEvents[language]}</div>
                  <div className="text-sm text-muted-foreground">Stay informed about upcoming events and training</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.monthlyNewsletter[language]}</div>
                  <div className="text-sm text-muted-foreground">Receive monthly updates and impact reports</div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.newProjects[language]}</div>
                  <div className="text-sm text-muted-foreground">Get notified about new environmental projects</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.pushNotifications[language]}</CardTitle>
              <CardDescription>{t.settingsPage.managePush[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.criticalAlerts[language]}</div>
                  <div className="text-sm text-muted-foreground">Immediate notifications for urgent environmental issues</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.nearbyReports[language]}</div>
                  <div className="text-sm text-muted-foreground">Get notified about reports in your area</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Tab */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.privacySettings[language]}</CardTitle>
              <CardDescription>{t.settingsPage.controlVisibility[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.publicProfile[language]}</div>
                  <div className="text-sm text-muted-foreground">Make your profile visible to other community members</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.showActivity[language]}</div>
                  <div className="text-sm text-muted-foreground">Display your reports and contributions publicly</div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.showLocation[language]}</div>
                  <div className="text-sm text-muted-foreground">Display your city on your profile</div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="font-medium">{t.settingsPage.contactVisibility[language]}</div>
                  <div className="text-sm text-muted-foreground">Allow other members to contact you</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.settingsPage.dataPrivacy[language]}</CardTitle>
              <CardDescription>{t.settingsPage.manageDataPrivacy[language]}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.settingsPage.downloadYourData[language]}</div>
                  <div className="text-sm text-muted-foreground">{t.settingsPage.getCopyAllData[language]}</div>
                </div>
                <Button variant="outline">{t.settingsPage.download[language]}</Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.settingsPage.privacyPolicy[language]}</div>
                  <div className="text-sm text-muted-foreground">{t.settingsPage.readPrivacyPolicy[language]}</div>
                </div>
                <Button variant="outline">{t.settingsPage.view[language]}</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
