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
          <div className="fixed inset-0 flex flex-col items-center bg-gradient-t-blue-darker-blue">
            <Button
              variant="text"
              className="fixed right-0 top-0 mt-5"
              onClick={(): void => setOpen(false)}
            >
              <div className="w-5 h-2px -rotate-45 bg-white" />
              <div className="w-5 h-2px rotate-45 bg-white" />
            </Button>

            <div className="mt-10">
              <Text variant="h3" className="text-white text-center mb-5">
                Hello there!
              </Text>
              <Text variant="h6" className="text-white text-center">
                Want to collaborate in a project? <br /> or just talk about
                something?
              </Text>
            </div>

            {sent ? (
              <Text className="text-white pt-10">
                Thanks for your interest!
              </Text>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full lg:w-1/3 px-5 lg:px-0 py-10"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-12 shadow-none bg-transparent border-b border-gray-400 text-white placeholder-gray-400 mb-5"
                  required
                  value={name}
                  onChange={(e): void => setName(e.target.value)}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full h-12 shadow-none bg-transparent border-b border-gray-400 text-white placeholder-gray-400 mb-5"
                  required
                  value={email}
                  onChange={(e): void => setEmail(e.target.value)}
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full shadow-none bg-transparent border-b border-gray-400 text-white placeholder-gray-400 mb-10"
                  required
                  defaultValue={message}
                  onChange={(e): void => setMessage(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-full border text-white hover:border-blue hover:bg-white hover:text-blue"
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
