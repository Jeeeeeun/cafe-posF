import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import dynamic from "next/dynamic";
import SlideMenu from '../SlideMenu';

interface NavBarProps {
	toggleSlideMenu: () => void;
}

const NavBar = ({ toggleSlideMenu }: NavBarProps) => {
	const DynamicClock = dynamic(
		() => import('./Clock'),
		{ssr: false}
	);

	

	return (
		<>
			<div className='w-full h-full bg-slate-800 text-white pl-5 py-1 flex items-center'>
				<button className='text-2xl' onClick={toggleSlideMenu}>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<DynamicClock />
			</div>
			
		</>
	);
};

export default NavBar;