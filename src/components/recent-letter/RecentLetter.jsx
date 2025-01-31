import React from 'react'
import './recent-letter.css'
import RecentCard from './RecentCard'
const RecentLetter = () => {
  return (
    <div className='recent-letter'>
        <div>Recent Letters</div>
        <div className="card-content">
        <RecentCard />
        <RecentCard />
        <RecentCard />
        <RecentCard />
        <RecentCard />


        </div>
    

    </div>
  )
}

export default RecentLetter