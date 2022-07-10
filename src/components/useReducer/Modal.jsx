import React, {useEffect} from 'react'

const Modal = ({modalContent, closeModal}) => {
    useEffect(()=>{
        setTimeout(()=>{
            closeModal()
        }, 1000)
    })
  return (
    <div>{modalContent}</div>
  )
}

export default Modal;