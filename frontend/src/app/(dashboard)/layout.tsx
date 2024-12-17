import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* left */}
            <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%]">
                <Link
                    href="/"
                    className="flex items-center justify-center gap-2 lg:justify-start p-6"
                >
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block">Leadership Eastide</span>
                </Link>
            </div>
            {/* right */}
            <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%]">r</div>
        </div>
    );
}
