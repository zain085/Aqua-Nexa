const animals = [
  // =========================================================
  // SHARKS & RAYS
  // =========================================================

  {
    name: "Whale Shark",
    scientificName: "Rhincodon typus",
    category: "Cartilaginous Fish",
    habitat: "Warm tropical and temperate oceans",
    image: "/marine-life/whale-shark.jpg",
    pexelsQuery: "whale shark underwater",
    depth: "Surface to around 1,900 m",
    lifespan: "70–100+ years",
    size: "Up to 32–40 feet",
    weight: "Up to 20,000 kg",
    speed: "Around 5 km/h",
    diet: "Plankton, krill, small fish and fish eggs",
    conservationStatus: "Endangered",
    description:
      "The whale shark is the largest fish in the world, yet it is a gentle filter feeder. It travels through warm oceans with its enormous mouth open, filtering tiny organisms from the water.",
    types:
      "Whale sharks are the only living species in the genus Rhincodon.",
    behavior:
      "Usually solitary, although several individuals may gather where food is abundant.",
    adaptations:
      "Its enormous mouth, filtering structures and powerful swimming body allow it to consume huge quantities of plankton-rich water.",
    interestingFact:
      "Every whale shark has a unique pattern of spots, much like a human fingerprint.",
  },

  {
    name: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    category: "Cartilaginous Fish",
    habitat: "Temperate and subtropical coastal waters",
    image: "/marine-life/great-white-shark.jpg",
    pexelsQuery: "great white shark underwater",
    depth: "Surface to more than 1,200 m",
    lifespan: "Around 40–70 years",
    size: "Up to around 20 feet",
    weight: "Up to 2,000+ kg",
    speed: "Up to around 40 km/h",
    diet: "Fish, rays, seals, sea lions and carrion",
    conservationStatus: "Vulnerable",
    description:
      "The great white shark is one of the ocean's most recognizable predators. Its streamlined body, powerful jaws and highly developed senses make it an exceptionally efficient hunter.",
    types:
      "The great white is a single species within the genus Carcharodon.",
    behavior:
      "Often solitary, although individuals may gather around productive feeding areas.",
    adaptations:
      "Rows of replaceable teeth, electroreception, an acute sense of smell and a streamlined body support its predatory lifestyle.",
    interestingFact:
      "Great white sharks can detect tiny concentrations of chemicals in seawater and sense electrical signals produced by living animals.",
  },

  {
    name: "Hammerhead Shark",
    scientificName: "Sphyrna spp.",
    category: "Cartilaginous Fish",
    habitat: "Tropical and temperate coastal waters",
    image: "/marine-life/hammerhead-shark.jpg",
    pexelsQuery: "hammerhead shark underwater",
    depth: "Surface to around 275 m depending on species",
    lifespan: "Around 20–30 years",
    size: "Up to around 20 feet depending on species",
    weight: "Up to several hundred kilograms",
    speed: "Up to around 30 km/h",
    diet: "Fish, squid, crustaceans and rays",
    conservationStatus: "Several species are threatened",
    description:
      "Hammerhead sharks are famous for their unusually broad, flattened heads. This distinctive shape provides an expanded sensory field while hunting.",
    types:
      "Major species include the great hammerhead, scalloped hammerhead and smooth hammerhead.",
    behavior:
      "Some species form large daytime groups and become more solitary while hunting.",
    adaptations:
      "Their wide heads provide increased sensory coverage and help them maneuver while searching the seafloor.",
    interestingFact:
      "The hammer-shaped head may help hammerheads detect prey more effectively.",
  },

  {
    name: "Tiger Shark",
    scientificName: "Galeocerdo cuvier",
    category: "Cartilaginous Fish",
    habitat: "Tropical and warm temperate oceans",
    image: "/marine-life/tiger-shark.jpg",
    pexelsQuery: "tiger shark underwater",
    depth: "Surface to around 350 m",
    lifespan: "Around 27–50 years",
    size: "Up to around 18 feet",
    weight: "Up to around 800 kg",
    speed: "Around 30–35 km/h",
    diet: "Fish, turtles, birds, squid, crustaceans and carrion",
    conservationStatus: "Near Threatened",
    description:
      "The tiger shark is a large, powerful predator recognized by dark vertical markings that are especially noticeable in younger individuals.",
    types:
      "The tiger shark is a single species within the genus Galeocerdo.",
    behavior:
      "Generally solitary and highly opportunistic while feeding.",
    adaptations:
      "Powerful jaws and specialized teeth allow it to cut through hard-shelled prey such as sea turtles.",
    interestingFact:
      "Tiger sharks have a reputation for consuming an unusually broad variety of food.",
  },

  {
    name: "Nurse Shark",
    scientificName: "Ginglymostoma cirratum",
    category: "Cartilaginous Fish",
    habitat: "Warm coastal waters, reefs and sandy seabeds",
    image: "/marine-life/nurse-shark.jpg",
    pexelsQuery: "nurse shark underwater",
    depth: "Shallow waters to around 75 m",
    lifespan: "Around 25 years or more",
    size: "Up to around 14 feet",
    weight: "Up to around 150 kg",
    speed: "Slow-moving",
    diet: "Fish, squid, crustaceans and mollusks",
    conservationStatus: "Vulnerable",
    description:
      "Nurse sharks are slow-moving bottom-dwelling sharks that spend much of their time resting on sandy or rocky seabeds.",
    types:
      "The nurse shark is a single species in the genus Ginglymostoma.",
    behavior:
      "Often rests in groups during the day and becomes more active at night.",
    adaptations:
      "Barbels around the mouth help locate prey on the seafloor.",
    interestingFact:
      "Nurse sharks can actively suck prey from hidden spaces using powerful mouth muscles.",
  },

  {
    name: "Leopard Shark",
    scientificName: "Triakis semifasciata",
    category: "Cartilaginous Fish",
    habitat: "Temperate coastal waters of the eastern Pacific",
    image: "/marine-life/leopard-shark.jpg",
    pexelsQuery: "leopard shark underwater",
    depth: "Shallow coastal waters to around 180 m",
    lifespan: "Around 20–30 years",
    size: "Up to around 7 feet",
    weight: "Up to around 18 kg",
    speed: "Moderate swimmer",
    diet: "Crabs, shrimp, fish, clams and worms",
    conservationStatus: "Least Concern",
    description:
      "Leopard sharks are slender coastal sharks named for the dark saddle-like markings and spots across their bodies.",
    types:
      "The leopard shark is a single species.",
    behavior:
      "Often found in groups in shallow bays and coastal habitats.",
    adaptations:
      "Their slender bodies allow them to navigate shallow estuaries and sandy habitats.",
    interestingFact:
      "Large groups of leopard sharks may gather in shallow coastal waters.",
  },

  {
    name: "Bull Shark",
    scientificName: "Carcharhinus leucas",
    category: "Cartilaginous Fish",
    habitat: "Warm coastal waters, estuaries and some freshwater systems",
    image: "/marine-life/bull-shark.jpg",
    pexelsQuery: "bull shark underwater",
    depth: "Surface to around 150 m",
    lifespan: "Around 16–30 years",
    size: "Up to around 11 feet",
    weight: "Up to around 300 kg",
    speed: "Up to around 40 km/h",
    diet: "Fish, rays, turtles, birds and other animals",
    conservationStatus: "Vulnerable",
    description:
      "Bull sharks are powerful coastal predators famous for their ability to tolerate both saltwater and freshwater environments.",
    types:
      "The bull shark is a single species within the genus Carcharhinus.",
    behavior:
      "Often solitary and highly adaptable.",
    adaptations:
      "Specialized kidneys help regulate salt and water balance when moving between marine and freshwater environments.",
    interestingFact:
      "Bull sharks have been recorded far upriver in freshwater systems.",
  },

  {
    name: "Manta Ray",
    scientificName: "Mobulidae",
    category: "Cartilaginous Fish",
    habitat: "Tropical and subtropical oceans",
    image: "/marine-life/manta-ray.jpg",
    pexelsQuery: "manta ray underwater",
    depth: "Surface to several hundred meters",
    lifespan: "Around 20–40 years",
    size: "Wingspan can exceed 20 feet",
    weight: "Up to around 1,500 kg",
    speed: "Up to around 35 km/h",
    diet: "Plankton and tiny marine organisms",
    conservationStatus: "Vulnerable",
    description:
      "Manta rays are enormous filter-feeding relatives of sharks and stingrays. Their graceful movements allow them to travel long distances while feeding on microscopic organisms.",
    types:
      "The best-known species are the giant oceanic manta ray and reef manta ray.",
    behavior:
      "They may travel alone or gather in feeding and cleaning groups.",
    adaptations:
      "Cephalic lobes help direct plankton-rich water toward the mouth.",
    interestingFact:
      "Despite their enormous size, manta rays are gentle filter feeders and lack a venomous tail spine.",
  },

  {
    name: "Stingray",
    scientificName: "Dasyatidae",
    category: "Cartilaginous Fish",
    habitat: "Coastal waters, reefs and sandy seabeds",
    image: "/marine-life/stingray.jpg",
    pexelsQuery: "stingray underwater ocean",
    depth: "Shallow coastal zones to deeper waters",
    lifespan: "5–25 years depending on species",
    size: "Several feet across depending on species",
    weight: "Varies greatly by species",
    speed: "Up to around 40–50 km/h in short bursts",
    diet: "Crustaceans, mollusks, worms and small fish",
    conservationStatus: "Varies by species",
    description:
      "Stingrays are flattened relatives of sharks that use their broad pectoral fins to glide through the water. Many species spend much of their time near the seafloor.",
    types:
      "Examples include southern stingrays, blue-spotted rays and other stingray species.",
    behavior:
      "Many species bury themselves in sand while resting or waiting for prey.",
    adaptations:
      "Electroreception helps detect prey hidden beneath sediment.",
    interestingFact:
      "Many rays can detect the weak electrical signals produced by animals buried beneath the sand.",
  },

  {
    name: "Eagle Ray",
    scientificName: "Aetobatus spp.",
    category: "Cartilaginous Fish",
    habitat: "Warm coastal waters and open tropical seas",
    image: "/marine-life/eagle-ray.jpg",
    pexelsQuery: "eagle ray underwater",
    depth: "Surface to around 80 m",
    lifespan: "Around 15–25 years depending on species",
    size: "Wingspan can exceed 8 feet",
    weight: "Up to hundreds of kilograms",
    speed: "Fast and graceful swimmers",
    diet: "Mollusks, crustaceans and worms",
    conservationStatus: "Varies by species",
    description:
      "Eagle rays are graceful rays with wing-like fins, pointed snouts and long tails.",
    types:
      "The group includes spotted eagle rays and several related species.",
    behavior:
      "Often travel alone or in groups through coastal waters.",
    adaptations:
      "Flattened bodies and broad fins provide efficient gliding movement.",
    interestingFact:
      "Eagle rays can form large groups while traveling through open water.",
  },

  // =========================================================
  // WHALES & DOLPHINS
  // =========================================================

  {
    name: "Blue Whale",
    scientificName: "Balaenoptera musculus",
    category: "Marine Mammal",
    habitat: "Open oceans worldwide",
    image: "/marine-life/blue-whale.jpg",
    pexelsQuery: "blue whale underwater ocean",
    depth: "Surface to several hundred meters",
    lifespan: "Around 70–90 years",
    size: "Up to around 90–100 feet",
    weight: "Up to around 150,000–180,000 kg",
    speed: "Around 20–50 km/h",
    diet: "Primarily krill",
    conservationStatus: "Endangered",
    description:
      "The blue whale is the largest known animal to have ever lived. Despite its enormous size, it feeds primarily on tiny krill using baleen plates.",
    types:
      "Several recognized subspecies and populations occur throughout the world's oceans.",
    behavior:
      "Often travels alone or in loose feeding groups.",
    adaptations:
      "Baleen plates allow the whale to filter enormous volumes of seawater for tiny prey.",
    interestingFact:
      "A blue whale's heart can weigh hundreds of kilograms.",
  },

  {
    name: "Humpback Whale",
    scientificName: "Megaptera novaeangliae",
    category: "Marine Mammal",
    habitat: "Oceans worldwide",
    image: "/marine-life/humpback-whale.jpg",
    pexelsQuery: "humpback whale underwater",
    depth: "Surface to several hundred meters",
    lifespan: "Around 45–100 years",
    size: "Up to around 60 feet",
    weight: "Up to around 40,000 kg",
    speed: "Around 5–25 km/h",
    diet: "Krill and small schooling fish",
    conservationStatus: "Least Concern",
    description:
      "Humpback whales are large baleen whales famous for their complex songs, spectacular breaches and long seasonal migrations.",
    types:
      "Different populations migrate between feeding and breeding areas around the world.",
    behavior:
      "Known for breaching, tail slapping and complex social interactions.",
    adaptations:
      "Long pectoral fins and expandable throat grooves help with maneuvering and feeding.",
    interestingFact:
      "Male humpback whales are famous for producing long, complex songs during breeding seasons.",
  },

  {
    name: "Sperm Whale",
    scientificName: "Physeter macrocephalus",
    category: "Marine Mammal",
    habitat: "Deep oceans worldwide",
    image: "/marine-life/sperm-whale.jpg",
    pexelsQuery: "sperm whale ocean",
    depth: "Can dive beyond 2,000 m",
    lifespan: "Around 60–70 years",
    size: "Up to around 60 feet",
    weight: "Up to around 50,000 kg",
    speed: "Around 10–35 km/h",
    diet: "Squid, fish and deep-sea prey",
    conservationStatus: "Vulnerable",
    description:
      "Sperm whales are deep-diving toothed whales with enormous heads and sophisticated sonar systems used to locate prey in darkness.",
    types:
      "The sperm whale is the only living species in the genus Physeter.",
    behavior:
      "Females and young typically live in social groups while adult males may travel alone.",
    adaptations:
      "Specialized echolocation and physiology allow extremely deep dives.",
    interestingFact:
      "Sperm whales are among the deepest-diving marine mammals.",
  },

  {
    name: "Fin Whale",
    scientificName: "Balaenoptera physalus",
    category: "Marine Mammal",
    habitat: "Temperate and polar oceans worldwide",
    image: "/marine-life/fin-whale.jpg",
    pexelsQuery: "fin whale underwater",
    depth: "Surface to several hundred meters",
    lifespan: "Around 80–90 years",
    size: "Up to around 85 feet",
    weight: "Up to around 80,000 kg",
    speed: "Up to around 40 km/h",
    diet: "Krill, squid and small fish",
    conservationStatus: "Vulnerable",
    description:
      "The fin whale is one of the largest animals on Earth and is known for its long, streamlined body and asymmetrical facial coloration.",
    types:
      "Several populations occur throughout the world's oceans.",
    behavior:
      "Often travels alone or in small groups.",
    adaptations:
      "A streamlined body allows surprisingly fast swimming for such a large animal.",
    interestingFact:
      "Fin whales are sometimes called the greyhounds of the sea because of their speed.",
  },

  {
    name: "Minke Whale",
    scientificName: "Balaenoptera acutorostrata",
    category: "Marine Mammal",
    habitat: "Temperate, tropical and polar oceans",
    image: "/marine-life/minke-whale.jpg",
    pexelsQuery: "minke whale ocean",
    depth: "Surface to several hundred meters",
    lifespan: "Around 40–50 years",
    size: "Up to around 35 feet",
    weight: "Up to around 10,000 kg",
    speed: "Up to around 30 km/h",
    diet: "Krill and small schooling fish",
    conservationStatus: "Least Concern",
    description:
      "Minke whales are relatively small baleen whales with streamlined bodies and pointed heads.",
    types:
      "Common and Antarctic minke whales are the best-known species.",
    behavior:
      "Often solitary or found in small feeding groups.",
    adaptations:
      "Baleen plates allow efficient filter feeding on small prey.",
    interestingFact:
      "Minke whales are among the smallest baleen whales commonly encountered.",
  },

  {
    name: "Orca",
    scientificName: "Orcinus orca",
    category: "Marine Mammal",
    habitat: "All major oceans",
    image: "/marine-life/orca.jpg",
    pexelsQuery: "orca killer whale ocean",
    depth: "Surface to more than 1,000 m",
    lifespan: "50–90 years",
    size: "23–32 feet",
    weight: "3,000–6,000 kg",
    speed: "Up to 56 km/h",
    diet: "Fish, squid, seals and other marine mammals",
    conservationStatus: "Varies by population",
    description:
      "The orca, or killer whale, is the largest member of the dolphin family. It is an apex predator with sophisticated hunting strategies and strong social bonds.",
    types:
      "Populations are commonly described as different ecotypes with distinct diets and behaviors.",
    behavior:
      "Lives in highly organized social groups, often centered around family relationships.",
    adaptations:
      "Advanced communication, echolocation, intelligence and coordinated hunting allow orcas to exploit a wide range of prey.",
    interestingFact:
      "Different orca populations can develop distinct vocal traditions and hunting cultures.",
  },

  {
    name: "Bottlenose Dolphin",
    scientificName: "Tursiops truncatus",
    category: "Marine Mammal",
    habitat: "Temperate and tropical coastal waters",
    image: "/marine-life/bottlenose-dolphin.jpg",
    pexelsQuery: "bottlenose dolphin underwater",
    depth: "Surface to several hundred meters",
    lifespan: "Around 40–60 years",
    size: "6–13 feet",
    weight: "150–650 kg",
    speed: "Up to around 35 km/h",
    diet: "Fish, squid and crustaceans",
    conservationStatus: "Least Concern",
    description:
      "Bottlenose dolphins are intelligent social marine mammals known for their curved dorsal fins, echolocation and complex communication.",
    types:
      "Common and Indo-Pacific bottlenose dolphins are recognized species.",
    behavior:
      "Highly social and commonly travel in pods.",
    adaptations:
      "Echolocation allows them to locate and identify objects underwater.",
    interestingFact:
      "Bottlenose dolphins can recognize themselves in mirrors, suggesting sophisticated self-awareness.",
  },

  {
    name: "Spinner Dolphin",
    scientificName: "Stenella longirostris",
    category: "Marine Mammal",
    habitat: "Warm tropical and subtropical oceans",
    image: "/marine-life/spinner-dolphin.jpg",
    pexelsQuery: "spinner dolphin jumping ocean",
    depth: "Surface to several hundred meters",
    lifespan: "Around 20 years",
    size: "5–7 feet",
    weight: "50–80 kg",
    speed: "Fast swimmers",
    diet: "Small fish and squid",
    conservationStatus: "Least Concern",
    description:
      "Spinner dolphins are small, energetic dolphins famous for leaping and spinning repeatedly above the water.",
    types:
      "Several geographic forms and populations occur in tropical oceans.",
    behavior:
      "Highly social and often travel in large pods.",
    adaptations:
      "Streamlined bodies and powerful tails support fast swimming and aerial spinning.",
    interestingFact:
      "Some spinner dolphins can rotate multiple times during a single leap.",
  },

  // =========================================================
  // ARCTIC & MARINE MAMMALS
  // =========================================================

  {
    name: "Beluga Whale",
    scientificName: "Delphinapterus leucas",
    category: "Marine Mammal",
    habitat: "Arctic and sub-Arctic waters",
    image: "/marine-life/beluga-whale.jpg",
    pexelsQuery: "beluga whale underwater",
    depth: "Surface to around 1,000 m",
    lifespan: "35–50 years",
    size: "11–18 feet",
    weight: "700–1,600 kg",
    speed: "Up to around 20–25 km/h",
    diet: "Fish, squid, crabs, shrimp and other marine organisms",
    conservationStatus: "Near Threatened",
    description:
      "Beluga whales are small Arctic whales recognized by their white coloration and rounded heads.",
    types:
      "The beluga is a single species with several geographically distinct populations.",
    behavior:
      "Highly social and often found in groups.",
    adaptations:
      "A flexible neck and thick insulating layer help belugas survive Arctic conditions.",
    interestingFact:
      "Belugas are sometimes called sea canaries because of their wide variety of vocal sounds.",
  },

  {
    name: "Sea Lion",
    scientificName: "Otariidae",
    category: "Marine Mammal",
    habitat: "Coastal waters and rocky shorelines",
    image: "/marine-life/sea-lion.jpg",
    pexelsQuery: "sea lion underwater",
    depth: "Surface to several hundred meters",
    lifespan: "15–30 years depending on species",
    size: "5–10 feet depending on species",
    weight: "50–1,000+ kg",
    speed: "Up to around 30 km/h",
    diet: "Fish, squid and crustaceans",
    conservationStatus: "Varies by species",
    description:
      "Sea lions are social pinnipeds with external ear flaps and powerful front flippers that allow them to move efficiently both in water and on land.",
    types:
      "Several species occur across the Pacific, Southern Ocean and other coastal regions.",
    behavior:
      "Highly social and often form large colonies.",
    adaptations:
      "Powerful flippers and streamlined bodies make them agile underwater hunters.",
    interestingFact:
      "Unlike true seals, sea lions can rotate their hind flippers forward and move more effectively on land.",
  },

  {
    name: "Harbor Seal",
    scientificName: "Phoca vitulina",
    category: "Marine Mammal",
    habitat: "Temperate and Arctic coastal waters",
    image: "/marine-life/harbor-seal.jpg",
    pexelsQuery: "harbor seal underwater",
    depth: "Surface to around 500 m",
    lifespan: "20–35 years",
    size: "4–6 feet",
    weight: "55–170 kg",
    speed: "Up to around 20 km/h",
    diet: "Fish, squid and crustaceans",
    conservationStatus: "Least Concern",
    description:
      "Harbor seals are widespread coastal seals recognized by their spotted coats and rounded heads.",
    types:
      "Several regional populations occur across the Northern Hemisphere.",
    behavior:
      "Rest on beaches, rocks and ice between feeding trips.",
    adaptations:
      "Sensitive whiskers help detect water movements created by prey.",
    interestingFact:
      "Harbor seals can sleep underwater and may remain submerged for extended periods.",
  },

  {
    name: "Walrus",
    scientificName: "Odobenus rosmarus",
    category: "Marine Mammal",
    habitat: "Arctic coastal waters and sea ice",
    image: "/marine-life/walrus.jpg",
    pexelsQuery: "walrus arctic ocean",
    depth: "Usually shallow coastal waters",
    lifespan: "Around 40 years",
    size: "Up to around 12 feet",
    weight: "Up to around 1,500 kg",
    speed: "Around 7–35 km/h depending on environment",
    diet: "Clams, worms, snails and other seafloor organisms",
    conservationStatus: "Vulnerable",
    description:
      "Walruses are large Arctic pinnipeds recognizable by their tusks and long whiskers.",
    types:
      "Atlantic and Pacific walruses are commonly recognized populations.",
    behavior:
      "Highly social and often gather in large groups on ice or shorelines.",
    adaptations:
      "Tusks assist with hauling onto ice, social displays and interacting with the environment.",
    interestingFact:
      "A walrus can use its highly sensitive whiskers to locate shellfish buried beneath sediment.",
  },

  {
    name: "Sea Otter",
    scientificName: "Enhydra lutris",
    category: "Marine Mammal",
    habitat: "Coastal waters of the North Pacific",
    image: "/marine-life/sea-otter.jpg",
    pexelsQuery: "sea otter floating ocean",
    depth: "Mostly shallow coastal waters",
    lifespan: "Around 15–25 years",
    size: "3–5 feet",
    weight: "14–45 kg",
    speed: "Up to around 9 km/h",
    diet: "Sea urchins, crabs, clams, snails and other invertebrates",
    conservationStatus: "Endangered",
    description:
      "Sea otters are marine mammals with exceptionally dense fur and a diet rich in marine invertebrates.",
    types:
      "Several regional populations occur along the North Pacific coast.",
    behavior:
      "Often float on their backs and may form groups called rafts.",
    adaptations:
      "Dense fur provides insulation in cold water, replacing the thick blubber found in many other marine mammals.",
    interestingFact:
      "Sea otters are famous for using stones as tools to break open hard-shelled prey.",
  },

  // =========================================================
  // MARINE REPTILES
  // =========================================================

  {
    name: "Green Sea Turtle",
    scientificName: "Chelonia mydas",
    category: "Marine Reptile",
    habitat: "Tropical and subtropical coastal waters",
    image: "/marine-life/green-sea-turtle.jpg",
    pexelsQuery: "green sea turtle underwater",
    depth: "Surface to around 150 m",
    lifespan: "60–70+ years",
    size: "Up to around 4 feet",
    weight: "Up to around 180 kg",
    speed: "Around 2–5 km/h normally",
    diet: "Seagrass and algae as adults",
    conservationStatus: "Endangered",
    description:
      "Green sea turtles are large marine reptiles that become primarily herbivorous as adults.",
    types:
      "Green sea turtles are a single species with geographically distinct populations.",
    behavior:
      "Migrate between feeding grounds and nesting beaches.",
    adaptations:
      "Powerful front flippers and streamlined shells support long ocean journeys.",
    interestingFact:
      "Their name refers to the greenish coloration of their body fat rather than their shell.",
  },

  {
    name: "Hawksbill Turtle",
    scientificName: "Eretmochelys imbricata",
    category: "Marine Reptile",
    habitat: "Tropical coral reefs and coastal waters",
    image: "/marine-life/hawksbill-turtle.jpg",
    pexelsQuery: "hawksbill sea turtle underwater",
    depth: "Shallow reefs to around 100 m",
    lifespan: "Several decades",
    size: "Up to around 3 feet",
    weight: "Up to around 80 kg",
    speed: "Moderate swimmer",
    diet: "Sponges, algae and small marine organisms",
    conservationStatus: "Critically Endangered",
    description:
      "Hawksbill turtles are reef-associated sea turtles recognized by their narrow beak-like mouths and beautifully patterned shells.",
    types:
      "The hawksbill turtle is a single species.",
    behavior:
      "Often closely associated with coral reef ecosystems.",
    adaptations:
      "Their narrow beak allows them to reach food hidden inside reef crevices.",
    interestingFact:
      "Hawksbill turtles play an important role in maintaining healthy coral reef ecosystems.",
  },

  {
    name: "Loggerhead Turtle",
    scientificName: "Caretta caretta",
    category: "Marine Reptile",
    habitat: "Temperate and tropical oceans",
    image: "/marine-life/loggerhead-turtle.jpg",
    pexelsQuery: "loggerhead sea turtle underwater",
    depth: "Surface to more than 200 m",
    lifespan: "50+ years",
    size: "Around 3 feet",
    weight: "70–180 kg",
    speed: "Around 1–2 km/h normally",
    diet: "Crabs, mollusks, jellyfish and other marine animals",
    conservationStatus: "Vulnerable",
    description:
      "Loggerhead turtles are large sea turtles with powerful jaws adapted for crushing hard-shelled prey.",
    types:
      "The loggerhead is a single species.",
    behavior:
      "Highly migratory and capable of crossing entire ocean basins.",
    adaptations:
      "Strong jaws allow them to crush crabs and mollusks.",
    interestingFact:
      "Loggerhead hatchlings use Earth's magnetic field to help navigate across the ocean.",
  },

  {
    name: "Leatherback Turtle",
    scientificName: "Dermochelys coriacea",
    category: "Marine Reptile",
    habitat: "Open oceans worldwide",
    image: "/marine-life/leatherback-turtle.jpg",
    pexelsQuery: "leatherback sea turtle ocean",
    depth: "Surface to more than 1,000 m",
    lifespan: "45+ years",
    size: "Up to around 7 feet",
    weight: "Up to around 900 kg",
    speed: "Around 1–10 km/h",
    diet: "Primarily jellyfish and soft-bodied organisms",
    conservationStatus: "Vulnerable",
    description:
      "Leatherback turtles are the largest living sea turtles and have flexible leathery shells rather than hard scales.",
    types:
      "The leatherback is a single species.",
    behavior:
      "Highly migratory and capable of traveling between tropical nesting beaches and cold feeding grounds.",
    adaptations:
      "Flexible shells and specialized physiology allow leatherbacks to tolerate colder waters than other sea turtles.",
    interestingFact:
      "Leatherbacks can dive deeper than most other sea turtles.",
  },

  // =========================================================
  // CEPHALOPODS
  // =========================================================

  {
    name: "Common Octopus",
    scientificName: "Octopus vulgaris",
    category: "Cephalopod",
    habitat: "Rocky reefs, coastal waters and seafloors",
    image: "/marine-life/octopus.jpg",
    pexelsQuery: "common octopus underwater",
    depth: "Shallow reefs to around 200 m",
    lifespan: "1–2 years",
    size: "Up to around 3 feet",
    weight: "Up to around 10 kg",
    speed: "Up to around 40 km/h in short bursts",
    diet: "Crabs, fish, mollusks and other marine animals",
    conservationStatus: "Least Concern",
    description:
      "Octopuses are soft-bodied cephalopods with eight arms, highly developed nervous systems and extraordinary abilities to change color, texture and body shape.",
    types:
      "The common octopus is one of many species within the order Octopoda.",
    behavior:
      "Many individuals are solitary and highly intelligent hunters.",
    adaptations:
      "Camouflage, jet propulsion, flexible bodies and distributed nervous systems make octopuses exceptional escape artists.",
    interestingFact:
      "An octopus has three hearts and blue blood.",
  },

  {
    name: "Giant Pacific Octopus",
    scientificName: "Enteroctopus dofleini",
    category: "Cephalopod",
    habitat: "North Pacific coastal waters",
    image: "/marine-life/giant-pacific-octopus.jpg",
    pexelsQuery: "giant pacific octopus underwater",
    depth: "Intertidal zones to around 2,000 m",
    lifespan: "Around 3–5 years",
    size: "Up to around 16 feet across",
    weight: "Up to around 50 kg or more",
    speed: "Short bursts using jet propulsion",
    diet: "Crabs, shrimp, fish and other marine animals",
    conservationStatus: "Least Concern",
    description:
      "The giant Pacific octopus is one of the largest octopus species and is found throughout the temperate North Pacific.",
    types:
      "The giant Pacific octopus is a single species.",
    behavior:
      "Usually solitary and highly territorial around dens.",
    adaptations:
      "Exceptional camouflage, flexible arms and powerful suction cups assist with hunting and defense.",
    interestingFact:
      "Its arms contain thousands of sensory structures that help it interact with the environment.",
  },

  {
    name: "Mimic Octopus",
    scientificName: "Thaumoctopus mimicus",
    category: "Cephalopod",
    habitat: "Tropical Indo-Pacific sandy seabeds",
    image: "/marine-life/mimic-octopus.jpg",
    pexelsQuery: "mimic octopus underwater",
    depth: "Shallow coastal waters",
    lifespan: "Around 1–2 years",
    size: "Up to around 2 feet",
    weight: "Generally less than 1 kg",
    speed: "Fast short-distance movement",
    diet: "Small fish and crustaceans",
    conservationStatus: "Data Deficient",
    description:
      "The mimic octopus is famous for changing its shape, color and behavior to resemble other marine animals.",
    types:
      "The mimic octopus is a single species.",
    behavior:
      "Uses visual mimicry when threatened or hunting.",
    adaptations:
      "Advanced camouflage and body control allow it to imitate other animals.",
    interestingFact:
      "It has been observed imitating animals such as lionfish, flatfish and sea snakes.",
  },

  {
    name: "Squid",
    scientificName: "Teuthida",
    category: "Cephalopod",
    habitat: "Marine environments worldwide",
    image: "/marine-life/squid.jpg",
    pexelsQuery: "squid underwater ocean",
    depth: "Surface waters to the deep sea",
    lifespan: "Several months to several years depending on species",
    size: "A few inches to more than 40 feet in giant species",
    weight: "From grams to hundreds of kilograms",
    speed: "Up to around 40 km/h in some species",
    diet: "Fish, crustaceans and other squid",
    conservationStatus: "Varies by species",
    description:
      "Squid are streamlined cephalopods built for fast movement through the water. They use jet propulsion, specialized eyes and tentacles to hunt and escape predators.",
    types:
      "Examples include giant squid, reef squid, European squid and many deep-sea species.",
    behavior:
      "Many species travel in schools and undertake vertical migrations.",
    adaptations:
      "Jet propulsion, large eyes, tentacles and chromatophores support hunting and camouflage.",
    interestingFact:
      "Some squid use bioluminescence to communicate, camouflage themselves or confuse predators.",
  },

  {
    name: "Humboldt Squid",
    scientificName: "Dosidicus gigas",
    category: "Cephalopod",
    habitat: "Eastern Pacific open waters",
    image: "/marine-life/humboldt-squid.jpg",
    pexelsQuery: "humboldt squid underwater",
    depth: "Surface to around 700 m",
    lifespan: "Around 1 year",
    size: "Up to around 6 feet",
    weight: "Up to around 50 kg",
    speed: "Fast swimmer",
    diet: "Fish, crustaceans and other squid",
    conservationStatus: "Least Concern",
    description:
      "Humboldt squid are large, fast-growing predators found in the eastern Pacific Ocean.",
    types:
      "The Humboldt squid is a single species.",
    behavior:
      "Often hunt cooperatively in large groups.",
    adaptations:
      "Rapid growth, strong tentacles and powerful jet propulsion support an active predatory lifestyle.",
    interestingFact:
      "Humboldt squid can change color rapidly using chromatophores.",
  },

  {
    name: "Cuttlefish",
    scientificName: "Sepiida",
    category: "Cephalopod",
    habitat: "Shallow coastal waters and continental shelves",
    image: "/marine-life/cuttlefish.jpg",
    pexelsQuery: "cuttlefish underwater",
    depth: "Shallow waters to around 600 m",
    lifespan: "Around 1–2 years",
    size: "Several inches to more than 2 feet",
    weight: "Varies by species",
    speed: "Moderate with rapid bursts",
    diet: "Crabs, shrimp and fish",
    conservationStatus: "Varies by species",
    description:
      "Cuttlefish are intelligent cephalopods famous for remarkable camouflage and their internal cuttlebone.",
    types:
      "Hundreds of cuttlefish species inhabit marine environments.",
    behavior:
      "Use visual displays during hunting, courtship and territorial interactions.",
    adaptations:
      "Chromatophores and specialized skin structures allow extremely rapid changes in appearance.",
    interestingFact:
      "Cuttlefish can change both color and skin texture within seconds.",
  },

  {
    name: "Nautilus",
    scientificName: "Nautilus spp.",
    category: "Cephalopod",
    habitat: "Deep tropical Pacific and Indian Ocean reefs",
    image: "/marine-life/nautilus.jpg",
    pexelsQuery: "nautilus shell underwater",
    depth: "Around 100–700 m",
    lifespan: "Around 15–20 years",
    size: "Shell up to around 20 cm",
    weight: "Around 1–2 kg",
    speed: "Slow-moving",
    diet: "Crustaceans, carrion and small marine organisms",
    conservationStatus: "Several populations face pressure",
    description:
      "Nautiluses are ancient cephalopods with external spiral shells. They are among the few living cephalopods that retain a visible shell.",
    types:
      "Several Nautilus species exist in Indo-Pacific waters.",
    behavior:
      "Mostly nocturnal and migrates vertically through the water column.",
    adaptations:
      "The chambered shell provides buoyancy control.",
    interestingFact:
      "Nautiluses have survived largely unchanged for hundreds of millions of years.",
  },

  // =========================================================
  // REEF FISH
  // =========================================================

  {
    name: "Clownfish",
    scientificName: "Amphiprioninae",
    category: "Bony Fish",
    habitat: "Tropical coral reefs and lagoons",
    image: "/marine-life/clownfish.jpg",
    pexelsQuery: "clownfish anemone underwater",
    depth: "Shallow reef environments",
    lifespan: "Around 6–10 years",
    size: "Around 4–7 inches",
    weight: "Generally less than 250 g",
    speed: "Short bursts",
    diet: "Algae, plankton and small food particles",
    conservationStatus: "Varies by species",
    description:
      "Clownfish are brightly colored reef fish famous for their close relationship with sea anemones.",
    types:
      "More than two dozen species occur in the clownfish group.",
    behavior:
      "Live in small social groups around host anemones.",
    adaptations:
      "A mucus layer protects them from the stinging cells of their host anemone.",
    interestingFact:
      "Clownfish can change sex as part of their social hierarchy.",
  },

  {
    name: "Angelfish",
    scientificName: "Pomacanthidae",
    category: "Bony Fish",
    habitat: "Tropical coral reefs",
    image: "/marine-life/angelfish.jpg",
    pexelsQuery: "marine angelfish coral reef",
    depth: "Shallow reefs to around 100 m",
    lifespan: "Around 10–20 years depending on species",
    size: "4–24 inches depending on species",
    weight: "Varies by species",
    speed: "Moderate swimmers",
    diet: "Algae, sponges, plankton and small invertebrates",
    conservationStatus: "Varies by species",
    description:
      "Marine angelfish are brightly colored reef fish known for their flattened bodies and elaborate patterns.",
    types:
      "The family Pomacanthidae contains many tropical reef species.",
    behavior:
      "Often territorial and closely associated with reef structures.",
    adaptations:
      "Flattened bodies allow them to maneuver between coral formations.",
    interestingFact:
      "Some angelfish species can change color dramatically as they mature.",
  },

  {
    name: "Lionfish",
    scientificName: "Pterois spp.",
    category: "Bony Fish",
    habitat: "Coral reefs and rocky marine habitats",
    image: "/marine-life/lionfish.jpg",
    pexelsQuery: "lionfish coral reef underwater",
    depth: "Shallow reefs to deeper waters",
    lifespan: "Around 10–15 years",
    size: "Up to around 18 inches",
    weight: "Around 1 kg",
    speed: "Slow to moderate",
    diet: "Small fish and crustaceans",
    conservationStatus: "Varies by species",
    description:
      "Lionfish are striking reef predators recognized by their fan-like fins and venomous spines.",
    types:
      "Several Pterois species occur throughout tropical marine environments.",
    behavior:
      "Often hover near reefs while ambushing prey.",
    adaptations:
      "Venomous dorsal spines provide powerful defense against predators.",
    interestingFact:
      "Lionfish have become invasive in parts of the western Atlantic and Caribbean.",
  },

  {
    name: "Pufferfish",
    scientificName: "Tetraodontidae",
    category: "Bony Fish",
    habitat: "Tropical and temperate marine environments",
    image: "/marine-life/pufferfish.jpg",
    pexelsQuery: "pufferfish underwater coral",
    depth: "Shallow reefs and coastal waters",
    lifespan: "Around 5–10 years depending on species",
    size: "Several inches to around 2 feet",
    weight: "Varies by species",
    speed: "Generally slow",
    diet: "Crustaceans, mollusks, algae and small organisms",
    conservationStatus: "Varies by species",
    description:
      "Pufferfish are distinctive fish capable of inflating their bodies when threatened.",
    types:
      "The family contains many marine and freshwater species.",
    behavior:
      "Usually slow-moving but capable of sudden defensive inflation.",
    adaptations:
      "Expandable stomachs and, in many species, toxic tissues provide powerful defenses.",
    interestingFact:
      "Some pufferfish species contain tetrodotoxin, one of the most potent natural toxins known.",
  },

  {
    name: "Moray Eel",
    scientificName: "Muraenidae",
    category: "Bony Fish",
    habitat: "Coral reefs, rocky crevices and tropical coastal waters",
    image: "/marine-life/moray-eel.jpg",
    pexelsQuery: "moray eel coral reef underwater",
    depth: "Shallow reefs to deeper waters",
    lifespan: "Around 10–30 years depending on species",
    size: "Several inches to more than 10 feet",
    weight: "Varies by species",
    speed: "Slow cruising with rapid strikes",
    diet: "Fish, octopuses, crustaceans and other marine animals",
    conservationStatus: "Varies by species",
    description:
      "Moray eels are elongated reef predators that spend much of their time hiding inside rocky crevices.",
    types:
      "Hundreds of species exist throughout tropical and temperate oceans.",
    behavior:
      "Often ambush predators that remain hidden until prey approaches.",
    adaptations:
      "A second set of jaws in the throat helps pull prey deeper into the mouth.",
    interestingFact:
      "Moray eels possess pharyngeal jaws that move forward to help swallow prey.",
  },

  {
    name: "Barracuda",
    scientificName: "Sphyraenidae",
    category: "Bony Fish",
    habitat: "Tropical and subtropical coastal waters",
    image: "/marine-life/barracuda.jpg",
    pexelsQuery: "barracuda underwater ocean",
    depth: "Surface waters to around 100 m",
    lifespan: "Around 10–15 years",
    size: "Up to around 6 feet",
    weight: "Up to around 25 kg",
    speed: "Up to around 35 km/h",
    diet: "Fish, squid and crustaceans",
    conservationStatus: "Varies by species",
    description:
      "Barracudas are streamlined predatory fish with elongated bodies and powerful jaws filled with sharp teeth.",
    types:
      "Several species inhabit tropical and subtropical oceans.",
    behavior:
      "Often wait motionless before accelerating rapidly toward prey.",
    adaptations:
      "Large jaws, sharp teeth and streamlined bodies support high-speed ambush hunting.",
    interestingFact:
      "Barracudas can accelerate quickly over short distances when attacking prey.",
  },

  {
    name: "Swordfish",
    scientificName: "Xiphias gladius",
    category: "Bony Fish",
    habitat: "Open oceans worldwide",
    image: "/marine-life/swordfish.jpg",
    pexelsQuery: "swordfish ocean underwater",
    depth: "Surface to more than 500 m",
    lifespan: "Around 9 years",
    size: "Up to around 15 feet",
    weight: "Up to around 650 kg",
    speed: "Up to around 90 km/h",
    diet: "Fish and squid",
    conservationStatus: "Least Concern",
    description:
      "Swordfish are powerful open-ocean predators named for their long flattened bills.",
    types:
      "Swordfish are a single species.",
    behavior:
      "Mostly solitary and highly migratory.",
    adaptations:
      "Their long bill can be used to slash through schools of prey.",
    interestingFact:
      "Specialized tissues near the eyes help warm the brain and eyes during deep dives.",
  },

  {
    name: "Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    category: "Bony Fish",
    habitat: "Temperate and subtropical open oceans",
    image: "/marine-life/bluefin-tuna.jpg",
    pexelsQuery: "bluefin tuna underwater",
    depth: "Surface to several hundred meters",
    lifespan: "Around 15–40 years",
    size: "Up to around 10 feet",
    weight: "Can exceed 600 kg",
    speed: "Up to around 70 km/h",
    diet: "Fish, squid and crustaceans",
    conservationStatus: "Least Concern",
    description:
      "Bluefin tuna are powerful open-ocean fish capable of long-distance migrations and sustained high-speed swimming.",
    types:
      "Several bluefin species occur across different oceans.",
    behavior:
      "Highly migratory and often travel in schools when young.",
    adaptations:
      "Specialized circulation helps maintain elevated body temperatures.",
    interestingFact:
      "Bluefin tuna are among the fastest and most powerful bony fish in the ocean.",
  },

  {
    name: "Mahi-Mahi",
    scientificName: "Coryphaena hippurus",
    category: "Bony Fish",
    habitat: "Warm tropical and subtropical open oceans",
    image: "/marine-life/mahi-mahi.jpg",
    pexelsQuery: "mahi mahi dolphin fish underwater",
    depth: "Surface to around 85 m",
    lifespan: "Around 5 years",
    size: "Up to around 7 feet",
    weight: "Up to around 40 kg",
    speed: "Up to around 90 km/h",
    diet: "Small fish, squid and crustaceans",
    conservationStatus: "Least Concern",
    description:
      "Mahi-mahi are brilliantly colored fast-swimming predators that inhabit warm open waters.",
    types:
      "The common dolphinfish is one of the best-known species.",
    behavior:
      "Often travel in small groups beneath floating objects.",
    adaptations:
      "Streamlined bodies and large dorsal fins support rapid swimming.",
    interestingFact:
      "Mahi-mahi can change color dramatically when excited or stressed.",
  },

  {
    name: "Parrotfish",
    scientificName: "Scaridae",
    category: "Bony Fish",
    habitat: "Tropical coral reefs",
    image: "/marine-life/parrotfish.jpg",
    pexelsQuery: "parrotfish coral reef underwater",
    depth: "Shallow reefs to around 40 m",
    lifespan: "Around 5–20 years depending on species",
    size: "Around 1–4 feet",
    weight: "Varies by species",
    speed: "Moderate swimmer",
    diet: "Algae growing on coral and rock",
    conservationStatus: "Varies by species",
    description:
      "Parrotfish are colorful reef fish named for their fused teeth, which resemble a parrot's beak.",
    types:
      "Numerous species inhabit tropical reefs.",
    behavior:
      "Spend much of their time grazing on algae-covered reef surfaces.",
    adaptations:
      "Strong beak-like teeth allow them to scrape algae from hard surfaces.",
    interestingFact:
      "Parrotfish contribute to the creation of tropical beach sand by processing coral material.",
  },

  {
    name: "Triggerfish",
    scientificName: "Balistidae",
    category: "Bony Fish",
    habitat: "Tropical coral reefs and rocky marine habitats",
    image: "/marine-life/triggerfish.jpg",
    pexelsQuery: "triggerfish coral reef underwater",
    depth: "Shallow reefs to around 100 m",
    lifespan: "Around 5–15 years depending on species",
    size: "Around 1–3 feet",
    weight: "Varies by species",
    speed: "Moderate swimmer",
    diet: "Crustaceans, mollusks, sea urchins and small organisms",
    conservationStatus: "Varies by species",
    description:
      "Triggerfish are robust reef fish recognized by their compressed bodies and strong jaws.",
    types:
      "Many colorful species inhabit tropical reefs.",
    behavior:
      "Some species aggressively defend feeding and nesting territories.",
    adaptations:
      "A specialized dorsal spine can lock upright for defense.",
    interestingFact:
      "Titan triggerfish are capable of aggressively defending large nesting territories.",
  },

  {
    name: "Butterflyfish",
    scientificName: "Chaetodontidae",
    category: "Bony Fish",
    habitat: "Tropical coral reefs",
    image: "/marine-life/butterflyfish.jpg",
    pexelsQuery: "butterflyfish coral reef underwater",
    depth: "Shallow reefs to around 50 m",
    lifespan: "Around 5–10 years",
    size: "4–8 inches",
    weight: "Generally small",
    speed: "Moderate swimmer",
    diet: "Coral polyps, algae and small invertebrates",
    conservationStatus: "Varies by species",
    description:
      "Butterflyfish are brightly patterned reef fish known for their thin bodies and delicate snouts.",
    types:
      "More than 100 species occur in tropical and subtropical waters.",
    behavior:
      "Many species form pairs and remain closely associated with reefs.",
    adaptations:
      "Narrow mouths help them pick food from coral crevices.",
    interestingFact:
      "Some butterflyfish species form long-term monogamous pairs.",
  },

  {
    name: "Surgeonfish",
    scientificName: "Acanthuridae",
    category: "Bony Fish",
    habitat: "Tropical coral reefs",
    image: "/marine-life/surgeonfish.jpg",
    pexelsQuery: "surgeonfish coral reef underwater",
    depth: "Shallow reefs to around 100 m",
    lifespan: "Around 10–20 years depending on species",
    size: "Around 6–16 inches",
    weight: "Varies by species",
    speed: "Fast reef swimmer",
    diet: "Algae and plant material",
    conservationStatus: "Varies by species",
    description:
      "Surgeonfish are colorful reef fish named for the sharp spines located near the base of their tails.",
    types:
      "The family includes tangs, unicornfish and surgeonfish.",
    behavior:
      "Often travel in schools while grazing on algae.",
    adaptations:
      "Tail spines provide an effective defensive weapon.",
    interestingFact:
      "Surgeonfish help control algae growth on coral reefs.",
  },

  {
    name: "Grouper",
    scientificName: "Epinephelinae",
    category: "Bony Fish",
    habitat: "Coral reefs, rocky reefs and coastal waters",
    image: "/marine-life/grouper.jpg",
    pexelsQuery: "grouper coral reef underwater",
    depth: "Shallow reefs to several hundred meters",
    lifespan: "Several decades in some species",
    size: "1–8 feet depending on species",
    weight: "Several kilograms to hundreds of kilograms",
    speed: "Short bursts",
    diet: "Fish, crustaceans and other marine animals",
    conservationStatus: "Varies by species",
    description:
      "Groupers are large reef predators with powerful mouths and stout bodies.",
    types:
      "Many grouper species inhabit tropical and subtropical waters.",
    behavior:
      "Often ambush prey from reef crevices.",
    adaptations:
      "Large mouths generate strong suction for capturing prey.",
    interestingFact:
      "Some grouper species can change sex during their lives.",
  },

  {
    name: "Seahorse",
    scientificName: "Hippocampus spp.",
    category: "Bony Fish",
    habitat: "Seagrass beds, mangroves and shallow reefs",
    image: "/marine-life/seahorse.jpg",
    pexelsQuery: "seahorse underwater seagrass",
    depth: "Shallow coastal waters",
    lifespan: "Around 1–5 years depending on species",
    size: "Less than 1 inch to around 14 inches",
    weight: "Very light-bodied",
    speed: "Slow swimmer",
    diet: "Tiny crustaceans and plankton",
    conservationStatus: "Varies by species",
    description:
      "Seahorses are unusual fish with upright bodies, curled tails and horse-like heads.",
    types:
      "Dozens of Hippocampus species occur in marine habitats worldwide.",
    behavior:
      "Often anchor themselves to vegetation using their prehensile tails.",
    adaptations:
      "Their camouflage and independently moving eyes help them hunt tiny prey.",
    interestingFact:
      "Male seahorses carry developing young in a specialized brood pouch.",
  },

  {
    name: "Flying Fish",
    scientificName: "Exocoetidae",
    category: "Bony Fish",
    habitat: "Warm open oceans",
    image: "/marine-life/flying-fish.jpg",
    pexelsQuery: "flying fish ocean",
    depth: "Near-surface waters",
    lifespan: "Around 2–5 years depending on species",
    size: "Up to around 18 inches",
    weight: "Generally light-bodied",
    speed: "Can reach around 60 km/h during gliding launches",
    diet: "Plankton and small marine organisms",
    conservationStatus: "Varies by species",
    description:
      "Flying fish are open-ocean fish capable of launching from the water and gliding through the air.",
    types:
      "Many species occur throughout tropical and subtropical oceans.",
    behavior:
      "Use aerial gliding to escape predators.",
    adaptations:
      "Large wing-like fins allow them to glide above the water.",
    interestingFact:
      "Some flying fish can remain airborne for hundreds of meters during a single glide.",
  },

  // =========================================================
  // CRUSTACEANS
  // =========================================================

  {
    name: "Blue Crab",
    scientificName: "Callinectes sapidus",
    category: "Crustacean",
    habitat: "Estuaries, coastal waters and shallow bays",
    image: "/marine-life/blue-crab.jpg",
    pexelsQuery: "blue crab underwater",
    depth: "Shallow coastal waters",
    lifespan: "Around 3 years",
    size: "Up to around 9 inches across",
    weight: "Up to around 1 kg",
    speed: "Fast sideways movement",
    diet: "Fish, mollusks, plants and detritus",
    conservationStatus: "Varies by region",
    description:
      "Blue crabs are active coastal crustaceans recognized by their blue-green shell and powerful claws.",
    types:
      "The blue crab is a single species.",
    behavior:
      "Often burrow into sediment or hide among vegetation.",
    adaptations:
      "Strong claws and swimming legs make them effective coastal predators and scavengers.",
    interestingFact:
      "Their swimming legs allow them to move surprisingly quickly through shallow water.",
  },

  {
    name: "King Crab",
    scientificName: "Lithodidae",
    category: "Crustacean",
    habitat: "Cold northern marine environments",
    image: "/marine-life/king-crab.jpg",
    pexelsQuery: "king crab underwater",
    depth: "Shallow waters to more than 1,000 m",
    lifespan: "Up to several decades",
    size: "Leg span can exceed 5 feet",
    weight: "Can exceed 10 kg",
    speed: "Slow to moderate",
    diet: "Mollusks, worms, fish and carrion",
    conservationStatus: "Varies by species",
    description:
      "King crabs are large bottom-dwelling crustaceans found mainly in cold marine environments.",
    types:
      "Several species are known, including red king crabs.",
    behavior:
      "Walk across the seafloor and forage for a wide range of food.",
    adaptations:
      "Heavy shells and strong legs provide protection and mobility.",
    interestingFact:
      "Some king crabs have extraordinarily long leg spans compared with their body size.",
  },

  {
    name: "Lobster",
    scientificName: "Nephropidae",
    category: "Crustacean",
    habitat: "Rocky seabeds and coastal marine environments",
    image: "/marine-life/lobster.jpg",
    pexelsQuery: "lobster underwater ocean",
    depth: "Shallow waters to several hundred meters",
    lifespan: "Several decades in some species",
    size: "Up to several feet",
    weight: "Can exceed 20 kg in exceptional individuals",
    speed: "Fast backward escape movements",
    diet: "Fish, mollusks, worms, algae and carrion",
    conservationStatus: "Varies by species",
    description:
      "Lobsters are large marine crustaceans protected by hard exoskeletons and equipped with powerful claws.",
    types:
      "Major groups include clawed lobsters and spiny lobsters.",
    behavior:
      "Mostly nocturnal and often shelter in rocky crevices.",
    adaptations:
      "Hard exoskeletons, claws and sensitive antennae help them survive and locate food.",
    interestingFact:
      "Lobsters continue growing throughout their lives and must periodically molt their shells.",
  },

  {
    name: "Mantis Shrimp",
    scientificName: "Stomatopoda",
    category: "Crustacean",
    habitat: "Tropical and subtropical coastal waters",
    image: "/marine-life/mantis-shrimp.jpg",
    pexelsQuery: "mantis shrimp underwater",
    depth: "Shallow reefs to around 200 m",
    lifespan: "Around 3–6 years",
    size: "A few inches to around 18 inches",
    weight: "Varies by species",
    speed: "Very fast striking appendages",
    diet: "Crabs, fish, mollusks and other prey",
    conservationStatus: "Varies by species",
    description:
      "Mantis shrimp are colorful marine crustaceans famous for extraordinary eyesight and extremely powerful striking appendages.",
    types:
      "Hundreds of species exist in tropical and subtropical oceans.",
    behavior:
      "Many species live in burrows and aggressively defend their territories.",
    adaptations:
      "Powerful raptorial appendages can deliver extremely rapid strikes.",
    interestingFact:
      "Mantis shrimp have some of the most complex visual systems known in the animal kingdom.",
  },

  {
    name: "Cleaner Shrimp",
    scientificName: "Lysmata spp.",
    category: "Crustacean",
    habitat: "Tropical coral reefs",
    image: "/marine-life/cleaner-shrimp.jpg",
    pexelsQuery: "cleaner shrimp coral reef underwater",
    depth: "Shallow reefs to around 50 m",
    lifespan: "Around 1–3 years",
    size: "Around 1–3 inches",
    weight: "Very light-bodied",
    speed: "Quick movements",
    diet: "Parasites, dead tissue and food particles",
    conservationStatus: "Varies by species",
    description:
      "Cleaner shrimp are small reef crustaceans that remove parasites and dead tissue from larger marine animals.",
    types:
      "Several cleaner shrimp species occur in tropical reefs.",
    behavior:
      "Operate cleaning stations where fish visit to be cleaned.",
    adaptations:
      "Long antennae and specialized feeding appendages help them remove parasites.",
    interestingFact:
      "Some reef fish actively visit cleaner shrimp stations and remain still while being cleaned.",
  },

  {
    name: "Hermit Crab",
    scientificName: "Paguroidea",
    category: "Crustacean",
    habitat: "Rocky shores, reefs and coastal waters",
    image: "/marine-life/hermit-crab.jpg",
    pexelsQuery: "hermit crab ocean",
    depth: "Intertidal zones to deeper waters",
    lifespan: "Several years depending on species",
    size: "Less than 1 inch to several inches",
    weight: "Varies by species",
    speed: "Slow to moderate",
    diet: "Algae, detritus, carrion and small organisms",
    conservationStatus: "Varies by species",
    description:
      "Hermit crabs protect their soft abdomens by occupying empty shells left behind by other animals.",
    types:
      "Hundreds of species occur in marine and terrestrial habitats.",
    behavior:
      "Search for increasingly larger shells as they grow.",
    adaptations:
      "Using shells provides protection for their vulnerable abdomen.",
    interestingFact:
      "Hermit crabs may compete intensely for desirable shells.",
  },

  // =========================================================
  // CNIDARIANS & OTHER INVERTEBRATES
  // =========================================================

  {
    name: "Moon Jellyfish",
    scientificName: "Aurelia spp.",
    category: "Cnidarian",
    habitat: "Coastal oceans and sheltered bays",
    image: "/marine-life/moon-jellyfish.jpg",
    pexelsQuery: "moon jellyfish underwater",
    depth: "Near-surface coastal waters",
    lifespan: "Several months to around a year",
    size: "Usually 6–12 inches across",
    weight: "Light-bodied",
    speed: "Mostly carried by currents",
    diet: "Plankton and tiny marine organisms",
    conservationStatus: "Varies by species",
    description:
      "Moon jellyfish are translucent jellyfish commonly recognized by four visible horseshoe-shaped reproductive structures.",
    types:
      "Several Aurelia species exist.",
    behavior:
      "Pulse their bells while drifting with ocean currents.",
    adaptations:
      "Stinging cells allow them to capture tiny prey.",
    interestingFact:
      "Moon jellyfish are commonly displayed in aquariums because of their graceful movement.",
  },

  {
    name: "Box Jellyfish",
    scientificName: "Cubozoa",
    category: "Cnidarian",
    habitat: "Warm tropical coastal waters",
    image: "/marine-life/box-jellyfish.jpg",
    pexelsQuery: "box jellyfish underwater",
    depth: "Near-surface coastal waters",
    lifespan: "Around one year depending on species",
    size: "Several inches to more than 1 foot",
    weight: "Light-bodied",
    speed: "Relatively active swimmer for a jellyfish",
    diet: "Small fish and crustaceans",
    conservationStatus: "Varies by species",
    description:
      "Box jellyfish have cube-shaped bells and specialized sensory structures that help them actively navigate through coastal waters.",
    types:
      "Several dozen species are recognized.",
    behavior:
      "Can actively swim rather than simply drifting with currents.",
    adaptations:
      "Complex eyes and powerful stinging cells help them hunt and avoid obstacles.",
    interestingFact:
      "Some box jellyfish have sophisticated visual systems despite lacking a centralized brain.",
  },

  {
    name: "Sea Anemone",
    scientificName: "Actiniaria",
    category: "Cnidarian",
    habitat: "Rocky shores, coral reefs and coastal seabeds",
    image: "/marine-life/sea-anemone.jpg",
    pexelsQuery: "sea anemone coral reef underwater",
    depth: "Intertidal zones to deeper reefs",
    lifespan: "Several decades in some species",
    size: "A few centimeters to more than 1 meter",
    weight: "Varies by species",
    speed: "Mostly stationary",
    diet: "Small fish, crustaceans and plankton",
    conservationStatus: "Varies by species",
    description:
      "Sea anemones are colorful relatives of corals and jellyfish that attach themselves to rocks and other surfaces.",
    types:
      "Hundreds of species occur in marine environments worldwide.",
    behavior:
      "Usually stationary but some species can slowly move across surfaces.",
    adaptations:
      "Stinging tentacles capture prey and provide defense.",
    interestingFact:
      "Some sea anemones form important mutualistic relationships with clownfish.",
  },

  {
    name: "Coral",
    scientificName: "Anthozoa",
    category: "Cnidarian",
    habitat: "Marine environments, especially tropical reefs",
    image: "/marine-life/coral.jpg",
    pexelsQuery: "coral reef underwater",
    depth: "Shallow reefs to deeper cold-water habitats",
    lifespan: "Colonies can live for centuries",
    size: "Individual polyps are tiny; colonies can cover enormous areas",
    weight: "Varies by colony",
    speed: "Stationary",
    diet: "Plankton and nutrients from symbiotic algae",
    conservationStatus: "Many reef-building corals are threatened",
    description:
      "Corals are colonies of tiny animals that create some of the most biodiverse ecosystems on Earth.",
    types:
      "Hard corals, soft corals and many other forms occur across marine environments.",
    behavior:
      "Stationary colonies grow and reproduce while interacting with surrounding organisms.",
    adaptations:
      "Many reef-building corals maintain symbiotic relationships with photosynthetic algae.",
    interestingFact:
      "Coral reefs support a huge proportion of marine biodiversity despite occupying a small fraction of the ocean.",
  },

  {
    name: "Starfish",
    scientificName: "Asteroidea",
    category: "Echinoderm",
    habitat: "Rocky shores, coral reefs and ocean floors",
    image: "/marine-life/starfish.jpg",
    pexelsQuery: "starfish underwater ocean",
    depth: "Intertidal zones to deep sea",
    lifespan: "Several years to decades depending on species",
    size: "Less than 1 inch to several feet",
    weight: "Varies by species",
    speed: "Very slow",
    diet: "Mollusks, small animals and organic material",
    conservationStatus: "Varies by species",
    description:
      "Starfish, more accurately called sea stars, are marine echinoderms known for their radial body structure and remarkable regenerative abilities.",
    types:
      "Thousands of sea star species occur across marine habitats.",
    behavior:
      "Slow-moving predators and scavengers that crawl across surfaces using tube feet.",
    adaptations:
      "Regeneration and hundreds of tiny tube feet allow effective movement and feeding.",
    interestingFact:
      "Some sea stars can regenerate lost arms and, in certain species, an entire individual can develop from part of the body.",
  },

  {
    name: "Sea Urchin",
    scientificName: "Echinoidea",
    category: "Echinoderm",
    habitat: "Rocky seabeds, reefs and coastal waters",
    image: "/marine-life/sea-urchin.jpg",
    pexelsQuery: "sea urchin underwater reef",
    depth: "Intertidal zones to deep reefs",
    lifespan: "Several years to decades",
    size: "1–6 inches depending on species",
    weight: "Varies by species",
    speed: "Very slow",
    diet: "Algae, kelp and organic material",
    conservationStatus: "Varies by species",
    description:
      "Sea urchins are spiny echinoderms that graze across rocks and reef surfaces.",
    types:
      "Many species occur in tropical, temperate and polar seas.",
    behavior:
      "Usually crawl slowly across surfaces while feeding.",
    adaptations:
      "Movable spines and tube feet provide protection and mobility.",
    interestingFact:
      "Their mouth contains a complex feeding structure known as Aristotle's lantern.",
  },

  {
    name: "Sea Cucumber",
    scientificName: "Holothuroidea",
    category: "Echinoderm",
    habitat: "Seafloors from shallow reefs to deep oceans",
    image: "/marine-life/sea-cucumber.jpg",
    pexelsQuery: "sea cucumber underwater",
    depth: "Shallow reefs to several thousand meters",
    lifespan: "Around 5–10 years depending on species",
    size: "Several inches to more than 3 feet",
    weight: "Varies by species",
    speed: "Very slow",
    diet: "Organic particles, algae and sediment",
    conservationStatus: "Varies by species",
    description:
      "Sea cucumbers are soft-bodied echinoderms that crawl across the seafloor and recycle organic material.",
    types:
      "Hundreds of species inhabit marine environments worldwide.",
    behavior:
      "Spend much of their time feeding on sediment or organic particles.",
    adaptations:
      "Some species can eject internal organs as a defense and later regenerate them.",
    interestingFact:
      "Sea cucumbers are important ecosystem recyclers because they process large amounts of seafloor sediment.",
  },

  {
    name: "Giant Clam",
    scientificName: "Tridacna gigas",
    category: "Mollusk",
    habitat: "Tropical coral reefs",
    image: "/marine-life/giant-clam.jpg",
    pexelsQuery: "giant clam coral reef underwater",
    depth: "Shallow tropical reefs",
    lifespan: "More than 100 years",
    size: "Can exceed 4 feet",
    weight: "Can exceed 200 kg",
    speed: "Stationary",
    diet: "Photosynthetic algae and filtered particles",
    conservationStatus: "Vulnerable",
    description:
      "The giant clam is the largest living bivalve and forms a striking partnership with microscopic photosynthetic algae.",
    types:
      "The giant clam is one of several giant Tridacna species.",
    behavior:
      "Remains attached to reef surfaces throughout adulthood.",
    adaptations:
      "Symbiotic algae provide additional energy through photosynthesis.",
    interestingFact:
      "A giant clam can live for many decades and may exceed a meter in length.",
  },

  {
    name: "Sea Sponge",
    scientificName: "Porifera",
    category: "Marine Invertebrate",
    habitat: "Rocky reefs, seafloors and deep ocean habitats",
    image: "/marine-life/sea-sponge.jpg",
    pexelsQuery: "sea sponge coral reef underwater",
    depth: "Shallow reefs to deep ocean",
    lifespan: "Several years to centuries depending on species",
    size: "Millimeters to several meters",
    weight: "Varies greatly",
    speed: "Stationary",
    diet: "Bacteria, plankton and dissolved organic matter",
    conservationStatus: "Varies by species",
    description:
      "Sea sponges are ancient filter-feeding animals that pump enormous amounts of water through their bodies.",
    types:
      "Thousands of sponge species occur throughout marine ecosystems.",
    behavior:
      "Remain attached to surfaces while continuously filtering water.",
    adaptations:
      "Complex internal canals allow efficient water filtration.",
    interestingFact:
      "Some large sponges can filter thousands of liters of water every day.",
  },

  {
    name: "Horseshoe Crab",
    scientificName: "Limulidae",
    category: "Marine Arthropod",
    habitat: "Sandy and muddy coastal seabeds",
    image: "/marine-life/horseshoe-crab.jpg",
    pexelsQuery: "horseshoe crab beach ocean",
    depth: "Shallow coastal waters",
    lifespan: "Around 20–40 years",
    size: "Up to around 2 feet",
    weight: "Up to several kilograms",
    speed: "Slow-moving",
    diet: "Worms, mollusks and small organisms",
    conservationStatus: "Varies by species",
    description:
      "Horseshoe crabs are ancient marine arthropods with distinctive hard shells and long pointed tails.",
    types:
      "Four living species are recognized.",
    behavior:
      "Often migrate toward beaches during breeding seasons.",
    adaptations:
      "Hard shells provide protection while specialized legs help them walk across sediment.",
    interestingFact:
      "Horseshoe crabs have existed for hundreds of millions of years.",
  },
];

export default animals;