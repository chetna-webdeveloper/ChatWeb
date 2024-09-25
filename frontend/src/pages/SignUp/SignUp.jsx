import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'

function SignUp() {
  return (
    <div >
           <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='font-semibold text-3xl text-center text-gray-300'>
                    SignUp
                    <span className='text-blue-400'>ChatWeb</span>
                </h1>


                <form >

                  {/* FULLNAME */}
                  <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-400 label-text'>Fullname</span>
                        </label>
                        <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-10' />
                    </div>


                    {/* username */}
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-400 label-text'>Username</span>
                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
                    </div>

                    {/* password */}
                    <div>
                        <label className='label p-2'>
                            <span className='text-base text-gray-400 label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>

                    {/* gendercheckbox goes here */}

                    <GenderCheckBox/>

                    {/* login page link */}
                    <a href="#" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-gray-400'>Already have an accout? Login</a>

                    {/* signup button */}
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default SignUp



// import React from 'react'
// import GenderCheckBox from './GenderCheckBox.jsx'

// function SignUp() {
//   return (
//     <div >
//            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='font-semibold text-3xl text-center text-gray-300'>
//                     SignUp
//                     <span className='text-blue-400'>ChatWeb</span>
//                 </h1>


//                 <form >

//                   {/* FULLNAME */}
//                   <div>
//                         <label className='label p-2'>
//                             <span className='text-base text-gray-400 label-text'>Fullname</span>
//                         </label>
//                         <input type="text" placeholder='Enter Fullname' className='w-full input input-bordered h-10' />
//                     </div>


//                     {/* username */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base text-gray-400 label-text'>Username</span>
//                         </label>
//                         <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//                     </div>

//                     {/* password */}
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base text-gray-400 label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//                     </div>

//                     {/* gendercheckbox goes here */}

//                     <GenderCheckBox/>

//                     {/* login page link */}
//                     <a href="#" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-gray-400'>Already have an accout? Login</a>

//                     {/* signup button */}
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//                     </div>
//                 </form>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default SignUp