import React from "react";
import {Image} from "@nextui-org/react";

// TODO: Fix the flex container and replace the src appropriately

export default function RootVideoContainer() {
    return (
        <div className="fixed top-40 right-40 flex-1 w-1/3 h-1/4">
            <Image
                style={{ width: '100%', height: '100%' }}
                alt="Video Place Holder"
                src="https://media.tenor.com/ZPw6o5MbeRgAAAAC/george-clooney-what.gif"
            />
        </div>
    );
}