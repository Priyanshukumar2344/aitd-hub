"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [collegeId, setCollegeId] = useState("")
  const [dob, setDob] = useState("")
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically validate the login credentials with your backend
    if (collegeId && dob) {
      // Assuming successful login
      toast({
        title: "Success",
        description: "Logged in successfully.",
      })
      router.push("/") // Redirect to home page after login
    } else {
      toast({
        title: "Error",
        description: "Please enter both College ID and Date of Birth.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Login to Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <Label htmlFor="collegeId">College ID</Label>
              <Input
                type="text"
                placeholder="Enter your college ID"
                id="collegeId"
                value={collegeId}
                onChange={(e) => setCollegeId(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-neutral-800"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input
                type="text"
                placeholder="DDMMYYYY"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-2 mt-2 border border-neutral-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-neutral-800"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <Button type="submit" className="px-6 py-2 mt-4">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

