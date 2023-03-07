import React from "react";
import { ImTelegram, ImTwitter }  from 'react-icons/im';
import {GrMedium} from 'react-icons/gr'
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
	return (
		<footer 
         className={styles.left}>
               <div className={styles.social}>
               <Link href="https://twitter.com/DonutsProtocol" target="_blank"><ImTwitter size={25}></ImTwitter></Link>&nbsp; &nbsp;
               <Link href="https://t.me/donutsprotocol" target="_blank"><ImTelegram size={25}></ImTelegram></Link>&nbsp; &nbsp;
               <Link href="https://medium.com/" target="_blank"><GrMedium size={25}></GrMedium></Link>
               </div>
               <br></br>
               <br></br>
               
        <p className='text-sm text-slate-500'>&copy; 2023 Donuts Protocol. All rights reserved.</p>
        </footer>
	);
}

export default Footer;
