import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/images/2.png'
import {motion} from "framer-motion";
function Possibility(props) {
    return (
        <div className="gpt3__possibility section__padding" id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibilityImage} alt="possibility" className='possibility_image'/>
            </div>
            <motion.div
                className="gpt3__possibility-content"
                whileInView={{opacity: [0, 1], x: [200, 0]}}
                transition={{duration: 1}}
            >
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Dalle combines the power of AI with the human desire for creativity and expression. It empowers users to explore new artistic horizons, break through creative blocks, and unleash their imagination with a tool that responds to their ideas in an entirely new way. Whether you're an artist, designer, writer, or anyone looking to discover the endless possibilities of AI-assisted creativity, Dalle is the perfect platform to bring your visions to life.</p>
                <h4>Request Early Access to Get Started</h4>
            </motion.div>
        </div>
    );
}

export default Possibility;