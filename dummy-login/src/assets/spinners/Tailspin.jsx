import React from 'react'
import { Tailspin } from 'react-loader-spinner'

const Tailspin = () => {
  return <Tailspin 
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
  />
}

export default Tailspin