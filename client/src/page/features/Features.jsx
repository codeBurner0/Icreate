import React from 'react';
import './features.css'
import Feature from "../../components/feature/Feature";
import Banner from '../../assets/images/About.svg'
import {motion} from "framer-motion";
const featuresData = [
    {
        title: 'Prompt-Driven Image Generation',
        text: 'ICreate allows users to input text prompts or descriptions to guide the AI in generating images. This enables users to express their ideas and desires.',
    },
    {
        title: 'Text-to-Image Conversion',
        text: 'ICreate can transform textual descriptions into captivating visual representations, making it a valuable tool for illustrators, writers, and storytellers.',
    },
    {
        title: 'Diverse Artistic Styles',
        text: "ICreate doesn't limit itself to a specific artistic style. It can create images in a wide range of styles, including abstract, surreal, realistic, and more.",
    },
    {
        title: 'AI Assistance for Creativity',
        text: 'ICreate can serve as a source of inspiration when users are feeling creatively stuck. By simply inputting a few words, the AI can trigger fresh ideas and creative concepts.',
    },
];

function Features(props) {
    return (
        <div className="gpt3__features section__padding">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today
                    & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((feature, ind) => (
                    <Feature title={feature.title} text={feature.text} key={ind}/>
                ))}
            </div>
            <motion.div
                whileInView={{opacity: [0, 1], y: [50, 0]}}
                transition={{duration: 4}}>
            
            <img src={Banner} alt="" className='banner_image'/>
            </motion.div>
        </div>
    );
}

export default Features;