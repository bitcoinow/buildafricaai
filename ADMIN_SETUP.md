# Admin Setup Guide

## Email Subscriptions

Email subscriptions are now fully functional! When users subscribe via the newsletter form, their emails are stored in `data/subscribers.json`.

### Viewing Subscribers

To view all subscribers, make a GET request to `/api/subscribe` with the admin password:

```bash
curl -H "Authorization: Bearer YOUR_ADMIN_PASSWORD" https://buildafricaai.vercel.app/api/subscribe
```

## Admin Dashboard

Access the admin dashboard at: `/admin`

### Default Credentials
- Password: `admin123` (change this in production!)

### Features

1. **Create New Blog Posts**
   - Click "Create New Post"
   - Fill in the form with slug, title, date, excerpt, and markdown content
   - Click "Create Post"

2. **Edit Existing Posts**
   - Click "Edit" on any post
   - Modify the content
   - Click "Update Post"

3. **Delete Posts**
   - Click "Delete" on any post
   - Confirm the deletion

### Setting Up Admin Password

1. Create a `.env.local` file in the root directory (for local development)
2. Add: `ADMIN_PASSWORD=your_secure_password`
3. For production (Vercel), add the environment variable in your Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `ADMIN_PASSWORD` with your secure password

### Blog Post Format

Posts are stored as markdown files in the `content/` directory with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description of your post"
---

Your markdown content here...
```

## API Endpoints

### Email Subscription
- `POST /api/subscribe` - Subscribe an email
- `GET /api/subscribe` - Get all subscribers (requires auth)

### Authentication
- `POST /api/auth/login` - Admin login

### Blog Management
- `POST /api/blog` - Create new post (requires auth)
- `PUT /api/blog` - Update existing post (requires auth)
- `DELETE /api/blog?slug=post-slug` - Delete post (requires auth)
- `GET /api/blog/[slug]` - Get single post for editing

## Security Notes

1. **Change the default password** in production
2. The admin password is stored in environment variables
3. All admin operations require authentication
4. Subscriber data is stored locally in `data/subscribers.json`

## Deployment

When deploying to Vercel:

1. Set the `ADMIN_PASSWORD` environment variable in Vercel dashboard
2. The `data/` directory is gitignored, so subscribers won't be committed
3. Consider using a database (MongoDB, PostgreSQL) for production instead of JSON files

## Future Enhancements

- Email service integration (SendGrid, Mailchimp)
- Database integration for subscribers
- Rich text editor for blog posts
- Image upload functionality
- Post scheduling
- Analytics dashboard
