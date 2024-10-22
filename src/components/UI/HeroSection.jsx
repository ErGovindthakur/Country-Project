import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"

export const HeroSection = () => {
  return (
    <div>
      <main className="hero-section main">
         <div className="container grid grid-two-cols">

          <div className="hero-content">
               <h1 className="heading-xl">
                    Explore the world , One Country at a Time.
               </h1>
               <p>
                    Discover the history, and beauty of every nation, sort, search, and filter through countries to find the details you.
               </p>
          <button className="btn btn-darken btn-inline bg-white-box">
          <Link to='/country' className="btn btn-darken btn-inline bg-white-box navLink">
               Start Exploring <FaLongArrowAltRight />
          </Link>
          </button>
          </div>
          <div className="hero-image">
               <img
                src="/images/world.png"
                 alt="world beauty" 
               className="banner-image"
                 />
          </div>
         </div>
         </main>
    </div>
  )
}

