'use client'
import { useState } from 'react';
import { DateRangePicker } from '@wojtekmaj/react-daterange-picker';
import { addDays } from 'date-fns';

// Define the type for the selection range state
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DatePicker() {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);

  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} />
    </div>
  );
}