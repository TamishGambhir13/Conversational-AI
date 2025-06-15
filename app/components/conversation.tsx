'use client'

import { useConversation } from '@elevenlabs/react'
import { useCallback } from 'react'

const agentId = process.env.NEXT_PUBLIC_AGENT_ID // This will be replaced at build time

export function Conversation() {
  const conversation = useConversation({
    onConnect:    () => console.log('Connected'),
    onMessage:    (m: any) => console.log('Message:', m),
    onDisconnect: () => console.log('Disconnected'),
    onError:      (e: any) => console.error('Error:', e),
  })

  const startConversation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch (err) {
      console.error('Microphone access denied:', err)
      return
    }

    if (!agentId) {
      console.error('NEXT_PUBLIC_AGENT_ID is missing')
      return
    }

    try {
      await conversation.startSession({ agentId })
    } catch (err) {
      console.error('Failed to start session:', err)
    }
  }, [conversation])

  const stopConversation = useCallback(() => {
    conversation.endSession()
  }, [conversation])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          onClick={startConversation}
          disabled={conversation.status === 'connected'}
          // className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          className="btn-gradient px-4 py-2 text-white rounded disabled:bg-gray-500"
        >
          {/* <button ">Start Conversation</button>
          <button >End Conversation</button> */}
          Start Conversation
        </button>
        <button
          onClick={stopConversation}
          disabled={conversation.status !== 'connected'}
          className="btn-end px-4 py-2 text-white rounded disabled:bg-gray-500"
        >
          Stop Conversation
        </button>
      </div>
      <p>Status: {conversation.status}</p>
      <p>Agent is {conversation.isSpeaking ? 'speaking' : 'listening'}</p>
    </div>
  )
}
