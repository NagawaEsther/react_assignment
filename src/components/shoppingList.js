import React from "react";

class ShoppingList extends React.Component {
    render() {
        const Grocery = [
            { itemName: 'Rice', price: 25000 },
            { itemName: 'Beef', price: 35000 },
            { itemName: 'Chicken', price: 20000 }
        ];

        return (
            <div className="ShoppingList">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    {Grocery.map((grocery, index) => (
                        <li key={index}>
                            {grocery.itemName}: {grocery.price}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ShoppingList;
