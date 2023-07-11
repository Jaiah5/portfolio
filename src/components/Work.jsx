import React from 'react'
import Task from '../assets/task-list.png';
import Weather from '../assets/weather-api.png';
import Cover from '../assets/cover.png';
import LSC from '../assets/logoamend.png';
import ACCA from '../assets/acca.png';
import Halfords from '../assets/halfords.jpg';


const Work = () => {
  return (
    <>
  
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] mt-[250px] sm:mt-[80px]'>

    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-items-center w-full h-full '>
        <div className='pb-5'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFC5B9] '>WORK</p>
            <p className='py-6'>Check out some of my recent work</p>

        </div>

        {/* Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


        {/* CARD ITEM 1 START*/}

            <div style={{backgroundImage: `url(${Task})`}} className='shaddow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                
                  {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        TO-DO LIST PROJECT
                    </span>
                    <div className='pt-8 text-center'>
                    <a href="https://jaiah5.github.io/todo.github.io/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EXPLORE</button>

                            </a>

                    </div>
                </div>
            </div>
        
        {/* CARD ITEM 1 END*/}

         {/* CARD ITEM 2 START*/}
       
            <div style={{backgroundImage: `url(${Weather})`}} className='shaddow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                
                  {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        WEATHER API PROJECT
                    </span>
                    <div className='pt-8 text-center'>
                    <a href="https://jaiah5.github.io/weatherapp/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EXPLORE</button>

                            </a>

                    </div>
                </div>
            </div>
       
        {/* CARD ITEM 2 END*/}

             {/* CARD ITEM 3 START*/}
             
            <div style={{backgroundImage: `url(${Cover})`}} className='shaddow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>


                
                  {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-[1.4rem] font-bold text-white tracking-wider'>RESTORGANIC WELCOME JOURNEY
                    </span>

                    <div className='pt-8 text-center'>

                    <a href="https://jaiah5.github.io/restorganic/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EMAIL 1</button>

                            </a>

                    <a href="https://jaiah5.github.io/restorganic-email-2/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EMAIL 2</button>

                            </a>

                            <a href="https://jaiah5.github.io/restorganic-email-3/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EMAIL 3</button>

                            </a>

                            <a href="https://jaiah5.github.io/restorganic-email-4/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EMAIL 4</button>

                            </a>

                    </div>


                </div>
            </div>
       
        {/* CARD ITEM 3 END*/}

        
         {/* CARD ITEM 4 START*/}
         
            <div style={{backgroundImage: `url(${LSC})`}} className='shaddow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                
                  {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>LONDON SLEEP COMPANY CHRISTMAS EMAIL CAMPAIGN
                    </span>
                    <div className='pt-8 text-center'>
                    <a href="https://jaiah5.github.io/londonsleepcompany/" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EXPLORE</button>

                            </a>

                    </div>
                </div>
            </div>
       
        {/* CARD ITEM 4 END*/}

          {/* CARD ITEM 5 START*/}
          
            <div style={{backgroundImage: `url(${ACCA})`}} className='shaddow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                
                  {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>ACCA MEMBER VALUE CAMPAIGN
                    </span>
                    <div className='pt-8 text-center'>
                    <a href="https://codepen.io/Jaiah/pen/oNQxjWd" target='blank' className=''>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EXPLORE</button>

                            </a>

                    </div>
                </div>
            </div>
       
        {/* CARD ITEM 5 END*/}

        {/* CARD ITEM 6 START*/}
          
        <div style={{backgroundImage: `url(${Halfords})`}} className='shaddow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>HALFORDS POST PURCHASE EMAIL TRIGGER
                  </span>
                  <div className='pt-8 text-center'>
                  <a href="https://x.email.halfords.com/ats/msg.aspx?sg1=84bfa7f27603f514321d10d92eaf03f0" target='blank' className=''>
                          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>EXPLORE</button>

                          </a>

                  </div>
              </div>
          </div>
     
      {/* CARD ITEM 6 END*/}



    </div>

    </div>

    </div>

    </>
  );
};

export default Work;