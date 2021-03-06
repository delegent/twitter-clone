import Image from 'next/image'
import { signIn } from 'next-auth/react'
export default function Login({ providers }) {
  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
	  {/* #1d9bf0     */}

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
		  <a onClick={() => signIn(provider.id, { callbackUrl: "/" })} className=" cursor-pointer relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1d9bf0] rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span class="relative">Sign in with {provider.name}</span>
</a>
          </div>
		))}
      </div>
    </div>
  )
}
