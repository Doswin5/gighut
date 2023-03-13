import React, { useState } from 'react'
import { minusIcon, plusIcon } from '../assets'

const Question = (props) => {
  const [isShown, setIsShown] = useState(false)
  const toggleShowFalse = () => {
    setIsShown(false)
  }
  const toggleShowTrue = () => {
    setIsShown(true)
  }
  return (
    <div className="pb-4 border-b border-dimBlack">
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-[16px] lg:text-[24px] text-dimBlack mb-4">
          {props.items.title}
        </h3>
        {
          isShown ? (
            <img src={minusIcon} alt="" className="lg:w-8 lg:h-8 w-6 h-6 cursor-pointer" onClick={toggleShowFalse} />
            ) : (
            <img src={plusIcon} alt="" className="lg:w-8 lg:h-8 w-6 h-6 cursor-pointer" onClick={toggleShowTrue} />
          )
        }
      </div>
      {
        isShown && (
          <p className="font-normal text-[16px] lg:text-[18px] text-dimBlack">
            {props.items.summary}
          </p>
        )
      }
    </div>
  )
}

export default Question