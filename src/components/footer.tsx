import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="px-4 md:px-8 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Help */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">HELP</h4>
            <ul className="space-y-2 text-sm">
              <li>Need assistance? Contact us or <a href="#" className="hover:underline">chat with our team.</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Care Instructions</a></li>
              <li><a href="#" className="hover:underline">Find Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Customization</a></li>
              <li><a href="#" className="hover:underline">Personalization</a></li>
              <li><a href="#" className="hover:underline">Gift Wrapping</a></li>
              <li><a href="#" className="hover:underline">Mobile App</a></li>
            </ul>
          </div>

          {/* About K&G */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">ABOUT K&G</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Email & SMS Sign-up */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">EMAIL & SMS SIGN-UP</h4>
            <p className="text-sm mb-4"><a href="#" className="hover:underline">Subscribe</a> for exclusive updates and receive the latest news from K&G, including new arrivals and special offers.</p>
            <div className="space-y-2">
              <a href="#" className="hover:underline text-sm">Follow Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div>
              <p>Ship to: <span className="font-semibold">United States of America</span></p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:underline">Sitemap</a>
              <a href="#" className="hover:underline">Legal Notices</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">California Supply Chains Act</a>
              <a href="#" className="hover:underline">Your Privacy Choices</a>
              <a href="#" className="hover:underline">Accessibility</a>
            </div>
          </div>
        </div>
      </div>

      {/* Louis Vuitton Logo */}
      <div className="px-4 md:px-8 py-8 text-center border-t border-gray-200">
        <h2 className="text-xl font-bold tracking-widest">LOUIS VUITTON</h2>
      </div>
    </footer>
  )
}
