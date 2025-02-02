"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Mock data for pending resources
const mockPendingResources = [
  { id: 1, title: "Advanced Algorithms Notes", branch: "cse", year: "3", type: "notes", uploadedBy: "Student A" },
  { id: 2, title: "VLSI Design Assignment", branch: "ece", year: "4", type: "assignment", uploadedBy: "Student B" },
  { id: 3, title: "Fluid Mechanics Notes", branch: "me", year: "2", type: "notes", uploadedBy: "Student C" },
]

export default function VerifyPage() {
  const [pendingResources, setPendingResources] = useState(mockPendingResources)
  const { toast } = useToast()

  const handleVerify = (id: number) => {
    // Here you would typically update the resource status on your server
    setPendingResources(pendingResources.filter((resource) => resource.id !== id))
    toast({
      title: "Success",
      description: "Resource verified successfully.",
    })
  }

  const handleReject = (id: number) => {
    // Here you would typically update the resource status on your server
    setPendingResources(pendingResources.filter((resource) => resource.id !== id))
    toast({
      title: "Rejected",
      description: "Resource has been rejected.",
      variant: "destructive",
    })
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Verify Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pendingResources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>
                {resource.branch.toUpperCase()} - Year {resource.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Type: {resource.type}</p>
              <p className="text-sm text-gray-500 mb-4">Uploaded by: {resource.uploadedBy}</p>
              <div className="flex space-x-2">
                <Button onClick={() => handleVerify(resource.id)}>Verify</Button>
                <Button variant="destructive" onClick={() => handleReject(resource.id)}>
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

