import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div>
            <Image
              src="/donut.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h2 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Donuts Protocol
                </span>
                <br />
                Where creativity meets community.
              </h2>
              <p className={styles.heroSubtitle}>
                Beta Version
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/collect">
                  Get Started
                </Link>
                <Link className={styles.heroCta} href="/create">
                  Create Listing
                </Link>
                <Link
                  className={styles.heroCta}
                  href="https://twitter.com/DonutsProtocol"
                  target="_blank"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
