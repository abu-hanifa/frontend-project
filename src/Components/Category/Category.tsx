import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../features/categorySlice'

function Category() {
    const category = useSelector((state) => state.category.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])


   

  return (
    <div>
        {category.map((item) => {
            return (
                <button>{item.name}</button>
            )
        })}
    </div>
  )
}

export default Category