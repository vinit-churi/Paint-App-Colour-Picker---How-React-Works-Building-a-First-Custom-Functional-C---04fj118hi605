import React, { useState } from "react";

const Selection = (props) => {
    const { applyColor } = props;
    const [currentStyle, changeCurrentStyle] = useState({
        background: "",
    });
    return (
        <div
            style={currentStyle}
            className="fix-box"
            onClick={() => applyColor(changeCurrentStyle)}
        >
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;
