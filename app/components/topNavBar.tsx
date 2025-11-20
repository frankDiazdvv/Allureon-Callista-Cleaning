import Image from "next/image";
import navLogo from "../../public/AllCal_logo.jpeg"

export default function TopNavBar() {


    return(
        <div className="fixed top-0 right-0 left-0 flex flex-row justify-between items-center px-8 bg-linear-to-b from-slate-400 to-transparent">
            <Image 
                src={navLogo}
                alt="Allureon Callista Logo"
                width={150}
                height={100}
            />
            {/* Links - Desktop View */}
            <div className="flex felx-row gap-4">
                <a href="/">Services</a>
                <a href="/">Pricing</a>
                <a href="/">About Us</a>
                <a href="/">Contact Us</a>
            </div>
        </div>
    );
}