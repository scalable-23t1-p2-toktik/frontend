import React from "react";
import {Image} from "@nextui-org/react";

// TODO: Fix the flex container and replace the src appropriately

export default function RootVideoContainer() {
    return (
        <div className="flex absolute top-40 right-40 flex-1">
            <Image
                width={600}
                alt="Video Place Holder"
                src="https://media.tenor.com/ZPw6o5MbeRgAAAAC/george-clooney-what.gif"
            />
        </div>
    );
}