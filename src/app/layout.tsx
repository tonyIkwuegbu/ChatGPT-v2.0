import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "ChatGPT",
	description: "ChatGPT V-2",
};
//server components can be async fxn but client component can't be async fxn
const Layout = async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider session={session}>
					{!session ? (
						<Login />
					) : (
						<div className="flex">
							<div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll md:min-w-[20rem]">
								<Sidebar />
							</div>

							{/* ClientProvider */}
							<ClientProvider />
							<div className="bg-[#343541] flex-1"> {children}</div>
						</div>
					)}
				</SessionProvider>
			</body>
		</html>
	);
};
export default Layout;
