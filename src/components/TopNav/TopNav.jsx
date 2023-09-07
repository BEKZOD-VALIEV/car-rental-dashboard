import React from 'react'

import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='top__nav'>
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder='search or type' />
          <span><i class="ri-search-line"></i></span>
        </div>
        <div className="top__nav-right">
          <span className='notification'>
            <i class="ri-notification-3-line"></i>
          </span>
          <div className="profile">
            <Link></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav