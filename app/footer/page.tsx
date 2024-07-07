import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Nexcent</h3>
          <p className="text-sm">&copy; 2020 Nexcent Ltd. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Instagram">
              <img src="/images/logos/insta.png" alt="Instagram" className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <img src="/images/logos/Path.png" alt="Facebook" className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter">
            <img src="/images/logos/twittter.png" alt="Twitter" className="h-6 w-6" />
            </Link>
             <Link href="#" aria-label="YouTube">
              <img src="/images/logos/Social Icons.png" alt="YouTube" className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">About us</Link></li>
            <li><Link href="#" className="hover:underline">Blog</Link></li>
            <li><Link href="#" className="hover:underline">Contact us</Link></li>
            <li><Link href="#" className="hover:underline">Pricing</Link></li>
            <li><Link href="#" className="hover:underline">Testimonials</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Help center</Link></li>
            <li><Link href="#" className="hover:underline">Terms of service</Link></li>
            <li><Link href="#" className="hover:underline">Legal</Link></li>
            <li><Link href="#" className="hover:underline">Privacy policy</Link></li>
            <li><Link href="#" className="hover:underline">Status</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Stay up to date</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded bg-gray-700 text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
