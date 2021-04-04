import React, { useState } from "react";

const FonsColor = () => {
    const [colors, setColor] = useState("#1a0000");
    return (
        <div style={{ marginTop: 50 }}>
            <div style={{ color: colors }}>Color</div>
            <button onClick={() => setColor("#FF4500")}>Orange red</button>
            <button onClick={() => setColor("#FFD700")}>Gold</button>
            <button onClick={() => setColor("#F08080")}>LightCoral</button>
            <button onClick={() => setColor("#16a085")}>GreenSea</button>
            <button onClick={() => setColor("#FF0000")}>Yellow</button>
            <button onClick={() => setColor("#FFFF00")}>LightSalmon</button>

        </div>
    )
}
export default FonsColor;