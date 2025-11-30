import { NextResponse } from 'next/server'

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'
export const runtime = 'edge' // Use edge runtime for better Netlify compatibility

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET() {
  try {
    const url =
      process.env.NODE_ENV === 'production'
        ? 'https://rhoimpact-bucket-public.s3.us-east-1.amazonaws.com/koi/openapi/openapi.json'
        : 'https://rhoimpact-bucket-public.s3.us-east-1.amazonaws.com/koi/openapi/openapi-dev.json'

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch OpenAPI specification' },
        { status: response.status, headers: corsHeaders }
      )
    }

    const data = await response.json()

    return NextResponse.json(data, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error fetching OpenAPI spec:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    )
  }
}
