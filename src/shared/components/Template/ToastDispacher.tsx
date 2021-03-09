import React, { Fragment, ReactElement, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Toast } from "primereact/toast"
import { IReducerNotifyStore } from "../../../@types/Intefaces"
import { cleanNotify } from "../../../App/redux/actions/notify_action"
interface Props {
  children: JSX.Element | JSX.Element[]
}
function ToastDispacher({ children }: Props): ReactElement {
  const toast = useRef<any>(null)
  const notify: IReducerNotifyStore = useSelector((state : any) => state.notify_reducer)
  const dispatch = useDispatch()
  useEffect(() => {
    if (notify.detail !== "Test_message") {
      toast.current.show(notify)
      dispatch(cleanNotify())
    }
    return () => {}
    //eslint-disable-next-line
  }, [notify])
  return (
    <Fragment>
      {children}
      <Toast ref={toast} />
    </Fragment>
  )
}
export default ToastDispacher
