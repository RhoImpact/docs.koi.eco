export async function onRequestPost({ request, env }) {
  const { message } = await request.json()
  const webhookUrl = env.SLACK_WEBHOOK_URL || ''

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: message }),
  })

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: `Slack responded with ${response.status}` }),
      { status: response.status, headers: { 'Content-Type': 'application/json' } },
    )
  }

  return new Response(
    JSON.stringify({ message: 'Message posted successfully' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  )
}
