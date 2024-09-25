import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <>
      <ContactUsForm />
      <ContactDetails
      description="At our offices, we strive to create a collaborative and innovative environment. Our dedicated teams work tirelessly to ensure we meet our clients' needs and exceed their expectations. Each location is equipped with state-of-the-art facilities to support our mission of delivering excellence in service and solutions."
        cards={[
          {
            title: "Gurgaon",
            description: (
              <>
                <Address>
                  <AddressLine>MedicalJi</AddressLine>
                  <AddressLine>Street No 21, Krishna Kunj</AddressLine>
                </Address>
                <Email>admin@medicalji.com</Email>
                <Phone>+91 8285482825</Phone>
              </>
            )
          },
          {
            title: "Gurgaon",
            description: (
              <>
                <Address>
                  <AddressLine>Medical Ji</AddressLine>
                  <AddressLine>Wazirabad, Sector 52</AddressLine>
                </Address>
                <Email>admin@medicalji.com</Email>
                <Phone>+91 8285482825</Phone>
              </>
            )
          },
          
        ]}
      />
    </>
  );
};
