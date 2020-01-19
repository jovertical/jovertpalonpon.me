import React, { useState, useRef } from 'react'
import Button from '@frontend/components/Button'
import Portal from '@frontend/components/Portal'

const Modal: React.FC = ({ children }) => {
  const box = useRef(null)
  const [open, setOpen] = useState(true)

  const handleClose = (event: React.MouseEvent): void => {
    if (!box.current?.contains(event.target)) {
      setOpen(false)
    }
  }

  return (
    <React.Fragment>
      {open && (
        <Portal selector="#modal-portal">
          <div
            onClick={handleClose}
            className="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
          >
            <div
              ref={box}
              className="relative w-full max-w-2xl bg-white shadow-lg rounded p-8"
            >
              <Button
                variant="text"
                className="absolute right-0 top-0 mt-5"
                onClick={(): void => setOpen(false)}
              >
                <div className="w-5 h-2px -rotate-45 bg-gray-300" />
                <div className="w-5 h-2px rotate-45 bg-gray-300" />
              </Button>
              <div className="flex justify-center my-5">
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  )
}

export default Modal
