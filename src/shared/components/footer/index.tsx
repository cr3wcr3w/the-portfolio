function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container mx-auto my-8 max-w-2xl px-4">
                <p className="text-center text-sm text-slate-400">
                  Build by me ©{currentYear}
                </p>
    </footer>
  );
}

export default Footer;
