/*****************************************************************
 * Karatech ELV
 * File : src/components/layout/DateBox.tsx
 * Description :
 * Persian / Gregorian Date Component
 *****************************************************************/

import { useEffect, useState } from "react";

import "./DateBox.css";

function DateBox() {

    const [isPersian,setIsPersian]=useState(true);

    const [date,setDate]=useState("");

    useEffect(()=>{

        const updateDate=()=>{

            const now=new Date();

            if(isPersian){

                setDate(

                    now.toLocaleDateString("fa-IR",{

                        weekday:"long",

                        year:"numeric",

                        month:"long",

                        day:"numeric"

                    })

                );

            }

            else{

                setDate(

                    now.toLocaleDateString("en-GB",{

                        weekday:"long",

                        year:"numeric",

                        month:"long",

                        day:"numeric"

                    })

                );

            }

        };

        updateDate();

        const timer=setInterval(updateDate,1000);

        return ()=>clearInterval(timer);

    },[isPersian]);

    return(

        <div className="dateBox">

            <span className="dateBox__text">

                {date}

            </span>

            <button

                className="dateBox__button"

                onClick={()=>setIsPersian(!isPersian)}

            >

                {isPersian ? "EN" : "FA"}

            </button>

        </div>

    );

}

export default DateBox;
