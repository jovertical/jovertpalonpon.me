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
            className="tw-fixed tw-inset-0 tw-w-full tw-h-screen tw-flex tw-items-center tw-justify-center tw-bg-semi-75"
          >
            <div
              ref={box}
              className="tw-relative tw-w-full tw-max-w-2xl tw-bg-white tw-shadow-lg tw-rounded tw-p-8"
            >
              <Button
                variant="text"
                className="tw-absolute tw-right-0 tw-top-0 tw-mt-5"
                onClick={(): void => setOpen(false)}
              >
                <div className="tw-w-5 tw-h-2px tw--rotate-45 tw-bg-gray-300" />
                <div className="tw-w-5 tw-h-2px tw-rotate-45 tw-bg-gray-300" />
              </Button>
              <div className="tw-flex tw-justify-center tw-my-5">
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
