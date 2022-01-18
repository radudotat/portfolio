import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Made by me!"
    description="Some of the most creative and enjoyable projects I have worked on."
  >
    <VerticalFeatureRow
      title="www.radu.at"
      description="Personal PWA, my Digital Property on www where I can share and collaborate with friends, family and strangers from the 🕸️."
      image="/assets/images/radu.at.jpg"
      imageAlt="Screenshot of https://radu.at"
    />
    <VerticalFeatureRow
      title="www.wien.ro"
      description="Vienna Real-time Online.
      The most avantgarde platform for the Smart City of Vienna where you can really interact with the city and with the people of the city near real-time. Join the Vienna's ❤ Beat!"
      image="/assets/images/wien.ro.jpg"
      imageAlt="Screenshot of https://wien.ro"
      reverse
    />
    <VerticalFeatureRow
      title="www.mariazellerland.net"
      description="Mariazell and surroundings in one place 🚶 Insider tips about Hotels, Accommodations, Restaurants, Hiking routes, Local businesses and more... online & offline"
      image="/assets/images/mariazellerland.net.jpg"
      imageAlt="Screenshot of https://mariazellerland.net"
    />
  </Section>
);

export { VerticalFeatures };
