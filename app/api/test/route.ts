import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  const result = await sql`SELECT 'Connected to Neon!' AS message`;
  return NextResponse.json({ message: result[0].message });
}
