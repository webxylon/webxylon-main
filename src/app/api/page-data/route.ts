import { NextResponse } from 'next/server'

const avatarList = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList = [
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Digital\nMarketing',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nDesign',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Analytics &\nReporting',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Web\nDevelopment',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Performance\nOptimization',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  }
]

const onlinePresenceList = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'FlowBank',
    tag: ['UX Research', 'Interface Design'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Academy.co',
    tag: ['Product Design', 'Interaction Design'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Genome',
    tag: ['Brand identity design', 'UX Research'],
    link: 'https://www.wrappixel.com/',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Hotto',
    tag: ['Visual Storytelling', 'Web & Mobile Design'],
    link: 'https://www.wrappixel.com/',
  },
]

const creativeMindList = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Logan Dang',
    position: 'WordPress Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Ana Belić',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Brian Hanley',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For companies who need design support. One request at a time',
    plan_price: '$2500',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Design Updates Every 2 Days',
      'Mid-level Designer',
      'SEO optimization',
      'Monthly analytics',
      '2x Calls Per Month',
      'License free assets',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Pro',
    plan_descp: '2x the speed. Great for an MVP, Web App or complex problem',
    plan_price: '$3800',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Design Updates Daily',
      'Senior-level Designer',
      'AI Advisory Framework',
      'Full-service Creative Team',
      '4x Calls Per Month',
      'License free assets',
    ],
  },
]

const faqList = [
  {
    faq_que: 'What services does Webxylon offer?',
    faq_ans:
      'Webxylon offers a comprehensive range of digital services including Brand Strategy, Digital Marketing, UI/UX Design, Analytics & Reporting, and Web Development. We provide end-to-end solutions to help businesses establish a strong online presence and achieve their digital goals.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'Project timelines vary depending on the scope and complexity of your project. A typical website design and development project can take anywhere from 4-12 weeks, while smaller projects like brand strategy or digital marketing campaigns may take 2-6 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
  },
  {
    faq_que: 'How is pricing structured at Webxylon?',
    faq_ans:
      'Our pricing is tailored to each project based on scope, complexity, and specific requirements. We offer flexible pricing models including fixed-price projects for well-defined scopes and retainer-based packages for ongoing services. Contact us for a customized quote that fits your budget and needs.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance. Our support services include bug fixes, content updates, performance optimization, and technical support to keep your digital presence running smoothly.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'We maintain regular communication throughout your project. You can expect weekly progress updates via email or scheduled calls, depending on your preference. For urgent matters or questions, our team is available to respond promptly. We believe in transparent communication and will keep you informed at every stage of development.',
  },
]

const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://dribbble.com/wrappixel',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
