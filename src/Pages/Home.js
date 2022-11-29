import React from 'react'
import { post } from '../Data/Data'
import Wada, { Msamachar1 } from '../Data/Wada'
import { trend } from '../Data/Wada';
import { Kada } from '../Data/Wada';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Msamachar } from '../Data/Wada';
import { NMsamachar } from '../Data/Wada';
import { Bichar } from '../Data/Wada';
import { Aartha } from '../Data/Wada';
import { Samaj } from '../Data/Wada';
import { Khel } from '../Data/Wada';
import { Aapradh } from '../Data/Wada';
import { Sampadik } from '../Data/Wada';
import { Rajneeti } from '../Data/Wada';
import { Aantar } from '../Data/Wada';
import { Prasan } from '../Data/Wada';
import { Gau } from '../Data/Wada';
import { Suchana } from '../Data/Wada';
import { Swastha } from '../Data/Wada';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';



export default function Home() {
  return (
    <>
   <div className='con py-5'>
    {post.map((a)=>(
  <article className='banner'>
    <div className='box'>
      
    <h1><Link to="/">{a.title}</Link></h1>
    <hr/>
   <img width="800" src={a.image} alt="hello"/>
   <div className='kaun'>
   </div>
   <div className='box py-3'>
    <div className='container'>
   <h6>{a.description}</h6>
   
   </div>
   </div>
   </div>

  </article>
    ))}
  
   </div>
   <article>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <h5 className='who'>एमालेको समानुपातिक सूचीमा को–को छन् ? (नामावलीसहित)’</h5>
               {Wada.map((b)=>(
                <div className='tom'>
                <div className='box'>
                  <div className='card1'>
               <img width="600" src={b.image}/>
                <p >{b.title}</p>
                </div>
                </div>
                </div>
               ))}
            </div>
            <div className='col-lg-6'>
              <h5 className='whom'>भर्खरै</h5>
              {Kada.map((c)=>(
                  <div className=' one'>
                    <div className='card box3'>
                      <div className='kkk'>

                  <img width="100" src={c.image}/>
                  <p>{c.title}</p>
                  </div>
                  </div>
                  </div>
                ))}
            </div>
        </div>
    </div>

   </article>
   <hr/>
   <section>
    <h5 className='whom  def'>ट्रेन्डिङ</h5>
    <div className='container'>
      <div className='card-body'>
        <div className='row two'>
         <Swiper
         // install Swiper modules
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
       >{trend.map((d)=>(
         <SwiperSlide> 
          <div class="card width: 18rem;">
          <img className='w-75 opx ' src={d.image} />  
          <h5>{d.title}</h5>
          <p>{d.description}</p>
          </div>
          </SwiperSlide>
             ))}
         </Swiper>
         </div>
   
    </div>
    </div>
   </section>
   <div className='xyz'>
   <hr/>
   </div>
   {/* mukhiya samachar */}
   <section>
    <h5 className='whom where'>मुख्य समाचार</h5>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          {Msamachar.map((e)=>(
            <div className='card box'>
              <img width="600" src={e.image}/>
              <h4 className='py-2'>{e.title}</h4>
              <p>{e.description}</p>
              </div>
             ))}
         

        </div>
        <div className='col-lg-6'>
          <div className='card ddd'>
            {NMsamachar.map((f)=>(
              <div className=' one'>
              <div className='card box3'>
                <div className='kkk mno'>

            <img width="100" src={f.image}/>
            <p>{f.title}</p>
            </div>
            </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   </section>
   <div className='bg-danger'>
   <hr/>
   </div>
   {/* bichar */}
   <h5 className='whom  def'>बिचार</h5>
   <div className='container'>
    <div className='row'>
      <div className='col-lg-6'>
        {Bichar.slice(0,1).map((g)=>(
          <div className='card-body '>
          <img width="750" src={g.image}/>
          <h2 className='py-2'>{g.title}</h2>
          <p>{g.description}</p>
          </div>
          ))}
          {Bichar.slice(1,3).map((h)=>(

            <div className=' card four mx-2 '>
               <img width="300" src={h.image}/>
          <h5 className='py-2 mx-2'>{h.title}</h5>
          <p>{h.description}</p>
              </div>
          ))}



      </div>
      <div className='col-lg-6'>
        {Bichar.slice(3,4).map((i)=>(
          <div className='container xxx'>
          <img width="65%" src={i.image}/>
          </div>
        ))}
        <div className='yyy'>
        <a _ngcontent-serverapp-c47 target="_blank" style={{width: '75%'}} href="https://youtu.be/ffyyHmKNoE8"><img _ngcontent-serverapp-c47 className="hidemobile  ng-lazyloaded" style={{width: '75%'}} alt="madan bhandari" title="madan bhandari" src="https://api.chakrapath.com/Content/AdImages/20212126435_madanbhandari.gif" /><img _ngcontent-serverapp-c47 className="showmobile ng-lazyloading" style={{width: '100%'}} alt="madan bhandari" title="madan bhandari" src="../../../assets/img/alternative-ad-img.jpg" /></a>

          </div>
      </div>
    </div>
   </div>
   <div className='bg-danger'>
   <hr/>
   </div>
   {/* aartha */}
   <h5 className='whom  def'>अर्थ</h5>
   <div className='container'>
    <div className='row'>
      
    {Aartha.map((j)=>(
      <div className='col-lg-4'>
        <div className='card www'>
      <img width="200" src={j.image}/>
      <h4>{j.title}</h4>
      <p>{j.description}</p>
      </div>
      </div>


    ))}
    
    </div>
   </div>
   <div className='bg-danger'>
   <hr/>
   </div>
   {/* samaj */}
   <h5 className='whom  def'>समाज</h5>
   <section>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          {Samaj.slice(0,1).map((k)=>(
            <div className='card box'>
              <img width="625" mb-5 src={k.image}/>
              <h5 className='py-2'>{k.title}</h5>
              <p>{k.description}</p>
              </div>
             ))}
         

        </div>
        <div className='col-lg-6'>
            {Samaj.slice(1,4).map((l)=>(
             <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-4">
    <div className="col-md-4">
      <img width="200" src={l.image}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{l.title}</h5>
        <p className="card-text">{l.description}</p>
      </div>
    </div></div></div>

               
            ))}
            </div>

         
      </div>
    </div>
   </section>
   <div className='bg-danger'>
   <hr/>
   </div>
   {/* khel */}
   <h5 className='whom  def'>खेल</h5>
   <div className='container'>
      <div className='card-body'>
        <div className='row two'>
         <Swiper
         // install Swiper modules
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
       >{Khel.map((m)=>(
         <SwiperSlide> 
          <div class="card width: 18rem;">
          <img className='w-75 opx ' src={m.image} />  
          <h5>{m.title}</h5>
          <p>{m.description}</p>
          </div>
          </SwiperSlide>
             ))}
         </Swiper>
         </div>
   
    </div>
    </div>
    <div className='bg-danger bcd'>
   <hr/>
   </div>
   {/* Apradh */}
   <h5 className='whom  def '>अपराध</h5>
<div className='container'>
  <div className='row'>
    <div className='col-lg-8'>
      <div className='col-lg-4'>
        {Aapradh.slice(0,1).map((n)=>(
         <div className="card" style={{width: '50rem'}}>
  <img src={n.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{n.title}</h5>
    <p className="card-text">{n.description}</p>
  </div>
</div>
))}
      </div>
      <div className='row my-2'>
        <div className='col-lg-2'>
          {Aapradh.slice(1,2).map((o)=>(
                 <div className="card" style={{width: '20rem'}}>
                 <img width="50" src={o.image} className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">{o.title}</h5>
                   <p className="card-text">{o.description}</p>
                 </div>
               </div>

          ))}
        </div>
        <div className='col-lg-2 qqq'>
          {Aapradh.slice(2,3).map((p)=>(
            <div className="card" style={{width: '20rem'}}>
            <img  src={p.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">{p.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    <div className='col-lg-4 vvv'>
    {Aapradh.slice(3,7).map((q)=>(
            <div className="card" style={{width: '20rem'}}>
            <img  src={q.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{q.title}</h5>
              <p className="card-text">{q.description}</p>
            </div>
          </div>
          ))}
    </div>
  </div>
</div>
<div className='bg-danger bcd'>
   <hr/>
   </div>
   {/* Sampadik */}
   <h5 className='whom lll '>सम्पादकीय</h5>
   <div className='container'>
      <div className='card-body'>
        <div className='row two'>
         <Swiper
         // install Swiper modules
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
       >{Sampadik.map((r)=>(
         <SwiperSlide> 
          <div class="card width: 18rem;">
          <img className='w-75 opx ' src={r.image} />  
          <h5>{r.title}</h5>
          <p>{r.description}</p>
          </div>
          </SwiperSlide>
             ))}
         </Swiper>
         </div>
   
    </div>
    </div>
    <div className='bg-danger bcd'>
   <hr/>
   </div>
   {/* Rajneeti */}
   <section>
   <h5 className='whom lll '>राजनीति</h5>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          {Rajneeti.slice(0,1).map((s)=>(
            <div className='card box'>
              <img width="625" mb-5 src={s.image}/>
              <h5 className='py-2'>{s.title}</h5>
              <p>{s.description}</p>
              </div>
             ))}
         

        </div>
        <div className='col-lg-6 py-2'>
            {Rajneeti.slice(1,4).map((t)=>(
             <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-4">
    <div className="col-md-4">
      <img width="200" src={t.image}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{t.title}</h5>
        <p className="card-text">{t.description}</p>
      </div>
    </div></div></div>

               
            ))}
            </div>

         
      </div>
    </div>
   </section>
   <div className='bg-danger '>
   <hr/>
   </div>
   {/* Aantar */}
   <h5 className='whom lll '>अन्तरवार्ता</h5>
   <div className='container '>
    <div className='row '>
      <div className='col-lg-4 '>
        {Aantar.slice(0,1).map((u)=>(
        <div className="card fff " style={{width: '18rem'}}>
  <img src={u.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{u.title}</h5>
    <p className="card-text">{u.description}</p>
  </div>
</div>


        ))}

      </div>
      <div className='col-lg-4 '>
        {Aantar.slice(1,2).map((v)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={v.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{v.title}</h5>
    <p className="card-text">{v.description}</p>
  </div>
</div>


        ))}

      </div>
      <div className='col-lg-4  '>
        {Aantar.slice(2,3).map((v)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={v.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{v.title}</h5>
    <p className="card-text">{v.description}</p>
  </div>
</div>
 ))}
</div>
</div>
</div>
<div className='bg-danger '>
   <hr/>
   </div>
   {/* Prasan */}
   <h5 className='whom lll '>प्रशासन</h5>
   <div className='container '>
   <div className="d-flex flex-row mb-3 ">
  <div className="p-2">
  {Prasan.slice(0,1).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    

  </div>
  <div className="p-2  vvv">
  {Prasan.slice(1,2).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    </div>
  <div className="p-2 px-4 iii">
  {Prasan.slice(2,3).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

  </div>
</div>

</div>
<div className='container jjj'>
  <div className='row '>
  <img width="100" src='https://api.chakrapath.com/Content/AdImages/20215933430_machapuchre.gif'/>
  </div>
</div>
<div className='bg-danger '>
   <hr/>
   </div>
   {/* Gau/nagar */}
   <h5 className='whom lll '>गाउँ / नगर</h5>
   <div className='container '>
   <div className="d-flex flex-row mb-3 ">
  <div className="p-2 ">
  {Gau.slice(0,1).map((w)=>(
        <div className="card ffg " style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    

  </div>
  <div className="p-2  vvv">
  {Gau.slice(1,2).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    </div>
  <div className="p-2 px-4 iii">
  {Gau.slice(2,3).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

  </div>
</div>

</div>
<div className='bg-danger '>
   <hr/>
   </div>
   {/* Suchana */}
   <h5 className='whom lll '>सूचना प्रविधि</h5>
   <div className='container '>
   <div className="d-flex flex-row mb-3 ">
  <div className="p-2 ">
  {Suchana.slice(0,1).map((w)=>(
        <div className="card ffg " style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    

  </div>
  <div className="p-2  vvv">
  {Suchana.slice(1,2).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    </div>
  <div className="p-2 px-4 iii">
  {Suchana.slice(2,3).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

  </div>
</div>

</div>
<div className='bg-danger '>
   <hr/>
   </div>
   <h5 className='whom lll '>स्वास्थ्य, शिक्षा</h5>
   {/* Swastha */}
   <div className='container '>
   <div className="d-flex flex-row mb-3 ">
  <div className="p-2 ">
  {Swastha.slice(0,1).map((w)=>(
        <div className="card ffg " style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    

  </div>
  <div className="p-2  vvv">
  {Swastha.slice(1,2).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

    </div>
  <div className="p-2 px-4 iii">
  {Swastha.slice(2,3).map((w)=>(
        <div className="card fff" style={{width: '18rem'}}>
  <img height="220vh" src={w.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{w.title}</h5>
    <p className="card-text">{w.description}</p>
  </div>
</div>
 ))}

  </div>
</div>

</div>
<div className='bg-danger '>
   <hr/>
   </div>
   {/* Gallery */}
   <h5 className='whom lll '>ग्यालरी</h5>
   <div className='container'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <img className='w-100' src={require('../assets/img/82.jpg')}/> <h2 className='height="20vh"'>कालीमाटीको माछा पसल र तरकारी बजारमा टोलीपरीक्षण महानगरको अनुगमन (तस्बिरहरु)</h2> </SwiperSlide>
      <SwiperSlide><img className='w-100' src={require('../assets/img/83.jpg')} /><h2 className='height="20vh"'>लोसपा केन्द्रीय सदस्य रोहित र तत्कालीन राजपा महासचिव यादव एमाले प्रवेश (तस्बीरहरु)</h2></SwiperSlide>
      <SwiperSlide><img className='w-100' src={require('../assets/img/84.jpg')} /><h2 className='height="20vh"'>दसैँको चहलपहल, बजारमा बढ्यो भिडभाड (फोटो फिचर)</h2></SwiperSlide>
      <SwiperSlide><img className='w-100' src={require('../assets/img/85.jpg')} /><h2 className='height="20vh"'>लघुवित्तिय संस्थाविरुद्ध काठमाडौंमा प्रदर्शन (फोटो फिचर)</h2></SwiperSlide>
      ...
    </Swiper>
    
    </div>
    <div className='container py-3 vvx'>
      <div className='row'>
        <div className='col-lg-4 text-dark'>
          <h5>नेपाली भाषाको यो पोर्टलले समाचार, विचार, मनोरञ्जन, खेल, विश्व, सूचना प्रविधि, भिडियो तथा जीवनका विभिन्न आयामका समाचार र विश्लेषणलाई समेट्छ।</h5>
        </div>
        <div className='col-lg-2 text-dark'>
          <h5>अध्यक्ष : डेगेन्द्र पाण्डे
प्रधान सम्पादक : तिला रुपा आचार्य​​​​​​​
सम्पर्क ठेगाना
</h5>
</div>
<div className='col-lg-2 text-danger'>
          <h5>सम्पर्क ठेगाना
राजमोती मिडिया प्रा.लि. द्वारा सञ्चालित चक्रपथ डटकमका लागि
ठेगाना : कार्यालय :अनामनगर, काठमाडौं
सम्पर्क : 9880160270
ईमेल : echakrapath@gmail.com
सूचना विभाग दर्ता नं: २१९९/०७७-७८
</h5>
        </div>

      </div>
    </div>
    <div className='container'>
    <div className='footer'>
      <div className='bvc text-white '>
        <p>© २००६-२०२० Chakrapath.Com सर्वाधिकार सुरक्षित</p>
      </div>
      </div>
    </div>

    

 
 
 
 
 </>


  )
}
