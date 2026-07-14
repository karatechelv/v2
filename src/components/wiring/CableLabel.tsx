/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./CableLabel.css";

interface Props{

    text:string;

}

function CableLabel({text}:Props){

    return(

        <span className="cableLabel">

            {text}

        </span>

    );

}

export default CableLabel;
