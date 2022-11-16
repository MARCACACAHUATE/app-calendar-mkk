import React from "react";

interface Props {
    botonText: string
}

function BotonNavegacion({ botonText }: Props){
    return (
        <button className="mx-2">
            {botonText}
        </button>
    );
}

export { BotonNavegacion }
