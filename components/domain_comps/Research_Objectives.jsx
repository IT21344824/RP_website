import React from 'react'

const Research_Objectives = () => {
    return (
        <div className='my-5'>
            <h2 className="text-center  ">
                Research Objectives
            </h2>

            <div className='flex justify-center items-start gap-10 flex-nowrap'>

                {/* Main Objective */}
                <div className="max-w-[45%]">
                    <h2 className="text-center text-[42px] font-bold leading-none text-blue-500 hover:text-accent transition-all duration-500">
                        Main Objective


                    </h2>

                    <div className='flex flex-col '>
                        <p className="text-white/60">
                            Develop a mobile application to scan archaeological objects, employing advanced image processing, machine learning, and
                            3D reconstruction techniques. The goal is to extract precise historical and architectural data, enhancing documentation
                            accuracy and supporting cultural heritage preservation and scholarly research
                        </p>


                    </div>

                </div>

                {/* Sub Objectives. */}
                <div className="max-w-[45%]">
                    <h2 className="text-center text-[42px] font-bold leading-none text-blue-500 hover:text-accent transition-all duration-500">
                        Sub Objectives
                    </h2>
                    <ul className="text-white/60 list-disc list-inside space-y-2">
                        <li>Convert 2D images into accurate 3D models of archaeological objects.</li>
                        <li>Build a machine learning model to detect and predict historical object features.</li>
                        <li>Create a mobile app to analyze architectural features using image processing.</li>
                        <li>Develop a mobile OCR system to translate Brahmi script to Sinhala and fetch metadata.</li>
                    </ul>

                </div>

            </div>

            {/* border */}
            <div className="w-full border-b border-white/60 mt-8"></div>
        </div>
    )
}

export default Research_Objectives