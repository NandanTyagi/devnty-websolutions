import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><Link className="footer-brand" href="/">DEVNTY</Link><p>Web development. Thoughtful use of AI.</p></div>
        <nav aria-label="Footer navigation"><Link href="/solutions">Solutions</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
        <a href="mailto:info@devnty.com">info@devnty.com</a>
      </div>
    </footer>
  );
}
