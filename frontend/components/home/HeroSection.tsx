import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGzRWStW1rPhmQEYcTVeynWY7GJcWfykLjsSvIwDZs3LaqalfYOFuuTCvJxJQMhuR9mVU4jkRILkMOFMtFJvrMGXHWRyzkJMXZMH13uzeP4_Hl_-02KHXqzsuaR11Yv2TRHPEOKClfGrP9s9GLTTbKFhcEsJWKSbD6evukp_BPd17UpVLdJzorb-Za2df1IMLMByK-oypR9m_RdP8a68hP8qMHEARpAoSPa2CBZpWWUq7lGBjRWzdUR1t_oGQcAb-QZZMwKMaZfZo"
        alt="Nouri — East African feast with Swahili pilau and fresh kachumbari"
        fill
        unoptimized
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-container-margin-mobile md:p-container-margin-desktop flex flex-col gap-2">
        <div className="bg-primary/10 backdrop-blur-md self-start px-3 py-1 rounded-full border border-primary/20">
          <span className="font-label-md text-label-md text-primary font-bold">Welcome • Karibu</span>
        </div>
        <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface">
          Karibu Nouri, <br />Fresh flavors await you.
        </h2>
      </div>
    </section>
  );
}
