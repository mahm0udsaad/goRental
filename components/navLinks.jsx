"use client"
import { IoCarSportOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiMoneyDuotone } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { useRouter, useSearchParams } from 'next/navigation';

const navItems = [
  { text: 'Dashboard', link: '/dashboard', icon: <LuLayoutDashboard /> },
  { text: 'Cars', link: '/cars', icon: <IoCarSportOutline /> },
  { text: 'Treasury', link: '/treasury', icon: <PiMoneyDuotone /> },
  { text: 'Customers', link: '/customers', icon: <FaRegUserCircle /> },
  { text: 'Contracts', link: '/contracts', icon: <HiOutlineDocumentChartBar />},
  { text: 'Invoices', link: '/invoices', icon: <HiOutlineDocumentChartBar />},
  { text: 'Maintenance', link: '/maintenance', icon: <HiOutlineDocumentChartBar />},
];
const NavLinks = () => {
    const router = useRouter();
    const page = useSearchParams().get('p')
  const handleLinkClick = (link) => {
    const currentLink = link.split('/')[1]
    router.push(`?p=${currentLink}`);
  };

    console.log(page);
  return (
    <section className="flex flex-col w-[15%] ml-4">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`hover:text-white self-stretch flex justify-between gap-4 mt-7 ${
            page === item.text.toLowerCase() ? 'text-white' : 'text-[#a6a6a6]'
          }`}
          onClick={() => handleLinkClick(item.link)}
        >
          <div className=" text-2xl flex items-center cursor-pointer">
            {item.icon}
            <span className="text-lg font-semibold ml-2">{item.text}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
export default  NavLinks ;
