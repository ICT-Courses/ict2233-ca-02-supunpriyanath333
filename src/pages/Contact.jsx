import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter name";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Enter valid email";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 chars";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("Sending...");
    try {
      // Option: use Formspree (replace FORM_ID) by uncommenting:
      // await fetch("https://formspree.io/f/REPLACE_WITH_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form)
      // });

      await new Promise(r => setTimeout(r, 800));
      setStatus("Message sent. Thanks!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send. Try later.");
    }
  };

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                 className="mt-1 block w-full rounded border p-2" />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm">Email</label>
          <input value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                 className="mt-1 block w-full rounded border p-2" />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm">Message</label>
          <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="mt-1 block w-full rounded border p-2" rows="5" />
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>

        <button type="submit" className="px-4 py-2 bg-brand-500 text-white rounded">Send</button>
        {status && <p className="text-sm mt-2 text-muted">{status}</p>}
      </form>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Connect</h2>
        <p className="text-sm text-muted">LinkedIn • GitHub • Email</p>
      </section>
    </div>
  );
}
