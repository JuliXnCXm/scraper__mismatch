import React, { useEffect, useState } from 'react'

const Carulla = () => {

  const [data, setData] = useState(null)

  useEffect(() =>{
    setData("")
  }, [])

  return (
    <div>carulla</div>
  )
}

export default Carulla