// core/app/api/route.ts
import {
  NextResponse,
} from 'next/server';
import { baseURL } from './lib/baseURL';

export async function GET() {
  return NextResponse.json({
    time: Date.now(),
    header: {},
    start: `${baseURL()}/api/`,
  });
}
