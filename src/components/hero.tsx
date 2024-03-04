'use client'
import {useRouter } from 'next/navigation'
import AutoCompleteInput from '@/components/AutoCompleteInput';
import DatePicker from '@/components/DatePicker'

export default function Hero() {

    // change the url that the form spits out to accomidate the routing nextjs wants.
    const handleSubmit = (e: any) => {
      e.preventDefault();
      useRouter().push(`/${e.target.location.value}`);
    };

    return (
        <div className="py-48">
          <div className="max-w-2xl mx-auto p-4">

            <div className="text-center m-3">
              <h1 className="font-bold text-3xl text-center">Where to?</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='p-4'>
                  <AutoCompleteInput />
                </div>
                <div className="flex items-center justify-center my-8">
                <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                  <div className="ButtonLabel">
                    <span> Go places </span>
                  </div>
                </button>
              </div>
            </form>
                <div className='max-w-2xl mx-auto p-4'>
                  <DatePicker />
                </div>
          </div>
        </div>
    );
  };