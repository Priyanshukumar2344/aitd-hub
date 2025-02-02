import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to AITD Student Resource Hub</h1>
        <p className="text-xl text-gray-600 mb-8">
          Access and share notes and assignments for BTECH students at Dr. Ambedkar Institute of Technology for
          Divyangjan.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/upload">Upload Resources</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/browse">Browse Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

