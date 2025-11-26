import Image from "next/image";
import navLogo from "../../public/AllCal_logo.jpeg"

export default function TopNavBar() {


    return(
        <div className="fixed top-0 right-0 left-0 flex flex-row justify-between items-center px-24 bg-linear-to-b from-slate-900 to-transparent text-white z-200">
            <Image 
                src={navLogo}
                alt="Allureon Callista Logo"
                width={150}
                height={100}
            />
            {/* Links - Desktop View */}
            <div className="flex felx-row gap-8 text-lg">
                <a className="hover:text-gray-300" href="/">Services</a>
                <a className="hover:text-gray-300" href="/">Pricing</a>
                <a className="hover:text-gray-300" href="/">About Us</a>
                <a className="hover:text-gray-300" href="/">Contact Us</a>
            </div>
        </div>
    );
}