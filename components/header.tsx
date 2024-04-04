import { PackageIcon } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b lg:px-6 w-full">
      <Link className="font-semibold text-lg hidden sm:flex items-center gap-2" href="/">
        <PackageIcon className="w-4 h-4" />
        <span>Eras</span>
      </Link>
      <nav className="ml-auto flex flex-1 justify-end gap-4 lg:gap-6">
        <Link className="font-medium text-sm/relaxed" href="/news">
          News
        </Link>
        <Link className="font-medium text-sm/relaxed" href="/toonstats">
          ToonStats
        </Link>
        <Link className="font-medium text-sm/relaxed" href="/districts">
          Districts
        </Link>
        <Link className="font-medium text-sm/relaxed" href="/field-offices">
          Field Offices
        </Link>
      </nav>
    </header>
  )
}