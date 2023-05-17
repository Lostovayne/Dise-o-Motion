import andrea from '../assets/andreea-chidu-507735.png'
import { ImagenesGallery } from '../components/ImagenesGallery'

const Gallery = () => {
  return (
    <div className='min-h-screen col-span-12'>
      <div className='mx-auto w-full  lg:w-3/12 mt-7 '>
        <img
          src={andrea}
          alt=''
          className='w-32 h-32 object-cover rounded-full object-center mx-auto '
        />
        <p className='font font-medium text-lg w-10/12 md:w-full mx-auto text-gray-500 py-4 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab
          autem quod quisquam, qui voluptate quia necessitatibus porro quam?
          Unde.
        </p>
      </div>
      <hr className='border mt-5 border-gray-100' />
      {/* imagenes */}
      <div>
        <ImagenesGallery />
      </div>
    </div>
  )
}
export default Gallery
