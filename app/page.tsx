"use client"


import Image from 'next/image'
import Link from 'next/link'
import { BriefcaseIcon, CheckCheck, CodeIcon, LayoutIcon, LucideIcon, MegaphoneIcon } from 'lucide-react'
import { ReactElement } from 'react'



import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import Footer from '@/components/landingPage/footer'
import Slide from '@/components/landingPage/slide'

export default function fsdsdd() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <Navbar />
      <div className='w-full'>

      <Slide />
      </div>
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'>Ease learn</h1>
            <h2 className='text-md md:text-2xl'>Start growing today!</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>Ease learn is an AI-powered sales optimization tool that provides data-driven insights to boost sales performance.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
      <Link  href="/sign-in">
        <button className='w-48 h-12 text-sm sm:text-base rounded bg-slate-800 text-white hover:bg-slate-900 hover:text-white transition-colors'>Sign-in</button>
        </Link>
        <Link  href="/sign-up">
        <button className='w-48 h-12 text-sm sm:text-base rounded bg-slate-800 text-white hover:bg-slate-900 hover:text-white transition-colors'>Sign-up</button>
        </Link>
        {/* <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button> */}
      </div>
        </div>

        <div className='w-full  h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative '>
      
      <Image src="/e.svg" layout="fill"  alt="Hero Image"/>
    </div>

      </header>

      <section className="w-full py-12">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Courses</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Browse our wide range of courses to expand your knowledge.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <LayoutIcon className="h-6 w-6" />
              <CardTitle>UX Design</CardTitle>
              <CardDescription>Learn the principles of user experience design.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <LayoutIcon className="h-6 w-6" />
              <CardTitle>Frontend Development</CardTitle>
              <CardDescription>Master building web interfaces with HTML, CSS, and JavaScript.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="p-4">
              <LayoutIcon className="h-6 w-6" />
              <CardTitle>Data Science</CardTitle>
              <CardDescription>Dive into data analysis, machine learning, and AI.</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end p-4">
              <Link
                className="inline-flex h-8 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-xs font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

      <section className="w-full py-6 md:py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 lg:gap-16 xl:gap-20">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Top Categories</h2>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Browse our extensive collection of topics.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-100 rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 dark:border-gray-800">
            <CodeIcon className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-tighter">Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Learn the latest web development frameworks and tools.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-100 rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 dark:border-gray-800">
            <BriefcaseIcon className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-tighter">Business</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Discover strategies for starting and growing your own business.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border border-gray-100 rounded-xl p-4 md:p-6 lg:p-8 xl:p-10 dark:border-gray-800">
            <MegaphoneIcon className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800" />
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold tracking-tighter">Marketing</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get insights into effective marketing strategies for the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Footer />



    </main>
  )
}


function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>Ease learn</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="/sign-in">Home</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#pricing">Pricing</Link></li>
          
        </ul>
      </div>

    </div>
  )
}