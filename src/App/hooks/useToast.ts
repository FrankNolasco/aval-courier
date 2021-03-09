import { useDispatch } from "react-redux"
import { IReducerNotifyStore } from "../../@types/Intefaces"
import { createNotify } from '../redux/actions/notify_action'

const useToast = (toastProps : IReducerNotifyStore) => {

    const dispatch = useDispatch()

    const actualizarToast = (toast : IReducerNotifyStore) => {
        toastProps = toast
    }

    const iniciar = () => {
        dispatch(
            createNotify(toastProps)
        )
    }

    return {
        iniciar,
        actualizarToast
    }

}

export default useToast;
