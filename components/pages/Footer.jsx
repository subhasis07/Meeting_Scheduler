import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Appointrr</h3>
          <p className="text-gray-400">
            Simplify your appointments and manage your time effectively with
            Appointrr.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/support">Help Center</Link>
            </li>
            <li>
              <Link href="/guides">Guides & Tutorials</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Appointrr. All rights reserved.</p>
      </div>
    </footer>
  );
}
