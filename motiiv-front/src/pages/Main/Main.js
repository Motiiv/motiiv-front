import React from 'react';
import SwiperBanner from './sections/SwiperBanner';
import AdBanner from './sections/AdBanner';
import Section from '../../components/common/Section/Section'

function Main({ object }) {
  return (
    <>
        <SwiperBanner/>
        <Section type = "top" size = "large" color = "gray"></Section>
        <Section type = "basic" size = "small"></Section>
        <Section type = "basic" size = "small"></Section>
        <Section type = "basic" size = "small"></Section>
        <AdBanner />
        <Section type = "basic" size = "small"></Section>
        <Section type = "basic" size = "small"></Section>
        <Section type = "basic" size = "small"></Section>  
    </>
  );
}

export default Main;
