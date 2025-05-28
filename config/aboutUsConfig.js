import Akidu_Social from "@/components/aboutUs_comps/Akidu_Social";
import Gihan_Social from "@/components/aboutUs_comps/Gihan_Social";
import JR_Social from "@/components/aboutUs_comps/JR_Social";
import Kushan_Social from "@/components/aboutUs_comps/Kushan_Social";

export const about_Us = [
    {
        num: '01',
        img: "/assets/images/aboutUs/super.jpg",
        title: 'Mr. Aruna Ishara Gamage',
        description: 'Lecturer, Computer Science and Software Engineering - Computing (FOC) | Supervisor',
        company: 'Department of Information Technology faculty of Computing Sri Lanka Institute of Information Technology',
        address: 'New Kandy Road, Malabe, Sri Lanka',
        email: "ishara.g@sliit.lk",
       
    },
    {
        num: '02',
        img: "/assets/images/aboutUs/co-super.jpg",
        title: 'Ms. Vindhya Kalapuge',
        description: 'Lecturer, Computer Science and Software Engineering - Computing (FOC) | Co-Supervisor',
        company: 'Department of Information Technology faculty of Computing Sri Lanka Institute of Information Technology',
        address: 'New Kandy Road, Malabe, Sri Lanka',
        email: "vindhya.k@sliit.lk"
    },
    {
        num: '03',
        img: "/assets/images/aboutUs/akidu.jpg",
        title: 'Ekanayake T.E.M.A.P.',
        description: 'Student',
        company: 'Department of Information Technology faculty of Computing Sri Lanka Institute of Information Technology',
        address: 'New Kandy Road, Malabe, Sri Lanka',
        email: "IT21344824@my.sliit.lk",
       links:<Akidu_Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                                />,
    },
    {
        num: '04',
        img: "/assets/images/aboutUs/jr.jpg",
        title: 'Jayawardhana J.R.K.B.',
        description: 'Student',
        company: 'Department of Information Technology faculty of Computing Sri Lanka Institute of Information Technology',
        address: 'New Kandy Road, Malabe, Sri Lanka',
        email: "IT21352294@my.sliit.lk",
       links:<JR_Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                                />,
    },
    {
        num: '05',
        img: "/assets/images/aboutUs/kushan.png",
        title: 'Ediriwickrama E.A.K.V.',
        description: 'Student',
        company: 'Department of Information Technology faculty of Computing Sri Lanka Institute of Information Technology',
        address: 'New Kandy Road, Malabe, Sri Lanka',
        email: "IT21273094@my.sliit.lk",
       links:<Kushan_Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                                />,
    },
    {
        num: '06',
        img: "/assets/images/aboutUs/gihan.png",
        title: 'Serasinghe G.P.G.Y.',
        description: 'Student',
        company: 'Department of Information Technology faculty of Computing Sri Lanka Institute of Information Technology',
        address: 'New Kandy Road, Malabe, Sri Lanka',
        email: "IT21360978@my.sliit.lk",
       links:<Gihan_Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border boder-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transitio-all duration-500"
                                />,
    },
];