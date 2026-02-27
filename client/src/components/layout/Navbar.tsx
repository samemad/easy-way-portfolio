import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@assets/EasyWay_1772155413140.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
            <img src={logo} alt="Easy Way Logo" className="h-12 w-auto object-contain" />
          </a>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About Us</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Services</a>
          <a href="#partners" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Partners</a>
          <Button className="bg-primary text-white hover:bg-primary/90 shadow-md">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}