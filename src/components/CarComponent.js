
import React from "react";

class CarList extends React.Component {
    render() {
        const cars = [
            { modelName: 'Tesla Model S', imagePath: require('../images/tesla car image.jpg') },
            { modelName: 'BMW 3 Series', imagePath: require('../images/bmw.jpg') },
            { modelName: 'Audi A4',imagePath: require('../images/tesla car image.jpg') }
        ];

        return (
            <div className="CarList">
        
                <h1>Car List for {this.props.name}</h1>
                <div className="car-container">
                    {cars.map((car, index) => (
                        <div key={index} className="car">
                            <h2>{car.modelName}</h2>
                            <img src={car.imagePath} alt={car.modelName} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default CarList;
