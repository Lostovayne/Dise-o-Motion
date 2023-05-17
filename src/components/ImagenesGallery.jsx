import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import ImageViewer from 'react-simple-image-viewer'
import { images } from '../data/images'

export function ImagenesGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <div className='flex gap-4 w-10/12 lg:w-6/12 mx-auto flex-wrap mt-6 mb-2'>
      {images.map((src, index) => (
        <motion.img
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          style={{ margin: '2px' }}
          alt=''
          className=' h-72  w-full lg:w-72 rounded-lg object-cover grayscale  cursor-pointer '
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  )
}
