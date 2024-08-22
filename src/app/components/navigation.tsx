"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Navigation = () => {
    const path = usePathname();

  return (
    <div className=" flex w-10/12 mx-auto py-3 justify-between">
    <h1 className="text-xl font-bold text">ERFLaundry</h1>
    <div className="flex gap-x-6 text-md">
      <Link className={`hover:underline ${path == '/'? 'font-semibold':'font-normal'} `} href="/">Home</Link>
      <Link className={`hover:underline ${path == '/scan'? 'font-semibold':'font-normal'} `} href="/scan">Scan Things</Link>
      <Link className={`hover:underline ${path == '/debug'? 'font-semibold':'font-normal'} `} href="/debug">Debugging</Link>
    </div>
  </div>
  )
}

export default Navigation