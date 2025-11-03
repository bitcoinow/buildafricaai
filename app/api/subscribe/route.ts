import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const subscribersFile = path.join(process.cwd(), 'data', 'subscribers.json');

function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(subscribersFile)) {
    fs.writeFileSync(subscribersFile, JSON.stringify({ subscribers: [] }, null, 2));
  }
}

function getSubscribers() {
  ensureDataDirectory();
  const data = fs.readFileSync(subscribersFile, 'utf8');
  return JSON.parse(data);
}

function saveSubscribers(data: any) {
  ensureDataDirectory();
  fs.writeFileSync(subscribersFile, JSON.stringify(data, null, 2));
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const data = getSubscribers();
    
    if (data.subscribers.some((sub: any) => sub.email === email)) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 400 }
      );
    }

    data.subscribers.push({
      email,
      subscribedAt: new Date().toISOString(),
    });

    saveSubscribers(data);

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = getSubscribers();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}
