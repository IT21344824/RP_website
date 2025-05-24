import React from 'react'

const Literature_Survey = () => {
    return (
        <div className='mt-5 mb-10'>
            <h2 className="text-[42px] font-bold leading-none text-blue-500 hover:text-accent transition-all duration-500">
                Literature Survey
            </h2>
            {/* description */}
            <p className="text-white/60 text-justify">The intersection of archaeology and artificial intelligence has led to significant advancements in how historical data is extracted, preserved, and analyzed. This literature review summarizes key research areas that form the foundation of the proposed mobile application, focusing on object detection, Brahmi script OCR, architectural feature analysis, and 3D reconstruction.

                <span className='text-white font-bold hover:text-green-500'> 1.</span> Historical Object Detection
                Deep learning models like YOLO and Faster R-CNN have proven effective in object recognition tasks, including heritage applications. CNN-based models can identify textures and patterns in ancient artifacts, though accuracy depends on high-quality datasets and preprocessing techniques. Studies emphasize the importance of image normalization, noise reduction, and transfer learning using architectures like MobileNetV2 to improve detection of culturally significant objects such as Muragala and Sandakadapahana.

                <span className='text-white font-bold hover:text-green-500'> 2.</span> Brahmi Script OCR and Data Retrieval
                Traditional OCR systems struggle with ancient scripts due to wear and variation. Deep learning has shown promise, with CNNs effectively recognizing Brahmi and ancient Sinhala characters when paired with grayscale conversion, normalization, and noise filtering. Researchers have also utilized image segmentation and adaptive learning techniques to enhance recognition accuracy, supporting the digitization of historical inscriptions.

                <span className='text-white font-bold hover:text-green-500'> 3.</span> Architectural Feature Detection
                Architectural elements such as arches and columns provide insight into ancient engineering. Deep learning methods like CNNs and segmentation models (e.g., U-Net) enable automated detection of these features. However, much of the research focuses on 2D image analysis, lacking integration with 3D structural context. Enhancing datasets and applying models like MobileNetV2 help in reliably classifying Sri Lankan architectural styles.

                <span className='text-white font-bold hover:text-green-500'> 4.</span> 3D Object Reconstruction
                3D reconstruction techniques such as photogrammetry and voxel-based modeling enable accurate digital replicas of artifacts. Prior research shows that deep learning and conditional GANs (CGANs) can effectively reconstruct 3D models from 2D images. For mobile deployment, lightweight and optimized models are essential, and this project builds on those advancements to offer real-time, interactive artifact visualization.

                While individual technologies have advanced significantly, few systems integrate all components into one mobile platform. This research addresses that gap, offering a unified solution for archaeologists, historians, and cultural conservationists—starting with Sri Lanka’s Anuradhapura and Polonnaruwa heritage sites.</p>
            {/* border */}
            <div className="w-full border-b border-white/60"></div>
        </div>
    )
}

export default Literature_Survey