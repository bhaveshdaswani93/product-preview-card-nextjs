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
      <div className='bg-white p-4'>
        <p className='uppercase tracking-[.35rem] text-xs text-dark-gray-blue'>Perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <p>
          <span>
            $149.99
          </span>
          <span>169.99</span>

          
        </p>
        <button>
            <Image 
              src={'/assets/icons/icon-cart.svg'}
              width={15}
              height={16}
              alt='Add to cart'
            />
            Add to Cart
          </button>
      </div>
    </main>
  )
}
