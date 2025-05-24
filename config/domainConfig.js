
// methodology
export const methodology = {
    Identification: {
        title: "Identification Phase",
        description: "The Identification Phase is the foundational step in the application’s data processing pipeline. In this phase, the system detects and recognizes the type of archaeological input—whether it is a historical object, architectural feature, or an ancient script such as Brahmi. Using the device’s camera, the mobile application captures the image and pre-processes it through grayscale conversion, edge detection, and noise reduction techniques. Advanced deep learning models, such as CNNs and MobileNetV2, are then applied to classify the scanned object or inscription. This phase ensures that the input is properly categorized before further analysis and is crucial for enabling accurate metadata retrieval and contextual interpretation.",
    },
    Severity: {
        title: "Severity Checking Phase",
        description: "In the context of archaeological analysis, the Severity Checking Phase refers to evaluating the condition or complexity of the scanned object or feature. For example, this phase assesses whether an artifact is eroded, damaged, or incomplete—conditions that can affect model recognition and metadata accuracy. In the case of inscriptions, it checks for visibility, clarity of the characters, and surface degradation. This step allows the system to determine whether the image quality and object integrity are sufficient for immediate processing or if further enhancement or manual review is required. It also helps in prioritizing certain types of scans (e.g., rare or highly deteriorated artifacts) for detailed treatment or user alerts.",
    },
    InitialLeve : {
        title: "Initial Level Treatment Stage",
        description: "The Initial Level Treatment Stage addresses cases where the scanned artifact or inscription is in reasonably good condition and can be processed with standard techniques. At this level, the system proceeds to extract relevant data such as object classification, basic architectural details, or Brahmi character recognition. The metadata is retrieved from structured datasets (CSV for objects, MongoDB for scripts) and displayed to the user through the mobile interface. Users receive instant insights, including the object’s origin, historical period, usage, or translation into Sinhala if it is text-based. This phase ensures quick, informative results for common or well-preserved archaeological inputs.",
    },
    Medium_Extreme: {
        title: "Medium & Extreme Level Treatment Stage",
        description: "When the input image presents greater complexity—such as heavily worn inscriptions, fragmented objects, or obscure architectural features—the system moves into the Medium & Extreme Level Treatment Stage. Here, enhanced algorithms and cloud-based resources are activated. Medium-level cases might involve deeper CNN layer activation or multiple model passes to improve accuracy. For extreme cases, the app may offload processing to a Flask-based backend integrated with high-performance models (e.g., CGAN for 3D reconstruction or EfficientNet for OCR). This stage also includes the generation of detailed 3D models, advanced metadata inference, and possibly crowdsourced feedback features. The goal is to handle rare, complex, or degraded data inputs with precision, making the app robust and reliable across diverse field conditions.",
    },

};