import React from 'react'
import { other_nav } from '@/config/otherConfig copy'
import { Button } from '../ui/button'

const Presentation_Slides = () => {

    const documents = [
        { name: "Proposal presentation", file: "Proposal_presentation_24-25J-092.pptx" },
        { name: "Progress presentation 1", file: "PP1 -24-25J-092 .pptx" },
        { name: "Progress presentation 2", file: "PP2-Final.pptx" },
        { name: "Final presentation", file: "Final_presentation.pptx" },
    ];
    return (
        <div>

            <div
                style={{ '--image-url': `url(${other_nav.presentation_Slides_hero.img})` }}
                className='h-96 w-full bg-[image:var(--image-url)] bg-cover bg-center rounded-lg'>
                <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg p-4">
                    <h1 className="text-white text-2xl font-semibold mb-4">Presentation Slides</h1>
                    <div className='flex flex-wrap justify-center gap-4'>
                        {documents.map((doc) => (
                            <a
                                key={doc.file}
                                href={`/assets/files/Research Documents/${doc.file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-red-800">
                                    {doc.name}
                                </Button>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Presentation_Slides