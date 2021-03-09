import { IReducerNotifyStore } from "../../../@types/Intefaces"

export const NOTIFY_CREATE = 'NOTIFY_CREATE'
export const NOTIFY_ClEAN = 'NOTIFY_ClEAN'

export const createNotify = (notifyInfo : IReducerNotifyStore) => {
    return {
        type : NOTIFY_CREATE,
        payload : notifyInfo
    }
}

export const cleanNotify = () => {
    return {
        type : NOTIFY_ClEAN
    }
}
