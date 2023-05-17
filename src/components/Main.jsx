import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiPinterestLine
} from 'react-icons/ri'

import { motion } from 'framer-motion'

const Main = () => {
  return (
    <main className='lg:w-9/12 lg:mx-auto p-10 '>
      <motion.h3
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className='text-lg text-gray-500 mb-2'>
        Portfolio
      </motion.h3>
      <motion.h1
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className='text-[#FF8DBB] font-medium text-2xl mb-5'>
        Will Torner
      </motion.h1>

      <motion.p
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        className='text-lg text-gray-500 mb-8 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorum
        veritatis! Eius, ratione consequatur expedita, eos incidunt, voluptatem
        modi qui dignissimos possimus obcaecati doloremque accusamus? Quod autem
        exercitationem eaque distinctio itaque, minima, sit voluptate omnis
        iste, fugiat tenetur quas at nobis
      </motion.p>
      <div className='mb-6'>
        <motion.h5
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          className='text-lg text-gray-500 mb-4'>
          Find me one
        </motion.h5>
        <ul className='flex flex-wrap items-center gap-8'>
          <motion.li
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <a
              href='#'
              target='_blank'
              className='block p-4 bg-gray-100 rounded-full text-3xl text-[#FF8DBB] border-2 border-transparent hover:border-[#FF8DBB] transition-colors duration-500'>
              <RiInstagramLine />
            </a>
          </motion.li>
          <motion.li
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <a
              href='#'
              target='_blank'
              className='block p-4 bg-gray-100 rounded-full text-3xl text-[#FF8DBB] border-2 border-transparent hover:border-[#FF8DBB] transition-colors duration-500'>
              <RiGithubLine />
            </a>
          </motion.li>
          <motion.li
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <a
              href='#'
              target='_blank'
              className='block p-4 bg-gray-100 rounded-full text-3xl text-[#FF8DBB] border-2 border-transparent hover:border-[#FF8DBB] transition-colors duration-500'>
              <RiLinkedinLine />
            </a>
          </motion.li>
          <motion.li
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <a
              href='#'
              target='_blank'
              className='block p-4 bg-gray-100 rounded-full text-3xl text-[#FF8DBB] border-2 border-transparent hover:border-[#FF8DBB] transition-colors duration-500'>
              <RiFacebookLine />
            </a>
          </motion.li>
          <motion.li
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}>
            <a
              href='#'
              target='_blank'
              className='block p-4 bg-gray-100 rounded-full text-3xl text-[#FF8DBB] border-2 border-transparent hover:border-[#FF8DBB] transition-colors duration-500'>
              <RiPinterestLine />
            </a>
          </motion.li>
        </ul>
      </div>
      <div className='flex items-center gap-4 md:gap-10 mb-10'>
        <motion.button
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          type='button'
          className='bg-[#FF8DBB] p-3 lg:p-5 rounded-full w-full border-2 border-transparent text-white text-lg font-medium shadow-lg shadow-[#FF8DBB]/70 hover:border-2 hover:border-[#FF8DBB] hover:text-[#FF8DBB] hover:bg-white transition-colors duration-300 hover:shadow-white'>
          Here me
        </motion.button>
        <motion.button
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
          type='button'
          className='w-full border-2 border-[#FF8DBB] text-[#FF8DBB]  p-3 lg:p-5  rounded-full text-lg font-medium'>
          Portfolio
        </motion.button>
      </div>

      <div className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center gap-8'>
        <motion.img
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          src='https://img.freepik.com/free-photo/stylish-winter-portrait-charming-young-woman-with-long-brunette-hair-woollen-white-gloves-hat-walking-street-full-with-snow-cheerful-mood-smiling_197531-1470.jpg?w=1380&t=st=1684294654~exp=1684295254~hmac=1437a08ba6daf76d41ea5c90e4c3c00bbc40a09336b7965ae2d5802c90f3a0ba'
          alt=''
          className='w-full md:w-72 h-72 object-cover grayscale rounded-3xl
        '
        />

        <motion.img
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          src='https://img.freepik.com/free-photo/spectacular-long-haired-woman-laughing-while-posing-snow-outdoor-close-up-photo-caucasian-female-model-with-romantic-smile-chilling-park-winter-day_197531-1478.jpg?w=1380&t=st=1684294748~exp=1684295348~hmac=57509fc12f0006571d149aeb2287498f4afc0801fc801e3799ba74983c9b5782'
          alt=''
          className='w-full md:w-72  h-72 object-cover grayscale rounded-3xl
        '
        />
        <motion.img
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          src='https://img.freepik.com/free-photo/ecstatic-blue-eyed-woman-with-long-blonde-hair-posing-front-white-bricked-wall-indoor-shot-surprised-girl-beautiful-pink-pyjamas_197531-21678.jpg?w=1380&t=st=1684294953~exp=1684295553~hmac=de140ab37e527ed982962a1a86ad917841486001ef073157c591fb0d80503c9c'
          alt=''
          className='w-full md:w-72 h-72 object-cover grayscale rounded-3xl
        '
        />
      </div>
    </main>
  )
}
export default Main
