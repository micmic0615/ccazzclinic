function Doctor () {
    this.featured = {
        title: `Dr. Zuriel K. Tan \n M.D., F.P.S.C.S.`,
        subtitle: "Plastic, Cosmetic, and General Surgery",
        text: "Dr. Zuriel K. Tan is a cosmetic surgeon with more than 30 years of experience in the field. He is currently a consultant at Mary Johnston Hospital. He graduated Doctor of Medicine from UERMMMC and specialized in General Surgery in Mary Johnston Hospital, with sub-specialty in Plastic Cosmetic Surgery. Dr. Tan is a member of various organizations such as the Philippine Medical Association and Philippine Society for Cosmetic Surgery, Inc.",
        image: "/img/doctor_2.png",
    }

    this.tab_positions = [
        {
            title: "Current Position",
            list: [
                ["Consultant,",
                "Mary Johnston Hospital"]
            ]
        },

        {
            title: "Former Position",
            list: [
                ["Faculty Member,",
                "Pamantasan ng Lungsod ng Maynila College of Medicine"],

                ["Faculty Member,",
                "University of the East College of Dentistry"],

                ["Faculty Member,",
                "Martinez Memorial Hospital College of Physical Therapy"],

                ["President,",
                "Medical Staff Organization, Mary Johnston Hospital"]
            ]
        }
    ]

    this.icon_positions	= [
        ["B.S. Pre-Medicine",
        "University of the Philippines, Diliman"],

        ["Doctor of Medicine ",
        "University of the East Ramon Magsaysay \n Memorial Medical Center (UERMMMC)"],

        ["SPECIALTY : General Surgery",
        "Mary Johnston Hospital"],

        ["SUB-SPECIALTY : Plastic Cosmetic Surgery",
        "The Philippine Society for Cosmetic Surgery"],

        ["BOARD-CERTIFIED IN COSMETIC SURGERY",
        "(Philippine Board of Cosmetic Surgery)"],

        ["FELLOW : Philippine Society for Cosmetic Surgery"]
    ]

    this.logos = [
        {
            title: "Member Of",
            list: [
                ["/img/logos/ascs.png",
                "American Society of Cosmetic Surgery"],

                ["/img/logos/pscs.png",
                "Philippine Liposuction Society"],

                ["/img/logos/philmed.png",
                "Philippine Medical Association, Manila Chapter"],

                ["/img/logos/pscs.png",
                "Philippine Society for Cosmetic Surgery, Inc."],
            ]
        },
        {
            title: "Hospital Affiliations",
            list: [
                ["/img/logos/cmz.png",
                "Ciudad Medical Zamboanga"],

                ["/img/logos/delossantos.png",
                "Delos Santos Medical Center"],

                ["/img/logos/maryjohn.png",
                "Mary Johnston Hospital"],

                ["/img/logos/stluke.png",
                "St. Luke's Medical Center"],
            ]
        }
    ]

    this.state = {
        current_tab: this.tab_positions[0].title
    }
}

export default Doctor