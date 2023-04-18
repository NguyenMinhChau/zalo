export const metadata = {
	title: `Employee • ${process.env.NEXT_PUBLIC_TITLE_APP}`,
};
export default function EmployeeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
