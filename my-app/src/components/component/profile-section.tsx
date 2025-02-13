/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/XsgG90WgZ2a
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProfileSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="space-y-6">
        <Card className="p-6 rounded-2xl">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-muted-foreground">@johndoe</p>
              <div className="flex items-center space-x-2 text-sm">
                <CalendarDaysIcon className="w-4 h-4" />
                <span>25 years old</span>
                <LocateIcon className="w-4 h-4" />
                <span>New York, USA</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-6 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Projects</h4>
                <div className="text-3xl font-bold">24</div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  prefetch={false}
                >
                  <EyeIcon className="w-4 h-4" />
                  View Projects
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Grade</h4>
                <div className="text-3xl font-bold">A+</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>TypeScript</Badge>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  prefetch={false}
                >
                  <BookOpenIcon className="w-4 h-4" />
                  View Certifications
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Organizations</h4>
                <div className="flex flex-wrap gap-2">
                  <Avatar size="sm">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>TC</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>OC</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            <div className="col-span-2 space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Schedule</h4>
                <div className="flex items-center space-x-2 text-sm">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>Monday - Friday</span>
                  <ClockIcon className="w-4 h-4" />
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Past Projects</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h5 className="text-sm font-medium">Project A</h5>
                    <p className="text-sm text-muted-foreground">Completed in 2022</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <EyeIcon className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                  <div className="bg-muted/20 p-4 rounded-lg">
                    <h5 className="text-sm font-medium">Project B</h5>
                    <p className="text-sm text-muted-foreground">Completed in 2021</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <EyeIcon className="w-4 h-4 mr-2 text-primary hover:text-primary-foreground" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="space-y-6">
        <Card className="p-6 rounded-2xl">
          <CardHeader>
            <CardTitle>Activity Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="text-sm font-medium">Recent Activities</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center space-x-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>Completed project A</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>Attended team meeting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>Submitted design proposal</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="text-sm font-medium">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <div className="text-3xl font-bold">92%</div>
                    <div className="text-sm text-muted-foreground">Productivity</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.8</div>
                    <div className="text-sm text-muted-foreground">Feedback</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg">
              <h4 className="text-sm font-medium">Notifications & Alerts</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2">
                  <div className="bg-primary/20 text-primary rounded-full p-2">
                    <BellIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">New project assigned</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-accent/20 text-accent rounded-full p-2">
                    <TriangleAlertIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Server maintenance</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-success/20 text-success rounded-full p-2">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Project A completed</p>
                    <p className="text-sm text-muted-foreground">3 days ago</p>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 rounded-2xl">
          <CardHeader>
            <CardTitle>Personal Statistics</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="text-sm font-medium">Usage Statistics</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <div className="text-3xl font-bold">72%</div>
                    <div className="text-sm text-muted-foreground">Storage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">84%</div>
                    <div className="text-sm text-muted-foreground">Bandwidth</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/20 p-4 rounded-lg">
                <h4 className="text-sm font-medium">Achievements</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">Top Contributor</Badge>
                  <Badge variant="outline">Early Adopter</Badge>
                  <Badge variant="outline">Hackathon Winner</Badge>
                </div>
              </div>
            </div>
            <div className="bg-muted/20 p-4 rounded-lg">
              <h4 className="text-sm font-medium">Goal Progress</h4>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Complete 10 projects</div>
                  <div className="text-sm font-medium">8/10</div>
                </div>
                <div className="w-full bg-background rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Earn 5 badges</div>
                  <div className="text-sm font-medium">3/5</div>
                </div>
                <div className="w-full bg-background rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "60%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="p-6 rounded-2xl">
          <CardHeader>
            <CardTitle>Control Panel</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline">
                <LockIcon className="w-4 h-4 mr-2" />
                Security
              </Button>
              <Button variant="outline">
                <MailsIcon className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline">
                <LogOutIcon className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MailsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
