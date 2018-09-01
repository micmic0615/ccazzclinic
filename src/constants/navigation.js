export default [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Our Services",
        link: "/our-services",
        children: [
            {
                folder: "OurServicesChild",
                name: "MOHS Surgery",
                link: "/mohs-surgery"
            },
           
        ]
    },
    {
        name: "The Doctors",
        link: "/the-doctors",
        children: [
            {
                folder: "TheDoctorsChild",
                name: "Dr. Cynthia P. Ciriaco-Tan",
                link: "/cynthia-p-ciriaco-tan"
            },
            {
                folder: "TheDoctorsChild",
                name: "Dr. Zuriel K. Tan",
                link: "/zuriel-k-tan"
            },
        ]
    },
    {
        name: "Contact Us",
        link: "/contact-us"
    }
]