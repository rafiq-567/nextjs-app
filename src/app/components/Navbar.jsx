// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       {/* 1. Branding/Title */}
//       <Link href="/">
//         <div className="text-xl font-bold cursor-pointer">
//           My App
//         </div>
//       </Link>

//       {/* 2. Navigation Links */}

//        <Link href="/Products">
//           <div className="hover:text-gray-300 cursor-pointer">
//             Products
//           </div>
//         </Link>
//         <Link href="/login">
//           <div className="hover:text-gray-300 cursor-pointer">
//             Login
//           </div>
//         </Link>

//       {/* <div className="space-x-4 flex justify-center">
       
//       </div> */}
//     </nav>
//   );
// };

// export default Navbar;

// // "use client";
// // import Link from "next/link";
// // import { useSession, signOut } from "next-auth/react";

// // export default function Navbar() {
// //   const { data: session, status } = useSession();
  
// //   return (
// //     <nav className="bg-blue-600 text-white p-4">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <Link href="/" className="text-xl font-bold">
// //           ProductApp
// //         </Link>
        
// //         <div className="flex gap-4 items-center">
// //           <Link href="/">Home</Link>
// //           <Link href="/products">Products</Link>
          
// //           {status === "loading" ? (
// //             <span>Loading...</span>
// //           ) : session ? (
// //             <>
// //               <Link href="/dashboard/add-product">Add Product</Link>
// //               <button 
// //                 onClick={() => signOut()}
// //                 className="bg-white text-blue-600 px-3 py-1 rounded"
// //               >
// //                 Sign Out
// //               </button>
// //               <span>Hello, {session.user.name}</span>
// //             </>
// //           ) : (
// //             <Link href="/login" className="bg-white text-blue-600 px-3 py-1 rounded">
// //               Sign In
// //             </Link>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }


"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ProductApp
        </Link>
        
        <div className="flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          
          {status === "loading" ? (
            <span>Loading...</span>
          ) : session ? (
            <>
              <Link href="/dashboard/add-product">Add Product</Link>
              <button 
                onClick={() => signOut()}
                className="bg-white text-blue-600 px-3 py-1 rounded"
              >
                Sign Out
              </button>
              <span>Hello, {session.user.name}</span>
            </>
          ) : (
            <Link href="/login" className="bg-white text-blue-600 px-3 py-1 rounded">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}