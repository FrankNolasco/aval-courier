import { IActionButton } from "../../shared/components/molecula/GenericAccionButtons";

export const GENERIC_ACTIONS = (handleEdit : Function,handleDelete : Function) : IActionButton[] =>[
    { children: "Editar", type:"link",onClick:()=>{handleEdit()}},
    { children: "Eliminar", type:"primary" , danger:true,onClick:()=>{handleDelete()}},
  ];