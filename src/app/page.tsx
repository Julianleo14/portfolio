'use client'
import styles from "@/app/styles/page.module.css"
import React from "react";
import Image from "next/image";
import CardInfo from "@/app/components/cardInfo";
import {contactInfo, hobbies, techs, projects, skills} from "../../utils/info"

export default function Page() {
  return (
      <div className={styles.homeContainer}>
        <section className={styles.homeAbout}>
          <article className={styles.homeAbout_title}>
            <Image className={styles.profilePic}
                   src={'/profile.jpg'}
                   alt={"Profile picture"}
                   width={50}
                   height={50}
                   sizes="100vw"
            />
            <h2>-About Me-</h2>
          </article>
          <article className={styles.homeAbout_text}>
            Full Stack Developer with experience in React, Next.js, and TypeScript. I enjoy solving
            challenges, creating user-friendly applications, and constantly learning new technologies. My focus
            is on clean code, modern design, and delivering high-quality results.

          </article>
        </section>
        <section className={styles.homeCards}>
          <CardInfo title={"Contact"} content={contactInfo} cardType={"small"} backgroundColor={"dark"}/>
          <CardInfo title={"Hobbies"} content={hobbies} cardType={"small"} backgroundColor={"light"}/>
          <CardInfo title={"Projects Created"} content={projects} cardType={"large"} backgroundColor={"dark"}/>
          <CardInfo title={"Techs"} content={techs} cardType={"large"} backgroundColor={"light"}/>
          <CardInfo title={"Skills and Qualities"} content={skills} cardType={"large"} backgroundColor={"dark"}/>
        </section>
      </div>

  );
};


