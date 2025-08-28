import React from 'react'
interface MainFormate {children : React.ReactNode}

const MainContainer = ({children}:MainFormate) => {
  return (
    <main  className='w-full h-[25vh] bg-no-repeat bg-[url(./assets/images/bg-main-mobile.png)] border-1 bg-cover
      md:h-[40vh] xl:h-[100vh] xl:w-[30vw] xl:bg-[url(./assets/images/bg-main-desktop.png)]  '>
      {children}
    </main>
  )
}

export default MainContainer