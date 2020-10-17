import React from 'react';
import useFirestore from "../hooks/useFirestore";
import {motion} from "framer-motion"; 
import Fade from "react-reveal/Fade"
const ImageGrid = ({ setSelectedImg }) => {

    const {docs} = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <Fade left cascade>
                <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic" 
                        initial={{opacity: 0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </div>
                </Fade>
            ))}
        </div>
    )
}

export default ImageGrid
