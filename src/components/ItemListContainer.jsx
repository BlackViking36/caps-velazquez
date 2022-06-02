import React from "react";

const container = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "75px"
}

const ItemListContainer = (title) => {

    return (
        <h1 style={container}>{title.greetings}</h1>
    );

};

export default ItemListContainer;