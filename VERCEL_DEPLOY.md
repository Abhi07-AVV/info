# Vercel Deployment Guide

## Quick Deploy

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

## Environment Variables (if needed)
If you need environment variables, add them in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add variables like `VITE_API_URL`, etc.

## Custom Domain (optional)
- Go to Project Settings → Domains
- Add your custom domain

## Build Settings
Vercel will automatically use:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

The `vercel.json` file is configured to handle React Router properly.