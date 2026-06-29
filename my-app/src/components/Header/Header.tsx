import React from 'react';
import styles from "@/app/layout.module.css";
import Image from "next/image";

const Header = () => {
    //console.log("Header component rendered");
    return (
        <header>
            <div className={styles.headerLogo}>
                <Image src="/images/logo.svg" alt="Logo" width={207} height={51} />
            </div>
            <div className={styles.headerBackground}>
                <Image  src="/images/banner.jpg" alt="Banner" className={styles.headerImage} fill priority />
            </div>
        </header>
    );
}

export default Header;