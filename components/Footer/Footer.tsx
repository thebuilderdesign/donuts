/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { ImTelegram, ImTwitter }  from 'react-icons/im';
import {GrMedium} from 'react-icons/gr'
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer 
         className={styles.left}>
               <div className={styles.social}>
               <a><ImTelegram href="https://telegram.org/" target="_blank" size={25}/></a>&nbsp; &nbsp;
               <a><ImTwitter href="https://twitter.com/DonutsProtocol" target="_blank" size={25}/></a>&nbsp; &nbsp;
               <a><GrMedium href="https://medium.com/" target="_blank"size={25}/></a>
               </div>
               <br></br>
               <br></br>
               
        <p className='text-sm text-slate-500'>&copy; 2023 Donuts Protocol. All rights reserved.</p>
        </footer>
	);
}

export default Footer;
