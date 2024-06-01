import React from "react";

function Football() {
    const shoot = (goal, event) => {
        alert(goal);
        /* 'event'  representing React event that triggered the function,  'click' */
    };

    return (
        <div>
            <h1>Football Game</h1>
            <button onClick={() => shoot("Great Shot!")}>Take the shot!</button>
            <button onClick={() => shoot("Goal!")}>Take the shot!</button>
            <button onClick={(event) => shoot("Shot!", event)}>Take the shot!</button>
        </div>
    );
}

export default Football;
