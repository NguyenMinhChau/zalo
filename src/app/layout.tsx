import { Footer, Header, ScrollToTop } from '../../components';
import { Providers } from './providers';
import './globals.css';

export const metadata = {
	title: `Home Page • ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta
					name="description"
					content="Broker Compare • Trader & Investments"
				/>
				<link rel="icon" href="/images/favicon.ico" />
				<meta property="og:image" content="/images/favicon.ico" />
			</head>
			<body className="dark:bg-black">
				<Providers>
					<Header />
					{children}
					<Footer />
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	);
}
