import styles from './page.module.css';
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react"
import Header from '../components/Header'
import PopOverButton from "@/components/PopOverButton";
import Link from "next/link";


export default function Home() {
    return (
        <div className='bg-sky-400'>
            <main>
                <h1>Hello, World</h1>
                <Link href="/login">Login</Link>
            </main>
        </div>
    );
};

