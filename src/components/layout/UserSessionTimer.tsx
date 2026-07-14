/*****************************************************************
 * Karatech ELV
 * File : src/components/layout/UserSessionTimer.tsx
 * Description :
 * User Session Timer
 *****************************************************************/

import { useEffect, useState } from "react";

import "./UserSessionTimer.css";

function UserSessionTimer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            setSeconds((prev) => prev + 1);

        }, 1000);

        const leavePage = () => {

            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = seconds % 60;

            alert(
                `از همراهی شما سپاسگزاریم.\n\n` +
                `مدت حضور شما در Karatech ELV\n\n` +
                `${h} ساعت ${m} دقیقه ${s} ثانیه`
            );

        };

        window.addEventListener("beforeunload", leavePage);

        return () => {

            clearInterval(timer);

            window.removeEventListener("beforeunload", leavePage);

        };

    }, [seconds]);

    const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");

    return (

        <div className="sessionTimer">

            ⏱ {hh}:{mm}:{ss}

        </div>

    );

}

export default UserSessionTimer;
