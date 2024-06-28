import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"



function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:mongoDB,
            name:"MongoDB"
        },
        {
            id:2,
            logo:reactjs,
            name:"ReactJS"
        },
        {
            id:3,
            logo:nodejs,
            name:"NodeJS"
        },
        {
            id:4,
            logo:python,
            name:"Python"
        },
        {
            id:5,
            logo:java,
            name:"Java"
        },
        {
            id:6,
            logo:express,
            name:"Express"
        },
    ]
  return (
    <div name="PortFolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
    <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-6'>
            {
                cardItem.map(({id,logo,name}) =>(
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                <p className='px-2 text-gray-700'>Les projets consistent à créer et maintenir des sites web ou des applications web. </p>
                            </div>
                            <div className='px-6 py-4 space-x-3 justify-around'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'> Source code</button>
                            </div>



                    </div>


                ))
            }


        </div>
    </div>

    
    </div>
  );
}

export default Portfolio