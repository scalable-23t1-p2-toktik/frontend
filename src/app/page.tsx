import styles from './page.module.css';
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react"
import RootNavBar from "@/app/components/RootNavBar";
import RootTextContainer from "@/app/components/RootTextContainer";
import RootVideoContainer from "@/app/components/RootVideoContainer";
import Link from "next/link";


export default function Home() {
    return (
        <div className="bg-black flex flex-col min-h-screen">
            <RootNavBar />
            <RootTextContainer />
            <RootVideoContainer />
        </div>
    );
};
