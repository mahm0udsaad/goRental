import React from 'react';
import { FiTruck, FiCalendar, FiDollarSign, FiBarChart } from 'react-icons/fi'; // Importing icons from react-icons library


const features = [
    {
      icon: <FiTruck className="text-4xl mb-4" />,
      title: 'Fleet Management',
      description: 'Efficiently manage vehicle inventory and maintenance schedules.',
    },
    {
      icon: <FiCalendar className="text-4xl mb-4" />,
      title: 'Booking System',
      description: 'Customize rental durations and pricing with ease.',
    },
    {
      icon: <FiDollarSign className="text-4xl mb-4" />,
      title: 'Accounting Integration',
      description: 'Automate invoicing and seamlessly track expenses.',
    },
    {
      icon: <FiBarChart className="text-4xl mb-4" />,
      title: 'Business Analytics',
      description: 'Track KPIs and generate custom reports for insights.',
    },
  ];

const FeatureList = () => {
  return (
    <div className="border w-full sm:w-1/2 border-[color:var(--gray-200,#E4E4E7)] shadow-2xl flex flex-col w-full mx-auto pt-3.5 pb-10 rounded-xl border-solid max-md:mt-10">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cb26ff4-b5ea-43ca-8c87-73933246892c?apiKey=00dd475291cf4f1da724421e257168ca&"
      className="aspect-[4.4] object-contain object-center w-11 overflow-hidden max-w-full ml-3.5 max-md:ml-2.5"
    />
    <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-3 max-md:max-w-full" />
    <div className="container mx-auto mt-8">
      {features.map((feature, index) => (
        <div key={index} className="mb-3 flex justify-between">
          <span className='flex justify-center w-[20%]'>{feature.icon}</span>
          <div className='w-5/6'>
          <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
          <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FeatureList;
