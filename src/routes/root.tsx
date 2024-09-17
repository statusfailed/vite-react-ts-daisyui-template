import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '@/components/navbar';

import viteLogo from '/vite.svg';
import daisyLogo from '/daisyui-logomark.svg';

export const Page: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow container mx-auto px-4 py-8">
				<Outlet />
			</main>
			<footer className="bg-base-200 py-4">
				<div className="container mx-auto px-4 text-center">
					© 2024 Your Company Name. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
