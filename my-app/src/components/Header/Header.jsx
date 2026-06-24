import React from 'react';
import styles from "@/app/page.module.css";
import Image from "next/image";

const Header = () => {
    console.log("Header component rendered");
    return (
        <page className={styles.page}>
            <header className={styles.header}>
                <Image src="/images/banner.jpg" alt="Banner" width={1440} height={667} />
            </header>
        </page>

    );
}

export default Header;