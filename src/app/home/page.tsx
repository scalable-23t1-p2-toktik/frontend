import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react"
import Link from "next/link";
import RootNavBar from "@/app/components/home/NavBar";
import Navbar from "@/app/components/home/NavBar";

export default function Home() {
    return (
        <div className="relative bg-black flex flex-col min-h-screen">
            <Navbar />
            <div className="px-20 min-h-screen flex flex-col">
                <div className="w-full h-1/4 text-white font-bold">
                    Recently Uploaded video:
                </div>
                <div className="w-full h-3/10 text-white font-bold">
                    Video List Goes Here
                </div>
                <div className="w-full h-1/4 text-white font-bold">
                    My Playlist:
                </div>
                <div className="w-full h-3/10 text-white font-bold">
                    Playlist goes here
                </div>
            </div>
        </div>
    );
};
