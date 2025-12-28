import { NextResponse } from "next/server";

const headerData = [
    { label: 'About us', href: '/#aboutus' },
    { label: 'Services', href: '/#services' },
    { label: 'Work', href: '/#work' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Webxylon",
        tagline: "Empowering businesses with innovative solutions. Let's create something amazing together.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/twitter.svg",
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
                link: "https://x.com/webxylon?fbclid=PAb21jcAO7ffhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacKv2Ex0BNZ9N4iKsC7vfvwq9N-BGC2oBrevrDawTdHVepQrGyWwE8BD2cBQg_aem_ZP7rD9YwdWUYLQrGJN_8CA"
            },
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/webxylon/?viewAsMember=true&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAO7fjdleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaesPYIeWkRHgGb7tKddPO9G_jzv7p-iQmhgVWAjFXBg-bsEeLMvedPlzL82Xg_aem_n4DEAq5Fc_-Q3G4WkNm1eg"
            },
            {
                icon: "/images/home/footerSocialIcon/dribble.svg",
                dark_icon: "/images/home/footerSocialIcon/dribble_dark.svg",
                link: "https://dribbble.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/webxylon"
            }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" }
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "Ward no - 4, Khajpur Purana, Jhunjhunu",
        email: "webxylon@gmail.com",
    },
    copyright: "©2025 Webxylon. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};