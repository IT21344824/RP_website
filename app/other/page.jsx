"use client";

import Presentation_Slides from "@/components/other_comps/Presentation_Slides";
import Research_Docs from "@/components/other_comps/Research_Docs";
import Milestones from "@/components/other_comps/Rp_Milestones";




const Other = () => {
    return (
        <div>
            <Milestones />

            <Research_Docs />
            {/* border */}
            <div className="w-full border-b border-white/60"></div>
            <Presentation_Slides />
        </div>
    );
};

export default Other;