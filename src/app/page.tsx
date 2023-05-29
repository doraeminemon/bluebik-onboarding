export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2 pt-24 lg:items-center lg:w-full">
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex lg:px-4 lg:pb-5">
        <p className=" fixed left-0 top-0 flex w-full px-6 border-b bg-gray-200 border-gray-300 pb-4 pt-5 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          $ BlueBik E-wallet
        </p>
      </div>
      <h1 className='mb-8 text-2xl font-bold mx-4'>Registration form</h1>
      <form className='flex flex-col w-full px-4 items-stretch lg:max-w-xl' action="/contact" method="get">
        <div className='mb-6'>
          <label htmlFor="first">First name</label>
          <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text" id="first" name="first" />
        </div>
        <div className='mb-6'>
          <label htmlFor="last">Last name</label>
          <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text" id="last" name="last" />
        </div>
        <div className='mb-6'>
          <label htmlFor="idno">ID number</label>
          <input required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="text" id="idno" name="idno" />
        </div>
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5' type="submit">Next</button>
      </form>
    </main>
  )
}
