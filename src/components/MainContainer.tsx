import React from 'react'

interface MainFormate {children : React.ReactNode}

const MainContainer = ({children}:MainFormate) => {
  return (
    <main>
      <div className='bg'>

      </div>
  
       {children}

    </main>
  )
}

export default MainContainer