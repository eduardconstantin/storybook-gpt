'use client'
import React from 'react'
import { deleteStorage } from './utils/localStorage'
import { FormType, StoriesType } from './main-content'

const Stories = ({
  form,
  items,
  updateStoriesList,
  setUpdateStoriesList,
}: StoriesComponent) => {
  return (
    <section className="flex flex-row w-full justify-between items-center mb-3 max-w-6xl overflow-x-visible">
      <div className="flex gap-4 max-w-6xl">
        {items.map((item: StoriesType, index) => (
          <button
            key={index}
            className="flex flex-row items-center justify-center gap-2 text-base font-semibold transition-all duration-300 hover:from-rose-700 hover:to-rose-500 bg-gradient-to-r from-rose-500 to-rose-700 py-1 px-4 w-fit rounded-full outline outline-[5px] outline-rose-500/30"
            onClick={() => {
              form.setValue('component', '')
              form.setValue('componentName', item.name)
              form.setValue('story', item.component)
            }}
          >
            {item.name}
            <svg
              onClick={() => {
                deleteStorage(item)
                setUpdateStoriesList(!updateStoriesList)
              }}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="10"
              height="10"
              fill="currentColor"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </button>
        ))}
      </div>
    </section>
  )
}
export default Stories

type StoriesComponent = {
  form: FormType
  items: StoriesType[]
  updateStoriesList: boolean
  setUpdateStoriesList: React.Dispatch<React.SetStateAction<boolean>>
}
