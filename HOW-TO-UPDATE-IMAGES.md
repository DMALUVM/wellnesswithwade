# How To Update Images & Videos On Your Site

No coding skills needed! Follow these steps:

---

## Step 1: Upload Your Files

1. Go to **github.com** and sign in
2. Open your **wellnesswithwade** repository
3. Click the **`public`** folder
4. Click **"Add file"** → **"Upload files"**
5. Drag your images/videos in and click **"Commit changes"**

**Tip:** For portfolio images, create a `portfolio` subfolder first for organization.

---

## Step 2: Update The Config

1. In GitHub, go to **`app/page.tsx`**
2. Click the **pencil icon** (edit) in the top right
3. Find the **`media`** section near the top (around line 25)
4. Replace the empty quotes `""` with your filenames

### Examples:

**Hero background image:**
```
heroImage: "/hero-background.jpg",
```

**Hero background video (with image as loading poster):**
```
heroImage: "/hero-background.jpg",
heroVideo: "/hero-video.mp4",
```

**Wade's portrait photo:**
```
aboutPhoto: "/wade-portrait.jpg",
```

**Portfolio thumbnails:**
```
portfolioImages: [
  "/portfolio/wellness-product.jpg",
  "/portfolio/training-equipment.jpg",
  "/portfolio/recovery-routine.jpg",
  "/portfolio/family-lifestyle.jpg",
  "/portfolio/nutrition-unboxing.jpg",
  "/portfolio/morning-routine.jpg",
],
```

5. Click **"Commit changes"** at the bottom
6. Wait ~60 seconds — Vercel auto-deploys your changes!

---

## Recommended Image Sizes

| Location | Size | Format |
|----------|------|--------|
| Hero background | 1920×1080 or larger | .jpg or .webp |
| About photo | 800×1000 (portrait) | .jpg or .webp |
| Portfolio thumbnails | 600×1067 (9:16 vertical) | .jpg or .webp |

---

## To Remove An Image

Just set it back to empty quotes:
```
heroImage: "",
```

The site will fall back to the original gradient design.

---

## Tips

- **File names matter** — use lowercase, no spaces (use dashes: `my-photo.jpg`)
- **Keep videos under 15MB** for fast loading on mobile
- **.webp** images load fastest, but .jpg works great too
- Every filename must start with `/` (e.g. `/hero.jpg`, not `hero.jpg`)
