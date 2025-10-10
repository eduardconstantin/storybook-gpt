'use client'
import { ErrorMessage } from '@hookform/error-message'
import { ComponentConverter } from '@storybook-gpt/app/utils/componentConverter'
import React, { useState } from 'react'
import { saveStorage } from './utils/localStorage'
import { FormType, FormValues, StoriesType } from './components/main-content'

const Form = ({ form, items, setItems }: Prop) => {
  const [hasClicked, setHasClicked] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = form

  const onSubmit = async (data: FormValues) => {
    setHasClicked(true)
    const { component, apiKey } = data
    const story = await ComponentConverter({
      component: component.replace(/\r?\n/g, '\\n').trim(),
      apiKey,
    })

    const storyObject = {
      name: getValues('componentName'),
      component: story || '',
    }
    setValue('story', storyObject.component)
    setItems([...items, storyObject])
    saveStorage([...items, storyObject])

    setHasClicked(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-8 rounded-2xl bg-slate-100 p-6 shadow-lg dark:bg-[#292930] lg:flex-row lg:gap-10 lg:p-10"
    >
      {/* Left Column */}
      <div className="flex w-full flex-col items-center gap-4 lg:w-1/2">
        <div className="flex w-full flex-col gap-1">
          <label className="text-sm text-dark dark:text-zinc-300 ">
            OPENAI API KEY
          </label>
          <input
            className={`w-full rounded-xl bg-slate-300 py-3 px-4 text-dark dark:bg-[#00000034] dark:text-light ${
              !errors.apiKey &&
              'focus-visible:outline focus-visible:outline-[#FF4785]'
            } ${errors.apiKey && 'outline outline-1 outline-red-600'}`}
            type="text"
            autoComplete="off"
            placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            {...register('apiKey', {
              required: 'This field is required.',
            })}
          />
          <ErrorMessage
            errors={errors}
            name="apiKey"
            render={({ message }) => (
              <p className="text-xs text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <label className="text-sm text-dark dark:text-zinc-300 ">
            REACT COMPONENT NAME
          </label>
          <input
            className={`w-full rounded-xl bg-slate-300 py-3 px-4 text-dark dark:bg-[#00000034] dark:text-light  ${
              !errors.apiKey &&
              'focus-visible:outline focus-visible:outline-[#FF4785]'
            } ${errors.apiKey && 'outline outline-1 outline-red-600'}`}
            type="text"
            autoComplete="off"
            placeholder="My Component"
            {...register('componentName', {
              required: 'This field is required.',
            })}
          />
          <ErrorMessage
            errors={errors}
            name="apiKey"
            render={({ message }) => (
              <p className="text-xs text-red-600">{message}</p>
            )}
          />
        </div>
        <div className="flex h-full w-full flex-col gap-1">
          <label className="text-sm text-dark dark:text-zinc-300">
            REACT COMPONENT
          </label>
          <textarea
            className={`h-full min-h-[300px] w-full rounded-xl bg-slate-300 py-3 px-4 text-dark dark:bg-[#00000034] dark:text-light focus-visible:outline focus-visible:outline-[#FF4785] lg:min-h-[400px] ${
              errors.component && 'outline outline-1 outline-red-600'
            }`}
            placeholder={`import React from 'react'\n\nconst MyComponent = () => {\n  render <></>\n}\n\nexport default MyComponent;`}
            {...register('component', {
              required: 'This field is required.',
            })}
            onClick={() => !hasClicked && setValue('story', undefined)}
          />
          <ErrorMessage
            errors={errors}
            name="component"
            render={({ message }) => (
              <p className="text-xs text-red-600">{message}</p>
            )}
          />
        </div>
        <button
          className="flex w-full flex-row items-center justify-center gap-2 rounded-full bg-[#FF4785] py-3 px-7 text-base font-semibold text-white outline outline-[3px] outline-rose-500/30 transition-all duration-300 hover:bg-[#da3f72]"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
          </svg>
          {!getValues('story') && hasClicked
            ? 'Generating story...'
            : 'Generate story'}
        </button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#00000034] lg:h-auto lg:w-px"></div>

      {/* Right Column */}
      <div className="flex w-full flex-col lg:w-1/2">
        <div className="flex h-full flex-col gap-1">
          <label className="text-sm text-dark dark:text-zinc-300">
            STORYBOOK STORY
          </label>
          <textarea
            readOnly={true}
            onClick={() =>
              !!getValues('story') &&
              navigator.clipboard.writeText(getValues('story')!)
            }
            className="h-full min-h-[350px] w-full cursor-pointer rounded-xl bg-slate-300 py-3 px-4 text-dark dark:bg-[#00000034] dark:text-light focus-visible:outline focus-visible:outline-[#FF4785] lg:min-h-[500px]"
            {...register('story', { required: false })}
          />
        </div>
      </div>
    </form>
  )
}

export default Form

type Prop = {
  form: FormType
  items: StoriesType[]
  setItems: React.Dispatch<React.SetStateAction<StoriesType[]>>
  setUpdateStoriesList: React.Dispatch<React.SetStateAction<boolean>>
}