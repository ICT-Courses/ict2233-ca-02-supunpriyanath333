import {
  Linkedin,
  Facebook,
  Github,
  Mail,
  Phone
} from "lucide-react";

export default function Contact() {
  const contactLinks = [
    { icon: <Linkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/supun-priyanath-04633825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { icon: <Facebook />, label: "Facebook", href: "https://www.facebook.com/" },
    { icon: <Github />, label: "GitHub", href: "https://github.com/supunpriyanath333" },
    { icon: <Mail />, label: "Email", href: "mailto:supunpriyanath333@gmail.com" },
    { icon: <Phone />, label: "Mobile", href: "tel:+94786350859" },
  ];

  return (
    <section className="max-w-xl mx-auto px-8 py-20 space-y-10">
      <h2 className="text-3xl font-bold text-[var(--accent)] mb-6">Contact</h2>

      {/* Contact Form */}
      <form className="flex flex-col gap-4">
        <input
          required
          placeholder="Name"
          className="p-3 rounded border border-white/20 
                     bg-[var(--bg-mid)] text-[var(--text-main)] 
                     placeholder:text-[var(--text-sec),#aaa] 
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="p-3 rounded border border-white/20 
                     bg-[var(--bg-mid)] text-[var(--text-main)] 
                     placeholder:text-[var(--text-sec),#aaa] 
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
        />
        <textarea
          required
          placeholder="Message"
          className="p-3 rounded border border-white/20 
                     bg-[var(--bg-mid)] text-[var(--text-main)] 
                     placeholder:text-[var(--text-sec),#aaa] 
                     focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
        />
        <button
          type="submit"
          className="bg-[var(--accent)] text-[var(--text-main)] py-3 rounded-md hover:brightness-110 transition"
        >
          Send Message
        </button>
      </form>

      {/* Interactive Contact Links */}
      <div className="flex flex-wrap gap-6 mt-10 justify-center">
        {contactLinks.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[var(--text-main)]
                       hover:text-[var(--accent)] transition-colors duration-200"
          >
            <div className="p-3 rounded-full bg-white/5 backdrop-blur border border-white/10">
              {contact.icon}
            </div>
            <span className="text-sm">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
