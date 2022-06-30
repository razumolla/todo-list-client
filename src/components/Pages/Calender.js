import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    let footer = <p className='text-blue-300'>Please pick a day.</p>;
    if (date) {
        footer = <p className='text-blue-700 text-xl mt-5'> <span className='font-bold text-blue-400'>You picked:</span>  {format(date, 'PP')}</p>;
    }

    return (
        <>
            <div class="hero min-h-screen ">
                <div class="hero-content text-center">
                    <div class="max-w-md">

                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            footer={footer}
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Calender;