import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, user_type } = body

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase.from('waitlist').insert([{ email, user_type }])

    if (error) {
      if (error.code === '23505') {
        // Duplicate email — not an error, just already signed up
        return NextResponse.json({ success: true, message: 'Already on waitlist' })
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}