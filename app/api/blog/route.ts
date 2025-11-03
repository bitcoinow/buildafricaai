import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'content');

function verifyAuth(request: Request) {
  const authHeader = request.headers.get('authorization');
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  return authHeader === `Bearer ${adminPassword}`;
}

export async function POST(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug, title, date, excerpt, content } = await request.json();

    if (!slug || !title || !date || !excerpt || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fileName = `${slug}.md`;
    const filePath = path.join(contentDirectory, fileName);

    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Post with this slug already exists' },
        { status: 400 }
      );
    }

    const fileContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
---

${content}`;

    if (!fs.existsSync(contentDirectory)) {
      fs.mkdirSync(contentDirectory, { recursive: true });
    }

    fs.writeFileSync(filePath, fileContent, 'utf8');

    return NextResponse.json(
      { message: 'Post created successfully', slug },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { slug, title, date, excerpt, content } = await request.json();

    if (!slug || !title || !date || !excerpt || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fileName = `${slug}.md`;
    const filePath = path.join(contentDirectory, fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const fileContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
---

${content}`;

    fs.writeFileSync(filePath, fileContent, 'utf8');

    return NextResponse.json(
      { message: 'Post updated successfully', slug },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    if (!verifyAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }

    const fileName = `${slug}.md`;
    const filePath = path.join(contentDirectory, fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}
