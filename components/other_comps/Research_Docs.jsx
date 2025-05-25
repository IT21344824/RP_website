import React from 'react'
import { other_nav } from '@/config/otherConfig copy'
import { Button } from '../ui/button'

const Research_Docs = () => {
    const documents = [
        { name: "Project Charter", file: "IT4010-TAF-24-25J-092.pdf" },
        { name: "Proposal Document", file: "ProposalDocument.zip" },
        { name: "Status Documents", file: "StatusDocuments.zip" },
        { name: "Final Document", file: "FinalReports.zip" },
    ];

    return (
        <div>
            <div
                style={{ '--image-url': `url(${other_nav.Research_Documents_hero.img})` }}
                className='h-96 w-full bg-[image:var(--image-url)] bg-cover bg-center rounded-lg'>
                <div className="flex flex-col items-center w-full h-full bg-black bg-opacity-50 rounded-lg p-4 justify-center">
                    <h1 className="text-white text-2xl font-semibold mb-4">Research Documents</h1>

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
        </div>
    )
}

export default Research_Docs
