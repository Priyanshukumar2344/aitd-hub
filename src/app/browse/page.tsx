"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star } from "lucide-react"
import { ReviewForm } from "@/components/ReviewForm"
import { toast } from "@/hooks/use-toast"

// Mock data for resources
const mockResources = [
  {
    id: 1,
    title: "Data Structures Notes",
    branch: "cse",
    year: "2",
    type: "notes",
    verifiedBy: "Srinath Sir",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Digital Electronics Assignment",
    branch: "ece",
    year: "1",
    type: "assignment",
    verifiedBy: "Praveen Sir",
    rating: 3.8,
  },
  {
    id: 3,
    title: "Thermodynamics Notes",
    branch: "me",
    year: "3",
    type: "notes",
    verifiedBy: "Divya Mam",
    rating: 4.2,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function BrowsePage() {
  const [branch, setBranch] = useState("")
  const [year, setYear] = useState("")
  const [type, setType] = useState("")
  const [selectedResource, setSelectedResource] = useState<number | null>(null)

  const filteredResources = mockResources.filter(
    (resource) =>
      (!branch || resource.branch === branch) && (!year || resource.year === year) && (!type || resource.type === type),
  )

  const handleReviewSubmit = (resourceId: number, rating: number, comment: string) => {
    // Here you would typically send the review to your backend
    console.log(`Review for resource ${resourceId}: ${rating} stars, "${comment}"`)
    toast({
      title: "Success",
      description: "Review submitted successfully.",
    })
    setSelectedResource(null)
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Browse Resources</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Select onValueChange={setBranch} value={branch}>
          <SelectTrigger>
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Branches</SelectItem>
            <SelectItem value="cse">Computer Science Engineering</SelectItem>
            <SelectItem value="ece">Electronics and Communication Engineering</SelectItem>
            <SelectItem value="me">Mechanical Engineering</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setYear} value={year}>
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="1">1st Year</SelectItem>
            <SelectItem value="2">2nd Year</SelectItem>
            <SelectItem value="3">3rd Year</SelectItem>
            <SelectItem value="4">4th Year</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={setType} value={type}>
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="notes">Notes</SelectItem>
            <SelectItem value="assignment">Assignment</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>
                {resource.branch.toUpperCase()} - Year {resource.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">Type: {resource.type}</p>
              <p className="text-sm text-gray-500 mb-2">Verified by: {resource.verifiedBy}</p>
              <StarRating rating={resource.rating} />
              <div className="mt-4 space-x-2">
                <Button>Download</Button>
                <Button variant="outline" onClick={() => setSelectedResource(resource.id)}>
                  Review
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Submit a Review</h2>
            <ReviewForm
              resourceId={selectedResource}
              onReviewSubmit={(rating, comment) => handleReviewSubmit(selectedResource, rating, comment)}
            />
            <Button variant="outline" className="mt-4" onClick={() => setSelectedResource(null)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

