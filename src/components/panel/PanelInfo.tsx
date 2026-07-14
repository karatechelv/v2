/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./PanelInfo.css";

interface Props{

    width:number;

    height:number;

    depth:number;

}

function PanelInfo({

width,

height,

depth

}:Props){

    return(

        <div className="panelInfo">

            <h3>

                Panel Size

            </h3>

            <p>

                Width : {width} mm

            </p>

            <p>

                Height : {height} mm

            </p>

            <p>

                Depth : {depth} mm

            </p>

        </div>

    );

}

export default PanelInfo;
