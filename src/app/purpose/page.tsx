import Image from 'next/image'

export default function Home() {
  // js require for checking at least 1 box
  return (
    <main className="flex min-h-screen flex-col p-2 pt-24 lg:items-center lg:w-full">
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex lg:px-4 lg:pb-5">
        <p className=" fixed left-0 top-0 flex w-full px-6 border-b bg-gray-200 border-gray-300 pb-4 pt-5 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          $ BlueBik E-wallet
        </p>
      </div>

      <h1 className='mb-8 mx-4 text-2xl font-bold'>Registration purpose</h1>
      <form className='flex flex-col w-full px-4 items-stretch lg:max-w-xl' action="/complete" method="post">
        <div className='mb-6 flex items-center'>
          <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="html" name="purpose" value="money_transfer"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="money_transfer">Money transfer</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="css" name="purpose" value="payment"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="payment">Payment</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="javascript" name="purpose" value="bill_payment"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="bill_payment">Bill payment</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="loan" name="purpose" value="loan"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="loan">Loan</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="investment" name="purpose" value="investment"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="investment">Investment</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="saving" name="purpose" value="saving"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="saving">Saving</label>
        </div>
        <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5' type="submit">Submit</button>
      </form>
    </main>
  )
}
