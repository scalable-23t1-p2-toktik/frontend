import React from "react";

// TODO: Add flex container and adjust/fix alignment issue
export default function RootTextContainer() {
    return (
        <div className="fixed top-40 left-40 flex-1 lg:flex-col shrink">
            <div className="text-white text-center w-full h-1/4 content-center" style={{ fontSize: '1vw' }}>
                Welcome to toktik
            </div>
            <div className="text-white font-bold w-full h-1/2 content-center" style={{ fontSize: '7vw' }}>
                TOKTIK
            </div>
            <div className="text-white text-center w-full h-1/4 content-center" style={{ fontSize: '1vw' }}>
                The "#1" best short video streaming/collecting service
            </div>
        </div>
    );
}

