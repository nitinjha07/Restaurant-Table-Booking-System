import React from 'react'
import data from '../data.json'
import NeonGradientCard from '../components/ui/NeonGradientCard'

// const PUBLIC_URL = "../../public"

const PopularDishes = () => {
  return (
    <div className='w-[100%] mx-auto text-white pt-10 bg-slate-900' id='popularDishes' >
        <h1 className='text-center text-4xl font-bold uppercase '>Hot Picks</h1>
        <div className='flex flex-wrap justify-between p-10 gap-6'>
            {
                data.hotPicks.sections.map((section) => (
                    <div className='w-[49%] flex flex-col items-center justify-between gap-4  p-4 mx-auto'>
                        <p className='font-semibold text-2xl uppercase'>{section.name}</p>
                        <div className='flex justify-between w-[100%]'>
                            {
                                section.items.map((item) => (
                                    <div className='flex flex-col items-center w-[50%] h-[26rem] '>
                                        <div className='w-[95%] h-[24rem] '>
                                        <NeonGradientCard className="items-center justify-center text-center ">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='w-full h-full object-cover rounded-2xl overflow-hidden hover:cursor-pointer'
                                            />
                                        </NeonGradientCard>


                                        </div>
                                        <p className='text-lg uppercase font-semibold text-center'>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PopularDishes