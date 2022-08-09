import React from 'react';
import Image from 'next/image';

export async function getStaticPaths() {
  const resp = await fetch(
    'https://d3mn3tcv16754k.cloudfront.net/demo_reels.json'
  );
  const reels = await resp.json();

  return {
    paths: reels.map((item) => ({
      params: { reel: item.title.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `https://d3mn3tcv16754k.cloudfront.net/REELS/${params.reel}.json`
  );

  return {
    props: {
      reel: await resp.json(),
    },
  };
}

export default function Reel({ reel }) {
  return (
    <div className='flex-container'>
      {reel.main.map((item, i) => (
        <div key={`${item.title}-main-${i}`}>
          <Image
            src={`https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${reel.name}/${item}`}
            alt={item.title}
            layout='fill'
            priority={i < 2}
          />
        </div>
      ))}
      {reel.video && (
        <div>
          {reel.video.slice(-3) === 'gif' ? (
            <Image
              src={`https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${reel.name}/${reel.video}`}
              layout='responsive'
              width={1920}
              height={1080}
              priority
              alt={reel.title}
            />
          ) : (
            <video autoPlay muted>
              <source
                src={`https://d3mn3tcv16754k.cloudfront.net/PROJECTS/${reel.name}/${reel.video}`}
                type='video/mp4'
              />
            </video>
          )}
        </div>
      )}
    </div>
  );

  // const [reelInfo, setReelInfo] = useState();

  // const router = useRouter();

  // useEffect(() => {
  //   if (router.isReady) {
  //     const { reel } = router.query;

  //     const reelName = reel.replaceAll(' ', '');
  //     const demoReel = REEL_IMAGES[reelName];

  //     setReelInfo(demoReel);
  //   }
  // }, [router.isReady, router.query]);

  // return (
  //   <div className='flex-container'>
  //     {reelInfo?.set.main?.map((item, i) => (
  //       <div key={i}>
  //         <Image
  //           src={item}
  //           layout='responsive'
  //           priority={i < 2}
  //           alt={reelInfo.title}
  //         />
  //       </div>
  //     ))}
  //     {reelInfo?.set.grey?.map((item, i) => (
  //       <div key={i}>
  //         <Image
  //           src={item}
  //           layout='responsive'
  //           priority={i < 2}
  //           alt={reelInfo.title}
  //         />
  //       </div>
  //     ))}
  //     {reelInfo?.set.video && (
  //       <div>
  //         {reelInfo.set.video.slice(-3) === 'gif' ? (
  //           <Image
  //             src={reelInfo.set.video}
  //             layout='responsive'
  //             width={1920}
  //             height={1080}
  //             priority
  //             alt={reelInfo.title}
  //           />
  //         ) : (
  //           <video autoPlay muted>
  //             <source src={reelInfo.set.video} type='video/mp4' />
  //           </video>
  //         )}
  //       </div>
  //     )}
  //   </div>
  // );
}
