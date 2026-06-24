import React from 'react';
import styles from "@/app/layout.module.css";
import Image from "next/image";

const Header = () => {
    console.log("Header component rendered");
    return (
            <header className={styles.header}>
                <Image src="/images/banner.jpg" alt="Banner" width={1440} height={667} />
            </header>
    );
}

export default Header;