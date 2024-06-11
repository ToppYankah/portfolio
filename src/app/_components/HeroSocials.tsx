"use client";
import { SocialIcon } from 'react-social-icons';

export default function HeroSocials() {
    return <div className="col-start-4 col-end-5 row-start-3 row-end-4 flex items-end justify-end">
        <SocialIcon
            url="https://github.com/ToppYankah"
            fgColor='var(--foreground-hex)'
            bgColor="#0000"
            network='github'        
            target='_blank'    
            style={{width: "20%", minWidth: 30, maxWidth: 40}}
        />
        <SocialIcon
            url="https://www.linkedin.com/in/kenneth-yankah/"
            fgColor='var(--foreground-hex)'
            bgColor="#0000"
            network='linkedin'
            target='_blank'
            style={{width: "20%", minWidth: 30, maxWidth: 40}}
        />
        <SocialIcon
            url="https://www.linkedin.com/in/kenneth-yankah/"
            fgColor='var(--foreground-hex)'
            bgColor="#0000"
            network='instagram'
            target='_blank'
            style={{width: "20%", minWidth: 30, maxWidth: 40}}
        />
        <SocialIcon
            url="https://www.linkedin.com/in/kenneth-yankah/"
            fgColor='var(--foreground-hex)'
            bgColor="#0000"
            network='twitter'
            target='_blank'
            style={{width: "20%", minWidth: 30, maxWidth: 40}}
        />
        <SocialIcon
            url="https://www.linkedin.com/in/kenneth-yankah/"
            fgColor='var(--foreground-hex)'
            bgColor="#0000"
            network='snapchat'
            target='_blank'
            style={{width: "20%", minWidth: 30, maxWidth: 40}}
        />
    </div>
}