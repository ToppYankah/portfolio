"use client";
import { useEffect, useRef } from 'react';
import { SocialIcon } from 'react-social-icons';
import { animateSocials } from '../_animations';

export default function HeroSocials() {
    const socialRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        animateSocials(socialRefs);
    }, []);
    
    return <div className="sm:col-start-4 col-start-1 col-end-5 row-start-3 row-end-4 flex items-end justify-end">
        <div ref={(ref) => {socialRefs.current?.push(ref)}}>
            <SocialIcon
                url="https://github.com/ToppYankah"
                fgColor='var(--foreground-hex)'
                bgColor="#0000"
                network='github'        
                target='_blank'    
                style={{width: "20%", minWidth: 30, maxWidth: 40}}
            />
        </div>
        <div ref={(ref) => {socialRefs.current?.push(ref)}}>
            <SocialIcon
                url="https://www.linkedin.com/in/kenneth-yankah/"
                fgColor='var(--foreground-hex)'
                bgColor="#0000"
                network='linkedin'
                target='_blank'
                style={{width: "20%", minWidth: 30, maxWidth: 40}}
            />
        </div>
        <div ref={(ref) => {socialRefs.current?.push(ref)}}>
            <SocialIcon
                url="https://www.linkedin.com/in/kenneth-yankah/"
                fgColor='var(--foreground-hex)'
                bgColor="#0000"
                network='instagram'
                target='_blank'
                style={{width: "20%", minWidth: 30, maxWidth: 40}}
            />
        </div>
        <div ref={(ref) => {socialRefs.current?.push(ref)}}>
            <SocialIcon
                url="https://www.linkedin.com/in/kenneth-yankah/"
                fgColor='var(--foreground-hex)'
                bgColor="#0000"
                network='twitter'
                target='_blank'
                style={{width: "20%", minWidth: 30, maxWidth: 40}}
            />
        </div>
    </div>
}