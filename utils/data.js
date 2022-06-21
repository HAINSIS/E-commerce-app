/*
const data = {
  products: [
    {
      ref: 43900,
      name: 'Duracell - AAA Batteries (4-Pack)',
      type: 'HardGood',
      price: 5.49,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
      manufacturer: 'Duracell',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 0,
    },
    {
      ref: 48530,
      name: 'Duracell - AA 1.5V CopperTop Batteries (4-Pack)',
      type: 'HardGood',
      price: 5.49,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.49,
      description:
        'Long-lasting energy; DURALOCK Power Preserve technology; for toys, clocks, radios, games, remotes, PDAs and more',
      manufacturer: 'Duracell',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/4853/48530_sa.jpg',
      rating: 4.4,
      numReviews: 100,
      countInStock: 150,
    },
    {
      ref: 127687,
      name: 'Duracell - AA Batteries (8-Pack)',
      type: 'HardGood',
      price: 7.49,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with select electronic devices; AA size; DURALOCK Power Preserve technology; 8-pack',
      manufacturer: 'Duracell',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1276/127687_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 150115,
      name: 'Energizer - MAX Batteries AA (4-Pack)',
      type: 'HardGood',
      price: 4.99,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.49,
      description: '4-pack AA alkaline batteries; battery tester included',
      manufacturer: 'Energizer',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1501/150115_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 185230,
      name: 'Duracell - C Batteries (4-Pack)',
      type: 'HardGood',
      price: 8.99,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with select electronic devices; C size; DURALOCK Power Preserve technology; 4-pack',
      manufacturer: 'Duracell',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1852/185230_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 185267,
      name: 'Duracell - D Batteries (4-Pack)',
      type: 'HardGood',
      price: 9.99,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.99,
      description:
        'Compatible with select electronic devices; D size; DURALOCK Power Preserve technology; 4-pack',
      manufacturer: 'Duracell',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1852/185267_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 312290,
      name: 'Duracell - 9V Batteries (2-Pack)',
      type: 'HardGood',
      price: 7.99,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208002',
          name: 'Alkaline Batteries',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with select electronic devices; alkaline chemistry; 9V size; DURALOCK Power Preserve technology; 2-pack',
      manufacturer: 'Duracell',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3122/312290_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 324884,
      name: 'Directed Electronics - Viper Audio Glass Break Sensor',
      type: 'HardGood',
      price: 39.99,
      category: [
        {
          id: 'pcmcat113100050015',
          name: 'Carfi Instore Only',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with Directed Electronics alarm systems; microphone and microprocessor detect and analyze intrusions; detects quiet glass breaks',
      manufacturer: 'Directed Electronics',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3248/324884_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 333179,
      name: 'Energizer - N Cell E90 Batteries (2-Pack)',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'pcmcat248700050021',
          name: 'Housewares',
        },
        {
          id: 'pcmcat303600050001',
          name: 'Household Batteries',
        },
        {
          id: 'abcat0208006',
          name: 'Specialty Batteries',
        },
      ],
      shipping: 5.49,
      description: 'Alkaline batteries; 1.5V',
      manufacturer: 'Energizer',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3331/333179_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 346575,
      name: 'Metra - Radio Installation Dash Kit for Most 1989-2000 Ford, Lincoln & Mercury Vehicles - Black',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050033',
          name: 'Dash Installation Kits',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with most 1989-2000 Ford, Lincoln and Mercury vehicles; snap-in TurboKit offers fast installation; spacer/trim ring; rear support bracket',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3465/346575_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 346646,
      name: 'Metra - Radio Dash Multikit for Select GM Vehicles - Black',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050033',
          name: 'Dash Installation Kits',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with select GM vehicles; plastic material',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3466/346646_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 347137,
      name: 'Metra - Wiring Harness for Select 1998-2008 Ford Vehicles - Multicolored',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        "Compatible with select 1998-2008 Ford vehicles; connects an aftermarket radio to a vehicle's harness",
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/9852/9852688_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 347146,
      name: 'Metra - Turbo Wire Aftermarket Radio Wire Harness Adapter for Select Vehicles',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        "Compatible with Honda and Acura vehicles; connects an aftermarket radio to your car's harness",
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3471/347146_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 347155,
      name: 'Metra - Wiring Harness for Most 1986-1998 Honda Acura Vehicles - Multicolored',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        "Compatible with most 1986-1998 Honda Acura vehicles; connects an aftermarket radio to a vehicle's harness",
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3471/347155_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 347333,
      name: 'METRA - Antenna Cable Adapter - Black',
      type: 'HardGood',
      price: 13.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050032',
          name: 'Antennas & Adapters',
        },
      ],
      shipping: 0,
      description:
        'Compatible with select 1988-2005 vehicles; adapts an aftermarket antenna to OEM radios; flat plug',
      manufacturer: 'METRA',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3473/347333_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 349572,
      name: 'INSTALL - PORTABLE RADAR DETECTOR INST',
      type: 'HardGood',
      price: 29.99,
      category: [
        {
          id: 'pcmcat298100050010',
          name: 'In-Store Only',
        },
      ],
      shipping: '',
      description: 'PORTABLE RADAR DETECTOR INST',
      manufacturer: 'INSTALL',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/nonsku/default_hardlines_m.gif',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 373642,
      name: 'Jensen - 3.6V NiCad Battery for 900MHz Phones',
      type: 'HardGood',
      price: 19.99,
      category: [
        {
          id: 'pcmcat312300050015',
          name: 'Connected Home & Housewares',
        },
        {
          id: 'abcat0802000',
          name: 'Telephones & Communication',
        },
        {
          id: 'abcat0811011',
          name: 'Telephone Accessories',
        },
        {
          id: 'abcat0811012',
          name: 'Cordless Phone Batteries',
        },
      ],
      shipping: 5.49,
      description:
        'Rechargeable 3.6V 300 mAh NiCad battery for GE 2-9614 model cordless phones',
      manufacturer: 'Jensen',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/3736/373642_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 478398,
      name: 'Metra - Radio Installation Dash Kit for Select Ford, Mazda and Mercury Vehicles (Pair) - Black',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050033',
          name: 'Dash Installation Kits',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with select Ford, Mazda and Mercury vehicles; allows the installation of an aftermarket radio into the factory dash location; high-grade ABS plastic material',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/4783/478398_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 612732,
      name: 'Metra - 1/4" DIN Trim Ring for Most Vehicles',
      type: 'HardGood',
      price: 10.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050033',
          name: 'Dash Installation Kits',
        },
      ],
      shipping: 0,
      description:
        'Compatible with most vehicles; designed for the installation of an aftermarket radio',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/6127/612732_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 643600,
      name: 'Metra - Turbowire Radio Harness Adapter for Select Jeep Vehicles',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        'Compatible with select Jeep vehicles; ABS and vinyl construction; colored-coded wires',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/6436/643600_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 643628,
      name: 'Metra - Speaker Connector for Select Volkswagen Vehicles',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        "Compatible with select Volkswagen vehicles; connects a speaker to the vehicle's stereo; easy installation",
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/6436/643628_rc.jpg',
      rating: 4.5,
      numReviews: 1000,
      countInStock: 200,
    },
    {
      ref: 643691,
      name: 'Metra - Speaker Connector for Select Mitsubishi and Chrysler Vehicles',
      type: 'HardGood',
      price: 19.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 202,
    },
    {
      ref: 643717,
      name: 'Metra - Wiring Harness for Most 1990-2001 Mazda Vehicles - Multicolored',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        "Compatible with most 1990-2001 Mazda vehicles; connects an aftermarket radio to a vehicle's harness",
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/6437/643717_rc.jpg',
      rating: 4.5,
      numReviews: 10254,
      countInStock: 2011,
    },
    {
      ref: 673890,
      name: 'Metra - Professional Installer Series TurboKit',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050033',
          name: 'Dash Installation Kits',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with select Chevrolet, Geo and Suzuki vehicles; allows installation of an aftermarket radio; provision for a 1/4" or 1/2" DIN equalizer; mounts precisely to OEM radio mounting positions',
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/9852/9852688_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 677379,
      name: 'Metra - Wiring Harness for Most 1987 and Later Toyota Scion Vehicles - Multicolored',
      type: 'HardGood',
      price: 16.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'pcmcat165900050023',
          name: 'Car Installation Parts & Accessories',
        },
        {
          id: 'pcmcat331600050007',
          name: 'Car Audio Installation Parts',
        },
        {
          id: 'pcmcat165900050031',
          name: 'Deck Installation Parts',
        },
        {
          id: 'pcmcat165900050034',
          name: 'Deck Harnesses',
        },
      ],
      shipping: 0,
      description:
        "Compatible with most 1987 and later Toyota Scion vehicles; connects an aftermarket radio to a vehicle's harness",
      manufacturer: 'Metra',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/6773/677379_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1002651,
      name: 'Polk Audio - 12" Single-Voice-Coil 4-Ohm Subwoofer - Black',
      type: 'HardGood',
      price: 99.99,
      category: [
        {
          id: 'abcat0300000',
          name: 'Car Electronics & GPS',
        },
        {
          id: 'abcat0302000',
          name: 'Car Audio',
        },
        {
          id: 'abcat0302034',
          name: 'Car Subwoofers & Enclosures',
        },
        {
          id: 'abcat0302037',
          name: 'Car Subwoofers',
        },
      ],
      shipping: 0,
      description:
        '720W peak power handling; Klippel-optimized driver components; polymer woofer cone; butyl rubber surround',
      manufacturer: 'Polk Audio',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1002/1002651_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003003,
      name: 'Hard Rock TrackPak - Mac',
      type: 'Software',
      price: 29.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 5.49,
      description:
        'HAL LEONARD Hard Rock TrackPak: Features 12 hard rock and metal Apple Loops; compatible with GarageBand; includes guitars, bass, drums and synth parts',
      manufacturer: 'Hal Leonard',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003003_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003012,
      name: 'Aquarius - Fender Playing Cards Gift Tin - Red/Black',
      type: 'HardGood',
      price: 13.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat313400050000',
          name: 'Music Memorabilia',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS Fender Playing Cards Gift Tin: 2 decks; hinged gift tin; 52 different images per deck',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003012_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003021,
      name: 'LoDuca Bros Inc - Deluxe Keyboard Bench - Black',
      type: 'HardGood',
      price: 79.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat151600050042',
          name: 'Keyboard Accessories',
        },
      ],
      shipping: 0,
      description:
        'LODUCA BROS. INC. Deluxe Keyboard Bench: Metal base; 13" x 24" padded seat; cross brace for support; adjusts to 3 different heights; can fit up to 2 people; folding design',
      manufacturer: 'LoDuca Bros Inc',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003021_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003049,
      name: 'Trumpet Multimedia - Trumpets That Work 2015 Calendar - Black',
      type: 'HardGood',
      price: 23.95,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat287400050019',
          name: 'More Pop Culture Merchandise',
        },
      ],
      shipping: 5.49,
      description:
        'TRUMPET MULTIMEDIA Trumpets That Work 2015 Calendar: 2015 calendar; Trumpets That Work design',
      manufacturer: 'Trumpet Multimedia',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003049_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003067,
      name: 'Pro Tools Tier 1 Audio Plug-In for PC and Mac Activation Card - Windows|Mac',
      type: 'Software',
      price: 99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 0,
      description:
        'AVID Pro Tools Tier 1 Audio Plug-In for PC and Mac Activation Card: Compatible with PC and Mac; redeemable for a (TL) Aggro, Bruno/Reso, Cosmonaut Voice, DINR, (TL) Drum Rehab, (TL) EveryPhase, Reel Tape Saturation or other Avid Tier 1-level plug-in',
      manufacturer: 'Avid',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003067_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003076,
      name: 'M-Audio - BX8 D2 Studio Monitors (Pair) - Black',
      type: 'HardGood',
      price: 599.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050035',
          name: 'Microphones & Live Sound',
        },
        {
          id: 'pcmcat152200050008',
          name: 'Live Sound Speakers',
        },
        {
          id: 'pcmcat152200050009',
          name: 'Speaker Monitors',
        },
      ],
      shipping: 0,
      description:
        'M-AUDIO BX8 D2 Studio Monitors (Pair): Custom Class AB analog amplifiers; woven low-frequency driver; waveguide-loaded silk-dome tweeter; XLR and 1/4" inputs',
      manufacturer: 'M-Audio',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003076_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003085,
      name: 'Aquarius - Grateful Dead Skull Logo Chunky Magnet - Red/White/Blue',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat287400050019',
          name: 'More Pop Culture Merchandise',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS Grateful Dead Skull Logo Chunky Magnet: Features the iconic Grateful Dead skull logo; magnet; chunky design',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003085_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003109,
      name: 'Alesis - AcousticLink Guitar Recording Pack - White',
      type: 'HardGood',
      price: 79,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050022',
          name: 'Audio Interfaces',
        },
      ],
      shipping: 0,
      description:
        'ALESIS AcousticLink Guitar Recording Pack: Compatible with most guitars with a 1/4" connector; built-in analog-to-digital conversion; includes a 16.5\' GuitarLink 1/4"-to-USB cable, no-drill acoustic guitar pickup and Cubase LE recording software',
      manufacturer: 'Alesis',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003109_sa.jpg',
      rating: 3.5,
      numReviews: 1,
      countInStock: 2054,
    },
    {
      ref: 1003127,
      name: 'Modern Rock TrackPak - Mac',
      type: 'Software',
      price: 29.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 5.49,
      description:
        "HAL LEONARD Modern Rock TrackPak: Features 12 modern rock Apple Loops; compatible with GarageBand; includes complete songs, plus individual loops, beats, grooves and riffs for each song's instruments",
      manufacturer: 'Hal Leonard',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003127_sa.jpg',
      rating: 4.8,
      numReviews: 1044,
      countInStock: 45,
    },
    {
      ref: 1003136,
      name: '1970s Rock TrackPak - Mac',
      type: 'Software',
      price: 29.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 5.49,
      description:
        'HAL LEONARD 1970s Rock TrackPak: Features 12 classic rock songs; compatible with GarageBand; includes loops for each instrument',
      manufacturer: 'Hal Leonard',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003136_sa.jpg',
      rating: 4.7,
      numReviews: 1054,
      countInStock: 89,
    },
    {
      ref: 1003145,
      name: 'LoDuca Bros Inc - Professional Digital Photo Studio Kit - Black/White/Blue',
      type: 'HardGood',
      price: 49.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat157700050041',
          name: 'Other Musical Instrument Accessories',
        },
      ],
      shipping: 0,
      description:
        'LODUCA BROS INC Professional Digital Photo Studio Kit: Lets you take professional-quality photos; includes 2 high-output tabletop lights, a 16" cubed soft-lighting frame and an adjustable mini tabletop tripod; multicompartment, padded carrying case',
      manufacturer: 'LoDuca Bros Inc',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003145_rc.jpg',
      rating: 4.9,
      numReviews: 10,
      countInStock: 69,
    },
    {
      ref: 1003163,
      name: 'Groovy Shapes Volume 1 - Windows|Mac',
      type: 'Software',
      price: 69.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 0,
      description:
        'SIBELIUS Groovy Shapes Volume 1: Teaches the basics of sound, rhythm, pitch and composition; guides students through progressive exercises; lets students create original music; for ages 5 to 7 years',
      manufacturer: 'Sibelius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/pac/products/1312/1312451498/1312451498_sa.jpg',
      rating: 4.8,
      numReviews: 80,
      countInStock: 96,
    },
    {
      ref: 1003172,
      name: 'PreSonus - AudioBox iTwo Recording System - Blue/Gray',
      type: 'HardGood',
      price: 159.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050022',
          name: 'Audio Interfaces',
        },
      ],
      shipping: 0,
      description:
        'PRESONUS AudioBox iTwo Recording System: Compatible with Apple iPad, Windows and Mac recording software; 2 combo microphone/line/instrument inputs; Class A microphone preamplifier; balanced TRS monitor output; MIDI I/O; 24-bit/96kHz converters',
      manufacturer: 'PreSonus',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003172_sa.jpg',
      rating: 4.4,
      numReviews: 851,
      countInStock: 11,
    },
    {
      ref: 1003214,
      name: 'PreSonus - AudioBox iOne Recording System - Blue/Gray',
      type: 'HardGood',
      price: 159.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050022',
          name: 'Audio Interfaces',
        },
      ],
      shipping: 0,
      description:
        'PRESONUS AudioBox iOne Recording System: Compatible with Apple iPad, Windows and Mac recording software; instrument and microphone inputs; Class A microphone preamplifier; balanced TRS monitor output; 24-bit/96kHz converters',
      manufacturer: 'PreSonus',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003214_sa.jpg',
      rating: 4.1,
      numReviews: 20,
      countInStock: 12,
    },
    {
      ref: 1003232,
      name: 'Aquarius - Grateful Dead Bear Logo Chunky Magnet - Green/Yellow/Blue/Purple/Red/Orange/Black',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat287400050019',
          name: 'More Pop Culture Merchandise',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS Grateful Dead Bear Logo Chunky Magnet: Tie-dyed Grateful Dead bear logo; chunky design',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003232_sa.jpg',
      rating: 4.6,
      numReviews: 104448,
      countInStock: 3,
    },
    {
      ref: 1003269,
      name: 'Addictive Keys: Studio Collection - Mac|Windows',
      type: 'Software',
      price: 179,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 0,
      description:
        'XLN AUDIO Addictive Keys: Studio Collection: Ideal for music producers and musicians; features virtual keyboard instruments; compatible with newer major hosts and DAWs',
      manufacturer: 'XLN Audio',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003269_sa.jpg',
      rating: 4.8,
      numReviews: 110,
      countInStock: 20,
    },
    {
      ref: 1003278,
      name: 'Pro Tools Tier 2 Audio Plug-In for PC and Mac Activation Card - Windows|Mac',
      type: 'Software',
      price: 299,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 0,
      description:
        'AVID Pro Tools Tier 2 Audio Plug-In for PC and Mac Activation Card: Compatible with PC and Mac; redeemable for a Classic Compressors Bundle, Focusrite d2/d3, Impact, JOEMEEK Bundle, Moogerfooger Bundle or other Avid Tier 2-level plug-in',
      manufacturer: 'Avid',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003278_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003287,
      name: 'Korg - nanoKey2 25-Key USB MIDI Controller - White/Gray',
      type: 'HardGood',
      price: 49.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat151600050037',
          name: 'Keyboards',
        },
        {
          id: 'pcmcat151600050039',
          name: 'Midi Keyboards & Controllers',
        },
      ],
      shipping: 0,
      description:
        'KORG nanoKey2 25-Key USB MIDI Controller: USB MIDI connectivity; 25 velocity-sensitive keys; compatible with the Korg microKEY; PC and Mac compatible',
      manufacturer: 'Korg',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003287_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003296,
      name: 'M-Audio - Nova Condenser Microphone - Silver',
      type: 'HardGood',
      price: 99.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050035',
          name: 'Microphones & Live Sound',
        },
        {
          id: 'pcmcat251600050003',
          name: 'Microphones & Accessories',
        },
        {
          id: 'pcmcat152100050038',
          name: 'Microphones',
        },
      ],
      shipping: 0,
      description:
        'M-AUDIO Nova Condenser Microphone: 1.1" evaporated gold diaphragm; solid brass body and capsule; 20Hz - 18kHz frequency response; hard mount and soft case included',
      manufacturer: 'M-Audio',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003296_sa.jpg',
      rating: 4.0,
      numReviews: 16,
      countInStock: 2,
    },
    {
      ref: 1003319,
      name: 'IK Multimedia - iRig Stomp - Black',
      type: 'HardGood',
      price: 59.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat152100050033',
          name: 'DJ Equipment Accessories',
        },
      ],
      shipping: 0,
      description:
        'IK MULTIMEDIA iRig Stomp: Compatible with select Apple iPhone, iPad and iPod touch models, Android and Mac computers; allows use inline with other effects pedals and more; active battery-powered output circuit',
      manufacturer: 'IK Multimedia',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003319_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003328,
      name: 'IK Multimedia - iKlip Xpand Microphone Stand Mount - Black',
      type: 'HardGood',
      price: 49.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat205700050037',
          name: 'Recording Furniture & Stands',
        },
        {
          id: 'pcmcat251600050005',
          name: 'Recording & Music Stands',
        },
      ],
      shipping: 0,
      description:
        'IK MULTIMEDIA iKlip Xpand Microphone Stand Mount: Compatible with most tablets from 7" to 12.1"; adjustable holder with 4 expandable grips; 2 sure-grip rubber gripping points; rubber padded base; ball joint; smart bracket design; iKlip Stage app',
      manufacturer: 'IK Multimedia',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003328_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003337,
      name: 'M-Audio - AM1 Cardioid Dynamic Microphone - Black/Gray',
      type: 'HardGood',
      price: 29.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050035',
          name: 'Microphones & Live Sound',
        },
        {
          id: 'pcmcat251600050003',
          name: 'Microphones & Accessories',
        },
        {
          id: 'pcmcat152100050038',
          name: 'Microphones',
        },
        {
          id: 'pcmcat221400050014',
          name: 'Dynamic',
        },
      ],
      shipping: 5.99,
      description:
        'M-AUDIO AM1 Cardioid Dynamic Microphone: For amplifying and recording vocals and instruments; dynamic design; cardioid pickup pattern; steel mesh, foam-lined head grille; die-cast, zinc-alloy housing',
      manufacturer: 'M-Audio',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003337_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003346,
      name: 'Elements Pack - Mac|Windows',
      type: 'Software',
      price: 174.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 0,
      description:
        'STEINBERG Elements Pack: Includes Cubase Elements 6 and WaveLab Elements 7 software; lets you produce music and edit audio on your Mac or PC',
      manufacturer: 'Steinberg',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003346_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003364,
      name: 'IK Multimedia - iKlip Xpand Mini Microphone Stand Mount - Black',
      type: 'HardGood',
      price: 39.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat205700050037',
          name: 'Recording Furniture & Stands',
        },
        {
          id: 'pcmcat251600050005',
          name: 'Recording & Music Stands',
        },
      ],
      shipping: 0,
      description:
        'IK MULTIMEDIA iKlip Xpand Mini Microphone Stand Mount: Compatible with select Apple iPhone and iPod touch models and most smartphones with 3.5" to 6" screens; rubberized Gorilla Grip technology; adjustable clamp; ball joint',
      manufacturer: 'IK Multimedia',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003364_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003373,
      name: 'Acoustic Rock TrackPak - Mac',
      type: 'Software',
      price: 29.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 5.49,
      description:
        'HAL LEONARD Acoustic Rock TrackPak: 12 acoustic Apple Loops; compatible with GarageBand; includes guitars, bass, drums and keyboard parts',
      manufacturer: 'Hal Leonard',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003373_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003415,
      name: 'Aquarius - Elvis Heartthrob Chunky Magnet - Black/White',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat287400050019',
          name: 'More Pop Culture Merchandise',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS Elvis Heartthrob Chunky Magnet: Features a black-and-white photo of Elvis Presley; chunky design',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003415_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003424,
      name: 'Aquarius - Elvis Presley Jailhouse Rock 1,000-Piece Jigsaw Puzzle - Black/White/Red/Yellow/Blue/Green/Orange',
      type: 'HardGood',
      price: 15.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat313400050000',
          name: 'Music Memorabilia',
        },
      ],
      shipping: 5.99,
      description:
        'AQUARIUS Elvis Presley Jailhouse Rock 1,000-Piece Jigsaw Puzzle: 1,000 pieces; features Elvis on the set of the iconic film; measures 12" x 36" when completed',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003424_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003433,
      name: 'Pro Tools Tier 3 Audio Plug-In for PC and Mac Activation Card - Windows|Mac',
      type: 'Software',
      price: 499,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 0,
      description:
        'AVID Pro Tools Tier 3 Audio Plug-In for PC and Mac Activation Card: Compatible with PC and Mac; redeemable for an Eleven, ReVibe, (TL) Space (DSP + native) or X-Form Avid Tier 3-level plug-in',
      manufacturer: 'Avid',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003433_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003451,
      name: 'Aquarius - Genesis Playing Cards - Yellow/Purple/Black/Red',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat313400050000',
          name: 'Music Memorabilia',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS Genesis Playing Cards: 2.5" x 3.5" playing cards; linen-type finish',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003451_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003488,
      name: 'Korg - nanoKONTROL2 USB MIDI Controller - Black',
      type: 'HardGood',
      price: 59.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050031',
          name: 'DJ Console Systems',
        },
      ],
      shipping: 0,
      description:
        'KORG nanoKONTROL2 USB MIDI Controller: 2 USB ports; compatible with Mac, PC, Apple iPad, Korg microKEY, most computer-based DAWs and most music production software',
      manufacturer: 'Korg',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003488_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003497,
      name: 'Aquarius - Rush Starman Chunky Magnet - Black/Red/White/Brown',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat287400050019',
          name: 'More Pop Culture Merchandise',
        },
      ],
      shipping: 5.49,
      description:
        "AQUARIUS Rush Starman Chunky Magnet: Features Rush's Starman logo; chunky design",
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003497_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003531,
      name: 'Aquarius - Rush Playing Cards - Red/Black/White',
      type: 'HardGood',
      price: 5.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat244200050008',
          name: 'TV, Movie & Character Toys',
        },
        {
          id: 'pcmcat313400050000',
          name: 'Music Memorabilia',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS Rush Playing Cards: 2.5" x 3.5" playing cards; linen-type finish',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003531_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003568,
      name: 'Aquarius - The Beatles Yellow Submarine 600-Piece Jigsaw Puzzle - Blue/Yellow/Red/White/Green/Pink',
      type: 'HardGood',
      price: 15.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat274200050008',
          name: 'Games, Puzzles & Cards',
        },
        {
          id: 'pcmcat274200050009',
          name: 'Puzzles',
        },
      ],
      shipping: 5.49,
      description:
        'AQUARIUS The Beatles Yellow Submarine 600-Piece Jigsaw Puzzle: 600 pieces; features the artwork of The Beatles\' Yellow Submarine album; measures 20" x 27" when completed',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003568_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003604,
      name: 'Alfred - Katy Perry: Teenage Dream Sheet Music - Pink/Blue',
      type: 'HardGood',
      price: 17.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152200050014',
          name: 'Sheet Music & DVDs',
        },
        {
          id: 'pcmcat202800050013',
          name: 'Sheet Music',
        },
      ],
      shipping: 5.49,
      description:
        "ALFRED Katy Perry: Teenage Dream Sheet Music: Piano, vocal and guitar sheet music for Katy Perry's Teenage Dream",
      manufacturer: 'Alfred',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003604_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003613,
      name: 'Classic Rock TrackPak - Mac',
      type: 'Software',
      price: 29.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050026',
          name: 'Sound Recording Software',
        },
      ],
      shipping: 5.49,
      description:
        "HAL LEONARD Classic Rock TrackPak: Features 12 modern rock Apple Loops; compatible with GarageBand; includes complete songs, plus individual loops, beats, grooves and riffs for each song's instruments",
      manufacturer: 'Hal Leonard',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003613_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003622,
      name: 'Aquarius - Fender Stratocaster 1,000-Piece Jigsaw Puzzle - Black/Red/White/Yellow/Green/Orange/Blue',
      type: 'HardGood',
      price: 15.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat274200050008',
          name: 'Games, Puzzles & Cards',
        },
        {
          id: 'pcmcat274200050009',
          name: 'Puzzles',
        },
      ],
      shipping: 5.99,
      description:
        'AQUARIUS Fender Stratocaster 1,000-Piece Jigsaw Puzzle: 1,000 pieces; lets you show off your fandom for the guitar; measures 20" x 27" when completed',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003622_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003631,
      name: 'IK Multimedia - iRig MIDI 2 Audio Interface - Black',
      type: 'HardGood',
      price: 99.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat152100050022',
          name: 'Audio Interfaces',
        },
      ],
      shipping: 0,
      description:
        'IK MULTIMEDIA iRig MIDI 2 Audio Interface: Compatible with Mac, PC and select iOS devices; MIDI input, output and thru jacks; USB and Lightning interface',
      manufacturer: 'IK Multimedia',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003631_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003641,
      name: 'M. Night Shyamalan: The Last Airbender - Nintendo Wii',
      type: 'Game',
      price: 19.99,
      category: [
        {
          id: 'abcat0700000',
          name: 'Video Games',
        },
        {
          id: 'abcat0706000',
          name: 'Wii',
        },
        {
          id: 'abcat0706002',
          name: 'Wii Games',
        },
      ],
      shipping: 3.99,
      description:
        'Harness the power of Air and Fire as you join a quest for honor and power',
      manufacturer: 'THQ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003641_500x500_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003659,
      name: 'M-Audio - Keystation Mini 32 II 32-Key USB MIDI Keyboard Controller - Black/White',
      type: 'HardGood',
      price: 99.95,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat151600050037',
          name: 'Keyboards',
        },
        {
          id: 'pcmcat151600050039',
          name: 'Midi Keyboards & Controllers',
        },
      ],
      shipping: 0,
      description:
        'M-AUDIO Keystation Mini 32 II 32-Key USB MIDI Keyboard Controller: Ignite and Ableton Live Lite software; USB MIDI connectivity; pitch-bend, modulation and octave controls; 32 velocity-sensitive synth-action keys',
      manufacturer: 'M-Audio',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003659_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1003668,
      name: 'Aquarius - The Beatles Street 1,000-Piece Jigsaw Puzzle - Black/White/Brown',
      type: 'HardGood',
      price: 15.99,
      category: [
        {
          id: 'pcmcat252700050006',
          name: 'Toys, Games & Drones',
        },
        {
          id: 'pcmcat274200050008',
          name: 'Games, Puzzles & Cards',
        },
        {
          id: 'pcmcat274200050009',
          name: 'Puzzles',
        },
      ],
      shipping: 5.99,
      description:
        'AQUARIUS The Beatles Street 1,000-Piece Jigsaw Puzzle: 1,000 pieces; features an image of The Beatles walking down the street; measures 20" x 27" when completed',
      manufacturer: 'Aquarius',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1003/1003668_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1004002,
      name: 'Canon - EOS Rebel T5 DSLR Camera with 18-55mm and 75-300mm Lenses - Black',
      type: 'HardGood',
      price: 749.99,
      category: [
        {
          id: 'abcat0400000',
          name: 'Cameras & Camcorders',
        },
        {
          id: 'abcat0401000',
          name: 'Digital Cameras',
        },
        {
          id: 'abcat0401005',
          name: 'Digital SLR Cameras',
        },
        {
          id: 'pcmcat180400050000',
          name: 'DSLR Body & Lens',
        },
      ],
      shipping: 0,
      description:
        '18.0-megapixel APS-C CMOS sensorISO 100-6400, expandable to 12,800Shooting speeds up to 3 fpsFull high-definition movie mode',
      manufacturer: 'Canon',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1004/1004002_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1004622,
      name: 'Sniper: Ghost Warrior - Xbox 360',
      type: 'Game',
      price: 19.99,
      category: [
        {
          id: 'abcat0700000',
          name: 'Video Games',
        },
        {
          id: 'abcat0701000',
          name: 'Xbox 360',
        },
        {
          id: 'abcat0701002',
          name: 'Xbox 360 Games',
        },
      ],
      shipping: 3.99,
      description: 'Control the power of death as you ghost through the jungle',
      manufacturer: 'City Interactive',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1004/1004622_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1004668,
      name: 'GoPro - Camera Roll Bar Mount - Black',
      type: 'HardGood',
      price: 29.99,
      category: [
        {
          id: 'abcat0400000',
          name: 'Cameras & Camcorders',
        },
        {
          id: 'abcat0410022',
          name: 'Camcorder Accessories',
        },
        {
          id: 'pcmcat329700050009',
          name: 'Action Camcorder Accessories',
        },
        {
          id: 'pcmcat240500050057',
          name: 'Action Camcorder Mounts',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with most GoPro cameras; clamps to tubes or frames ranging from 1.4-2.5" in diameter; pivoting orientation arms',
      manufacturer: 'GoPro',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1004/1004668_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1004695,
      name: 'GoPro - Camera Mount Accessory Kit - Black',
      type: 'HardGood',
      price: 19.99,
      category: [
        {
          id: 'abcat0400000',
          name: 'Cameras & Camcorders',
        },
        {
          id: 'abcat0410022',
          name: 'Camcorder Accessories',
        },
        {
          id: 'pcmcat329700050009',
          name: 'Action Camcorder Accessories',
        },
        {
          id: 'pcmcat240500050057',
          name: 'Action Camcorder Mounts',
        },
        {
          id: 'pcmcat329700050020',
          name: 'Handlebar/Seatpost Mounts',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with most GoPro cameras; includes a variety of camera mounting accessories',
      manufacturer: 'GoPro',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1004/1004695_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1004804,
      name: 'GoPro - Chest Mount Harness - Black',
      type: 'HardGood',
      price: 39.99,
      category: [
        {
          id: 'abcat0400000',
          name: 'Cameras & Camcorders',
        },
        {
          id: 'abcat0410022',
          name: 'Camcorder Accessories',
        },
        {
          id: 'pcmcat329700050009',
          name: 'Action Camcorder Accessories',
        },
        {
          id: 'pcmcat240500050057',
          name: 'Action Camcorder Mounts',
        },
        {
          id: 'pcmcat329700050017',
          name: 'Chest Mounts',
        },
      ],
      shipping: 0,
      description:
        'Compatible with most GoPro cameras; one-size-fits-all adjustability',
      manufacturer: 'GoPro',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1004/1004804_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1004831,
      name: 'GoPro - Ride HERO Handlebar Seatpost Mount - Black',
      type: 'HardGood',
      price: 19.99,
      category: [
        {
          id: 'abcat0400000',
          name: 'Cameras & Camcorders',
        },
        {
          id: 'abcat0410022',
          name: 'Camcorder Accessories',
        },
        {
          id: 'pcmcat329700050009',
          name: 'Action Camcorder Accessories',
        },
        {
          id: 'pcmcat240500050057',
          name: 'Action Camcorder Mounts',
        },
        {
          id: 'pcmcat329700050020',
          name: 'Handlebar/Seatpost Mounts',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with most GoPro cameras; clamps on tubes 3/4" - 1-1/2" in diameter; pivoting orientation arms with 3-way adjustability',
      manufacturer: 'GoPro',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1004/1004831_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005118,
      name: 'American DJ - Dura Clamp',
      type: 'HardGood',
      price: 9.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat205700050037',
          name: 'Recording Furniture & Stands',
        },
        {
          id: 'pcmcat251600050005',
          name: 'Recording & Music Stands',
        },
      ],
      shipping: 5.49,
      description:
        'From our expanded online assortment; designed for use with the Dura Truss system; supports lighting fixtures up to 20 lbs.; fits 1/2" truss rods',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005118_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005181,
      name: 'American DJ - 20" Glass Mirror Ball',
      type: 'HardGood',
      price: 89.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'Compatible with M-101 and M-103 mirror ball motors; glass material',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005181_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005215,
      name: 'American DJ - Elation 4-Channel Chase Controller - Black',
      type: 'HardGood',
      price: 59.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; instant sound-to-light chase; timed, audio and chase modes; built-in microphone',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005215_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005288,
      name: 'American DJ - Color Gel Filter (4-Pack)',
      type: 'HardGood',
      price: 12.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 5.49,
      description:
        'Designed for use with most Par-56 can gel frames; red, blue, yellow and green gel filters',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005288_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005297,
      name: 'American DJ - Crystal Bright Accent Strip CW LED Strip (4-Pack) - White',
      type: 'HardGood',
      price: 39.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; 4 self-adhesive strips; cool white LEDs; AC adapter',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005297_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005312,
      name: 'American DJ - Tripod Stand - Black',
      type: 'HardGood',
      price: 44.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050020',
          name: 'Recording Equipment',
        },
        {
          id: 'pcmcat205700050037',
          name: 'Recording Furniture & Stands',
        },
        {
          id: 'pcmcat251600050005',
          name: 'Recording & Music Stands',
        },
      ],
      shipping: 0,
      description:
        "From our expanded online assortment; designed for use with most par cans, pin spots and lighting fixtures; extends up to 9'; collapsible design",
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005312_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005358,
      name: 'American DJ - DMX Dimmer Pack',
      type: 'HardGood',
      price: 199.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; digital display; LED indicators; 16 built-in chases; reversible mounting brackets',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005358_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005409,
      name: 'American DJ - 16" Glass Mirror Ball',
      type: 'HardGood',
      price: 54.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; compatible with M-101 and M-103 mirror ball motors; glass material',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005409_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005454,
      name: 'American DJ - Bubble Blast Bubble Machine',
      type: 'HardGood',
      price: 299.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'Compatible with most types of bubble liquid; dual-fan lift system; drainage valve system; top-load filling container; remote; on/off switch; wheels and dual handles',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005454_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005515,
      name: 'American DJ - 12" Glass Mirror Ball',
      type: 'HardGood',
      price: 25.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 8.49,
      description:
        'From our expanded online assortment; glass material; portable',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005515_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005542,
      name: 'American DJ - Par 46 Can Kit - Black',
      type: 'HardGood',
      price: 44.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; 200W lamp; 4 color gel filters; clamp; safety cable',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005542_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005667,
      name: 'American DJ - Elation Stage Pack',
      type: 'HardGood',
      price: 499.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; 16-channel DMX controller; 2 XLR cables; two 4-channel dimmers',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005667_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005694,
      name: 'American DJ - DMX Mirror Ball Motor',
      type: 'HardGood',
      price: 129.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; designed for use with most mirror balls up to 20"; 2 DMX channels; circuit breaker protection',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005694_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005721,
      name: "American DJ - 5' CD Data Cable - Gray",
      type: 'HardGood',
      price: 13.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat152100050033',
          name: 'DJ Equipment Accessories',
        },
      ],
      shipping: 5.49,
      description:
        'Compatible with most dual CD players with an 8-pin to 8-pin connection; replacement cable',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005721_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005758,
      name: 'American DJ - Dekker LED Effects Light - Black',
      type: 'HardGood',
      price: 169.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; colored beams and 40 lenses; 3-button DMX LED menu; strobe effect; hanging bracket',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005758_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005794,
      name: 'American DJ - Par 56 Can Kit - Black',
      type: 'HardGood',
      price: 49.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; 300W lamp; 4 color gel filters; clamp; safety cable',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005794_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005803,
      name: 'American DJ - Stage Tape - Black',
      type: 'HardGood',
      price: 15.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat152100050033',
          name: 'DJ Equipment Accessories',
        },
      ],
      shipping: 6.49,
      description:
        'From our expanded online assortment; ideal for a variety of DJ applications; 2" wide; no heavy residue',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005803_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005849,
      name: 'American DJ - 4" Gaffers Tape - Black',
      type: 'HardGood',
      price: 34.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat152100050033',
          name: 'DJ Equipment Accessories',
        },
      ],
      shipping: 6.49,
      description:
        'From our expanded online assortment; 4" wide; 135\' of tape; cloth-like structure',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005849_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005867,
      name: 'American DJ - 2" Gaffers Tape - White',
      type: 'HardGood',
      price: 20.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat152100050033',
          name: 'DJ Equipment Accessories',
        },
      ],
      shipping: 5.99,
      description:
        'From our expanded online assortment; 2" wide; 135\' of tape; cloth-like structure',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005867_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005885,
      name: "American DJ - 15-1/2' Flash Rope",
      type: 'HardGood',
      price: 79.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; 12 flash capsules; rain-resistant; built-in hanging ring',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005885_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005894,
      name: 'American DJ - 3 RPM Mirror Ball Motor',
      type: 'HardGood',
      price: 14.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 5.49,
      description:
        'From our expanded online assortment; AC motor; 3 rpm; holds mirror balls up to 12"',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005894_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005903,
      name: 'American DJ - LED Color Panel - Black',
      type: 'HardGood',
      price: 199.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; 288 LEDs; 7 DMX channel modes; 4 operational modes; strobe and dimming effects',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/pac/products/1306/1306786803/1306786803_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005912,
      name: 'American DJ - 1 RPM Mirror Ball Motor',
      type: 'HardGood',
      price: 14.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 5.49,
      description:
        'From our expanded online assortment; AC motor; 1 rpm; holds mirror balls up to 16"',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005912_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1005985,
      name: 'American DJ - Chase Controller Pack',
      type: 'HardGood',
      price: 99.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; designed to chase LED and halogen par cans; 20 built-in programs; 7 preset scenes',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1005/1005985_rc.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1006029,
      name: 'American DJ - Par Can Kit - Black',
      type: 'HardGood',
      price: 54.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; ideal for theaters, mobile entertainment and bands; 4 color gel filters; safety cable',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1006/1006029_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1006038,
      name: 'American DJ - 8-Channel Switch Center',
      type: 'HardGood',
      price: 99.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0208024',
          name: 'Musical Instrument Accessories',
        },
        {
          id: 'pcmcat152100050033',
          name: 'DJ Equipment Accessories',
        },
      ],
      shipping: 0,
      description:
        'From our expanded online assortment; built-in power supply; 8 channels',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1006/1006038_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1006046,
      name: 'VocoPro - TabletOke Digital Karaoke Mixer - Black/Gray',
      type: 'HardGood',
      price: 149.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'abcat0207005',
          name: 'Karaoke',
        },
        {
          id: 'pcmcat251600050000',
          name: 'Karaoke Machines',
        },
      ],
      shipping: 0,
      description:
        'VOCOPRO TabletOke Digital Karaoke Mixer: Built-in Bluetooth music receiver; compatible with select smartphones, tablets and laptops with a 3.5mm (1/8") jack; connects to karaoke player for CDG or DVD disc playback',
      manufacturer: 'VocoPro',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1006/1006046_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
    {
      ref: 1006065,
      name: 'American DJ - 1 Gal. Bubble Juice',
      type: 'HardGood',
      price: 19.99,
      category: [
        {
          id: 'abcat0207000',
          name: 'Musical Instruments',
        },
        {
          id: 'pcmcat152100050027',
          name: 'DJ & Lighting Equipment',
        },
        {
          id: 'pcmcat152100050032',
          name: 'DJ Lighting & Effects',
        },
      ],
      shipping: 9.99,
      description:
        'From our expanded online assortment; designed for use in bubble machines; colorless; 1 gal.',
      manufacturer: 'American DJ',
      image:
        'http://img.bbystatic.com/BestBuy_US/images/products/1006/1006065_sa.jpg',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
    },
  ],
};

export default data;

*/
