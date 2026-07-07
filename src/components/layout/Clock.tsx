/*****************************************************************
 * Karatech ELV
 * File : src/components/layout/Clock.tsx
 * Description :
 * Live Clock
 *****************************************************************/

import { useEffect, useState } from "react";

import "./Clock.css";

function Clock() {

    const [time, setTime] = useState("");

    useEffect(() => {

        const timer = setInterval(() => {

            const now = new Date();

            setTime(

                now.toLocaleTimeString("fa-IR", {

                    hour: "2-digit",

                    minute: "2-digit",

                    second: "2-digit"

                })

            );

        }, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="clock">

            🕒 {time}

        </div>

    );

}

export default Clock;
