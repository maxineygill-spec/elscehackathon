const FooterSection = () => (
  <footer className="bg-cobalt py-12 px-6">
    <div className="max-w-4xl mx-auto text-center space-y-3">
      <p className="font-display font-bold text-primary-foreground text-lg">
        Teaching Hard Things: A Design Hackathon
      </p>
      <p className="font-body text-primary-foreground/70 text-sm">
        Saturday, May 2nd, 2026
      </p>
      <p className="font-body text-primary-foreground/70 text-sm">
        Edmond and Lily Safra Center for Ethics, Harvard University
      </p>
      <a
        href="https://ethics.harvard.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-body text-primary-foreground/60 text-sm underline hover:text-primary-foreground/90 transition-colors"
      >
        ethics.harvard.edu
      </a>
      <p className="font-body text-primary-foreground/50 text-sm">
        {/* ORGANIZERS: Replace with actual contact email */}
        Contact: hackathon@ethics.harvard.edu
      </p>
    </div>
  </footer>
);

export default FooterSection;
