import React from 'react'
import Link from "next/link";

const MainNav = () => {
  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">

                <Link className="navbar__link relative " href="#">HOME</Link>
                <Link className="navbar__link relative " href="#">Health Products</Link>
                <Link className="navbar__link relative " href="#">AboutUS</Link>
                <Link className="navbar__link relative " href="#">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default MainNav