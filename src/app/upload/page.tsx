"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [branch, setBranch] = useState("")
  const [year, setYear] = useState("")
  const [type, setType] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !branch || !year || !type) {
      toast({
        title: "Error",
        description: "Please fill in all fields and select a file.",
        variant: "destructive",
      })
      return
    }
    // Here you would typically upload the file to your server or cloud storage
    toast({
      title: "Success",
      description: "File uploaded successfully. Waiting for teacher verification.",
    })
    // Reset form
    setFile(null)
    setBranch("")
    setYear("")
    setType("")
  }

  return (
    <div className="max-w-2xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Upload Resource</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="file">File</Label>
          <Input id="file" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </div>
        <div>
          <Label htmlFor="branch">Branch</Label>
          <Select onValueChange={setBranch} value={branch}>
            <SelectTrigger>
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cse">Computer Science Engineering</SelectItem>
              <SelectItem value="ece">Electronics and Communication Engineering</SelectItem>
              <SelectItem value="me">Mechanical Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Select onValueChange={setYear} value={year}>
            <SelectTrigger>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1st Year</SelectItem>
              <SelectItem value="2">2nd Year</SelectItem>
              <SelectItem value="3">3rd Year</SelectItem>
              <SelectItem value="4">4th Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <Select onValueChange={setType} value={type}>
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="notes">Notes</SelectItem>
              <SelectItem value="assignment">Assignment</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Upload</Button>
      </form>
    </div>
  )
}

