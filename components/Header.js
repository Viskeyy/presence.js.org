import React from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export const Header = () => {
	const { status } = useSession();
	return (
		<Wrapper>
			<NavContainer>
				<LogoItem>
					<Logo src='/assets/Presence.js-logo-white.png' alt='Presence logo' />
				</LogoItem>
				<Link
					href={
						status !== 'authenticated' && process.env.NODE_ENV === 'production'
							? '/login'
							: '/console'
					}
					passHref
				>
					<ConsoleItem>
						<ConsoleText>Console</ConsoleText>
					</ConsoleItem>
				</Link>
			</NavContainer>
		</Wrapper>
	);
};

const Wrapper = tw.section`w-full h-40  flex justify-center  bg-black cursor-pointer text-white`;
const NavContainer = tw.div`w-9/12 h-full  flex justify-between items-center cursor-pointer `;
const LogoItem = tw.div` w-44 h-22 logo-header-mobile`;
//md:h-16 md:w-32
const Logo = tw.img`w-full h-full object-contain`;

const ConsoleItem = tw.div`w-24 h-10  bg-personal-team  flex justify-center items-center rounded-md  console-header-mobile`;
const ConsoleText = tw.span`text-white text-lg  exo-font font-semibold  console-header-text--mobile `;
//md:text-base  md:text-center md:h-8 md:w-20 md:pt-1
