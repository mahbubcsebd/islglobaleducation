import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function TopContactBar({ dict }) {
  return (
    <div className="w-full bg-background border-b border-border text-[11px] text-foreground-secondary hidden sm:block">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left items: Phone and Email */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+8801910030040"
            className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
          >
            <Phone className="size-3 text-primary" />
            <span>{dict.topBar.phone}</span>
          </a>
          <span className="text-border">|</span>
          <a
            href="tel:+8801910030093"
            className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
          >
            <Phone className="size-3 text-primary" />
            <span>{dict.topBar.phone2}</span>
          </a>
          <span className="text-border">|</span>
          <a
            href="mailto:islglobaleducation@gmail.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="size-3 text-primary" />
            <span>{dict.topBar.email}</span>
          </a>
        </div>

        {/* Right items: Location and WhatsApp CTA */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3 text-primary" />
            <span>{dict.topBar.location}</span>
          </div>
          <span className="text-border">|</span>
          <a
            href="https://wa.me/8801910030040?text=Hello%20ISL%20Global,%20I%20am%20interested%20in%20studying%20abroad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-medium transition-colors"
          >
            <MessageCircle className="size-3" />
            <span>{dict.topBar.whatsappText}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
