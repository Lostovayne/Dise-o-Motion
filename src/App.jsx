import circleRed from './assets/EllipseRED.png'
import andrea from './assets/andreea-chidu-507735.png'
import Header from './components/Header'
import Main from './components/Main'
import Gallery from './page/Gallery'

const App = () => {
  return (
    <div>
      <div className=' min-h-screen grid grid-cols-1 lg:grid-cols-12'>
        <div className='h-screen relative lg:col-span-4'>
          <img src={andrea} alt='' className='w-full h-full object-cover' />
          <span className='absolute w-40 h-40 -top-20 -left-20 bg-[#FF8DBB] rounded-full'></span>
        </div>

        <div className='lg:col-span-8 overflow-hidden relative '>
          <Header />
          <hr className='border-2 border-gray-100/50' />
          <Main />
          {/* <span className='absolute w-40 h-40 -bottom-20 -right-20 bg-[#FF8DBB] rounded-full'></span> */}
          <img
            src={circleRed}
            alt=''
            className='absolute w-60 h-60 top-24 -right-36'
          />
        </div>
      </div>
      <Gallery />
    </div>
  )
}
export default App
