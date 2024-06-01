import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <h1>Image Gallery</h1>
                <div className="image-container">
                    
                <img src={require('../apartment 1.jpg')} alt="apartment" />
                <img src={require('../student1.jpg')} alt="student" />
                <img src={require('../beautiful view 1.avif')} alt="beautiful view" />
                <img src={require('../class background 1.jpg')} alt="class background" />
                

                </div>
            </div>
        );
    }
}

export default Gallery;
