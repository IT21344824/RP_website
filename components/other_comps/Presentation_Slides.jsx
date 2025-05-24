import React from 'react'
import { other_nav } from '@/config/otherConfig copy'
import { Button } from '../ui/button'

const Presentation_Slides = () => {
    return (
        <div>

            <div
                style={{ '--image-url': `url(${other_nav.presentation_Slides_hero.img})` }}
                className='h-96 w-full bg-[image:var(--image-url)] bg-cover bg-center rounded-lg'>
                <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg p-4">
                    <h1 className="text-white text-2xl font-semibold mb-4">Presentation Slides</h1>
                    <div className='flex flex-wrap justify-center items-center gap-4 w-full'>
                        <Button className="bg-red-800">Proposal presentation</Button>
                        <Button className="bg-red-800">Progress presentation 1</Button>
                        <Button className="bg-red-800">Progress presentation 2</Button>
                        <Button className="bg-red-800">Final presentation</Button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Presentation_Slides