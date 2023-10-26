import React from "react";

// TODO: Add flex container and adjust/fix alignment issue
export default function RootTextContainer() {
    return (
        <div className="absolute top-40 left-40 flex-1">
            <div className="text-white text-center">
                Welcome to toktik
            </div>
            <div className="text-white text-9xl font-bold">
                TOKTIK
            </div>
            <div className="text-white text-center">
                The "#1" best short video streaming/collecting service
            </div>
        </div>
    );
}