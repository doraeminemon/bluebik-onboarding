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
        <div className='mb-6 flex items-center'>
          <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ' id="html" name="purpose" value="money_transfer"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="money_transfer">Money transfer</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ' id="css" name="purpose" value="payment"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="payment">Payment</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ' id="javascript" name="purpose" value="bill_payment"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="bill_payment">Bill payment</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ' id="loan" name="purpose" value="loan"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="loan">Loan</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ' id="investment" name="purpose" value="investment"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="investment">Investment</label>
        </div>
        <div className='mb-6 flex items-center'>
          <input type="radio" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ' id="saving" name="purpose" value="saving"/>
          <label className='ml-2 text-sm font-medium text-gray-900' htmlFor="saving">Saving</label>
        </div>
      </form>
    </main>
  )
}
