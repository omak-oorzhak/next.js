import Link from 'next/link';

const Nav = () => (
  <nav className="nav">
    <Link prefetch href="/">
      <a className="nav__link">Home</a>
    </Link>
    <Link prefetch href="/about">
      <a className="nav__link">About us</a>
    </Link>

    <style jsx>{`
      .nav {
        text-align: center;
      }
      .nav__link {
        color: #067df7;
        text-decoration: none;
        font-size: 16px;
        margin-right: 20px;
      }
    `}</style>
  </nav>
);

export default Nav;
