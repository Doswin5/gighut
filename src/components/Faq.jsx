import React from 'react'
import { faqs } from '../constants'
import Question from './Question'

const Faq = () => {
  return (
    <div className='lg:px-[100px] px-4 pb-10'>
      <h2 className="font-bold lg:text-[36px] text-[24px] mb-10">
        FAQS & Answers
      </h2>
      <div className="flex flex-col gap-10">
        {
          faqs.map(faq => (
            <Question items={faq} />
          ))
        }
      </div>
    </div>
  )
}

export default Faq