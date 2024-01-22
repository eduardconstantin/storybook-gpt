'use client'

import { useEffect, useState } from 'react'
import {
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from 'react-hook-form'
import Form from '../form'
import Stories from '../stories'
import { getStorage } from '../utils/localStorage'

export const MainContent = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>()
  const [items, setItems] = useState<StoriesType[]>([])
  const [updateStoriesList, setUpdateStoriesList] = useState<boolean>(false)

  useEffect(() => {
    getStoriesList()
  }, [updateStoriesList])

  const getStoriesList = () => {
    const storageItems = getStorage()
    setItems(storageItems)
  }

  return (
    <div>
      <Form
        form={{
          register,
          handleSubmit,
          setValue,
          getValues,
          formState: { errors },
        }}
        items={items}
        setItems={setItems}
        setUpdateStoriesList={setUpdateStoriesList}
      />
      <Stories
        form={{
          register,
          handleSubmit,
          setValue,
          getValues,
          formState: { errors },
        }}
        items={items}
        updateStoriesList={updateStoriesList}
        setUpdateStoriesList={setUpdateStoriesList}
      />
    </div>
  )
}

export type FormValues = {
  component: string
  apiKey: string
  componentName: string
  story?: string
}

export type StoriesType = {
  name: string
  component: string
}

export type FormType = {
  register: UseFormRegister<FormValues>
  handleSubmit: UseFormHandleSubmit<FormValues>
  setValue: UseFormSetValue<FormValues>
  getValues: UseFormGetValues<FormValues>
  formState: { errors: FieldErrors<FormValues> }
}
