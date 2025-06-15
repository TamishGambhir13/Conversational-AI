// export default async function handler(_, res) {
//   const resp = await fetch('https://api.elevenlabs.io/v1/voices', {
//     headers: { 'gHu9GtaHOXcSqFTK06ux': process.env.ELEVENLABS_API_KEY! }
//   })
//   const json = await resp.json()
//   res.status(200).json(json)
// }

// pages/api/voices.ts
import type { NextApiRequest, NextApiResponse } from 'next'

type Voice = {
  voice_id: string
  name: string
  language: string
  // …etc, based on the ElevenLabs docs
}

type VoicesResponse = {
  voices: Voice[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VoicesResponse | { error: string }>
) {
  const apiKey = process.env.ELEVENLABS_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'ELEVENLABS_API_KEY not set' })
  }

  // The ElevenLabs “List Voices” endpoint (see https://docs.elevenlabs.io/reference/get_voices)
  const elevenLabsUrl = 'https://api.elevenlabs.io/v1/voices'

  const elevenResp = await fetch(elevenLabsUrl, {
    headers: {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json',
    },
  })

  if (!elevenResp.ok) {
    const text = await elevenResp.text()
    return res
      .status(elevenResp.status)
      .json({ error: `ElevenLabs error: ${text}` })
  }

  const json: VoicesResponse = await elevenResp.json()
  return res.status(200).json(json)
}
