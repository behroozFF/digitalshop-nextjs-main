import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center mx-auto my-4'>
      <CatalogList />
      <CatalogSelector/>
    </div>
  )
}

export default page