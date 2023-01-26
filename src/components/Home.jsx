import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
        <h1>TechyStar</h1>
        <p>Solution to all of your problems</p>
    </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only Solution to the Tech problems
                you face
                every day. We are leading Tech company whose aim is to
                increase the 
                problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia laborum iure unde nulla. Nam, ea. Tempore deserunt sunt consectetur soluta debitis eius, ducimus, accusantium labore ipsam ullam illo! Hic accusantium quasi id molestias labore ab ad minima iste doloremque fugiat consequuntur fuga voluptatibus dolor provident repellendus veritatis, quo ullam nobis autem fugit asperiores esse. Neque ducimus deleniti soluta fugit!</p>

        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                <AiFillGoogleCircle />
                <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s",
                }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
                </div>
                <div style={{
                    animationDelay:"0.7s",
                }}>
                <AiFillYoutube />
                <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"1s",
                }}>
                <AiFillInstagram />
                <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    </>
  )
}

export default Home