import React from 'react';
import HeaderMenu8 from '../../components/header/HeaderMenu8';
import BannerV8 from '../../components/banner/BannerV8';
import FeatureAbout from '../../components/others/FeatureAbout';
import ServiceV9 from '../../components/service/ServiceV9';
import CounterV5 from '../../components/counter/CounterV5';
import PrivacyWrapper from '../../components/privacy/PrivacyWrapper';
import ProjectV1 from '../../components/projects/ProjectV1';
import TestimonialV5 from '../../components/testimonial/TestimonialV5';
import BlogV5 from '../../components/blog/BlogV5';
import CallToActionV4 from '../../components/callToAction/CallToActionV4';
import FooterV8 from '../../components/footer/FooterV8';

const HomeEight = () => {
    return (
        <>
            <HeaderMenu8 />
            <BannerV8 />
            <FeatureAbout />
            <ServiceV9 />
            <CounterV5 />
            <PrivacyWrapper />
            <ProjectV1 />
            <TestimonialV5 />
            <BlogV5 />
            <CallToActionV4 />
            <FooterV8 />
        </>
    );
};

export default HomeEight;