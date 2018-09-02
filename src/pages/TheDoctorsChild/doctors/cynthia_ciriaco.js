function Doctor () {
    this.featured = {

        

        title: `Dr. Cynthia P. Ciriaco-Tan \n M.D., F.P.D.S.`,
        subtitle: "Dermatology and Mohs Micrographic (Skin Cancer) and Dermatologic Surgery",
        text: `Dr. Cynthia P. Ciriaco-Tan is currently the Head of the Department of Dermatology of St. Luke’s Medical Center in Quezon City, and the Head of the Mohs Unit of the Dermatology Center of St. Luke’s Medical Center in Quezon City and Global City. She is also Clinical Associate Professor and Head of Dermatologic Surgery of the Section of Dermatology of UP-PGH, and Dermatologic Surgery Consultant of the Section of Dermatology of UERMMMC. She also does consultancy work in Mary Johnston Hospital. \n\n Dr. Ciriaco-Tan graduated from UP-PGH and finished her residency at the UP-PGH Section of Dermatology. She took her fellowship in Mohs Micrographic and Dermatologic Surgery at the Massachusetts Eye and Ear Infirmary of Harvard Medical School in Boston, Massachusetts, USA. `,
        image: "/img/doctor_1.png",
    }

    this.tab_positions = [
        {
            title: "Current Position",
            list: [
                ["Head, Department of Dermatology,",
                "St. Luke's Medical Center, Quezon City "],

                ["Head, MOHS Unit, Dermatology Center,",
                "St. Luke's Medical Center, Quezon City and Global City"],

                ["Clinical Associate Professor and Head of Dermatologic Surgery, Section of Dermatology, ",
                "UP-PGH"],

                ["Dermatologic Surgery Consultant, Section of Dermatology, ",
                "UERMMMC "],

                ["Consultant,",
                "St. Luke's Medical Center and Mary Johnston Hospital"],
            ]
        },

        {
            title: "Former Position",
            list: [
                ["Head, Dermatologic Surgery Committee,",
                "Philippine Dermatological Society "],

                ["Member, Board of Examiners, ",
                "Philippine Dermatological Society "],
            ]
        }
    ]

    this.icon_positions	= [
        ["/img/icons/ztan_1.png",
        "B.S. Biology, Magna Cum Laude",
        "University of the Philippines, Diliman"],

        ["/img/icons/ztan_2.png",
        "Doctor of Medicine (Top Ten Percentile)",
        "University of the Philippines -Philippine General Hospital (UP-PGH)"],

        ["/img/icons/ztan_3.png",
        "SPECIALTY : Dermatology (Chief Resident, Senior Year) ",
        "University of the Philippines - Philippine General Hospital (UP-PGH)"],

        ["/img/icons/ztan_4.png",
        "SUB-SPECIALTY : Mohs Micrographic Surgery and Dermatologic Surgery",
        "Harvard Medical School - Massachusetts Eye and Ear Infirmary"],

        ["/img/icons/ztan_5.png",
        "BOARD-CERTIFIED IN DERMATOLOGY",
        "(Top 1 in the Diplomate Examination, Philippine Board of Dermatology)"],

        ["/img/icons/ztan_6.png",
        "FELLOW :  Philippine Dermatological Society ",]
    ]

    this.logos = [
        {
            title: "Member Of",
            list: [
                ["/img/logos/aad.png",
                "American Academy of Dermatology"],

                ["/img/logos/up.png",
                "Mu Sigma Phi Sorority, UP College of Medicine"],

                ["/img/logos/pds.png",
                "Philippine Dermatological Society"],

                ["/img/logos/philmed.png",
                "Philippine Medical Association, Manila Chapter"],

                ["/img/logos/kappa.png",
                "Phi Kappa Phi International Honor Society"],

                ["/img/logos/sigma.png",
                "Phi Sigma Honor Society"],
            ]
        },
        {
            title: "Hospital Affiliations",
            list: [
                ["/img/logos/maryjohn.png",
                "Mary Johnston Hospital"],

                ["/img/logos/pgh.png",
                "Philippine General Hospital"],

                ["/img/logos/stluke.png",
                "St. Luke's Medical Center "],

                ["/img/logos/uerm.png",
                "University of the East Ramon Magsaysay Memorial Medical Center"],
            ]
        }
    ]

    this.state = {
        current_tab: this.tab_positions[0].title
    }
}

export default Doctor