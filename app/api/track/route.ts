// app/api/track/route.ts
import { NextRequest, NextResponse } from 'next/server';

// 1x1 transparent GIF pixel (base64 encoded)
const PIXEL = Buffer.from('R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', 'base64');

export async function GET(request: NextRequest) {
  const timestamp = new Date().toISOString();
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'Unknown';
  const userAgent = request.headers.get('user-agent') || 'Unknown';

  const logEntry = `[${timestamp}] Email opened - IP: ${ip}, UA: ${userAgent}\n`;
  console.warn(`LOGGER: [${new Date().toISOString()}] ${request.method} ${request.url} ${logEntry});`);

  // Return the pixel image
  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': PIXEL.length.toString(),
      'Cache-Control': 'no-cache, no-store, must-revalidate', // Prevent caching
    },
  });
}