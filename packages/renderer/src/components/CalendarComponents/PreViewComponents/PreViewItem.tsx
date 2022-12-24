import React, { useContext } from "react";
import { ModalContext } from '../../../context/ModalContext';
import { Colores } from "../../../../types/types";


interface Props {
    titulo_tarea: string
    dias_restantes: number
}


function limitar_caracteres(elemento: string, max_chars: number): string{
    if(elemento.length > max_chars){
        return `${elemento.substring(0, max_chars)}...`;
    }
    return elemento;
}

function PreViewItem(props: Props) {

    const modalInfo = useContext(ModalContext);

    const onClickOpenModal = () => {
        modalInfo?.setModalTareasOpen(!modalInfo?.modalTareasOpen);
    }

    // seteando el color de la preview
    const color_preview = (dias_restantes: number) => {
        let color_select: keyof Colores;

        const colores: Colores = {
            con_tiempo: "bg-teal-500",
            algo_tiempo: "bg-violet-600",
            sin_tiempo:  "bg-rose-700"
        }

        if(dias_restantes <= 3){
            color_select = "sin_tiempo"
        } else{
            if(dias_restantes <= 4 && dias_restantes <= 6){
                color_select = "algo_tiempo";
            } else{
                color_select = "con_tiempo";
            }
        }
        return colores[color_select];
    }


    return (
        <button onClick={onClickOpenModal}  className={`${color_preview(props.dias_restantes)} rounded-lg py-[2px] px-[5px] my-[1px]`}>
            <p className="text-white text-xs">{ limitar_caracteres(props.titulo_tarea, 12) }</p>
        </button>
    );
}


export { PreViewItem }
