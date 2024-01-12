import Link from "next/link";

const Test = () => {
  return(
    <main>
      <div className='flex justify-center items-center mx-auto gap-16 mt-20'>
        <Link href='/shared' className='w-40 bg-indigo-500 text-white text-center text-4xl rounded-md'>Shared Page</Link>
        <Link href='/folder' className='w-40 bg-indigo-500 text-white text-center text-4xl rounded-md'>Folder Page</Link>
      </div>
    </main>
  )
};

export default Test;
