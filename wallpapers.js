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
    title: "Chainsaw Devil",
    anime: "Chainsaw Man",
    category: "Chainsaw Man",
    image: "https://ik.imagekit.io/Stick/a9adbb5e-2500-4e17-b0aa-e0a28444eeaf.png",
    thumb: "https://ik.imagekit.io/Stick/a9adbb5e-2500-4e17-b0aa-e0a28444eeaf.png",
    featured: true
  },
  {
    title: "Reze",
    anime: "Chainsaw Man",
    category: "Chainsaw Man",
    image: "https://ik.imagekit.io/Stick/300d7079-35c2-4077-940d-4482b9fd1b0e.png",
    thumb: "https://ik.imagekit.io/Stick/300d7079-35c2-4077-940d-4482b9fd1b0e.png"
  },
  {
    title: "Power",
    anime: "Chainsaw Man",
    category: "Chainsaw Man",
    image: "https://ik.imagekit.io/Stick/53fd38ad-1988-4958-9387-e83a54fd0e61.png",
    thumb: "https://ik.imagekit.io/Stick/53fd38ad-1988-4958-9387-e83a54fd0e61.png"
  },
  {
    title: "Makima",
    anime: "Chainsaw Man",
    category: "Chainsaw Man",
    image: "https://ik.imagekit.io/Stick/37d80440-5a7b-481f-86ee-f5e371e01927.png?updatedAt=1783705036621",
    thumb: "https://ik.imagekit.io/Stick/37d80440-5a7b-481f-86ee-f5e371e01927.png?updatedAt=1783705036621"
  },
  {
    title: "Itachi Uchiha",
    anime: "Naruto",
    category: "Naruto",
    image: "https://ik.imagekit.io/Stick/999f8690-0f23-4d8c-a07a-7a00e35290a9_waifu2x_art_noise1_scale.png",
    thumb: "https://ik.imagekit.io/Stick/999f8690-0f23-4d8c-a07a-7a00e35290a9_waifu2x_art_noise1_scale.png"
  },
  {
    title: "Naruto & Sasuke",
    anime: "Naruto",
    category: "Naruto",
    image: "https://ik.imagekit.io/Stick/b8806b9b-988e-499b-895f-a04f4a8cc87d.png",
    thumb: "https://ik.imagekit.io/Stick/b8806b9b-988e-499b-895f-a04f4a8cc87d.png"
  },
  {
    title: "Hinata Hyuga",
    anime: "Naruto",
    category: "Naruto",
    image: "https://ik.imagekit.io/Stick/a6e5ba9d-4abc-41a2-b2de-2d4ece372663.png",
    thumb: "https://ik.imagekit.io/Stick/a6e5ba9d-4abc-41a2-b2de-2d4ece372663.png"
  },
  {
    title: "Luffy - Gear 5",
    anime: "One Piece",
    category: "One Piece",
    image: "https://ik.imagekit.io/Stick/0cf77b4a-947c-41f0-b195-616d6e1970f2.png",
    thumb: "https://ik.imagekit.io/Stick/0cf77b4a-947c-41f0-b195-616d6e1970f2.png"
  },
  {
    title: "Madara Uchiha",
    anime: "Naruto",
    category: "Naruto",
    image: "https://ik.imagekit.io/Stick/0904f7a7-a392-45fa-918a-a87005caf0b5.png?updatedAt=1783927781203",
    thumb: "https://ik.imagekit.io/Stick/0904f7a7-a392-45fa-918a-a87005caf0b5.png?updatedAt=1783927781203"
  },
  {
    title: "Roronoa Zoro",
    anime: "One Piece",
    category: "One Piece",
    image: "https://ik.imagekit.io/Stick/f984ed9a-db24-40b7-8a72-54e8a15d3e82.png?updatedAt=1783927783469",
    thumb: "https://ik.imagekit.io/Stick/f984ed9a-db24-40b7-8a72-54e8a15d3e82.png?updatedAt=1783927783469"
  },
  {
    title: "Naruto - Nine-Tails Mode",
    anime: "Naruto",
    category: "Naruto",
    image: "https://ik.imagekit.io/Stick/1a8baa59-8e9f-4d47-aa48-2826c58bd9df.png?updatedAt=1783927776800",
    thumb: "https://ik.imagekit.io/Stick/1a8baa59-8e9f-4d47-aa48-2826c58bd9df.png?updatedAt=1783927776800"
  },
  {
    title: "Sasuke Uchiha",
    anime: "Naruto",
    category: "Naruto",
    image: "https://ik.imagekit.io/Stick/34716e79-ab35-4192-8f1e-658b91da398b.png?updatedAt=1783927772560",
    thumb: "https://ik.imagekit.io/Stick/34716e79-ab35-4192-8f1e-658b91da398b.png?updatedAt=1783927772560"
  },
];
    
