import styles from './page.module.css';
import {NextUIProvider} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react"


export default function Home() {

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <h1 className={styles.title}>TikTokClone</h1>
            </header>

            <main className={styles.main}>

                <div className={styles.videoContainer}>
                    {/* Your TikTok-like video content goes here */}
                    <video className={styles.video} src="your_video.mp4" controls></video>
                </div>

                <Popover
                    className="bg-white p-0 w-[240px] h-[100px] rounded-sm"
                    placement="right"
                >
                    <PopoverTrigger
                        className="flex flex-row justify-between items-center"
                    >
                        <div>{trigger here}</div>
                    </PopoverTrigger>
                    <PopoverContent>

                        example content
                    </PopoverContent>
                </Popover>

            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    {/* Add your footer content here */}
                    <p>Follow us on social media: <a href="#">Twitter</a> | <a href="#">Instagram</a> | <a href="#">Facebook</a></p>
                </div>
            </footer>

        </div>
    );
};