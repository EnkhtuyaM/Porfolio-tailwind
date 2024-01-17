import { Html, Head, Main, NextScript } from 'next/document'
import { Portfolio } from './Portfolio';

export default function Home(){
  return (
    <div className=''>
      <Portfolio />
    </div>
  )
}

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
