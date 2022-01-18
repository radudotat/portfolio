import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Nodes } from '../hero/Nodes';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/radudotat">
            <a target="_blank">GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section className="hero-body" yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Full-Stack Web Developer\n'}
            <span className="text-primary-500">Vienna, Austria</span>
          </>
        }
        description="Developing powerful modern web applications, since 2000, that form the foundation for the Stateful Web & Realtime Applications that people and businesses use every day."
        button={<canvas id="nodes"></canvas>}
      />
      <Nodes />
    </Section>
  </Background>
);

export { Hero };
