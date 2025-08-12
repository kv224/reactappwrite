import React from 'react'

const Button = ({
    bgColor="text-red-500",
    children,
    type="button",
    className="",
    ...props

}) => {
  return (
    <Button className={`px-2 py-2 ${className} ${bgColor} ${type}  `} {...props}>
            {children}
    </Button>
  )
}
