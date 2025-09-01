'use client';

import React from 'react';
import { AiOutlineLine } from "react-icons/ai";

export default function Jobs() {
  const jobsData = [
    {
      title: "ادمین وبسایت فروشگاهی",
      company: "میتلند",
      dateS: "1399-11-09",
      dateE: "1401-01-01",
      description: 'پشتیبانی و ادمین سایت فروشگاهی میتلند، اصلاحات ایرادات و مشکلات سایت و تولید محتوی'
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت نمونه",
      dateS: "1401-02-15",
      dateE: "1402-08-10",
      description: 'توسعه رابط کاربری با React و Tailwind CSS و بهینه‌سازی تجربه کاربری'
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت نمونه",
      dateS: "1401-02-15",
      dateE: "1402-08-10",
      description: 'توسعه رابط کاربری با React و Tailwind CSS و بهینه‌سازی تجربه کاربری'
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت نمونه",
      dateS: "1401-02-15",
      dateE: "1402-08-10",
      description: 'توسعه رابط کاربری با React و Tailwind CSS و بهینه‌سازی تجربه کاربری'
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت نمونه",
      dateS: "1401-02-15",
      dateE: "1402-08-10",
      description: 'توسعه رابط کاربری با React و Tailwind CSS و بهینه‌سازی تجربه کاربری'
    },
    {
      title: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت نمونه",
      dateS: "1401-02-15",
      dateE: "1402-08-10",
      description: 'توسعه رابط کاربری با React و Tailwind Tailwind Tailwind Tailwind CSS و بهینه‌سازی تجربه vکاربری کاربری کاربری'
    }
  ];

  const getDifference = (dateStart, dateEnd) => {
    const [y1, m1, d1] = dateStart.split('-').map(Number);
    const [y2, m2, d2] = dateEnd.split('-').map(Number);

    let years = y2 - y1;
    let months = m2 - m1;

    if (d2 < d1) months -= 1;
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    let result = '';
    if (years > 0) result += `${years} سال `;
    if (months > 0) result += `${months} ماه`;

    return result.trim();
  };

  return (
    <div className="space-y-8 md:max-h-[500px] md:overflow-y-auto overflow-x-hidden py-5" dir="rtl">
      {jobsData.map((job, index) => (
        <div key={index} className="  pl-6 relative hover:bg-slate-100 dark:hover:bg-slate-900  rounded p-2 cursor-pointer">
          <div className="text-sm text-zinc-500 dark:text-zinc-400 text-right flex items-center gap-2">
            <span>{job.dateS}</span>
            <AiOutlineLine />
            <span>{job.dateE}</span>
            <span className="text-primary-500">({getDifference(job.dateS, job.dateE)})</span>
          </div>

          <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{job.title}</h3>
          <p className="text-zinc-700 dark:text-zinc-300 mt-1 text-sm">{job.description}</p>
        </div>
      ))}
    </div>
  );
}
