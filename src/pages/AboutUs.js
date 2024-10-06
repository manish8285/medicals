import React from "react";
import tw from "twin.macro";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import storePic from "images/store.jpg"
import medicalStore from "images/medical_store.jpg"

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <>
      <MainFeature1
        subheading={<Subheading>About Medical Ji</Subheading>}
        heading="Your Trusted Medical Aggregator"
        description="We are a team of professionals dedicated to bringing all local medical stores onto one convenient platform. With us, you can order your medicine online and have it delivered right to your doorstep, no need to visit multiple stores. We ensure you get the right medicine at the best price, delivered on time, while also addressing any questions or concerns you may have."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        primaryButtonUrl="/contactus"
        imageSrc={storePic}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Empowering Local Pharmacies, Ensuring Fair Access to Healthcare"
        buttonRounded={false}
        description="Our vision is to empower local medical stores by giving them equal opportunities to meet the healthcare needs of their communities. We aim to bring every local pharmacy online without requiring any investment or extra effort, providing a seamless platform for both stores and customers.

We envision a system where anyone can quickly access medicine from nearby stores, with full transparency on availability and pricing. Our platform ensures affordable prices verified by trusted medical experts, offering reliability and trust.

By connecting people to the often-overlooked local pharmaceutical sector, we strive to create transparency, trust, and 24/7 support, while uplifting the local market and breaking down monopolies to ensure fair competition."
        primaryButtonText="Contact Us"
        primaryButtonUrl="/contactus"
        imageSrc={medicalStore}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="We are dedicated to these core principles, driving quality service and customer trust in all we do."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "Available anytime to meet your medical needs."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "A dedicated team ensuring seamless service."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Your well-being is our priority, with fast delivery and verified medicines."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
    </>
  );
};
