/*
  HOW TO ADD YOUR OWN WALLPAPERS
  ------------------------------
  1. Upload your 4K image somewhere that gives a DIRECT image link:
       - ImageKit.io (free) — best option, direct links + fast loading
       - Cloudinary (free)
       - Google Drive (see note below — needs a link format tweak)
       - Your own GitHub repo (works but slower for large files)

  2. Copy that direct link into "image" below.
     Optional: use a smaller/compressed version of the same image as "thumb"
     so the gallery grid loads fast. If you skip it, the full image is used
     for both (fine, just a bit slower to load).

  3. Fill in title, anime, and category (category is used for the filter chips —
     use whatever categories you like, e.g. "Naruto", "Jujutsu Kaisen", "Studio Ghibli").

  4. Set featured: true on ONE wallpaper — that's the one shown in the hero
     phone mockup at the top of the page.

  GOOGLE DRIVE DIRECT LINK FORMAT:
  A normal share link looks like:
    https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  Turn it into a direct link like this:
    https://drive.google.com/uc?export=view&id=FILE_ID
  (Grive can be slow/rate-limited for lots of traffic — ImageKit or Cloudinary
  are more reliable if this site gets real Instagram traffic.)
*/

const WALLPAPERS = [
  {
    title: "Neon Rain",
    anime: "Sample — Cyber City",
    category: "Cyberpunk",
    image: "https://picsum.photos/seed/neonrain/1080/1920",
    thumb: "https://picsum.photos/seed/neonrain/400/711",
    featured: true
  },
  {
    title: "Sakura Drift",
    anime: "Sample — Spring Arc",
    category: "Studio Ghibli",
    image: "https://picsum.photos/seed/sakuradrift/1080/1920",
    thumb: "https://picsum.photos/seed/sakuradrift/400/711"
  },
  {
    title: "Storm Blade",
    anime: "Sample — Shonen Saga",
    category: "Shonen",
    image: "https://picsum.photos/seed/stormblade/1080/1920",
    thumb: "https://picsum.photos/seed/stormblade/400/711"
  },
  {
    title: "Midnight Circuit",
    anime: "Sample — Cyber City",
    category: "Cyberpunk",
    image: "https://picsum.photos/seed/midnightcircuit/1080/1920",
    thumb: "https://picsum.photos/seed/midnightcircuit/400/711"
  },
  {
    title: "Quiet Valley",
    anime: "Sample — Spring Arc",
    category: "Studio Ghibli",
    image: "https://picsum.photos/seed/quietvalley/1080/1920",
    thumb: "https://picsum.photos/seed/quietvalley/400/711"
  },
  {
    title: "Last Stand",
    anime: "Sample — Shonen Saga",
    category: "Shonen",
    image: "https://picsum.photos/seed/laststand/1080/1920",
    thumb: "https://picsum.photos/seed/laststand/400/711"
  }
];
