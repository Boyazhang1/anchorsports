import Image from 'next/image';
import banner from '../public/images/frontbanner.jpg';
import {useRouter} from 'next/router'; 


const Hero = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/programs')
  }
  return (
    <>
      <div style={{ position: 'relative', height: '70vh' }}>
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          alt="anchor basketball banner"
        />
      </div>
      <div className="flex justify-center items-center h-[15vh] mt-2">
        <button className=" bg-slate-700 hover:bg-slate-900 text-white font-bold py-8 px-10 rounded-lg md:text-lg" onClick={handleClick}>
          View Winter 2022 Programs
        </button>
      </div>
    </>
  );
};

export { Hero };
