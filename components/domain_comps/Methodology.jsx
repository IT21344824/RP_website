import { websiteImages } from '@/config/iconConfig'
import Image from 'next/image'
import React from 'react'

const Methodology = () => {
    return (
        <div className='my-5'>
            <div className='flex justify-center items-start gap-10 flex-nowrap'>
                {/* Methodology */}
                <div className="w-[45%]">
                    <h2 className="text-center text-wrap text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-normal text-blue-500 hover:text-accent transition-all duration-500">
                        Methodology <span className="text-white ">Used by ScanHeritage</span>
                    </h2>



                    <div className='flex flex-col mt-3'>
                        <p className="text-white/60">
                            This research used a multi-disciplinary methodology integrating AI, computer vision, and mobile development. Data was collected from historical sources and processed for quality enhancement. Deep learning models were developed for object detection, Brahmi script OCR, architectural feature recognition, and 3D reconstruction. These components were deployed in a mobile application using React Native and a Flask backend to enable real-time, accessible archaeological data extraction.
                        </p>


                    </div>

                </div>

                {/* */}
                <div className="w-[45%]">

                    <Image
                        src={websiteImages.methodology_1.img}
                        alt={websiteImages.methodology_1.name}
                        width={500}
                        height={500}
                        layout="intrinsic"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* border */}
            <div className="w-full border-b border-white/60 mt-8"></div>
        </div>
    )
}

export default Methodology