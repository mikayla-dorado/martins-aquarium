const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            species: "crappie",
            image: "http://rules.fish.wa.gov.au/species/image/72?thumbnailSize=large"

        },
        {
            name: "Bob",
            food:"aquatic invertebrates",
            size: 2,
            species: "Beta",
            image: "https://www.thesprucepets.com/thmb/7YGQUU_FYAd2XCNmnW_9_jKcDZU=/5762x0/filters:no_upscale():strip_icc()/siamese-fighting-fish-bettas-1378308-hero-f459084da1414308accde7e21001906c.jpg"

        },
        {
            name: "Marlin",
            food: "plankton",
            size: 4,
            species: "Clownfish",
            image: "https://missionblue.org/wp-content/uploads/2013/04/image2.jpeg"

        },
        {
            name: "Tina",
            food: "squid",
            size: 7,
            species: "Tuna",
            image: "https://www.msc.org/images/default-source/msc-english/content-banner/fish-to-eat/fish-to-eat-500-spotlight-style/albacore_tuna.tmb-thumb250.jpg?sfvrsn=9a594bff_1"

        },
        {
            name: "Gill",
            food: "algae",
            size: 6,
            species: "Angelfish",
            image: "https://s3-us-west-2.amazonaws.com/getgillsbucket/media/images/Dans-Fish-e-bay-4774-13324.jpg"

        },
        {
            name: "Sal",
            food: "smaller fish",
            size: 5,
            species: "Salmon",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Salmo_salar.jpg"

        },
        {
            name: "Perry",
            food: "aquatic animals",
            size: 18,
            species: "piranha",
            image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BpcmFuaGEtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ=="

        },
        {
            name: "Gus",
            food: "plankton",
            size: 1,
            species: "guppy",
            image: "https://www.liveaquaria.com/images/articles/aid_399_Koi_Cobra_Guppy.jpg"

        },
        {
            name: "Carl",
            food: "cephalopods",
            size: 3,
            species: "coral trout",
            image: "http://rules.fish.wa.gov.au/species/image/72?thumbnailSize=large"

        },
        {
            name: "Kit",
            food: "small fish",
            size: 3,
            species: "catfish",
            image: "https://www.in-fisherman.com/files/2013/06/How-To-Fish-For-Catfish.jpg"

        }
    ],
        tankTips: [
        {
            id: 1,
            title: "pH",
            description: "It's  important to maintain the pH balance in the tank by using the correct chemicals."
        },
        {
            id: 2,
            title: "Water temps",
            description: "Maintaning the correct temperature in the tank is vital to the fish health."
        },
        {
            id: 3,
            title: "Cleaning",
            description: "Make sure to clean the tank itself and any structures inside."
        },
        {
            id: 4,
            title: "Size matters",
            description: "The size of the tank you buy should be dependent on the size and type of fish you have, you can't have a big fish in a small tank!"
        }
        
        ],
        locations: [
            {
                id: 1,
               location: "Petco"
            },
            {
                id: 2,
                location: "Indian Ocean"
            },
            {
                id: 3,
                location: "Miami Florida"
            },
            {
                id: 4,
                location: "Amazon River"
            
            },
            {
                id: 5,
                location: "Kenai River"
            
            },
            {
                id: 6,
                location: "Orinoc River Basin"
            
            },
            {
                id: 7,
                location: "Barbados"
            
            },
            {
                id: 8,
                location: "Thailand"
            
            },
            {
                id: 9,
                location: "Lake of the Ozarks"
            
            },
            ]

}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}



export const gettankTips = () => {
    return database.tankTips.map(tankTips => ({...tankTips}))
}

export const getlocations = () => {
    return database.locations.map(locations => ({...locations}))
}