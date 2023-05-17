export const Header = () => {
  return (
    <header className='w-9/12 mx-auto'>
      <ul className='p-10 flex flex-col md:flex-row  gap-14 md:gap-8 '>
        <li>
          <a
            href='#'
            className='text-[#FF8DBB]  pb-9 border-b-4 border-[#FF8DBB] font-medium'>
            About
          </a>
        </li>
        <li>
          <a
            href='#'
            className=' pb-9 border-b-4 text-gray-700 border-white font-medium transition-colors duration-300 hover:border-[#FF8DBB] hover:text-[#FF8DBB]'>
            How to works
          </a>
        </li>
        <li>
          <a
            href='#'
            className='pb-9 border-b-4 text-gray-700 border-white  font-medium transition-colors duration-300 hover:border-[#FF8DBB] hover:text-[#FF8DBB]'>
            Get a photographer
          </a>
        </li>

        <li>
          <a
            href='#'
            className='text-gray-700  pt-1.5 pb-2 px-5 border rounded-full font-medium'>
            Login
          </a>
        </li>
      </ul>
    </header>
  )
}
export default Header
