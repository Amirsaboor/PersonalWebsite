import Image from 'next/image'
import clsx from 'clsx'
import image1 from '@/assets/images/photos/image-1.jpg'
import image2 from '@/assets/images/photos/image-2.jpg'
import image3 from '@/assets/images/photos/image-3.jpg'
import image4 from '@/assets/images/photos/image-4.jpg'
import image5 from '@/assets/images/photos/image-5.jpg'

export function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-3', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex justify-center gap-5 py-4 -my-4 overflow-hidden sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
