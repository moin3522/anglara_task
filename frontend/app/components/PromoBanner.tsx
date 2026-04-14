import { CgClose } from "react-icons/cg"


function PromoBanner() {
  return (
    <div className='main-container bg-(--accent-color)'>
      <div className='main-section relative text-[0.9em] text-white text-center flex gap-2 items-center justify-center padd-X py-2'>
            <p className="opacity-100! text-white!">Sign up and get 20% off to your first order. </p> <span><a className='underline text-[1em]'>Sign Up Now</a></span>
            <button className='absolute hidden xl:block cursor-pointer z-1 text-white right-0'>
                <CgClose size={20}/>
            </button> 
      </div>
    </div>
  )
} 

export default PromoBanner
