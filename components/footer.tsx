'use client'

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
              <li>Our Client Advisors are available to assist you by phone at +1 866.VUITTON, or you may also <a href="#" className="hover:underline">chat with us.</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Product Care</a></li>
              <li><a href="#" className="hover:underline">Stores</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Repairs</a></li>
              <li><a href="#" className="hover:underline">Personalization</a></li>
              <li><a href="#" className="hover:underline">Art of Gifting</a></li>
              <li><a href="#" className="hover:underline">Download our Apps</a></li>
            </ul>
          </div>

          {/* About Louis Vuitton */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">ABOUT LOUIS VUITTON</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Fashion Shows</a></li>
              <li><a href="#" className="hover:underline">Arts & Culture</a></li>
              <li><a href="#" className="hover:underline">La Maison</a></li>
              <li><a href="#" className="hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:underline">Latest News</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Foundation Louis Vuitton</a></li>
            </ul>
          </div>

          {/* Email & SMS Sign-up */}
          <div>
            <h4 className="text-xs font-bold tracking-wide mb-4">EMAIL & SMS SIGN-UP</h4>
            <p className="text-sm mb-4"><a href="#" className="hover:underline">Subscribe</a> for exclusive email and SMS updates and receive the latest news from Louis Vuitton, including new arrivals and exclusive collections.</p>
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
