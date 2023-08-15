import React, { memo } from 'react'
import { ButtonElem } from '../../AddProduct/style'

export const ProductButton = memo(({children, buttonHandler}) => {
  return (
    <ButtonElem onClick={() => buttonHandler()}>{children}</ButtonElem>
  )
})

