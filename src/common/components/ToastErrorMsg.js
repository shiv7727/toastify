import React, { useEffect } from 'react'
import { ToastError } from '../Toast'

function ToastErrorMsg(props) {

    useEffect(()=>{
        if(props.showError){
            ToastError("Please fill the mandatory fields")
        }
    },[props.showError])

  return (
    <div/>
  )
}

export default React.memo(ToastErrorMsg);