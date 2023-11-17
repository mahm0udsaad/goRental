import Link from "next/link";
import * as React from "react";

export function NavBar() {
  return (
    <div className="flex flex-col mt-20 max-md:mt-10">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/191c1666-e3ee-4390-b7ed-ef2fe442e211?apiKey=00dd475291cf4f1da724421e257168ca&"
        className="aspect-[2.37] object-contain object-center w-[206px] overflow-hidden self-center"
      />
      <div className="text-white text-3xl font-semibold leading-9 self-stretch whitespace-nowrap mt-5">
        Samantha
      </div>
      <div className="text-white text-lg leading-7 opacity-60 self-stretch whitespace-nowrap mt-2">
        samantha@email.com
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-4 mt-24 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ab5b59-227b-4dea-a0f1-3722adac8e16?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-square object-contain object-center w-[18px] justify-center items-center overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl font-semibold leading-9 opacity-50 grow whitespace-nowrap">
          Dashboard
        </div>
      </div>
      <div className="self-stretch flex justify-between gap-4 mt-8">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3267af2-284c-4064-a45f-c945b6338ae6?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-[1.31] object-contain object-center w-[21px] fill-zinc-300 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-zinc-300 text-2xl font-semibold leading-9 self-stretch grow whitespace-nowrap">
          Cars
        </div>
      </div>
      <div className="self-stretch flex justify-between gap-3.5 mt-9">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a42f57d-af1a-4934-82c1-aaa665b468df?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-[1.39] object-contain object-center w-[25px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl font-medium leading-9 tracking-tight opacity-50 grow whitespace-nowrap">
          Treasury
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-5 mt-7">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ab6320-817b-4ee6-b2e3-d8b68c38ce62?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-[0.88] object-contain object-center w-[22px] fill-zinc-500 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl font-semibold leading-9 opacity-50 grow whitespace-nowrap self-start">
          Costumers
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-4 mt-9">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/69c1c49c-888c-4e13-9ad2-3655e462d5c9?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-[0.76] object-contain object-center w-[19px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl font-semibold leading-9 opacity-50 self-center grow whitespace-nowrap my-auto">
          Contracts
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-5 mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6df2875-b615-4b8e-96cf-5b53d5c49b6a?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-[0.76] object-contain object-center w-[19px] fill-gray-500 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl font-semibold leading-9 opacity-50 grow whitespace-nowrap self-start">
          Invoices
        </div>
      </div>
      <div className="self-stretch flex items-stretch justify-between gap-3.5 mt-9">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4f9b84-5402-4f99-a7af-f2f9bfd49d12?apiKey=00dd475291cf4f1da724421e257168ca&"
          className="aspect-square object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl font-semibold leading-9 opacity-50 self-center grow whitespace-nowrap my-auto">
          Maintenance
        </div>
      </div>
    </div>
  );
}
export function WebsiteNavBar(){
    return(<div className="z-50 w-full pt-4 fixed hidden sm:flex items-center justify-between gap-5 px-5 max-md:flex-wrap">
      <div className="text-zinc-900 text-base font-bold leading-8 tracking-[3px] uppercase my-auto">
        <span className="text-blue-500">/</span>
        <span className="text-zinc-900">gorental</span>
      </div>
      <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <Link href={'/#pricing'} className="text-zinc-900 text-base font-medium leading-6 self-center my-auto">
          Pricing
        </Link>
        <Link href={'/#'} className="text-zinc-900 text-base font-medium leading-6 self-center my-auto">
          Support
        </Link>
        <div className="bg-zinc-300 w-px shrink-0 h-[17px] mt-5 self-start" />
        <div className="text-zinc-900 text-base font-medium leading-6 self-center my-auto">
          Login
        </div>
        <Link href={'/signup'} className="hover:bg-black hover:text-white transition text-zinc-900 text-right text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch border-[color:var(--gray-400,#A1A1AA)] self-stretch grow px-4 py-3 rounded-xl border-[1.5px] border-solid max-md:pr-0">
          Create free account
        </Link>
      </div>
    </div>)
}