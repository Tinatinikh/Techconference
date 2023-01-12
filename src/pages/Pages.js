import React from 'react'
import { Link } from 'react-router-dom'
import techlogo from './img/techlogo.jpg'

function Pages({children}) {
  return (
    <div>
        <nav>
        <div className="div-one">
                <li> <img  className ="headpic" src={techlogo} /></li>
                <li className='lih'> <Link to={'/speakers'} className="navspk" target='_blank'>SPEAKERS</Link> </li>
                <li className='lih'><Link to={'/summits'} className="navssmt" target='_blank'>SUMMITS</Link></li>
               
            </div>
        </nav>


        {children}



        <footer></footer>
    </div>
  )
}

export default Pages