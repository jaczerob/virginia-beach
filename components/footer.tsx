import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 border-t">
      <div className="container flex items-center justify-center flex-col gap-4 py-4 text-center md:flex-row md:gap-6 md:py-6">
        <div className="flex items-center gap-4">
          <Link className="rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-800" href="https://github.com/jaczerob/eras" target="_blank">
            <GithubIcon className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
            {`
                Made by Jacob Gravely
            `}
          </p>
        </div>
      </div>
    </footer>
  )
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
