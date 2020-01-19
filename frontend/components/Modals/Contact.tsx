import React, { useState } from 'react'
import Button from '@frontend/components/Button'
import Portal from '@frontend/components/Portal'
import Text from '@frontend/components/Text'
import { post } from '@frontend/helpers/api'

const Contact: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    await post('/contact', {
      name,
      email,
      message
    })

    setSent(true)
    setName('')
    setEmail('')
    setMessage('')

    setTimeout(() => {
      setOpen(false)
      setSent(false)
    }, 3000)
  }

  return (
    <React.Fragment>
      <Button onClick={(): void => setOpen(true)}>Contact</Button>
      {open && (
        <Portal selector="#modal-portal">
          <div className="tw-fixed tw-inset-0 tw-flex tw-flex-col tw-items-center tw-bg-gradient-t-blue-darker-blue">
            <Button
              variant="text"
              className="tw-fixed tw-right-0 tw-top-0 tw-mt-5"
              onClick={(): void => setOpen(false)}
            >
              <div className="tw-w-5 tw-h-2px tw--rotate-45 tw-bg-white" />
              <div className="tw-w-5 tw-h-2px tw-rotate-45 tw-bg-white" />
            </Button>

            <div className="tw-mt-10">
              <Text
                variant="h3"
                className="tw-text-white tw-text-center tw-mb-5"
              >
                Hello there!
              </Text>
              <Text variant="h6" className="tw-text-white tw-text-center">
                Want to collaborate in a project? <br /> or just talk about
                something?
              </Text>
            </div>

            {sent ? (
              <Text className="tw-text-white tw-pt-10">
                Thanks for your interest!
              </Text>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="tw-w-full lg:tw-w-1/3 tw-px-5 lg:tw-px-0 tw-py-10"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="tw-w-full tw-h-12 tw-shadow-none tw-bg-transparent tw-border-b tw-border-gray-400 tw-text-white tw-placeholder-gray-400 tw-mb-5"
                  required
                  value={name}
                  onChange={(e): void => setName(e.target.value)}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="tw-w-full tw-h-12 tw-shadow-none tw-bg-transparent tw-border-b tw-border-gray-400 tw-text-white tw-placeholder-gray-400 tw-mb-5"
                  required
                  value={email}
                  onChange={(e): void => setEmail(e.target.value)}
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="tw-w-full tw-shadow-none tw-bg-transparent tw-border-b tw-border-gray-400 tw-text-white tw-placeholder-gray-400 tw-mb-10"
                  required
                  defaultValue={message}
                  onChange={(e): void => setMessage(e.target.value)}
                />

                <button
                  type="submit"
                  className="tw-w-full tw-py-3 tw-rounded-full tw-border tw-text-white hover:tw-border-blue hover:tw-bg-white hover:tw-text-blue"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </Portal>
      )}
    </React.Fragment>
  )
}

export default Contact
