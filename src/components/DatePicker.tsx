'use client'
import { useState } from 'react';
import { DateRangePicker } from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
// TODO: Customize the datepicker to better suit the website.

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DatePicker() {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <div className="flex justify-center items-center">
      <DateRangePicker
        onChange={onChange}
        value={value}
         />
    </div>
  );
}