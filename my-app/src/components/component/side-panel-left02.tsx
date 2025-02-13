/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/QClEfsY9OWw
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
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function SidePanelLeft02() {
  const [activeTab, setActiveTab] = useState("projects")
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project A",
      thumbnail: "/placeholder.svg",
      description: "This is the description for Project A.",
      dueDate: "2023-12-31",
      progress: 75,
    },
    {
      id: 2,
      title: "Project B",
      thumbnail: "/placeholder.svg",
      description: "This is the description for Project B.",
      dueDate: "2024-06-30",
      progress: 50,
    },
    {
      id: 3,
      title: "Project C",
      thumbnail: "/placeholder.svg",
      description: "This is the description for Project C.",
      dueDate: "2024-09-15",
      progress: 25,
    },
  ])
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      assignee: "John Doe",
      dueDate: "2023-06-15",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Task 2",
      assignee: "Jane Smith",
      dueDate: "2023-07-01",
      status: "Completed",
    },
    {
      id: 3,
      title: "Task 3",
      assignee: "Bob Johnson",
      dueDate: "2023-08-31",
      status: "To Do",
    },
  ])
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Project Manager",
      email: "john@example.com",
      phone: "555-1234",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Developer",
      email: "jane@example.com",
      phone: "555-5678",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Designer",
      email: "bob@example.com",
      phone: "555-9012",
    },
  ])
  return (
    <div className="flex h-screen w-full">
      <aside className="bg-background border-r w-64 p-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Project Selection</h3>
            <div className="space-y-2">
              <Input placeholder="Search projects..." className="bg-muted rounded-md" />
              <Select>
                <SelectTrigger className="bg-muted rounded-md w-full">
                  <SelectValue placeholder="Filter by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid grid-cols-2 gap-2">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={`bg-muted rounded-md p-2 flex flex-col items-center transition-colors hover:bg-accent hover:text-accent-foreground ${
                      selectedProject.id === project.id ? "bg-accent text-accent-foreground" : ""
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src="/placeholder.svg"
                      alt={project.title}
                      width={64}
                      height={64}
                      className="rounded-md mb-2"
                    />
                    <span className="text-sm font-medium truncate">{project.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Project Management</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-medium mb-1">{selectedProject.title}</h4>
                <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Due: {selectedProject.dueDate}</span>
                <Progress value={selectedProject.progress} />
              </div>
              <Button>Manage Project</Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Task Management</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Input placeholder="Search tasks..." className="bg-muted rounded-md" />
                <Button>Add Task</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.assignee}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            task.status === "Completed"
                              ? "secondary"
                              : task.status === "In Progress"
                              ? "outline"
                              : "default"
                          }
                        >
                          {task.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Team Management</h3>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                {team.map((member) => (
                  <Card key={member.id} className="p-2">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>{member.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{member.email}</p>
                      <p>{member.phone}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4">
        <Tabs defaultValue="projects" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="border-b">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" />
          <TabsContent value="tasks" />
          <TabsContent value="team" />
        </Tabs>
      </main>
    </div>
  )
}
