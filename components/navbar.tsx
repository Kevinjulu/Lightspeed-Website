import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "./logo"
import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-purple-900/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link href="/about" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link
                href="/coverage"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Coverage
              </Link>
              <Link
                href="/support"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Support
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/customer-portal">
              <Button className="bg-yellow-400 text-purple-900 hover:bg-yellow-500 font-semibold px-6 py-2">
                Customer Portal
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

