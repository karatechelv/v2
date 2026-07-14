/*****************************************************************
 * Karatech ELV
 * Component Item
 *****************************************************************/

type Props={

    name:string;

}

function ComponentItem({name}:Props){

    return(

        <button>

            {name}

        </button>

    );

}

export default ComponentItem;
