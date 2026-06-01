# Brent Veal — Personal Website

A static HTML/CSS/JS site replicated from brentveal.com, ready to host for free.

## Files

```
index.html       — Home / Welcome page
experience.html  — Career & Education
contact.html     — Contact info
gallery.html     — Work samples gallery
style.css        — All styles
nav.js           — Mobile nav + scroll effects
images/          — (create this folder and add your gallery images here)
```

## Adding Gallery Images

1. Create an `images/` folder alongside the HTML files.
2. Copy your VFX work images into it.
3. In `gallery.html`, replace each `gallery-placeholder` div with an actual `<img>` tag:

```html
<!-- Before -->
<div class="gallery-item" data-index="0">
  <div class="gallery-placeholder">RSA_Meteor.jpg</div>
</div>

<!-- After -->
<div class="gallery-item" data-index="0">
  <img src="images/RSA_Meteor.jpg" alt="RSA Meteor VFX shot">
</div>
```

## Free Hosting Options

### GitHub Pages (Recommended — Free forever)
1. Create a free account at https://github.com
2. Create a new repository (e.g. `brentveal-site`)
3. Upload all files to the repository
4. Go to Settings → Pages → Source: Deploy from a branch → main
5. Your site will be live at `https://yourusername.github.io/brentveal-site`
6. To use your custom domain (brentveal.com), add a `CNAME` file containing `brentveal.com` and update your domain's DNS to point to GitHub Pages.

### Netlify (Free tier — drag & drop)
1. Go to https://netlify.com and sign up free
2. Drag your entire site folder onto the Netlify dashboard
3. Done — instant live URL
4. Connect your custom domain in Site Settings → Domain management

### Cloudflare Pages (Free — very fast CDN)
1. Go to https://pages.cloudflare.com
2. Connect your GitHub repo or upload directly
3. Free custom domain support

## Custom Domain
Once hosted, point your domain registrar's DNS to your chosen host. Each host above has a free guide for this. You can keep your existing brentveal.com domain — just change where it points.

## Updating Content
All content is plain HTML — just open the relevant file in any text editor and make changes. No build tools or special software needed.
