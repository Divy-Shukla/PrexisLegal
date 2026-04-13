import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // TODO: Implement actual email sending logic here
    console.log('Received contact submission:', data);

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 });
  }
}
