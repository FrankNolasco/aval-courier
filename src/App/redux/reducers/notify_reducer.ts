import { IReducerNotifyStore } from "../../../@types/Intefaces"
import { NOTIFY_ClEAN, NOTIFY_CREATE } from "../actions/notify_action"

const default_notify : IReducerNotifyStore = { severity: 'success', summary: 'Test_message', detail: 'Test_message' }

const notify_reducer = (state: IReducerNotifyStore = default_notify, action: any) => {
    switch (action.type) {
        case NOTIFY_CREATE : 
            return {
                ...action.payload
            }
        case NOTIFY_ClEAN : 
            return default_notify
        default:
            return state
    }
}

export default notify_reducer