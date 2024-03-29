import { currentUser } from "@clerk/nextjs";
import Link from 'next/link';

export function WebsiteNavBar(){
  const user =  currentUser()
  
      return(<div className="z-50 w-full pt-4 fixed hidden sm:flex items-center justify-between gap-5 px-5 max-md:flex-wrap">
        <div className="text-zinc-900 text-base font-bold  tracking-[3px] uppercase my-auto">
          <span className="text-blue-500">/</span>
          <span className="text-zinc-900">gorental</span>
        </div>
        <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <Link href={'/#pricing'} className="text-zinc-900 text-base font-medium  self-center my-auto">
            Pricing
          </Link>
          <Link href={'/#'} className="text-zinc-900 text-base font-medium  self-center my-auto">
            Support
          </Link>
          <div className="bg-zinc-300 w-px shrink-0 h-[17px] mt-5 self-start" />
         
          {user ? 
          <Link href={'/dashboard'} className="hover:bg-black hover:text-white text-lg-zinc-900 text-right text-base font-medium  whitespace-nowrap justify-center items-stretch border-[color:var(--gray-400,#A1A1AA)] self-stretch grow px-4 py-3 rounded-xl border-[1.5px] border-solid max-md:pr-0">
          Dashboard
        </Link>
        :
         <>
         <div className="text-zinc-900 text-base font-medium  self-center my-auto">
            Login
          </div>
        <Link href={'/signup'} className="hover:bg-black hover:text-white text-lg-zinc-900 text-right text-base font-medium  whitespace-nowrap justify-center items-stretch border-[color:var(--gray-400,#A1A1AA)] self-stretch grow px-4 py-3 rounded-xl border-[1.5px] border-solid max-md:pr-0">
        Create free account
      </Link>  
         </>
        }
        </div>
      </div>)
  }