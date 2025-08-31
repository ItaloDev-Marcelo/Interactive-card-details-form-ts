import React from 'react'
interface MainFormate {children : React.ReactNode}

const MainContainer = ({children}:MainFormate) => {
  return (
    <main className='flex flex-col-reverse xl:flex-row-reverse xl:items-center xl:content-center xl:justify-around w-full h-[100vh] '>
      {children}
    </main>
  )
}

export default MainContainer