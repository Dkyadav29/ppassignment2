import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="p-5 bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="absolute top-0.91 left-7.37">
          <img src="/icons/Icon.png" alt="Nexcent Icon" style={{ width: '35px', height: '24px', gap: '0px', opacity: '0px' }} />
        </div>
        <div className="flex items-center">
        
          <img src="images/logos/Icon.png" alt="Nexcent Logo" className="h-20.66 w-111.49" style={{ background: '#263238' }} />
          <h1 className="text-2xl font-bold ml-4" style={{ color: '#ffffff' }}>Nexcent</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/feature">Feature</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/testimonial">Testimonial</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>
        <div>
          <Link href="/login" className="mr-4">Login</Link>
          <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
