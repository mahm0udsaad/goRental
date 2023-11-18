import Link from 'next/link';
import { IoCarSportOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiMoneyDuotone } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { currentUser } from "@clerk/nextjs";

const navItems = [
  { text: 'Dashboard', link: '/', icon: <LuLayoutDashboard /> },
  { text: 'Cars', link: '/dashboard/cars', icon: <IoCarSportOutline /> },
  { text: 'Treasury', link: '/treasury', icon: <PiMoneyDuotone /> },
  { text: 'Customers', link: '/customers', icon: <FaRegUserCircle /> },
  { text: 'Contracts', link: '/contracts', icon: <HiOutlineDocumentChartBar />},
  { text: 'Invoices', link: '/invoices', icon: <HiOutlineDocumentChartBar />},
  { text: 'Maintenance', link: '/maintenance', icon: <HiOutlineDocumentChartBar />},
];

const NavBar =async () => {
  const user = await currentUser()
  return (
    <section className="flex flex-col w-[15%] ml-4 h-full">
      <section className="flex flex-col pt-16 max-md:mt-10">
        {/* Profile Picture */}
        <div className="user-image-wrapper w-[100px] pb-3">
        <img
          loading="lazy"
          src={user.imageUrl}
          className="w-full h-full rounded-lg"
          alt="Profile Picture"
        />
      </div>
        {/* Samantha's Details */}
        <h1 className="text-white text-lg font-semibold self-stretch whitespace-nowrap max-md:mt-10">
        {user.firstName}
        </h1>
        <p className="text-white text-sm  opacity-60 self-stretch whitespace-nowrap ">
          {user.emailAddresses[0].emailAddress}
        </p>
      </section>
      {navItems.map((item, index) => (
        <div key={index} className="self-stretch flex justify-between gap-4 mt-7">
          <Link href={item.link}>
            <div className="text-white text-2xl flex items-center cursor-pointer">
              {item.icon}
              <span className="text-lg font-semibold ml-2">{item.text}</span>
            </div>
          </Link>
        </div>
      ))}

      {/* ... Existing code ... */}
      {/* Profile picture, Samantha details, etc. */}
    </section>
  );
}
export default  NavBar ;