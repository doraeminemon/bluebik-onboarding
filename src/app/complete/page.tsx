'use client'
import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  return (
    <main className="flex min-h-screen flex-col p-2 pt-24 lg:items-center lg:w-full">
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex lg:px-4 lg:pb-5">
        <p className=" fixed left-0 top-0 flex w-full px-6 border-b bg-gray-200 border-gray-300 pb-4 pt-5 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          BlueBik E-wallet
        </p>
      </div>
      <code>
        {JSON.stringify({
          firstName: searchParams.get('first'),
          lastName: searchParams.get('last'),
          idNo: searchParams.get('idno'),
          phoneNumber: searchParams.get('phone_number'),
          dateOfBirth: searchParams.get('date_of_birth'),
          email:searchParams.get('email'),
          purpose: searchParams.get('purpose'),
        })}
      </code>
    </main>
  )
}