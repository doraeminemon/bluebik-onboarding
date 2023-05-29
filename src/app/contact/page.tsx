import Image from 'next/image'

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col p-2 pt-24 lg:items-center lg:w-full">
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex lg:px-4 lg:pb-5">
        <p className=" fixed left-0 top-0 flex w-full px-6 border-b bg-gray-200 border-gray-300 pb-4 pt-5 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          Bluebik E-wallet
        </p>
      </div>

      <h1>Registration form</h1>
      <form className='flex flex-col w-full px-4 items-stretch lg:max-w-xl' action="/send-data-here" method="post">
        <div className='mb-6'>
          <label htmlFor="email">Email</label>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="email" id="email" name="email" />
        </div>
        <div className='mb-6'>
          <label htmlFor="phone">Phone number</label>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="tel" id="phone" name="phone" />
        </div>
        <div className='mb-6'>
          <label htmlFor="dob">Date of birth</label>
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="datetime-local" id="dob" name="dob" />
        </div>
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5' type="submit">Submit</button>
      </form>
    </main>
  )
}
