import React from "react";

const Appointments = ({ clientTime = [] }) => {
  return (
    <div className="flex flex-col gap-5 justify-around items-center w-full">
      <div className="flex justify-end items-center w-full pr-10">
        <h1 className="text-white font-semibold text-2xl ">المواعيد</h1>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8 overflow-y-auto h-[75vh]">
        {clientTime.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] text-white rounded-2xl border border-[#00c853] h-[250px] flex flex-col justify-start "
          >
            {/* Header */}
            <div className="text-right font-semibold text-lg mb-2 border-b border-[#00c853] pb-2 w-full flex items-center justify-end p-3">
              موعد
            </div>

            {/* Content */}
            <div className="text-right p-4 flex flex-col justify-start items-end">
              <p className="mb-2">
                <span className="font-bold">مرسل من:</span> {item.sender}
              </p>
              <p className="mb-2">
                <span className="font-bold">العنوان:</span> {item.title} التصميم
                الجرافيكي
              </p>
              <p className="mt-4">
                <span className="font-bold">الميعاد:</span> {item.appointment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;