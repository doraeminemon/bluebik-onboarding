'use client'
import { useState } from "react"

export default function Home() {
  const [steps, setSteps] = useState(0)
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [idno, setIdno] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dob, setDoB] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const checkList = ["Money transfer", "Payment", "Bill payment", "Loan", "Investment", "Saving"];

  const enabledFirstStep = steps === 0 && first.length > 0 && last.length > 0 && idno.length > 0
  const enabledSecondStep = steps === 1 && email.length > 0 && phoneNumber.length > 0 && dob.length > 0
  const enabledThirdStep = steps === 2 && purpose.length > 0
  const buttonIsDisabled = !enabledFirstStep && !enabledSecondStep && !enabledThirdStep

  // Add/Remove checked item from list
  const handleCheck = (event: { target: { checked: boolean; value: string } }) => {
    var updatedList = [...purpose];
    if (event.target.checked) {
      updatedList = [...purpose, event.target.value];
    } else {
      updatedList.splice(purpose.indexOf(event.target.value), 1);
    }
    setPurpose(updatedList);
  };

  return (
    <main className="flex min-h-screen flex-col p-2 pt-24 lg:items-center lg:w-full">
      <div className="z-10 w-full max-w-5xl font-mono text-sm lg:flex lg:px-4 lg:pb-5">
        <p className=" fixed left-0 top-0 flex w-full px-6 border-b bg-gray-200 border-gray-300 pb-4 pt-5 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          BlueBik E-wallet
        </p>
      </div>
      <h1 className='mb-8 text-2xl font-bold mx-4'>Registration form</h1>
      <form className='flex flex-col w-full px-4 items-stretch lg:max-w-xl' action="/complete" method="get">
        {
          steps === 0 && (
            <>
              <div className='mb-6'>
                <label htmlFor="first">First name</label>
                <input onChange={(e) => setFirst(e.target.value)} type="text" data-testid="first" required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' id="first" name="first" />
              </div>
              <div className='mb-6'>
                <label htmlFor="last">Last name</label>
                <input onChange={(e) => setLast(e.target.value)} type="text" data-testid="last" required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' id="last" name="last" />
              </div>
              <div className='mb-6'>
                <label htmlFor="idno">ID number</label>
                <input onChange={(e) => setIdno(e.target.value)} type="text" data-testid="idno" required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' id="idno" name="idno" />
              </div>
            </>
          )
        }
        {
          steps === 1 && (
            <>
              <div className='mb-6'>
                <label htmlFor="email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="email" id="email" name="email" />
              </div>
              <div className='mb-6'>
                <label htmlFor="phone">Phone number</label>
                <input onChange={(e) => setPhoneNumber(e.target.value)} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="tel" id="phone" name="phone" />
              </div>
              <div className='mb-6'>
                <label htmlFor="dob">Date of birth</label>
                <input onChange={(e) => setDoB(e.target.value)} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' type="date" id="dob" name="dob" />
              </div>
            </>
          )
        }
        {
          steps === 2 && (
            <>
              {checkList.map((item) => (
                <div key={item} className='mb-6 flex items-center'>
                  <input onChange={handleCheck} type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500' id="html" name="purpose" value={item}/>
                  <label className='ml-2 text-sm font-medium text-gray-900' htmlFor={item}>{item}</label>
                </div>
              ))}
            </>
          )
        }
        { steps < 3 && (
            <button
              data-testid="submit-button"
              className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-slate-300'
              type='button'
              onClick={() => steps < 3 ? setSteps(s => s+1) : 'complete'}
              disabled={buttonIsDisabled}
            >
              { steps < 3 ? 'Next' : 'Complete' }
            </button>
          )
        }
      </form>
      {
        steps === 3 && (
          <code className="whitespace-normal text-sm lg:max-w-xl px-4 w-full">
            {
              JSON.stringify(
                {
                  first,
                  last,
                  idno,
                  email,
                  phoneNumber,
                  dob,
                  purpose
                },
                undefined,
                2
              )
            }
          </code>
        )
      }
    </main>
  )
}
