import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateTimePicker from "../Appointments/DateTimePicker";

const CreateAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState("");

  const appointmentOptions = [
    "السبت",
    "الاحد",
    "الاثنين",
    "الثلثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة ",
  ];

  return (
    <div className="flex flex-col gap-5 justify-around items-center w-full 2xl:pr-3">
      <div className="flex justify-end items-center w-full pr-10">
        <h1 className="text-white font-bold text-2xl">إنشاء ميعاد</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-8 items-center">
        {/* Button */}
        <button className="btn btn-active bg-[#00c853] hover:bg-[#0F430F] outline-none text-white font-semibold  px-4 rounded-md py-3">
          انشئ ميعاد
        </button>
        <div className="col-span-3 w-full">
          <DateTimePicker />
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
