"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/helpers";

const serviceOptions = [
  "Video Kurgu & Montaj",
  "Sosyal Medya Yönetimi",
  "Video Çekimi (Prodüksiyon)",
  "Reklam Kreatifi & Kampanya",
  "Web Site Tasarımı & Geliştirme",
  "Marka Görsel Dili",
  "Danışmanlık",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!formState.name.trim()) nextErrors.name = "Ad Soyad zorunlu.";
    if (!formState.email.trim()) nextErrors.email = "E-posta zorunlu.";
    if (!formState.message.trim()) nextErrors.message = "Mesaj zorunlu.";
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormState(initialState);
      setTimeout(() => setSubmitted(false), reduceMotion ? 2000 : 3200);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-3xl border border-border bg-zinc-950/40 p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-muted">
          Ad Soyad
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={cn(
              "mt-2 w-full rounded-2xl border border-border bg-black px-4 py-3 text-sm text-foreground",
              errors.name && "border-accent"
            )}
            placeholder="Ad Soyad"
          />
          {errors.name && (
            <span className="text-xs text-accent">{errors.name}</span>
          )}
        </label>
        <label className="space-y-2 text-sm text-muted">
          Marka / Şirket
          <input
            name="company"
            value={formState.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-border bg-black px-4 py-3 text-sm text-foreground"
            placeholder="Marka adı"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-muted">
          E-posta
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className={cn(
              "mt-2 w-full rounded-2xl border border-border bg-black px-4 py-3 text-sm text-foreground",
              errors.email && "border-accent"
            )}
            placeholder="ornek@marka.com"
          />
          {errors.email && (
            <span className="text-xs text-accent">{errors.email}</span>
          )}
        </label>
        <label className="space-y-2 text-sm text-muted">
          Telefon
          <input
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-border bg-black px-4 py-3 text-sm text-foreground"
            placeholder="+90 5xx xxx xx xx"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-muted">
        Hizmet seçimi
        <select
          name="service"
          value={formState.service}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-border bg-black px-4 py-3 text-sm text-foreground"
        >
          <option value="">Seçiniz</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2 text-sm text-muted">
        Mesaj
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={5}
          className={cn(
            "mt-2 w-full rounded-2xl border border-border bg-black px-4 py-3 text-sm text-foreground",
            errors.message && "border-accent"
          )}
          placeholder="Hedefiniz, içerik ihtiyacı ve zaman planı..."
        />
        {errors.message && (
          <span className="text-xs text-accent">{errors.message}</span>
        )}
      </label>
      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-strong"
      >
        Gönder
      </button>
      {submitted && (
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-3 text-xs text-accent">
          Mesajınız alındı. 24 saat içinde dönüş yapacağız.
        </div>
      )}
    </form>
  );
}
