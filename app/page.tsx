import { Conversation } from './components/conversation'

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Heading and Subtitle */}
      <div className="flex flex-col items-center mt-16 mb-8 z-10 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#fa8bff] via-[#2bd2ff] to-[#43e97b] bg-clip-text text-transparent">
          Your Personal Conversational AI
        </h1>
        <p className="text-lg text-gray-800 text-center mt-2">
          Specialized voice agents designed to meet your requirements.
        </p>
      </div>

      {/* Glassy Card */}
      <div className="glass-card card-shadow p-8 flex flex-col items-center w-full max-w-md z-10">
        <div className="mb-6">
          <span className="block text-2xl font-bold text-gray-800 text-center mb-2">
            Disconnected
          </span>
          {/* <div className="flex justify-center mb-4">
            <img
              src="/avatar.png"
              alt="Assistant"
              className="rounded-full border-4 border-white shadow-lg w-28 h-28 object-cover"
            />
          </div> */}
        </div>
        <div className="flex flex-col gap-3 w-full">
          
          <Conversation />
        </div>
      </div>
    </div>
  );
}
