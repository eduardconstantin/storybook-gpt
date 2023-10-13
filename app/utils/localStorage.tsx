import { StoriesType } from '../main-content'

export const getStorage = () => {
  const storiesString = localStorage.getItem('stories') || '[]'
  const storiesArray = JSON.parse(storiesString)

  return storiesArray
}

export const saveStorage = (items: StoriesType[]) => {
  localStorage.setItem('stories', JSON.stringify(items))
}

export const deleteStorage = (deletingComponent: StoriesType) => {
  const items: StoriesType[] = getStorage()
  const updatedItems = items.filter(
    (item) => item.component !== deletingComponent.component
  )
  localStorage.setItem('stories', JSON.stringify(updatedItems))
}
