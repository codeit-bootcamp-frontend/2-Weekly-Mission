import Link from "next/link";

const Test = () => {
  return(
    <main>
      <div className='flex justify-center items-center mx-auto gap-16 mt-20'>
        <Link href='/shared' className='w-40 h-20 bg-indigo-500 text-white text-center text-4xl rounded-md'>Shared Page</Link>
        <Link href='/folder' className='w-40 h-20 bg-indigo-500 text-white text-center text-4xl rounded-md'>Folder Page</Link>
        <Link href='/signin' className='w-40 h-20 flex items-center justify-center bg-indigo-500 text-white text-center text-4xl rounded-md'>SignIn</Link>
        <Link href='/signup' className='w-40 h-20 flex items-center justify-center bg-indigo-500 text-white text-center text-4xl rounded-md'>Signup</Link>
      </div>
    </main>
  )
};

export default Test;
