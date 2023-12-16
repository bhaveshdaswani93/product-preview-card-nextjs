import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-full grid grid-cols-1 container mx-auto">
      <Image
        src={'/assets/images/image-product-mobile.jpg'}
        alt={'Product Image'}
        width={120}
        height={120}
      />
    </main>
  )
}
