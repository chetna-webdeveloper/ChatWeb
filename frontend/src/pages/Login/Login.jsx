import React from 'react'

function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='font-semibold text-3xl text-center text-gray-300'>
                    Login
                    <span className='text-blue-400'>ChatWeb</span>
                </h1>


                <form >

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

                    {/* login page link */}
                    <a href="#" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-gray-400'>Don't have an accout? SignUp</a>

                    {/* Login button */}
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login

// DUBPLICATE --- ORIGNAL

// import React from 'react'

// function Login() {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='font-semibold text-3xl text-center text-gray-300'>
//                     Login
//                     <span className='text-blue-400'>ChatWeb</span>
//                 </h1>


//                 <form >

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

//                     {/* login page link */}
//                     <a href="#" className='text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-gray-400'>Don't have an accout? SignUp</a>

//                     {/* Login button */}
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login