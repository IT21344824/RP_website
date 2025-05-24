import { websiteImages } from '@/config/iconConfig'
import Image from 'next/image'
import React from 'react'

const Research_ProblemGap = () => {
    return (
        <div className='my-5'>
            <div className='flex justify-center items-start gap-10 flex-nowrap'>
                {/* Research_Problem */}
                <div className="max-w-[45%]">
                    <h2 className="text-center text-[42px] font-bold leading-none text-blue-500 hover:text-accent transition-all duration-500">
                        Research Problem
                    </h2>

                    <div className='flex flex-col '>
                        <p className="text-white/60">
                            How can a mobile application be developed to accurately detect, extract, and reconstruct historically and architecturally significant data—such as artifacts, inscriptions, and structures—from 2D images of archaeological objects, specifically from Sri Lanka’s Anuradhapura and Polonnaruwa kingdoms, using advanced AI techniques like object detection, OCR, and 3D model generation?
                        </p>

                        <Image
                            src={websiteImages.RProblem_1.img}
                            alt={websiteImages.RProblem_1.name}
                            width={500}
                            height={500}
                            layout="intrinsic"
                            className="w-full h-auto"
                        />
                    </div>

                </div>

                {/* Research Gap */}
                <div className="max-w-[45%]">
                    <h2 className="text-center text-[42px] font-bold leading-none text-blue-500 hover:text-accent transition-all duration-500">
                        Research Gap
                    </h2>
                    <p className="text-white/60">
                        Despite advancements in AI and computer vision, there is a lack of integrated mobile solutions for analyzing and preserving Sri Lankan archaeological data, particularly from the Anuradhapura and Polonnaruwa kingdoms. Existing tools for object detection, OCR for Brahmi script, architectural analysis, and 3D reconstruction are fragmented and not tailored for mobile use or local heritage. This creates a gap in delivering a unified, lightweight mobile application capable of real-time cultural data extraction and preservation.
                    </p>

                    <Image
                        src={websiteImages.Rgap_1.img}
                        alt={websiteImages.Rgap_1.name}
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

export default Research_ProblemGap
