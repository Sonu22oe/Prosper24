import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (<>
    <div className="relative w-full  max-h-[300px] lg:aspect-video overflow-hidden shadow-md z-9">
  {/* Background Image */}
  <img
    src="/ourteam/jpg/ourstory1.jpg"
    alt="Team at MyWebsite"
    className="w-full aspect-[9/6] object-cover object-center "
    title="Our Story - MyWebsite"
    description="Learn about the team and the story behind MyWebsite."
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-slate-900"></div>

  {/* Optional content (like title/text over image) */}
  <div className="absolute bottom-4 left-4 text-white z-10  lg:mx-10">
    <h2 className="text-xl font-semibold ">Our Story</h2>
    <p className="text-sm text-gray-200">Discover the people behind the brand.</p>
  </div>
</div>
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-sm">

        {/* Column 1: Brand */}
        
        <div>
          <h2 className="text-xl font-bold mb-3">Prozper</h2>
          <p className="text-gray-400">
            Building modern websites with React & Tailwind CSS.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="mailto:info@prozper.com" className="hover:text-white">
                {props.email}
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3: Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Prozper. All rights reserved.
      </div>
    </footer></>
  );
}