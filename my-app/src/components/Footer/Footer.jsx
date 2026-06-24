import React from 'react';
import styles from "@/app/layout.module.css";

const Footer = () => {
    console.log("Footer component rendered");
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 Mon Site de Recettes. Tous droits réservés.</p>
        </footer>
    );
}   

export default Footer;