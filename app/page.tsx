import Image from 'next/image'
import Link from 'next/link';
import ProductCard from '../app/components/productCard';

export default function Home() {
  return (
    <main className="">
      
    
     <Link href="/users">see users</Link>
      <ProductCard/>
     
    </main>
  )
}
