import React from "react";

const DiscSection = () => {
  return (
    <div className=" basis-1/2 pl-7 flex flex-col justify-between">
      <div>
        <h1 className=" text-4xl font-bold text-[#4831d4] underline decoration-slate-500 decoration-double underline-offset-4">
          {" "}
          توسعه دهنده‌ی فرانت‌اند{" "}
        </h1>
        <p className=" text-2xl mt-6 pt-2 font-semibold text-[#4831d4] ">
          من کارمو دوست دارم و می‌تونم هر وب‌سایتی رو با توجه به نیاز شما و با
          تجربه‌ی کاربری عالی طراحی کنم و اونو توسعه دهم.
        </p>
      </div>
      <div className=" flex justify-start gap-6 h-12">
        <div className=" text-xl font-semibold text-[#4831d4]">
          تخصص من React است و با استفاده از اون هر وب‌سایتی رو توسعه میدم.
        </div>
        <div className=" text-l font-semibold text-[#4831d4]">
          مشتاق همکاری با شما هستم.
        </div>
      </div>
    </div>
  );
};

export default DiscSection;
