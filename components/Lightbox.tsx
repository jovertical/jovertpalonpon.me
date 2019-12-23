import React, { useEffect, useState } from 'react'
import ReactLightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

interface Props {
  images: string[]
  activeIndex: number
  handleReset: Function
}

const Lightbox: React.FC<Props> = ({ images, activeIndex, handleReset }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(activeIndex)

  useEffect(() => {
    if (activeIndex > -1) {
      setOpen(true)
    }

    setIndex(activeIndex)
  }, [activeIndex])

  if (!open || activeIndex < 0 || images.length === 0) {
    return null
  }

  return (
    <ReactLightbox
      mainSrc={images[index]}
      prevSrc={images[(index + images.length - 1) % images.length]}
      nextSrc={images[(index + 1) % images.length]}
      onCloseRequest={(): void => {
        setOpen(false)
        handleReset()
      }}
      onMovePrevRequest={(): void => setIndex((index + 1) % images.length)}
      onMoveNextRequest={(): void =>
        setIndex((index + images.length - 1) % images.length)
      }
    />
  )
}

export default Lightbox
