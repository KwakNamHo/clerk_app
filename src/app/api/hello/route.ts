import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello, WNext.js!',
  }
  return NextResponse.json(data)
}
