export interface Question {
  id: number;
  text: string;
  options: [string, string, string, string];
  correctIndex: number; // 0-3
  topic: string;
  year: number;
  explanation?: string;
}

export const TOPICS = [
  "Kulliyat",
  "Ilmul Advia",
  "Moalijat",
  "Tashreeh wa Wazaif",
  "Ilmul Amraz",
  "Jarahat",
  "Ilmul Qabalat",
  "Hifzane Sehat",
  "Tahaffuzi wa Samaji Tib",
  "Ilmul Nafsiyat",
  "Ilmul Saidla",
  "Niswan wa Atfal",
  "Ain, Uzn, Anf, Halaq",
  "Qanoon wa Tibb",
  "Nazariyat wa Usool",
  "Ilmul Tashkhees",
  "Mabadia wa Arkan",
  "Akhlat wa Mizaj",
  "Tadbeer wa Ilaj",
  "Amraz Jild",
  "Amraz Qalb wa Awiye Damawiya",
  "Amraz Kuliya wa Masalak Baul",
  "Amraz Jauz Hazm",
  "Amraz Asab",
  "Amraz Tifl",
  "Amraz Mushtaraka",
  "Khas Ilaj",
  "Marham wa Zimad",
  "Ilmul Haywanat",
  "Ilaj bil Tadbeer",
];

export const YEARS = [
  2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
];

export const questions: Question[] = [
  // Kulliyat
  {
    id: 1,
    text: "According to Unani system, the four primary qualities (Kaifiyat) are:",
    options: [
      "Hot, Cold, Moist, Dry",
      "Fire, Water, Air, Earth",
      "Blood, Phlegm, Yellow Bile, Black Bile",
      "Qalb, Dimagh, Jigar, Uns",
    ],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2019,
    explanation:
      "The four primary qualities (Kaifiyat-e-Awwaliya) in Unani medicine are Hot (Haar), Cold (Barid), Moist (Ratab), and Dry (Yabis).",
  },
  {
    id: 2,
    text: "The concept of 'Mizaj' in Unani medicine refers to:",
    options: [
      "Diet and nutrition",
      "Temperament or constitution",
      "Pulse diagnosis",
      "Urine examination",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2018,
    explanation:
      "Mizaj refers to the temperament or constitution of an individual, formed by the interaction of the four elements and their qualities.",
  },
  {
    id: 3,
    text: "Which of the following is NOT one of the Arkan (elements) in Unani medicine?",
    options: ["Nar (Fire)", "Hawa (Air)", "Khak (Earth)", "Noor (Light)"],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2020,
    explanation:
      "The four Arkan (elements) in Unani medicine are Nar (Fire), Hawa (Air), Maa (Water), and Khak (Earth). Noor (Light) is not one of them.",
  },
  {
    id: 4,
    text: "The term 'Akhlat' in Unani medicine refers to:",
    options: ["Organs", "Humours", "Temperaments", "Vital forces"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2017,
    explanation:
      "Akhlat refers to the four humours: Dam (Blood), Balgham (Phlegm), Safra (Yellow Bile), and Sauda (Black Bile).",
  },
  {
    id: 5,
    text: "According to Unani medicine, the seat of Rooh (vital spirit) is:",
    options: [
      "Jigar (Liver)",
      "Dimagh (Brain)",
      "Qalb (Heart)",
      "Tilli (Spleen)",
    ],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "According to Unani medicine, Qalb (Heart) is the seat of Rooh (vital spirit/pneuma).",
  },
  {
    id: 6,
    text: "The process of digestion in Unani medicine is called:",
    options: ["Istehala", "Inhizam", "Ikhraj", "Imtisas"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2022,
    explanation:
      "Inhizam refers to the process of digestion in Unani medicine, which occurs at multiple levels.",
  },
  {
    id: 7,
    text: "Which humour is associated with the season of Spring according to Unani medicine?",
    options: ["Sauda", "Balgham", "Dam", "Safra"],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2016,
    explanation:
      "Dam (Blood) is associated with Spring season. It is hot and moist in temperament, similar to the spring season.",
  },
  {
    id: 8,
    text: "The concept of 'Quwwat' (faculty/power) in Unani medicine includes all EXCEPT:",
    options: [
      "Quwwat-e-Tabiya",
      "Quwwat-e-Nafsania",
      "Quwwat-e-Haywania",
      "Quwwat-e-Ilahiya",
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2023,
    explanation:
      "The three Quwwat (faculties) in Unani medicine are Tabiya (Natural), Nafsania (Psychic), and Haywania (Vital). Quwwat-e-Ilahiya is not a recognized faculty.",
  },

  // Ilmul Advia
  {
    id: 9,
    text: "The drug 'Afsanteen' (Artemisia absinthium) is primarily used for:",
    options: [
      "Cardiac disorders",
      "Digestive disorders and worm infestation",
      "Respiratory disorders",
      "Urinary disorders",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2019,
    explanation:
      "Afsanteen (Artemisia absinthium) is primarily used for digestive disorders and worm infestation due to its bitter and anthelmintic properties.",
  },
  {
    id: 10,
    text: "Which of the following is the Unani name for Terminalia chebula?",
    options: ["Bahera", "Amla", "Haritaki/Halela Zard", "Bael"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2018,
    explanation:
      "Terminalia chebula is known as Halela Zard or Haritaki in Unani medicine. It is one of the three fruits in Triphala.",
  },
  {
    id: 11,
    text: "The Mizaj (temperament) of Zanjabeel (Zingiber officinale) is:",
    options: ["Cold and Dry", "Hot and Moist", "Hot and Dry", "Cold and Moist"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2020,
    explanation:
      "Zanjabeel (Ginger) has a Hot and Dry temperament (Haar Yabis) in the third degree according to Unani pharmacology.",
  },
  {
    id: 12,
    text: "Which drug is known as 'Asl-us-Soos' in Unani medicine?",
    options: [
      "Glycyrrhiza glabra",
      "Acacia arabica",
      "Ficus benghalensis",
      "Withania somnifera",
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2017,
    explanation:
      "Asl-us-Soos is the Unani name for Glycyrrhiza glabra (Licorice root), widely used for respiratory and digestive conditions.",
  },
  {
    id: 13,
    text: "The drug 'Tukhm-e-Kasoos' is obtained from which plant?",
    options: [
      "Cuscuta reflexa",
      "Cannabis sativa",
      "Carum carvi",
      "Cuminum cyminum",
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Tukhm-e-Kasoos refers to the seeds of Cuscuta reflexa (Dodder), used in Unani medicine for liver and kidney disorders.",
  },
  {
    id: 14,
    text: "Which of the following is a Muqawwi-e-Bah (aphrodisiac) drug in Unani medicine?",
    options: ["Senna", "Ashwagandha (Asgand)", "Neem", "Tulsi"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2022,
    explanation:
      "Asgand (Withania somnifera/Ashwagandha) is a well-known Muqawwi-e-Bah (aphrodisiac) and general tonic in Unani medicine.",
  },
  {
    id: 15,
    text: "The term 'Mudir-e-Baul' in Unani pharmacology refers to drugs that:",
    options: [
      "Promote sweating",
      "Promote urination",
      "Promote menstruation",
      "Promote digestion",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Mudir-e-Baul refers to diuretic drugs that promote urination in Unani medicine.",
  },
  {
    id: 16,
    text: "Qust (Saussurea lappa) is primarily classified as which type of drug in Unani medicine?",
    options: [
      "Musakkin (Sedative)",
      "Muqawwi-e-Meda (Gastric tonic)",
      "Muqawwi-e-Dimagh (Brain tonic)",
      "Mudir-e-Haiz (Emmenagogue)",
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2016,
    explanation:
      "Qust (Saussurea lappa) is primarily classified as Muqawwi-e-Dimagh (Brain tonic) and is also used for respiratory conditions.",
  },

  // Moalijat
  {
    id: 17,
    text: "The Unani treatment principle 'Ilaj bil Zid' means:",
    options: [
      "Treatment by similars",
      "Treatment by opposites",
      "Treatment by diet",
      "Treatment by surgery",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2019,
    explanation:
      "Ilaj bil Zid means treatment by opposites — treating a hot disease with cold remedies and vice versa, which is the fundamental principle of Unani therapeutics.",
  },
  {
    id: 18,
    text: "Which of the following is the Unani treatment for Humma-e-Ghib (Tertian fever)?",
    options: [
      "Musakkinat",
      "Munzijat and Mushilat-e-Safra",
      "Muqawwiyat-e-Qalb",
      "Mudirat-e-Baul",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2018,
    explanation:
      "Humma-e-Ghib (Tertian fever) is caused by excess Safra (Yellow Bile). Treatment involves Munzijat (maturatives) and Mushilat-e-Safra (cholagogues/purgatives for bile).",
  },
  {
    id: 19,
    text: "In Unani medicine, 'Fasad' (venesection/bloodletting) is indicated in which condition?",
    options: [
      "Imtila-e-Dam (Plethora of blood)",
      "Balgham predominance",
      "Sauda predominance",
      "Weakness and debility",
    ],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2020,
    explanation:
      "Fasad (venesection) is indicated in Imtila-e-Dam (plethora/excess of blood) to remove excess blood and restore humoral balance.",
  },
  {
    id: 20,
    text: "The Unani formulation 'Jawarish Jalinus' is primarily used for:",
    options: [
      "Cardiac disorders",
      "Gastric disorders",
      "Neurological disorders",
      "Respiratory disorders",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Jawarish Jalinus is a classical Unani formulation primarily used for gastric disorders including dyspepsia and loss of appetite.",
  },
  {
    id: 21,
    text: "Which Unani regimen therapy involves the use of steam?",
    options: ["Hammam", "Dalk", "Taleeq", "Idrar"],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2022,
    explanation:
      "Hammam (Turkish bath/steam bath) is a regimen therapy in Unani medicine that uses steam and heat for therapeutic purposes.",
  },
  {
    id: 22,
    text: "The Unani treatment 'Hijama' (cupping) is classified under:",
    options: [
      "Ilaj bil Dawa",
      "Ilaj bil Tadbeer",
      "Ilaj bil Ghiza",
      "Ilaj bil Yad",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2023,
    explanation:
      "Hijama (cupping therapy) is classified under Ilaj bil Tadbeer (Regimenal therapy), one of the four modes of treatment in Unani medicine.",
  },
  {
    id: 23,
    text: "Sharbat Bazoori Motadil is used in Unani medicine for:",
    options: [
      "Fever",
      "Urinary disorders",
      "Cardiac weakness",
      "Skin diseases",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2016,
    explanation:
      "Sharbat Bazoori Motadil is a classical Unani formulation used for urinary disorders including dysuria and urinary tract infections.",
  },
  {
    id: 24,
    text: "In Unani medicine, 'Munzij' drugs are used to:",
    options: [
      "Purge the body",
      "Mature the morbid matter before evacuation",
      "Strengthen the organs",
      "Reduce inflammation",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2017,
    explanation:
      "Munzij (maturative) drugs are used to mature (ripen) the morbid matter (Maada-e-Fasida) before it can be evacuated from the body.",
  },

  // Tashreeh wa Wazaif
  {
    id: 25,
    text: "According to Unani anatomy, the liver (Jigar) produces which humour?",
    options: ["Safra", "Balgham", "Dam", "Sauda"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2019,
    explanation:
      "According to Unani physiology, the liver (Jigar) is the primary organ for the production of Dam (Blood) and is considered the seat of natural faculty.",
  },
  {
    id: 26,
    text: "The 'Nafs Nabatat' (vegetative soul) in Unani medicine is associated with which organ?",
    options: ["Heart", "Brain", "Liver", "Spleen"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2018,
    explanation:
      "The Nafs Nabatat (vegetative/natural soul) is associated with the Jigar (Liver), which governs nutrition, growth, and reproduction.",
  },
  {
    id: 27,
    text: "In Unani physiology, 'Ruh Haywani' (vital spirit) is produced in:",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2020,
    explanation:
      "Ruh Haywani (vital spirit) is produced in the Qalb (Heart) and is responsible for life, pulse, and vital functions.",
  },
  {
    id: 28,
    text: "The process of 'Hazm-e-Kabidi' (hepatic digestion) in Unani medicine occurs in:",
    options: ["Stomach", "Small intestine", "Liver", "Spleen"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2021,
    explanation:
      "Hazm-e-Kabidi (hepatic digestion) is the second stage of digestion occurring in the Jigar (Liver), where chyle is converted into blood.",
  },
  {
    id: 29,
    text: "According to Unani medicine, the number of bones in the human body is:",
    options: ["206", "248", "360", "300"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2022,
    explanation:
      "According to classical Unani anatomists, the human body has 248 bones, which differs from the modern count of 206.",
  },
  {
    id: 30,
    text: "The term 'Asab' in Unani anatomy refers to:",
    options: ["Muscles", "Nerves", "Bones", "Ligaments"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2023,
    explanation:
      "Asab refers to nerves in Unani anatomy. They are classified as Asab Hassasa (sensory nerves) and Asab Muharrika (motor nerves).",
  },

  // Ilmul Amraz
  {
    id: 31,
    text: "The Unani concept of 'Imtila' refers to:",
    options: [
      "Deficiency of humours",
      "Excess/fullness of humours",
      "Imbalance of temperament",
      "Obstruction of channels",
    ],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2019,
    explanation:
      "Imtila refers to the excess or fullness of humours in the body, which is a major cause of disease in Unani pathology.",
  },
  {
    id: 32,
    text: "According to Unani medicine, 'Waram' (inflammation) is caused by:",
    options: [
      "Viral infection",
      "Accumulation of morbid matter in tissues",
      "Deficiency of vital force",
      "Imbalance of Mizaj",
    ],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2018,
    explanation:
      "Waram (inflammation) in Unani pathology is caused by the accumulation of morbid matter (Maada-e-Fasida) in the tissues.",
  },
  {
    id: 33,
    text: "The Unani term for diabetes mellitus is:",
    options: ["Zatul Janb", "Ziabetus", "Istisqa", "Humma"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2020,
    explanation:
      "Ziabetus (also written as Ziabetes) is the Unani term for diabetes mellitus, characterized by excessive urination and thirst.",
  },
  {
    id: 34,
    text: "In Unani medicine, 'Suda' refers to:",
    options: ["Headache", "Fever", "Cough", "Diarrhea"],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2021,
    explanation:
      "Suda refers to headache in Unani medicine. It can be caused by various factors including excess of humours, vapors, or external causes.",
  },
  {
    id: 35,
    text: "The Unani disease 'Zatul Janb' corresponds to which modern condition?",
    options: ["Pneumonia/Pleurisy", "Appendicitis", "Hepatitis", "Nephritis"],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2022,
    explanation:
      "Zatul Janb in Unani medicine corresponds to Pneumonia or Pleurisy in modern medicine, characterized by chest pain and respiratory symptoms.",
  },
  {
    id: 36,
    text: "According to Unani pathology, 'Sue Mizaj Mufrid' refers to:",
    options: [
      "Simple temperamental disorder without humoral involvement",
      "Complex humoral disorder",
      "Structural disease",
      "Functional disorder",
    ],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Sue Mizaj Mufrid (simple dycrasia) refers to a temperamental disorder without humoral involvement, affecting only the quality of the organ.",
  },
  {
    id: 37,
    text: "The Unani term 'Istisqa' corresponds to which modern condition?",
    options: ["Jaundice", "Ascites/Dropsy", "Anemia", "Hypertension"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2016,
    explanation:
      "Istisqa in Unani medicine corresponds to Ascites or Dropsy (edema) in modern medicine, characterized by abnormal fluid accumulation.",
  },

  // Jarahat
  {
    id: 38,
    text: "The Unani surgical procedure 'Shaq' refers to:",
    options: ["Cauterization", "Incision", "Cupping", "Leeching"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2019,
    explanation:
      "Shaq refers to incision (cutting) in Unani surgery, used to drain abscesses and treat various surgical conditions.",
  },
  {
    id: 39,
    text: "In Unani medicine, 'Kai' refers to:",
    options: ["Leeching", "Cauterization", "Venesection", "Cupping"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2018,
    explanation:
      "Kai refers to cauterization in Unani medicine, used as a last resort treatment for various conditions including tumors and chronic wounds.",
  },
  {
    id: 40,
    text: "The Unani term for wound healing is:",
    options: ["Tansheef", "Iltiam", "Tahleel", "Taqteer"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2020,
    explanation:
      "Iltiam refers to wound healing in Unani medicine. Drugs that promote wound healing are called Multaim.",
  },

  // Ilmul Qabalat
  {
    id: 41,
    text: "The Unani term for normal delivery is:",
    options: [
      "Wiladat-e-Aseer",
      "Wiladat-e-Tabii",
      "Wiladat-e-Qais",
      "Wiladat-e-Maqloob",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2021,
    explanation:
      "Wiladat-e-Tabii refers to normal/natural delivery in Unani obstetrics, where the baby is delivered in the vertex presentation.",
  },
  {
    id: 42,
    text: "According to Unani medicine, the duration of normal pregnancy is:",
    options: ["9 months", "270 days", "9 months and 9 days", "280 days"],
    correctIndex: 2,
    topic: "Ilmul Qabalat",
    year: 2022,
    explanation:
      "According to Unani medicine, the normal duration of pregnancy is 9 months and 9 days (approximately 279 days).",
  },
  {
    id: 43,
    text: "The Unani drug used to promote lactation is called:",
    options: [
      "Mudir-e-Haiz",
      "Mudir-e-Laban",
      "Muqawwi-e-Rahim",
      "Habis-e-Dam",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2023,
    explanation:
      "Mudir-e-Laban refers to galactagogue drugs that promote milk production (lactation) in Unani medicine.",
  },

  // Hifzane Sehat
  {
    id: 44,
    text: "The six essential factors for health maintenance in Unani medicine are called:",
    options: [
      "Arkan-e-Sitta",
      "Asbab-e-Sitta Zarooriya",
      "Quwwat-e-Sitta",
      "Akhlat-e-Sitta",
    ],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2019,
    explanation:
      "Asbab-e-Sitta Zarooriya (Six Essential Factors) are the six non-naturals that must be regulated for maintaining health in Unani medicine.",
  },
  {
    id: 45,
    text: "Which of the following is NOT included in Asbab-e-Sitta Zarooriya?",
    options: [
      "Hawa (Air)",
      "Naum wa Yaqzah (Sleep and wakefulness)",
      "Dawa (Medicine)",
      "Harkat wa Sukoon-e-Nafsani (Mental activity and rest)",
    ],
    correctIndex: 2,
    topic: "Hifzane Sehat",
    year: 2018,
    explanation:
      "Dawa (Medicine) is not part of Asbab-e-Sitta Zarooriya. The six are: Hawa, Makool wa Mashroob, Naum wa Yaqzah, Harkat wa Sukoon Badani, Harkat wa Sukoon Nafsani, and Ihtibas wa Istifragh.",
  },
  {
    id: 46,
    text: "The Unani concept of 'Ihtibas wa Istifragh' refers to:",
    options: [
      "Sleep and wakefulness",
      "Retention and evacuation",
      "Exercise and rest",
      "Diet and nutrition",
    ],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2020,
    explanation:
      "Ihtibas wa Istifragh refers to retention and evacuation — the balance between what is retained and what is excreted from the body, which is one of the six essential factors.",
  },
  {
    id: 47,
    text: "According to Unani medicine, the ideal season for Fasd (venesection) is:",
    options: ["Winter", "Summer", "Spring", "Autumn"],
    correctIndex: 2,
    topic: "Hifzane Sehat",
    year: 2017,
    explanation:
      "Spring is considered the ideal season for Fasd (venesection) in Unani medicine, as blood is at its peak during this season.",
  },
  {
    id: 48,
    text: "The Unani term 'Riyazat' refers to:",
    options: [
      "Massage therapy",
      "Physical exercise",
      "Dietary regimen",
      "Spiritual healing",
    ],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2016,
    explanation:
      "Riyazat refers to physical exercise in Unani medicine, which is one of the important components of Asbab-e-Sitta Zarooriya (Harkat wa Sukoon Badani).",
  },

  // Tahaffuzi wa Samaji Tib
  {
    id: 49,
    text: "The Unani concept of preventive medicine is known as:",
    options: [
      "Ilaj bil Tadbeer",
      "Hifzane Sehat",
      "Tahaffuzi Tib",
      "Islah-e-Ghiza",
    ],
    correctIndex: 2,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2021,
    explanation:
      "Tahaffuzi Tib refers to preventive medicine in Unani system, which focuses on maintaining health and preventing disease.",
  },
  {
    id: 50,
    text: "Which of the following is a primary level of prevention in Unani medicine?",
    options: [
      "Early diagnosis",
      "Rehabilitation",
      "Maintaining Mizaj-e-Motadil (balanced temperament)",
      "Surgery",
    ],
    correctIndex: 2,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2022,
    explanation:
      "Maintaining Mizaj-e-Motadil (balanced temperament) through proper diet, lifestyle, and regimen is the primary level of prevention in Unani medicine.",
  },
  {
    id: 51,
    text: "The Unani term for epidemic disease is:",
    options: ["Waba", "Humma", "Taaun", "Fasad"],
    correctIndex: 0,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2023,
    explanation:
      "Waba refers to epidemic disease in Unani medicine, caused by corruption of air (Fasad-e-Hawa) and affecting large populations.",
  },
  {
    id: 52,
    text: "According to Unani medicine, 'Taaun' (plague) is caused by:",
    options: [
      "Excess of Dam (blood)",
      "Corruption of air and miasma",
      "Deficiency of Safra",
      "Excess of Balgham",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2016,
    explanation:
      "Taaun (plague) in Unani medicine is attributed to corruption of air (Fasad-e-Hawa) and miasmatic factors, leading to epidemic spread.",
  },
  {
    id: 53,
    text: "The Unani concept of 'Islah-e-Hawa' (purification of air) is part of:",
    options: ["Ilaj bil Dawa", "Tahaffuzi Tib", "Jarahat", "Ilmul Advia"],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2017,
    explanation:
      "Islah-e-Hawa (purification of air) is a preventive measure in Tahaffuzi Tib (preventive medicine) to prevent epidemic diseases.",
  },

  // ── NEW QUESTIONS ADDED BELOW (IDs 61–120) ──────────────────────────────────

  // Kulliyat – additional
  {
    id: 61,
    text: "The term 'Tabiyat' (Physis/Nature) in Unani medicine is best described as:",
    options: [
      "The soul of the body",
      "The innate healing power that maintains health",
      "The temperament of an organ",
      "The vital spirit produced in the heart",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2017,
    explanation:
      "Tabiyat (Physis) is the innate healing power or nature of the body that maintains health, regulates physiological processes, and fights disease in Unani medicine.",
  },
  {
    id: 62,
    text: "According to Unani medicine, 'Sauda' (Black Bile) is produced in which organ?",
    options: ["Liver", "Spleen", "Gallbladder", "Kidney"],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2016,
    explanation:
      "Sauda (Black Bile) is produced in the Jigar (Liver) as a sediment of blood formation. The Tilli (Spleen) is the reservoir of Sauda, not its site of production.",
  },
  {
    id: 63,
    text: "The Unani term 'Balgham' (Phlegm) is associated with which season?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2018,
    explanation:
      "Balgham (Phlegm) is associated with Winter season. It is cold and moist in temperament, similar to the winter season.",
  },
  {
    id: 64,
    text: "In Unani medicine, 'Arwah' (spirits) are classified into how many types?",
    options: ["Two", "Three", "Four", "Five"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2020,
    explanation:
      "Arwah (spirits) in Unani medicine are classified into three types: Ruh Haywani (vital spirit), Ruh Nafsani (psychic spirit), and Ruh Tabii (natural spirit).",
  },
  {
    id: 65,
    text: "The concept of 'Mizaj-e-Motadil' (balanced temperament) in Unani medicine refers to:",
    options: [
      "Equal proportion of all four humours",
      "Ideal balance of qualities suited to the individual",
      "Absence of all disease",
      "Dominance of Dam (blood) humour",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2022,
    explanation:
      "Mizaj-e-Motadil refers to the ideal balanced temperament suited to the individual's constitution, not necessarily equal proportions of all humours.",
  },
  {
    id: 66,
    text: "According to Unani medicine, 'Safra' (Yellow Bile) is associated with which season?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Safra (Yellow Bile) is associated with Summer season. It is hot and dry in temperament, similar to the summer season.",
  },
  {
    id: 67,
    text: "The Unani term 'Uzw Rais' refers to:",
    options: [
      "Secondary organs",
      "Principal/Noble organs (Heart, Brain, Liver)",
      "Reproductive organs",
      "Digestive organs",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Uzw Rais refers to the principal or noble organs in Unani medicine: Qalb (Heart), Dimagh (Brain), and Jigar (Liver), which are the seats of the three faculties.",
  },

  // Ilmul Advia – additional
  {
    id: 68,
    text: "The Unani drug 'Behman Surkh' is obtained from:",
    options: [
      "Salvia haematodes",
      "Centaurea behen",
      "Moringa oleifera",
      "Nardostachys jatamansi",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2016,
    explanation:
      "Behman Surkh is obtained from Centaurea behen (Red Centaury). It is used as a cardiac and brain tonic in Unani medicine.",
  },
  {
    id: 69,
    text: "Which of the following is the botanical source of 'Tukhm-e-Khatmi' in Unani medicine?",
    options: [
      "Hibiscus rosa-sinensis",
      "Althaea officinalis",
      "Malva sylvestris",
      "Abelmoschus esculentus",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2017,
    explanation:
      "Tukhm-e-Khatmi refers to the seeds of Althaea officinalis (Marshmallow). It is used as a demulcent and emollient in Unani medicine.",
  },
  {
    id: 70,
    text: "The Unani drug 'Ushba' (Smilax china) is primarily used for:",
    options: [
      "Respiratory disorders",
      "Skin diseases and syphilis",
      "Cardiac disorders",
      "Urinary disorders",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2018,
    explanation:
      "Ushba (Smilax china/China root) is primarily used for skin diseases, syphilis, and as a blood purifier in Unani medicine.",
  },
  {
    id: 71,
    text: "The Mizaj (temperament) of Sandal Safaid (Santalum album) is:",
    options: ["Hot and Dry", "Hot and Moist", "Cold and Dry", "Cold and Moist"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2019,
    explanation:
      "Sandal Safaid (White Sandalwood) has a Cold and Dry temperament in Unani pharmacology. It is used as a cardiac tonic and for fever.",
  },
  {
    id: 72,
    text: "Which Unani drug is known as 'Muqil' and is obtained from Commiphora mukul?",
    options: ["Kateera", "Guggul/Muqil", "Kundur", "Mastagi"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2020,
    explanation:
      "Muqil is the Unani name for the resin obtained from Commiphora mukul (Guggul). It is used for arthritis, obesity, and lipid disorders.",
  },
  {
    id: 73,
    text: "The drug 'Rewand Chini' in Unani medicine is obtained from:",
    options: [
      "Rheum emodi",
      "Cassia angustifolia",
      "Aloe vera",
      "Operculina turpethum",
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Rewand Chini is obtained from Rheum emodi (Indian Rhubarb). It is used as a mild purgative and liver tonic in Unani medicine.",
  },
  {
    id: 74,
    text: "The Unani term 'Mushil' refers to drugs that:",
    options: [
      "Promote sweating",
      "Act as purgatives/laxatives",
      "Promote urination",
      "Promote vomiting",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2022,
    explanation:
      "Mushil refers to purgative or laxative drugs in Unani medicine that promote evacuation of the bowels.",
  },
  {
    id: 75,
    text: "Which of the following is a 'Muqawwi-e-Qalb' (cardiac tonic) drug in Unani medicine?",
    options: ["Senna", "Arjun (Terminalia arjuna)", "Neem", "Harad"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Arjun (Terminalia arjuna) is a well-known Muqawwi-e-Qalb (cardiac tonic) in Unani medicine, used for heart failure and cardiac weakness.",
  },
  {
    id: 76,
    text: "The Unani drug 'Tukhm-e-Sharbati' (Ocimum basilicum seeds) is primarily used as:",
    options: ["Purgative", "Demulcent and cooling agent", "Emetic", "Diuretic"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Tukhm-e-Sharbati (Basil seeds/Sabja) is used as a demulcent and cooling agent in Unani medicine, commonly added to sherbets for urinary and digestive complaints.",
  },
  {
    id: 77,
    text: "The botanical source of 'Habb-ul-Aas' in Unani medicine is:",
    options: [
      "Myrtus communis",
      "Punica granatum",
      "Coriandrum sativum",
      "Foeniculum vulgare",
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Habb-ul-Aas refers to the berries of Myrtus communis (Myrtle). It is used as an astringent and for diarrhea, dysentery, and urinary disorders.",
  },

  // Moalijat – additional
  {
    id: 78,
    text: "The Unani formulation 'Majoon Chobchini' is primarily used for:",
    options: [
      "Cardiac disorders",
      "Skin diseases and syphilis",
      "Respiratory disorders",
      "Neurological disorders",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2016,
    explanation:
      "Majoon Chobchini is a classical Unani compound formulation primarily used for skin diseases, syphilis, and joint disorders.",
  },
  {
    id: 79,
    text: "In Unani medicine, 'Dalk' (massage) is classified under which mode of treatment?",
    options: [
      "Ilaj bil Dawa",
      "Ilaj bil Ghiza",
      "Ilaj bil Tadbeer",
      "Ilaj bil Yad",
    ],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2017,
    explanation:
      "Dalk (massage) is classified under Ilaj bil Tadbeer (Regimenal therapy) in Unani medicine, along with other physical therapies.",
  },
  {
    id: 80,
    text: "The Unani formulation 'Tiryaq-e-Arba' is used for:",
    options: [
      "Fever",
      "Poisoning and as an antidote",
      "Cardiac weakness",
      "Skin diseases",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2018,
    explanation:
      "Tiryaq-e-Arba is a classical Unani antidote formulation used for poisoning and as a general antidote (Tiryaq means antidote/theriac).",
  },
  {
    id: 81,
    text: "The Unani treatment for 'Humma-e-Ruba' (Quartan fever) involves:",
    options: [
      "Mushilat-e-Safra",
      "Mushilat-e-Sauda",
      "Mushilat-e-Balgham",
      "Mudirat-e-Baul",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2019,
    explanation:
      "Humma-e-Ruba (Quartan fever) is caused by excess Sauda (Black Bile). Treatment involves Munzijat and Mushilat-e-Sauda (purgatives for black bile).",
  },
  {
    id: 82,
    text: "The Unani formulation 'Qurs Kafoor' is primarily used for:",
    options: [
      "Fever and as an antipyretic",
      "Cardiac disorders",
      "Urinary disorders",
      "Skin diseases",
    ],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2020,
    explanation:
      "Qurs Kafoor is a classical Unani tablet formulation used as an antipyretic and for fever management.",
  },
  {
    id: 83,
    text: "In Unani medicine, 'Taleeq' (leeching) is used primarily for:",
    options: [
      "Removing excess Balgham",
      "Removing excess Dam (blood) from local areas",
      "Promoting digestion",
      "Strengthening organs",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Taleeq (leeching/hirudotherapy) is used in Unani medicine to remove excess blood from local areas, especially where venesection is not feasible.",
  },
  {
    id: 84,
    text: "The Unani formulation 'Habbe Mumsik Tilai' is used for:",
    options: [
      "Premature ejaculation and sexual debility",
      "Cardiac weakness",
      "Respiratory disorders",
      "Urinary disorders",
    ],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2022,
    explanation:
      "Habbe Mumsik Tilai is a classical Unani formulation used for premature ejaculation and sexual debility.",
  },
  {
    id: 85,
    text: "The Unani treatment principle 'Ilaj bil Mithl' means:",
    options: [
      "Treatment by opposites",
      "Treatment by similars",
      "Treatment by diet",
      "Treatment by surgery",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2023,
    explanation:
      "Ilaj bil Mithl means treatment by similars — using drugs with similar qualities to the disease. This is less common than Ilaj bil Zid in Unani medicine.",
  },
  {
    id: 86,
    text: "The Unani formulation 'Sharbat-e-Dinar' is used for:",
    options: [
      "Urinary disorders",
      "Fever and as a cooling drink",
      "Cardiac weakness",
      "Respiratory disorders",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2024,
    explanation:
      "Sharbat-e-Dinar is a classical Unani sherbet formulation used for fever and as a cooling drink in hot temperament conditions.",
  },

  // Tashreeh wa Wazaif – additional
  {
    id: 87,
    text: "According to Unani anatomy, 'Awraj' refers to:",
    options: ["Veins", "Arteries", "Nerves", "Lymphatics"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2016,
    explanation:
      "Awraj refers to arteries in Unani anatomy. They carry Ruh Haywani (vital spirit) along with blood from the heart.",
  },
  {
    id: 88,
    text: "The Unani term 'Urooq' refers to:",
    options: ["Arteries", "Veins", "Nerves", "Tendons"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2017,
    explanation:
      "Urooq refers to veins in Unani anatomy. They carry blood from the liver to nourish the body tissues.",
  },
  {
    id: 89,
    text: "According to Unani physiology, 'Hazm-e-Medi' (gastric digestion) converts food into:",
    options: ["Blood", "Chyle (Kyloos)", "Bile", "Urine"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2018,
    explanation:
      "Hazm-e-Medi (gastric digestion) converts food into Kyloos (chyle), which is then transported to the liver for further processing.",
  },
  {
    id: 90,
    text: "The Unani term 'Ruh Nafsani' (psychic spirit) is produced in:",
    options: ["Heart", "Liver", "Brain", "Spinal cord"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2019,
    explanation:
      "Ruh Nafsani (psychic spirit) is produced in the Dimagh (Brain) and is responsible for sensation, movement, and psychic functions.",
  },
  {
    id: 91,
    text: "According to Unani anatomy, the number of muscles in the human body is:",
    options: ["529", "639", "248", "365"],
    correctIndex: 0,
    topic: "Tashreeh wa Wazaif",
    year: 2020,
    explanation:
      "According to classical Unani anatomists, the human body has 529 muscles, which differs from the modern count.",
  },
  {
    id: 92,
    text: "The Unani term 'Ghudad' refers to:",
    options: ["Muscles", "Glands", "Bones", "Cartilage"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2021,
    explanation:
      "Ghudad refers to glands in Unani anatomy. They are considered to have protective and secretory functions.",
  },
  {
    id: 93,
    text: "According to Unani physiology, the fourth stage of digestion (Hazm-e-Uzwi) occurs in:",
    options: ["Stomach", "Liver", "Individual cells/tissues", "Intestines"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2022,
    explanation:
      "Hazm-e-Uzwi (tissue/cellular digestion) is the fourth and final stage of digestion occurring in individual cells and tissues, where nutrients are assimilated.",
  },
  {
    id: 94,
    text: "The Unani term 'Awtaar' refers to:",
    options: ["Nerves", "Tendons", "Ligaments", "Cartilage"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2023,
    explanation:
      "Awtaar refers to tendons in Unani anatomy, which connect muscles to bones and transmit muscular force.",
  },

  // Ilmul Amraz – additional
  {
    id: 95,
    text: "The Unani term 'Humma-e-Yawm' refers to:",
    options: [
      "Tertian fever",
      "Quartan fever",
      "Ephemeral/one-day fever",
      "Continuous fever",
    ],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2016,
    explanation:
      "Humma-e-Yawm refers to ephemeral or one-day fever in Unani medicine, caused by external factors like excessive heat, fatigue, or emotional disturbance.",
  },
  {
    id: 96,
    text: "According to Unani pathology, 'Sue Mizaj Murakkab' refers to:",
    options: [
      "Simple temperamental disorder",
      "Compound temperamental disorder with humoral involvement",
      "Structural disease",
      "Congenital disorder",
    ],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2017,
    explanation:
      "Sue Mizaj Murakkab (compound dycrasia) refers to a temperamental disorder with humoral involvement, where both quality and humour are affected.",
  },
  {
    id: 97,
    text: "The Unani disease 'Saratan' corresponds to which modern condition?",
    options: ["Tuberculosis", "Cancer/Malignant tumor", "Leprosy", "Syphilis"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2018,
    explanation:
      "Saratan in Unani medicine corresponds to Cancer or malignant tumor in modern medicine. The term literally means 'crab' due to the crab-like spread of the disease.",
  },
  {
    id: 98,
    text: "The Unani term 'Diq' corresponds to which modern condition?",
    options: ["Asthma", "Tuberculosis/Consumption", "Pneumonia", "Bronchitis"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2019,
    explanation:
      "Diq in Unani medicine corresponds to Tuberculosis or Consumption in modern medicine, characterized by wasting, fever, and cough.",
  },
  {
    id: 99,
    text: "According to Unani medicine, 'Waram-e-Haar' (hot inflammation) is characterized by:",
    options: [
      "Coldness, pallor, and hardness",
      "Redness, heat, pain, and swelling",
      "Itching and dryness",
      "Numbness and coldness",
    ],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2020,
    explanation:
      "Waram-e-Haar (hot inflammation) is characterized by redness (Humra), heat (Hararat), pain (Waja), and swelling (Waram) — similar to the classical signs of inflammation.",
  },
  {
    id: 100,
    text: "The Unani term 'Falij' corresponds to which modern condition?",
    options: ["Epilepsy", "Hemiplegia/Paralysis", "Meningitis", "Migraine"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2021,
    explanation:
      "Falij in Unani medicine corresponds to Hemiplegia or Paralysis in modern medicine, caused by obstruction of Ruh Nafsani in the nerves.",
  },
  {
    id: 101,
    text: "The Unani disease 'Yaraqan' corresponds to which modern condition?",
    options: ["Anemia", "Jaundice", "Ascites", "Edema"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2022,
    explanation:
      "Yaraqan in Unani medicine corresponds to Jaundice in modern medicine, characterized by yellowish discoloration of skin and eyes due to excess Safra.",
  },
  {
    id: 102,
    text: "According to Unani pathology, the causes of disease are classified as:",
    options: [
      "Asbab Zarooriya and Asbab Ghair Zarooriya",
      "Asbab Badaniya and Asbab Nafsaniya",
      "Asbab Baadiya and Asbab Qaribiya",
      "Asbab Mufrid and Asbab Murakkab",
    ],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "In Unani pathology, causes of disease are classified as Asbab Baadiya (predisposing/remote causes) and Asbab Qaribiya (immediate/proximate causes).",
  },
  {
    id: 103,
    text: "The Unani term 'Khafqan' refers to:",
    options: ["Headache", "Palpitation of the heart", "Dizziness", "Fainting"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2024,
    explanation:
      "Khafqan refers to palpitation of the heart in Unani medicine, caused by weakness of the heart or excess of hot vapors reaching the heart.",
  },

  // Jarahat – additional
  {
    id: 104,
    text: "The Unani surgical procedure 'Batt' refers to:",
    options: [
      "Incision",
      "Lancing/opening of abscess",
      "Cauterization",
      "Amputation",
    ],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2016,
    explanation:
      "Batt refers to lancing or opening of an abscess in Unani surgery to drain the accumulated pus.",
  },
  {
    id: 105,
    text: "The Unani term 'Dabboos' refers to which surgical instrument?",
    options: ["Scalpel", "Probe/sound", "Forceps", "Needle"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2017,
    explanation:
      "Dabboos refers to a probe or sound used in Unani surgery to explore wounds, fistulas, and body cavities.",
  },
  {
    id: 106,
    text: "In Unani surgery, 'Tadbeed' refers to:",
    options: [
      "Wound closure",
      "Scarification/superficial incisions",
      "Cauterization",
      "Amputation",
    ],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2021,
    explanation:
      "Tadbeed refers to scarification or making multiple superficial incisions in Unani surgery, used to remove morbid matter from superficial tissues.",
  },
  {
    id: 107,
    text: "The Unani drug 'Marham-e-Dakhliyun' is used for:",
    options: [
      "Wound healing and ulcers",
      "Cardiac disorders",
      "Respiratory disorders",
      "Urinary disorders",
    ],
    correctIndex: 0,
    topic: "Jarahat",
    year: 2022,
    explanation:
      "Marham-e-Dakhliyun is a classical Unani ointment formulation used for wound healing, ulcers, and skin conditions.",
  },
  {
    id: 108,
    text: "According to Unani surgery, 'Waram-e-Balghami' (phlegmatic swelling) is characterized by:",
    options: [
      "Hot, red, and painful swelling",
      "Cold, white, soft, and painless swelling",
      "Hard and fixed swelling",
      "Fluctuant and tender swelling",
    ],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2023,
    explanation:
      "Waram-e-Balghami (phlegmatic swelling) is characterized by cold, white, soft, and relatively painless swelling due to accumulation of Balgham (phlegm).",
  },

  // Ilmul Qabalat – additional
  {
    id: 109,
    text: "The Unani term 'Isqat' refers to:",
    options: [
      "Normal delivery",
      "Abortion/miscarriage",
      "Premature delivery",
      "Caesarean section",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2016,
    explanation:
      "Isqat refers to abortion or miscarriage in Unani obstetrics, which can be spontaneous or induced.",
  },
  {
    id: 110,
    text: "According to Unani medicine, 'Wiladat-e-Maqloob' refers to:",
    options: [
      "Normal vertex delivery",
      "Breech presentation delivery",
      "Caesarean delivery",
      "Forceps delivery",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2017,
    explanation:
      "Wiladat-e-Maqloob refers to breech presentation delivery in Unani obstetrics, where the baby is delivered feet or buttocks first.",
  },
  {
    id: 111,
    text: "The Unani drug 'Muqawwi-e-Rahim' is used to:",
    options: [
      "Promote lactation",
      "Strengthen the uterus",
      "Promote menstruation",
      "Prevent miscarriage",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2018,
    explanation:
      "Muqawwi-e-Rahim refers to uterine tonic drugs in Unani medicine that strengthen the uterus and are used for uterine weakness.",
  },
  {
    id: 112,
    text: "The Unani term 'Haiz' refers to:",
    options: ["Pregnancy", "Menstruation", "Lactation", "Menopause"],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2019,
    explanation:
      "Haiz refers to menstruation in Unani medicine. Disorders of menstruation are classified as Ihtibas-e-Haiz (amenorrhea), Kasrat-e-Haiz (menorrhagia), etc.",
  },
  {
    id: 113,
    text: "According to Unani medicine, the formation of the fetus begins with which substance?",
    options: [
      "Menstrual blood alone",
      "Semen alone",
      "Combination of male semen and female menstrual blood",
      "Vital spirit from the heart",
    ],
    correctIndex: 2,
    topic: "Ilmul Qabalat",
    year: 2020,
    explanation:
      "According to Unani embryology, the fetus is formed by the combination of male semen (Mani) and female menstrual blood (Dam-e-Haiz), with the male providing form and the female providing matter.",
  },

  // Hifzane Sehat – additional
  {
    id: 114,
    text: "The Unani concept of 'Makool wa Mashroob' (food and drink) as part of Asbab-e-Sitta Zarooriya emphasizes:",
    options: [
      "Only the quantity of food",
      "Quality, quantity, and timing of food and drink",
      "Only the type of food",
      "Only the temperature of food",
    ],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2019,
    explanation:
      "Makool wa Mashroob (food and drink) as part of Asbab-e-Sitta Zarooriya emphasizes the quality, quantity, and timing of food and drink for maintaining health.",
  },
  {
    id: 115,
    text: "The Unani concept of 'Naum wa Yaqzah' (sleep and wakefulness) recommends how many hours of sleep for an adult?",
    options: ["4-5 hours", "6-8 hours", "9-10 hours", "10-12 hours"],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2020,
    explanation:
      "According to Unani medicine, 6-8 hours of sleep is recommended for an adult to maintain health and restore vital energy.",
  },
  {
    id: 116,
    text: "The Unani preventive measure 'Tadbeer-e-Mufrid' refers to:",
    options: [
      "Preventive measures for the whole body",
      "Preventive measures for individual organs",
      "Preventive measures for specific seasons",
      "Preventive measures for specific age groups",
    ],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2021,
    explanation:
      "Tadbeer-e-Mufrid refers to preventive measures for individual organs in Unani medicine, as opposed to Tadbeer-e-Kulliya for the whole body.",
  },
  {
    id: 117,
    text: "According to Unani medicine, the ideal time for Hammam (bath) is:",
    options: [
      "Early morning before breakfast",
      "After a full meal",
      "When the body is in a state of moderate warmth",
      "Late at night",
    ],
    correctIndex: 2,
    topic: "Hifzane Sehat",
    year: 2022,
    explanation:
      "According to Unani medicine, the ideal time for Hammam (bath) is when the body is in a state of moderate warmth, neither too hot nor too cold.",
  },

  // Tahaffuzi wa Samaji Tib – additional
  {
    id: 118,
    text: "The Unani concept of 'Fasad-e-Hawa' (corruption of air) is related to which modern concept?",
    options: [
      "Water pollution",
      "Air pollution and miasmatic theory of disease",
      "Food contamination",
      "Soil pollution",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2018,
    explanation:
      "Fasad-e-Hawa (corruption of air) in Unani medicine is related to the miasmatic theory of disease and air pollution, which was considered a major cause of epidemic diseases.",
  },
  {
    id: 119,
    text: "The Unani approach to community health is based on which principle?",
    options: [
      "Individual treatment only",
      "Collective health through environmental and social measures",
      "Surgical intervention",
      "Pharmacological treatment only",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2019,
    explanation:
      "The Unani approach to community health is based on collective health through environmental measures (Islah-e-Hawa, Islah-e-Maa), social measures, and preventive regimens.",
  },
  {
    id: 120,
    text: "The Unani term 'Hifzane Sehat' literally means:",
    options: [
      "Treatment of disease",
      "Preservation of health",
      "Diagnosis of disease",
      "Rehabilitation of patients",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2020,
    explanation:
      "Hifzane Sehat literally means 'preservation of health' in Unani medicine, encompassing all preventive and promotive health measures.",
  },
  {
    id: 121,
    text: "According to Unani medicine, 'Islah-e-Maa' (purification of water) is important for preventing:",
    options: [
      "Respiratory diseases",
      "Waterborne diseases and epidemics",
      "Skin diseases",
      "Cardiac diseases",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2021,
    explanation:
      "Islah-e-Maa (purification of water) is important for preventing waterborne diseases and epidemics in Unani preventive medicine.",
  },
  {
    id: 122,
    text: "The Unani concept of 'Quarantine' for epidemic diseases is mentioned in which classical text?",
    options: [
      "Kitab al-Hawi",
      "Al-Qanun fil Tib (Canon of Medicine)",
      "Zakhira-e-Khwarazm Shahi",
      "Makhzan-ul-Advia",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2022,
    explanation:
      "The concept of quarantine and isolation for epidemic diseases is mentioned in Al-Qanun fil Tib (Canon of Medicine) by Ibn Sina (Avicenna).",
  },
  {
    id: 123,
    text: "The Unani preventive measure for Waba (epidemic) includes all EXCEPT:",
    options: [
      "Islah-e-Hawa (purification of air)",
      "Use of Tiryaq (antidotes)",
      "Isolation of patients",
      "Excessive physical exercise",
    ],
    correctIndex: 3,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2023,
    explanation:
      "Excessive physical exercise is NOT a preventive measure for Waba (epidemic). Prevention includes Islah-e-Hawa, use of Tiryaq, isolation, and dietary measures.",
  },
  {
    id: 124,
    text: "The Unani concept of 'Umr' (age) as a factor in health maintenance recognizes how many stages of life?",
    options: ["Three", "Four", "Five", "Six"],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2024,
    explanation:
      "Unani medicine recognizes four stages of life (Umr): Sibyan (childhood), Shabab (youth), Wuqoof (middle age), and Shuyukh (old age), each requiring different preventive measures.",
  },
  {
    id: 125,
    text: "The Unani term 'Tadbeer-e-Mausim' refers to:",
    options: [
      "Dietary regimen",
      "Seasonal regimen for health maintenance",
      "Exercise regimen",
      "Sleep regimen",
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2025,
    explanation:
      "Tadbeer-e-Mausim refers to seasonal regimen in Unani medicine — specific dietary, lifestyle, and therapeutic measures recommended for each season to maintain health.",
  },

  // More Kulliyat questions
  {
    id: 126,
    text: "The Unani term 'Manafiz' refers to:",
    options: [
      "Organs of the body",
      "Channels/pores through which matter passes",
      "Vital spirits",
      "Humours",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Manafiz refers to channels or pores in Unani medicine through which matter (including humours and waste products) passes in and out of the body.",
  },
  {
    id: 127,
    text: "According to Unani medicine, 'Sauda' (Black Bile) is associated with which season?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Sauda (Black Bile) is associated with Autumn season. It is cold and dry in temperament, similar to the autumn season.",
  },
  {
    id: 128,
    text: "The Unani concept of 'Tabiyat-e-Mudabbira-e-Badan' refers to:",
    options: [
      "The soul",
      "The governing nature that manages the body",
      "The temperament",
      "The vital force",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2016,
    explanation:
      "Tabiyat-e-Mudabbira-e-Badan refers to the governing nature that manages and regulates all bodily functions in Unani medicine.",
  },
  {
    id: 129,
    text: "In Unani medicine, the concept of 'Istifragh' (evacuation) includes all EXCEPT:",
    options: ["Defecation", "Urination", "Sweating", "Respiration"],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2017,
    explanation:
      "Respiration is not classified under Istifragh (evacuation) in Unani medicine. Istifragh includes defecation, urination, sweating, vomiting, and menstruation.",
  },
  {
    id: 130,
    text: "The Unani term 'Mizaj-e-Haar Ratab' describes a temperament that is:",
    options: ["Hot and Dry", "Hot and Moist", "Cold and Dry", "Cold and Moist"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2018,
    explanation:
      "Mizaj-e-Haar Ratab describes a Hot and Moist temperament in Unani medicine, associated with the Dam (Blood) humour and Spring season.",
  },

  // More Ilmul Advia questions
  {
    id: 131,
    text: "The Unani drug 'Tukhm-e-Hulba' (Trigonella foenum-graecum) is primarily used for:",
    options: [
      "Cardiac disorders",
      "Diabetes and digestive disorders",
      "Respiratory disorders",
      "Skin diseases",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2016,
    explanation:
      "Tukhm-e-Hulba (Fenugreek seeds) is primarily used for diabetes, digestive disorders, and as a galactagogue in Unani medicine.",
  },
  {
    id: 132,
    text: "The Unani drug 'Kalonji' (Nigella sativa) is described in Hadith as a cure for:",
    options: [
      "Only fever",
      "Everything except death",
      "Only digestive disorders",
      "Only skin diseases",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2017,
    explanation:
      "Kalonji (Nigella sativa/Black seed) is described in Hadith as a cure for everything except death (Maut). It has wide therapeutic applications in Unani medicine.",
  },
  {
    id: 133,
    text: "The Unani term 'Musakkin-e-Alam' refers to drugs that:",
    options: [
      "Promote digestion",
      "Relieve pain",
      "Promote urination",
      "Promote sweating",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2018,
    explanation:
      "Musakkin-e-Alam refers to analgesic or pain-relieving drugs in Unani medicine.",
  },
  {
    id: 134,
    text: "The botanical source of 'Tukhm-e-Gazar' in Unani medicine is:",
    options: [
      "Daucus carota",
      "Coriandrum sativum",
      "Foeniculum vulgare",
      "Carum carvi",
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2019,
    explanation:
      "Tukhm-e-Gazar refers to the seeds of Daucus carota (Carrot). They are used as a diuretic and for urinary disorders in Unani medicine.",
  },
  {
    id: 135,
    text: "The Unani drug 'Abresham' (silk) is used primarily as:",
    options: ["Purgative", "Cardiac and brain tonic", "Diuretic", "Emetic"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2020,
    explanation:
      "Abresham (silk) is used as a cardiac and brain tonic (Muqawwi-e-Qalb wa Dimagh) in Unani medicine.",
  },
  {
    id: 136,
    text: "The Unani term 'Muqawwi-e-Meda' refers to drugs that:",
    options: [
      "Strengthen the liver",
      "Strengthen the stomach",
      "Strengthen the heart",
      "Strengthen the brain",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Muqawwi-e-Meda refers to gastric tonic drugs that strengthen the stomach and improve its digestive function in Unani medicine.",
  },
  {
    id: 137,
    text: "The Unani drug 'Zafraan' (Crocus sativus/Saffron) is primarily classified as:",
    options: [
      "Musakkin (Sedative)",
      "Muqawwi-e-Qalb (Cardiac tonic) and Mufarrih (Exhilarant)",
      "Mushil (Purgative)",
      "Mudir-e-Baul (Diuretic)",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2022,
    explanation:
      "Zafraan (Saffron) is primarily classified as Muqawwi-e-Qalb (cardiac tonic) and Mufarrih (exhilarant/mood elevator) in Unani medicine.",
  },
  {
    id: 138,
    text: "The Unani drug 'Tukhm-e-Ispagol' (Plantago ovata) is used primarily for:",
    options: [
      "Fever",
      "Constipation and diarrhea (as a bulk laxative)",
      "Cardiac disorders",
      "Urinary disorders",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Tukhm-e-Ispagol (Psyllium husk) is used as a bulk laxative for constipation and also for diarrhea due to its mucilaginous properties.",
  },
  {
    id: 139,
    text: "The Unani drug 'Sumbul-ut-Teeb' (Nardostachys jatamansi) is primarily used for:",
    options: [
      "Digestive disorders",
      "Neurological and cardiac disorders",
      "Urinary disorders",
      "Skin diseases",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Sumbul-ut-Teeb (Spikenard) is primarily used for neurological disorders, cardiac weakness, and as a brain tonic in Unani medicine.",
  },
  {
    id: 140,
    text: "The Unani term 'Mufarrih' refers to drugs that:",
    options: [
      "Cause sedation",
      "Cause exhilaration and elevate mood",
      "Cause purgation",
      "Cause diuresis",
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Mufarrih refers to exhilarant drugs that elevate mood, strengthen the heart, and produce a sense of well-being in Unani medicine.",
  },

  // AIAPGET 2025 Official Paper Questions
  {
    id: 141,
    text: "In which of the following Seasons Diet should be minimized?",
    options: ["Rabi", "Khareef", "Shita", "Saif"],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "In Saif (summer season), diet should be minimized according to Unani medicine because the digestive power (Quwwat-e-Hazima) is weakened in summer as the internal heat disperses outward, making the body less capable of digesting heavy food.",
  },
  {
    id: 142,
    text: 'Statement I: Since the quantity of "Nutfah" is very little, hence it may disappear within no time.\nStatement II: It is the magical performance of "Balgham", which leads to this tiny particle to become a complete human body.',
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 0,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "Both statements are correct. Nutfah (semen/sperm) is indeed a very small quantity and can disappear quickly if not preserved. According to Unani embryology, Balgham (phlegm) plays a vital role in the development of Nutfah, helping it grow into a complete human body by providing the moist, sticky medium needed for cell formation.",
  },
  {
    id: 143,
    text: "Match List I with List II:\n(A) Jasha — Gas that passes from stomach through mouth\n(B) Qai — With movement of stomach, water of stomach is also expelled\n(C) Matli — Occurs before vomiting; felt that there will be movement of stomach\n(D) Tahawwo — Food etc. are not expelled out with the movement of stomach",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(III)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
    ],
    correctIndex: 1,
    topic: "Amraz Jauz Hazm",
    year: 2025,
    explanation:
      "Jasha is gas passing from stomach through mouth (belching) — (IV). Qai (vomiting) involves expulsion of stomach contents with water — (III). Matli (nausea) is the sensation before vomiting — (I). Tahawwo is stomach movement without food expulsion — (II). Correct match: A-IV, B-III, C-I, D-II.",
  },
  {
    id: 144,
    text: "Which of the following are correct about umbilical cord? (A) Battledore placenta (B) Membranous placenta (C) Vilamentous placenta (D) True knot (E) False knot",
    options: [
      "(A), (B), (C), (D) only",
      "(A), (C), (D), (E) only",
      "(B), (C), (D), (E) only",
      "(A), (B), (D), (E) only",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "Correct abnormalities associated with umbilical cord: Battledore placenta (cord at placental margin), Vilamentous placenta (cord in membranes), True knot, and False knot. Membranous placenta is a placental anomaly, not an umbilical cord abnormality. Hence A, C, D, E are correct.",
  },
  {
    id: 145,
    text: "Match the Unani scholars with their books:\n(A) Rabban Tabari (B) Zakariya Razi (C) Ibn Sina (D) Ibn Rushd\n(I) Kitab al-Kulliyat (II) Alqanun Fi-al-tibb (III) Firdaus-al-Hikmat (IV) Kitab-al-Hawi",
    options: [
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
    ],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Rabban Tabari wrote Firdaus-al-Hikmat (III) — one of the earliest medical encyclopedias. Zakariya Razi authored Kitab-al-Hawi (IV) — a monumental encyclopedia. Ibn Sina wrote Alqanun Fi-al-tibb (II) — the Canon of Medicine. Ibn Rushd authored Kitab al-Kulliyat (I) — covering general principles of medicine.",
  },
  {
    id: 146,
    text: "Statement I: Fasd (Venesection) is not permitted in any kind of fever.\nStatement II: Fasd (Venesection) is permitted by hummiyat-e-ufooniyah (infectious fevers) but not hummiyat-e-safravi (bilious fevers).",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Both statements are incorrect. Fasd (venesection) IS permitted in certain fevers — particularly hummiyat-e-dam (blood fevers) and hummiyat-e-safravi when there is plethora (excess). Statement I is wrong because Fasd can be used in some fevers. Statement II is also wrong as Fasd can be indicated in safravi fevers too when conditions are met.",
  },
  {
    id: 147,
    text: "Which of the following drug is Tuberus root?",
    options: ["Waj Turki", "Chobchini", "Saad kufi", "Reshae Bargad"],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Reshae Bargad refers to the roots of the Banyan tree (Ficus benghalensis). In Unani pharmacy, it is classified as a tuberous root preparation. Waj Turki (Acorus calamus) and Chobchini (Smilax china) are rhizomes, while Saad kufi (Cyperus rotundus) is a tuber. Reshae Bargad specifically denotes the prop/aerial roots which are the tuberous root form used medicinally.",
  },
  {
    id: 148,
    text: "Huqna (enema) with ice-cold water after hummiyat-e-muharriqa (acute/high fevers) is a type of:",
    options: [
      "Huqna-e-mus'hila (laxative enema)",
      "Huqna-e-mughazzia (nutritive enema)",
      "Huqna-e-muhallila (resolvent enema)",
      "Huqna-e-mubaddila-e-mizaj (enema which modifies temperament)",
    ],
    correctIndex: 3,
    topic: "Ilaj bil Tadbeer",
    year: 2025,
    explanation:
      "Ice-cold water enema after high fevers is Huqna-e-mubaddila-e-mizaj (temperament-modifying enema). Its purpose is to cool the body and change the hot temperament. This type of enema specifically alters the mizaj (temperament) of the body and affected organs, reducing hyperthermia in acute febrile conditions.",
  },
  {
    id: 149,
    text: "Which of the following is a type of principles of Drug action in Unani medicine?",
    options: ["Distribution", "Excretion", "Irritation", "Concentration"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Irritation (Tahyeej) is a recognized principle of drug action in Unani pharmacology. Drugs act through various principles including irritation/stimulation of tissues. Distribution and Excretion are modern pharmacokinetic terms. Concentration is a physical property. According to Unani principles, Irritation is one of the primary mechanisms by which drugs exert their effects.",
  },
  {
    id: 150,
    text: "What is the second name of Mizaj Mutadil tibbi (relative balanced temperament)?",
    options: [
      "Su-i-Mizaj",
      "Mizaj Mutadil Haqique",
      "Mizaj-e-Sanwi",
      "Ad'l Fi al-Qismat",
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Mizaj Mutadil Tibbi (relative/practical balanced temperament) is also called Ad'l Fi al-Qismat (balance in proportional distribution). This temperament is practically achievable and found in healthy humans. It is distinct from Mizaj Mutadil Haqique (true/theoretical perfect balance) which is only a philosophical ideal.",
  },
  {
    id: 151,
    text: "Which of the following is seen in case of Naum (sleep)? (A) Similar to Sukoon Nafsani (B) Excess causes Hararat (C) Excess causes Ratoobat (D) Similar to Harkate Badani (E) Excess decreases digestion",
    options: ["(A) and (C)", "(B) and (D)", "(C) and (E)", "(A) and (E)"],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Naum (sleep) is similar to Sukoon Nafsani (mental/psychic rest) — (A) correct. Its excess causes Ratoobat (moisture/dampness) leading to phlegmatic conditions — (C) correct. Sleep does not cause Hararat; excessive sleep promotes dampness not heat. Sleep is opposite to Harkate Badani (physical movement), not similar. Answer: A and C.",
  },
  {
    id: 152,
    text: "Statement I: Humma Mawaziba is that infective fever where episodes of fever occur daily.\nStatement II: There is indigestion in Humma Mawaziba; Gastric insufficiency is very specific to this fever.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Both statements are correct. Humma Mawaziba is the quotidian (daily) infective fever where fever episodes occur every day. It is also specifically characterized by indigestion and gastric insufficiency (Dua-e-Ma'ida), which is a hallmark differentiating feature of this fever type from other infective fevers.",
  },
  {
    id: 153,
    text: "Match the NSAID classes with drugs:\n(A) Pyrrolo-pyrrole derivatives (B) Propionic acid derivatives (C) Aryl-acetic acid derivatives (D) Pyrazolone derivatives\n(I) Ketoprofen (II) Oxyphenbutazone (III) Ketorolac (IV) Aceclofenac",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(I), (C)-(II), (D)-(III)",
      "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
    ],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Pyrrolo-pyrrole derivatives: Ketorolac (III). Propionic acid derivatives: Ketoprofen (I). Aryl-acetic acid derivatives: Aceclofenac (IV). Pyrazolone derivatives: Oxyphenbutazone (II). These are chemical classifications of NSAIDs. Correct answer: A-III, B-I, C-IV, D-II.",
  },
  {
    id: 154,
    text: "Statement I: Grey Turner's sign is seen in acute pancreatitis.\nStatement II: Cullen's sign is seen in subphrenic abscess.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Statement I is correct: Grey Turner's sign (flank ecchymosis/bluish discoloration) is a sign of acute hemorrhagic pancreatitis due to retroperitoneal bleeding tracking to flank. Statement II is incorrect: Cullen's sign (periumbilical bruising) is also a sign of acute pancreatitis (not subphrenic abscess). Both signs indicate severe hemorrhagic pancreatitis.",
  },
  {
    id: 155,
    text: "Which of the following drug is used as antiseptic in urine infection?",
    options: ["Kabab Cheeni", "Yabrooj", "Rewand Cheeni", "Qalai"],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Kabab Cheeni (Cubeb / Piper cubeba) is used as a urinary antiseptic in Unani medicine. It has demonstrated antimicrobial properties specific to the urinary tract and is traditionally indicated in UTI and gonorrhea. It acts as a mucosal antiseptic for the genitourinary system.",
  },
  {
    id: 156,
    text: "Ma'ur Raeb is prepared from:",
    options: ["Seed (Tukhm)", "Dahi (Curd)", "Shahad (Honey)", "Phal (Fruit)"],
    correctIndex: 1,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "Ma'ur Raeb is a Unani medicinal preparation made from Dahi (curd/yogurt). It is prepared by processing curd using specific Unani pharmaceutical techniques. This preparation is used in gastrointestinal conditions and as a nutritive medicine in Unani practice.",
  },
  {
    id: 157,
    text: "The pain that occurs in Asab Warki Azeem (sciatic nerve) is called:",
    options: ["Wajaul Warik", "Irqun Nasa", "Niqris", "Daaul Feel"],
    correctIndex: 1,
    topic: "Amraz Asab",
    year: 2025,
    explanation:
      "Irqun Nasa is the Unani term for sciatica — pain along the course of Asab Warki Azeem (sciatic nerve). The pain radiates from the lumbar region through the buttock and down the leg. Wajaul Warik is hip joint pain, Niqris is gout (podagra), and Daaul Feel is elephantiasis (lymphedema).",
  },
  {
    id: 158,
    text: "How did Allama Najeebuddin Samarqandi classify the Hummiyat (fevers)?",
    options: [
      "Humma Yaum, Humma Diq and Humma Ufooni",
      "Humma Ufooni and Ghair Ufooni",
      "Humma Diq, Humma Ufooni and Humma Tafeeha",
      "Humma Saleema and Humma Khabeesa",
    ],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Allama Najeebuddin Samarqandi classified Hummiyat into three types: Humma Yaum (ephemeral fever — lasts one day, arising from spirits/ruh), Humma Diq (hectic fever — arising from solid organs/azae raisa), and Humma Ufooni (putrid/infective fever — arising from humors/akhlat). This classification is from his famous work Aghraz-al-Tibb.",
  },
  {
    id: 159,
    text: "Statement I: The primary cause of myocardial infarction is rupture of an atherosclerotic plaque in a coronary artery.\nStatement II: Cardiac troponins lack specificity for myocardial infarction and can also be elevated in conditions such as pulmonary embolism.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 0,
    topic: "Amraz Qalb wa Awiye Damawiya",
    year: 2025,
    explanation:
      "Both statements are correct. MI is primarily caused by atherosclerotic plaque rupture leading to thrombus formation and coronary occlusion (Statement I correct). Cardiac troponins (cTnI and cTnT) are highly sensitive but not completely specific — they are also elevated in pulmonary embolism, myocarditis, renal failure, sepsis (Statement II correct).",
  },
  {
    id: 160,
    text: "Attraction of WBCs towards the injured tissue occurs by:",
    options: ["Ameboid movement", "Phagocytosis", "Diapedesis", "Chemotaxis"],
    correctIndex: 3,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Chemotaxis is the directional movement of WBCs towards chemical attractants (chemokines, C5a, IL-8, LTB4) released at the injury/infection site. Ameboid movement is the locomotion mechanism WBCs use. Diapedesis is extravasation through vessel walls. Phagocytosis is engulfment of pathogens. The attraction/homing signal is chemotaxis.",
  },
  {
    id: 161,
    text: "Alamat of Ghalba Sawda excludes:",
    options: [
      "Sozish at Fam Me'da",
      "Ghilzat Dam",
      "Excessive Fikr",
      "Polydepsia",
    ],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Ghalba Sawda (dominance of black bile) causes symptoms like Ghilzat Dam (thick/dense blood), Excessive Fikr/Waswas (melancholy, obsessive thinking), Polydepsia (due to dryness of sawda temperament), fear, sadness, and Su-ul-Fikr. Sozish at Fam Me'da (burning sensation at the mouth of stomach) is a symptom of Ghalba Safra (yellow bile dominance), not Sawda, because Safra has hot temperament causing burning sensations. Hence Sozish at Fam Me'da is excluded from Ghalba Sawda.",
  },
  {
    id: 162,
    text: "Which one of the following is very useful investigation for small bowel disease?",
    options: [
      "Barium meal follow through",
      "NCCT abdomen",
      "Capsule endoscopy",
      "Ultrasonography",
    ],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Capsule endoscopy is the most useful investigation for small bowel disease. The patient swallows a small camera-capsule that takes thousands of images traversing the GI tract. It is particularly useful for obscure GI bleeding, Crohn's disease, small bowel tumors, and polyps — conditions difficult to visualize by conventional endoscopy or barium studies. Barium meal follow through is older and less sensitive; NCCT misses mucosal lesions; USG has limited small bowel utility.",
  },
  {
    id: 163,
    text: "Khameera is prepared by the following sequence:\n(A) Qiwam is stirred vigorously\n(B) Preparation of Joshanda of crude drugs\n(C) Addition of Aromatic drugs like Musk, Amber Zafran in luke warm Qiwam\n(D) Joshanda is prepared in Qiwam form\n(E) Mixing of powder of madni drugs in khamira",
    options: [
      "(B), (D), (C), (A), (E)",
      "(C), (B), (D), (E), (A)",
      "(A), (B), (C), (D), (E)",
      "(A), (E), (D), (B), (C)",
    ],
    correctIndex: 0,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "The correct sequence for preparation of Khameera: (B) Joshanda (decoction) of crude drugs is prepared first → (D) Joshanda is concentrated into Qiwam (syrup) form → (C) Aromatic drugs like Musk, Amber, Zafran are added in lukewarm Qiwam → (A) Qiwam is stirred vigorously for uniform mixing → (E) Powders of madni (mineral) drugs are mixed into the khamira. This sequence ensures heat-sensitive aromatics are not destroyed and minerals are uniformly dispersed.",
  },
  {
    id: 164,
    text: "Following are correct statements related to Spleen:\n(A) Spleen is normally Non-palpable.\n(B) Spleen has to enlarge 2 to 3 times its usual size to become palpable.\n(C) Enlargement takes place in a inferior and anterior direction before it becomes palpable subcostally.\n(D) Once the spleen has become palpable, the direction of further enlargement is downwards and towards the right iliac fossa.",
    options: [
      "(A), (B) and (C) only",
      "(A), (B) and (D) only",
      "(A), (C) and (D) only",
      "(B), (C) and (D) only",
    ],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Correct statements about spleen: (A) TRUE — Spleen is normally non-palpable as it lies under the left costal margin. (B) TRUE — Spleen must enlarge 2-3 times its normal size before becoming palpable subcostally. (D) TRUE — Once palpable, further splenic enlargement proceeds downward and toward the right iliac fossa following the direction of the 9th rib. Statement (C) is incorrect: splenic enlargement takes place in an inferomedial direction (not inferior and anterior), following the line of the 9th rib.",
  },
  {
    id: 165,
    text: "Shrapnell's Membrane is situated:",
    options: [
      "Situated above the lateral process of malleus between notch of Rivinus notch and anterior, posterior malleal fold",
      "Situated above the medial process of malleus between notch of Tympanic membrane",
      "Situated above the lateral and inferior process of pass (PARS) Tensa and Umbo",
      "Situated above the medial process of malleus between notch of Pinna and Pars Tensa with Umbo",
    ],
    correctIndex: 0,
    topic: "Amraz Uzn wa Anf wa Halaq",
    year: 2025,
    explanation:
      "Shrapnell's membrane (Pars Flaccida) is the small, triangular, lax portion of the tympanic membrane. It is situated above the lateral process of the malleus, between the notch of Rivinus (Incisura tympanica) superiorly and the anterior and posterior malleal folds inferiorly. It is called 'flaccida' because it lacks the fibrous layer present in Pars Tensa, making it lax. It is clinically important as attic cholesteatoma originates from this area.",
  },
  {
    id: 166,
    text: 'Statement I: Ibn Nafis wrote the "talkhees" of Abul Hasan Ali bin Sahl book "Firdus al-Hikmat" by the name of "Mojaz-al-Qanun".\nStatement II: Nafis bin Auz Kirmani wrote the "Sharah" of "Mojaz-al-Qanun", which became popular by the name "Sharah Nafisi".',
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Statement I is INCORRECT: Ibn Nafis wrote Mojaz-al-Qanun as a summary of Ibn Sina's Al-Qanun Fi al-Tibb (not of Firdus al-Hikmat which was written by Ali ibn Rabban al-Tabari). Statement II is CORRECT: Nafis bin Auz Kirmani (15th century) wrote a detailed commentary (Sharah) on Mojaz-al-Qanun, which became famous as 'Sharah Nafisi' and is an important reference in Unani medicine.",
  },
  {
    id: 167,
    text: "Choose the correct answer from the options given below:\n(A) Patch testing is the investigation of choice for delayed, cell-mediated, type IV hypersensitivity reactions to topical agents.\n(B) Patch testing investigates delayed hypersensitivity reactions to a topically applied agent.\n(C) Potential allergens are applied as patches to the back under occlusion for 48 hours.\n(D) After 48 hours the patches are removed and readings are undertaken at time points of up to 7 days, typical being at 96 hours.\n(E) Important to determine clinical relevance of allergic reactions before giving avoidance advice.",
    options: [
      "(B), (C), (D), (E)",
      "(A), (C), (D), (E)",
      "(B), (C), (D)",
      "(A), (C), (D)",
    ],
    correctIndex: 1,
    topic: "Amraz Jild",
    year: 2025,
    explanation:
      "Correct statements about patch testing: (A) TRUE — patch test is gold standard for Type IV (delayed/cell-mediated) hypersensitivity to topical agents (contact dermatitis). (C) TRUE — allergens applied to upper back under occlusion for 48 hours. (D) TRUE — patches removed at 48 hrs, readings taken at 96 hrs (and up to 7 days) to capture delayed reactions. (E) TRUE — determining clinical relevance is essential before avoidance advice. Statement (B) is less specific than (A). Correct combination: A, C, D, E.",
  },
  {
    id: 168,
    text: "According to Jalinus (Galen), which are those two organs whose temperament is in accordance with the composition of Body?",
    options: [
      "Qalb, Kabid",
      "Qalb, Dimagh",
      "Kabid, Dimagh",
      "Qalb, Khusyatain",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "According to Jalinus (Galen), Qalb (heart) and Dimagh (brain) are the two principal organs (Azae Raisa) whose temperament corresponds to the overall temperament/composition of the body (Mizaj-e-Badan). The heart has warm and moist temperament representing vitality, while the brain has cold and moist temperament. Together, their combination reflects the body's general constitutional temperament. This concept is foundational in Unani physiology.",
  },
  {
    id: 169,
    text: "Match List I with List II (Types of Abnormal Pelvis):\n(A) Nutritional defects\n(B) Bone disease\n(C) Injured pelvis\n(D) Developmental defects",
    options: [
      "(A)-(I) Fracture, (B)-(II) Naegele's, (C)-(III) Spondylolisthesis, (D)-(IV) Rachitic",
      "(A)-(II) Naegele's, (B)-(III) Spondylolisthesis, (C)-(I) Fracture, (D)-(IV) Rachitic",
      "(A)-(IV) Rachitic, (B)-(II) Naegele's, (C)-(III) Spondylolisthesis, (D)-(I) Fracture",
      "(A)-(IV) Rachitic pelvis, (B)-(III) Spondylolisthesis, (C)-(I) Fracture of pelvis, (D)-(II) Naegele's pelvis",
    ],
    correctIndex: 3,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "Correct matching: (A) Nutritional defects → (IV) Rachitic pelvis (Vitamin D deficiency/rickets deforms the growing pelvis). (B) Bone disease → (III) Spondylolisthesis of pelvis (forward slipping of lumbar vertebra onto sacrum). (C) Injured pelvis → (I) Fracture of pelvis (direct injury). (D) Developmental defects → (II) Naegele's pelvis (congenital absence/fusion of one sacral ala, causing obliquely contracted pelvis).",
  },
  {
    id: 170,
    text: "Secondary villi are formed on:",
    options: ["13th day", "12th day", "10th day", "16th day"],
    correctIndex: 3,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "Development of chorionic villi: Primary villi (solid cytotrophoblast cores) form around day 13-14. Secondary villi form when mesoderm grows into the primary villi core around day 16. Tertiary villi form when blood vessels differentiate within the mesodermal core around day 21. Hence secondary villi are formed on approximately the 16th day of embryonic development.",
  },
  {
    id: 171,
    text: "Purpura, Petechial haemorrhages in the skin, nails and mucous membranes and splinter haemorrhages are features of which of the following condition?",
    options: [
      "Right sided heart failure",
      "Mitral Stenosis",
      "Sub-acute bacterial endocarditis",
      "Acute Pericarditis",
    ],
    correctIndex: 2,
    topic: "Amraz Qalb wa Awiye Damawiya",
    year: 2025,
    explanation:
      "Sub-acute bacterial endocarditis (SBE) classically presents with: Petechiae (skin, conjunctiva, mucous membranes), Splinter haemorrhages (linear dark streaks under nails due to microemboli), Purpura, Osler's nodes (painful nodules on finger pads), Janeway lesions (painless on palms/soles), and Roth spots (retinal haemorrhages). These result from immune complex deposition and septic microemboli from infected heart valves.",
  },
  {
    id: 172,
    text: "Which of the followings are galls?\n(A) Bussad\n(B) Mayeen\n(C) Kakda sengi\n(D) Mazoo\n(E) Zare ward",
    options: [
      "(A), (B), (C) Only",
      "(A), (C), (D) Only",
      "(C), (D), (E) Only",
      "(B), (C), (D) Only",
    ],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Galls (Afsh) are abnormal growths on plants caused by insects, fungi, or bacteria. (B) Mayeen — a type of gall from oak trees. (C) Kakda sengi — a type of gall. (D) Mazoo (Oak gall/Quercus infectoria) — the most famous gall, widely used in Unani medicine as a qabiz (astringent). Bussad (A) is coral (Marjan), not a gall. Zare ward (E) is rosebuds/petals, not a gall. Hence B, C, D are galls.",
  },
  {
    id: 173,
    text: "Which of the following medicine is specifically used in Zeequn Nafs (Asthma/Dyspnoea)?",
    options: [
      "Habbe Dabba Atfal",
      "Dawaul Mauz",
      "Intisaabi",
      "Habbe Kakda Singi",
    ],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Intisaabi is a classical Unani compound formulation specifically indicated for Zeequn Nafs (dyspnoea/asthma). It acts as a bronchodilator, expectorant, and mucolytic, helping relieve bronchospasm and clear mucus from airways. Habbe Dabba Atfal is for children's diseases. Dawaul Mauz is a general tonic. Habbe Kakda Singi is for respiratory conditions but Intisaabi is the specific drug for Zeequn Nafs.",
  },
  {
    id: 174,
    text: '"Phossy Jaw" occurs in:',
    options: [
      "Acute Arsenic Poisoning",
      "Chronic Phosphorus Poisoning",
      "Mercury Poisoning",
      "Croton Tiglium Poisoning",
    ],
    correctIndex: 1,
    topic: "Ilmul Samoom",
    year: 2025,
    explanation:
      "'Phossy Jaw' (phosphonecrosis of the jaw) is a classic occupational disease caused by chronic exposure to white/yellow phosphorus, historically seen in match factory workers. It presents with necrosis of the mandible and maxilla — the jawbone glows greenish in the dark. It is specifically associated with CHRONIC (not acute) phosphorus poisoning. Arsenic causes Mees' lines; Mercury causes erethism; Croton Tiglium is a purgative.",
  },
  {
    id: 175,
    text: "Find out the correct statement regarding Typhoid fever:\n(A) Widal test may be positive but it lacks specificity.\n(B) Lesion may be found at Peyer's patches.\n(C) Secondary bacteraemia never occurs.\n(D) Zenker's degeneration may be seen all over the abdomen.",
    options: [
      "(A), (B) and (C) only",
      "(A), (C) and (D) only",
      "(A) and (D) only",
      "(A), (B) and (D) only",
    ],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Regarding Typhoid fever: (A) TRUE — Widal test may be positive but lacks specificity due to cross-reactions with other conditions. (B) TRUE — Peyer's patches in the terminal ileum are the primary site of typhoid lesions, undergoing hyperplasia and ulceration. (C) As per the answer key provided in the question paper — this combination (A, B, C) is the accepted answer. (D) Zenker's degeneration (waxy degeneration) affects rectus abdominis muscle specifically in typhoid, not all over the abdomen, making D incorrect.",
  },
  {
    id: 176,
    text: "A very specific type of loose motion, where the reason is eruptions or ulcerations in the inner layers of the stomach, is called:",
    options: ["Maddatul Batan", "Zarab", "Khilfa", "Zalaqul Ama'a"],
    correctIndex: 0,
    topic: "Amraz Jauz Hazm",
    year: 2025,
    explanation:
      "Maddatul Batan is a specific Unani term for diarrhoea that arises specifically due to eruptions (busorat) or ulcerations in the inner mucosal layers of the stomach or intestines. This distinguishes it from: Zarab (diarrhoea due to weakness of intestinal retentive faculty), Khilfa (diarrhoea due to excess humors), and Zalaqul Ama'a (diarrhoea due to slipperiness of intestinal wall).",
  },
  {
    id: 177,
    text: "Statement I: If an organ is free of morbid matter, and there is no danger of inşibāb, then natul-e-har should be done first followed by natul-e-bārid.\nStatement II: If an organ is free of morbid matter, and there is no danger of inşibāb, then natul-e-bārid should be done first followed by natul-e-har.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 3,
    topic: "Ilaj bil Tadbeer",
    year: 2025,
    explanation:
      "In Unani Ilaj bil Tadbeer, when an organ is free of morbid matter (khali az madda) and there is no danger of Inşibāb (absorption of morbid matter), the correct sequence is: Natul-e-Barid (cold affusion) FIRST followed by Natul-e-Har (hot affusion). Cold water first constricts vessels and prevents inşibāb; hot water subsequently relaxes and promotes circulation. Statement I reverses this sequence, so Statement I is incorrect and Statement II is correct.",
  },
  {
    id: 178,
    text: "Which of the following local Anaesthetics has low potency, short duration action?",
    options: ["Procaine", "Lignocaine", "Prilocaine", "Tetracaine"],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Procaine (Novocaine) is the oldest synthetic local anaesthetic with LOW potency and SHORT duration of action (30-60 minutes). It is rapidly hydrolyzed by plasma cholinesterases. Lignocaine has intermediate potency and duration. Prilocaine has intermediate potency and duration. Tetracaine has HIGH potency and LONG duration — used for spinal and topical anaesthesia. Procaine's short-acting, low-potency profile makes it the correct answer.",
  },
  {
    id: 179,
    text: "Which degree of artificial heat is recommended in drying of leaves and flowers?",
    options: [
      "10-20 Degree Centigrade",
      "60-70 Degree Centigrade",
      "30-40 Degree Centigrade",
      "80-90 Degree Centigrade",
    ],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "In Unani Ilmul Saidla (pharmacy), the recommended temperature for artificial drying of leaves and flowers is 30-40°C. This gentle temperature preserves volatile oils, heat-sensitive active constituents, natural colors, and aromatic properties. Higher temperatures (60-70°C or 80-90°C) are used for roots, barks, and seeds that can withstand more heat. Very low temperatures (10-20°C) are insufficient for effective drying.",
  },
  {
    id: 180,
    text: "Match List I (Gynaecological conditions) with List II (Unani drugs used):\n(A) Pruritus vulvae\n(B) Vaginitis\n(C) Pelvic Inflammatory Disease (PID)\n(D) Dysmenorrhea and Amenorrhea",
    options: [
      "(A)-(I) Rasaut/Sandal Surkh/Kafoor/Phitkari, (B)-(III) Sibr saqutari/Heera kasees/Zafran, (C)-(IV) Gule Neem/Giloe/Sarphookah, (D)-(II) Tukhm methi/Kanocha/Alsi/Aspaghol",
      "(A)-(I), (B)-(II), (C)-(IV), (D)-(III)",
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(II)",
    ],
    correctIndex: 0,
    topic: "Amraz Niswan",
    year: 2025,
    explanation:
      "Correct matching: (A) Pruritus vulvae → Rasaut, Sandal Surkh, Kafoor, Phitkari (astringent, cooling, antiseptic drugs for vulval itching). (B) Vaginitis → Sibr saqutari zard, Heera kasees, Zafran Kashmiri (antimicrobial, anti-inflammatory). (C) PID → Gule Neem, Giloe sabz, Sarphookah, Gule Mundi, Barg-e-Shahtarah (anti-inflammatory, immunomodulatory). (D) Dysmenorrhea/Amenorrhea → Tukhm methi, Tukhm Kanocha, Alsi, Tukhm Khatmi, Aspaghol, Murdarsang (emmenagogues and uterine tonics).",
  },
  {
    id: 181,
    text: '"Urine is red like fluid of flesh and usually there is backache and lower back pain" is found in:',
    options: [
      "Huzaal-e-Kulya",
      "Zoaf-e-Kulya",
      "Waram-e-Kulya",
      "Reehul Kulya",
    ],
    correctIndex: 2,
    topic: "Amraz Kulya wa Masana",
    year: 2025,
    explanation:
      "Waram-e-Kulya (inflammation/nephritis of kidney) presents with: urine that is red/blood-tinged resembling meat washings (haematuria), accompanied by backache and lower back pain (lumbar pain). This is the classical Unani description of kidney inflammation. Huzaal-e-Kulya = renal wasting/atrophy; Zoaf-e-Kulya = renal weakness (functional); Reehul Kulya = renal colic with gas.",
  },
  {
    id: 182,
    text: '"The stool reverts back to Stomach and expelled out in vomiting" is typically found in:',
    options: ["Qoolanj", "Eilaaoos", "Maghas", "Zaheer"],
    correctIndex: 1,
    topic: "Amraz Jauz Hazm",
    year: 2025,
    explanation:
      "Eilaaoos (Ileus) in Unani medicine refers to intestinal obstruction where fecal matter regurgitates backward into the stomach and is expelled through vomiting (feculent vomiting — a classic sign of mechanical or paralytic ileus). Qoolanj is colic without fecal vomiting; Maghas is tympanites/bloating; Zaheer is dysentery (mucus and blood in stool with tenesmus).",
  },
  {
    id: 183,
    text: "In involution, uterus reaches to non-pregnant stage at:",
    options: ["2nd week", "3rd week", "4th week", "6th week"],
    correctIndex: 3,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "Uterine involution timeline: immediately after delivery ~1000g; end of 1st week ~500g; 2nd week ~300g; 6th week returns to normal non-pregnant size (~60-80g). Complete involution, where the uterus reaches its pre-pregnant state, occurs by the 6th week postpartum. This is a well-established obstetric fact.",
  },
  {
    id: 184,
    text: "At birth the normal Umbilical cord contains:",
    options: [
      "Vitelline duct",
      "Two Umbilical arteries + One Umbilical vein",
      "Two Umbilical veins + One Umbilical artery",
      "The ductus venosus only",
    ],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "At birth, the normal umbilical cord contains TWO umbilical arteries (carrying deoxygenated blood from fetus to placenta) and ONE umbilical vein (carrying oxygenated blood from placenta to fetus), all embedded in Wharton's jelly. Remembered as '2 arteries, 1 vein'. A single umbilical artery is associated with congenital anomalies. The vitelline duct and ductus venosus are separate structures not present in the cord at birth.",
  },
  {
    id: 185,
    text: "Stages of clinical features of acute suppurative otitis media in correct sequence:\n(A) Stage of Perforation\n(B) Stage of Healing\n(C) Stage of Exudation\n(D) Stage of Hyperaemia\n(E) Stage of Complication",
    options: [
      "(D), (C), (A), (E), (B)",
      "(D), (C), (A), (B), (E)",
      "(C), (D), (A), (B), (E)",
      "(D), (A), (C), (B), (E)",
    ],
    correctIndex: 1,
    topic: "Amraz Uzn wa Anf wa Halaq",
    year: 2025,
    explanation:
      "Acute Suppurative Otitis Media (ASOM) progresses through five classic stages: (D) Stage of Hyperaemia — initial congestion and redness of TM; (C) Stage of Exudation — fluid accumulation, bulging TM; (A) Stage of Perforation — spontaneous TM rupture with purulent discharge; (B) Stage of Healing — TM heals if treated; (E) Stage of Complication — if untreated, complications like mastoiditis occur. Sequence: D → C → A → B → E.",
  },
  {
    id: 186,
    text: "Causes of pruritus in pregnancy:\n(A) PUPPP\n(B) Acute cholestasis\n(C) Pemphigoid gestationis\n(D) Prurigo gestationis\n(E) Pruritic folliculitis",
    options: [
      "(A), (B), (C), (D), (E) only",
      "(A), (B), (C), (D) only",
      "(A), (C), (D), (E) only",
      "(B), (C), (D), (E) only",
    ],
    correctIndex: 0,
    topic: "Ilmul Qabalat",
    year: 2025,
    explanation:
      "All five are recognized causes of pruritus specific to pregnancy: (A) PUPPP (Pruritic Urticarial Papules and Plaques of Pregnancy) — most common, 3rd trimester; (B) Intrahepatic cholestasis of pregnancy — intense pruritus, risk of fetal distress; (C) Pemphigoid gestationis — autoimmune blistering disorder; (D) Prurigo gestationis — excoriated papules; (E) Pruritic folliculitis of pregnancy — follicular pustules. All A-E are dermatoses of pregnancy causing pruritus.",
  },
  {
    id: 187,
    text: "In which condition Cyanosis is NOT seen in the mucous membrane of the mouth?",
    options: [
      "Pulmonary oedema",
      "Patent Ductus Arteriosus",
      "Tetralogy of Fallot",
      "Cold exposure",
    ],
    correctIndex: 3,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Central cyanosis (visible in mucous membranes of mouth and tongue) occurs with reduced arterial O2 saturation: Pulmonary oedema causes hypoxaemia → central cyanosis. PDA with Eisenmenger's → right-to-left shunt → central cyanosis. Tetralogy of Fallot → right-to-left shunt → central cyanosis. Cold exposure causes peripheral vasoconstriction and PERIPHERAL cyanosis in extremities only — arterial oxygen saturation remains normal, so mucous membranes of mouth stay pink (no central cyanosis).",
  },
  {
    id: 188,
    text: "Identify the sequence of strong effect to weak effect of drug action:\n(A) Muhammir\n(B) Muqarrih\n(C) Munaffit\n(D) Lādhi'\n(E) Mubaththir",
    options: [
      "(A), (B), (C), (D), (E)",
      "(E), (D), (A), (C), (B)",
      "(B), (C), (A), (D), (E)",
      "(C), (B), (D), (A), (E)",
    ],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "In Unani pharmacology, the sequence from STRONGEST to WEAKEST local drug effect: (B) Muqarrih (ulcerant/corrosive — strongest, causes ulceration) → (C) Munaffit (vesicant — causes blisters) → (A) Muhammir (rubefacient — causes redness) → (D) Lādhi' (irritant — mild irritation) → (E) Mubaththir (prurient — weakest, causes itching). This classical hierarchy from Ibn Sina's Qanun describes graduated intensity of locally acting drugs.",
  },
  {
    id: 189,
    text: "Which among the condition is related to Milk Hygiene?\n(A) Q-Fever\n(B) Y-Fever\n(C) Salmonellosis\n(D) Brucellosis\n(E) Byssinosis",
    options: [
      "(A), (B), (C), (D) Only",
      "(A), (C), (D) Only",
      "(A), (B), (D), (E) Only",
      "(B), (C), (D), (E) Only",
    ],
    correctIndex: 1,
    topic: "Amraz Amma",
    year: 2025,
    explanation:
      "Milk-borne diseases: (A) Q-Fever (Coxiella burnetii) — transmitted via raw/unpasteurized milk from infected cattle/goats. (C) Salmonellosis — Salmonella contamination of milk and dairy products. (D) Brucellosis (Undulant fever) — classic milk-borne disease from Brucella in raw milk. 'Y-Fever' (B) is not a recognized medical condition. Byssinosis (E) is an occupational lung disease from cotton/flax dust inhalation — no relation to milk. Hence A, C, D only.",
  },
  {
    id: 190,
    text: "Which of the following drugs have cold and dry temperament?\n(A) Asrol\n(B) Turb\n(C) Gajar\n(D) Kishneez\n(E) Jozmasal",
    options: [
      "(A), (B), (C) Only",
      "(B), (D), (E) Only",
      "(A), (D), (E) Only",
      "(A), (B), (D) Only",
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Temperament (Mizaj) of drugs: (A) Asrol (Rauwolfia serpentina) — cold and dry; used for hypertension. (D) Kishneez (Coriander) — cold and dry; used as carminative, antipyretic. (E) Jozmasal (Nutmeg) — cold and dry in classical Unani texts. (B) Turb (Radish) — hot and dry temperament. (C) Gajar (Carrot) — hot and moist temperament. Drugs with cold and dry mizaj: A, D, E.",
  },
  {
    id: 191,
    text: "How many coats (tunics) does the eyeball have?",
    options: ["3", "6", "9", "12"],
    correctIndex: 0,
    topic: "Amraz Ayn",
    year: 2025,
    explanation:
      "The eyeball has THREE concentric coats/tunics: (1) Outer fibrous coat — Cornea (anterior 1/6th) and Sclera (posterior 5/6th); (2) Middle vascular coat (Uveal tract) — Choroid, Ciliary body, and Iris; (3) Inner nervous coat — the Retina (containing rods and cones). These three layers enclose the lens, vitreous, and aqueous humour. This is fundamental ophthalmic anatomy.",
  },
  {
    id: 192,
    text: "Complications of Stapedectomy:",
    options: [
      "Frontal Headache and Nasal obstruction",
      "Headache and Otalgia",
      "Incus dislocation and Vertigo",
      "Vertigo and Epistaxis",
    ],
    correctIndex: 2,
    topic: "Amraz Uzn wa Anf wa Halaq",
    year: 2025,
    explanation:
      "Stapedectomy (removal of stapes for otosclerosis) complications include: Incus dislocation — during ossicular chain manipulation, the incus may get dislocated causing conductive hearing loss. Vertigo — post-operative vertigo is common due to labyrinthine irritation or perilymph fistula. Other complications include perilymph gusher, sensorineural hearing loss, facial nerve injury, and tinnitus. Frontal headache, nasal obstruction, and epistaxis are not complications of stapedectomy.",
  },
  {
    id: 193,
    text: "Sharyanj, Surji, Shahdi, Rous-i-ibrah, Ajir are types of:",
    options: ["Favus", "Scabies", "Leprosy", "Tinea"],
    correctIndex: 0,
    topic: "Amraz Jild",
    year: 2025,
    explanation:
      "In Unani Ilmul Amraz, Favus (Qaraʿ) is a fungal infection of the scalp characterized by scutula (cup-shaped crusts). Unani scholars classified different types of Favus including: Sharyanj, Surji, Shahdi (honey-colored), Rous-i-ibrah (needle-point type), and Ajir — all being clinical variants distinguished by appearance, color, and pattern of scalp lesions. This classification is from classical Unani dermatology.",
  },
  {
    id: 194,
    text: "Most common site of carcinoma of stomach is:",
    options: [
      "Pyloric region",
      "Body of stomach",
      "Fundus",
      "Oesophagogastric junction",
    ],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "The pyloric region (pylorus and pyloric antrum) is the most common site of gastric carcinoma, accounting for approximately 50-60% of cases. The incisura angularis and lesser curvature are also common sites. The body accounts for ~20%, and cardia/OG junction for 10-20%. In Indian studies and traditional teaching, pyloric region remains the most common site.",
  },
  {
    id: 195,
    text: "'Burooze Rahem' is also called as:",
    options: [
      "Mailan-e-Rahem",
      "Unq-ur-Rahem",
      "Zalaq-ur-Rahem",
      "Ekhtenaq-ur-Rahem",
    ],
    correctIndex: 2,
    topic: "Amraz Niswan",
    year: 2025,
    explanation:
      "Burooze Rahem (uterine prolapse) in Unani gynecology is also called Zalaq-ur-Rahem (slipping/sliding of the uterus — descent and protrusion through the vaginal opening). Mailan-e-Rahem = uterine version/displacement (tipping sideways or forward/backward). Unq-ur-Rahem = cervix uteri (neck of uterus — an anatomical term, not a disease). Ekhtenaq-ur-Rahem = uterine suffocation/hysteria (a different condition).",
  },
  {
    id: 196,
    text: "Which statement about the vestibule of Nose is correct?\n(A) Anterior and inferior part contains sebaceous glands, hair follicles and vibrissae.\n(B) Posterior and Lateral part contains sweat glands.\n(C) Anterior and inferior part called frontal sinus.",
    options: [
      "(A) and (B) only",
      "(B) and (C) only",
      "(A) and (C) only",
      "(A) only",
    ],
    correctIndex: 3,
    topic: "Amraz Uzn wa Anf wa Halaq",
    year: 2025,
    explanation:
      "The vestibule of the nose (most anterior part of nasal cavity, lined by keratinized squamous epithelium): Only Statement (A) is correct — the anterior and inferior part contains sebaceous glands, hair follicles, and vibrissae (coarse hairs filtering inhaled particles). Statement (B) is incorrect — there are no sweat glands in the posterior/lateral vestibule. Statement (C) is incorrect — the frontal sinus is a separate paranasal sinus in the frontal bone, not part of the vestibule.",
  },
  {
    id: 197,
    text: "Motadil (normal/moderate) condition of which indicator of pulse is NOT considered normal (Tabayee)?",
    options: [
      "Miqdaar-e-Imbisaat",
      "Kaifiyat-e-Qara'a",
      "Khalaa wa Imtila",
      "Zamana Harkat",
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "In Unani pulse examination (Ilm-ul-Nabz), Kaifiyat-e-Qara'a (quality of striking force — hardness/softness) — when this is Motadil (moderate/intermediate between hard and soft), it is NOT considered the ideal Tabayee (physiological normal) condition. Other pulse parameters like Miqdaar-e-Imbisaat (size), Khalaa wa Imtila (emptiness/fullness), and Zamana Harkat (timing) all have recognized Motadil states that are considered Tabayee/normal.",
  },
  {
    id: 198,
    text: 'The temperament of "Balgham-i-Hamiz" (Sour Phlegm) inclines towards:',
    options: [
      "Hotness and Dryness",
      "Hotness and Moistness",
      "Coldness and Dryness",
      "Coldness and Moistness",
    ],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Balgham (phlegm) has a basically cold and moist temperament. Balgham-i-Hamiz (sour/acidic phlegm) has undergone fermentation/souring, which changes its character — the moistness decreases and dryness increases due to fermentation while retaining its cold quality. Hence Balgham-i-Hamiz inclines towards COLDNESS and DRYNESS (Sard aur Khushk). The sourness indicates fermentative change reducing normal moisture.",
  },
  {
    id: 199,
    text: "Which receptor of hormone is situated in nucleus?",
    options: [
      "Adrenal medullary hormone",
      "Cortisol",
      "Parathormone",
      "Thyroid hormone",
    ],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Hormone receptors by location: Cell membrane — peptide hormones (insulin, PTH), catecholamines (adrenaline from adrenal medulla). Cytoplasmic (then translocate to nucleus) — steroid hormones (cortisol, aldosterone, sex steroids). Nuclear (directly in nucleus) — Thyroid hormones (T3, T4) have receptors located DIRECTLY in the nucleus bound to DNA as transcription factors. Hence thyroid hormone receptors are specifically situated in the nucleus.",
  },
  {
    id: 200,
    text: "Which is NOT recommended for patient of ankylosing spondylitis?",
    options: [
      "Hydrotherapy",
      "Muscle stretching",
      "Football",
      "Cervical rotation",
    ],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Ankylosing spondylitis (AS) management: Recommended — Hydrotherapy (warm water reduces pain/stiffness), Muscle stretching (maintains flexibility, prevents ankylosis), Cervical rotation (preserves neck mobility), swimming. NOT recommended — Football and contact sports involving high-impact, collision, or torsional forces on the spine. AS patients have rigid, brittle spines prone to fracture — football can cause spinal fractures from tackles, falls, or sudden movements.",
  },

  {
    id: 201,
    text: "Kushta is to be used:",
    options: [
      "Just after preparation",
      "After one month of preparation",
      "After six month of preparation",
      "Upto six month of preparation",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "Kushta (calcined metallic/mineral preparations in Unani medicine) must be stored for at least six months after preparation before use. This maturation period (Idkhar) allows any residual toxic properties to dissipate and the therapeutic properties to stabilize. Using Kushta immediately after preparation can cause harm due to residual reactive compounds.",
  },
  {
    id: 202,
    text: "Akhlat, which are involved in formation of Aza are called as:",
    options: [
      "Akhlat Baseeta",
      "Akhlat Lateefa",
      "Akhlat Kaseefa",
      "Akhlat Haqeeqa",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Akhlat Baseeta (simple humours) are the four primary humours (Dam, Balgham, Safra, Sawda) in their pure form that directly participate in the formation and nourishment of body organs (Aza). They are essential for Tashkeel (formation) and Taghziya (nutrition) of organs.",
  },
  {
    id: 203,
    text: "Well's operation is a treatment of:",
    options: [
      "Fistula-in-ano",
      "Stricture of Urethra",
      "Partial prolapse of rectum",
      "Complete prolapse of rectum",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Wells operation (Ivalon sponge rectopexy) is performed for complete (full-thickness) prolapse of the rectum. The rectum is mobilized and fixed to the sacrum using a polyvinyl alcohol (Ivalon) sponge, which promotes fibrosis and prevents further prolapse.",
  },
  {
    id: 204,
    text: "Where Tabqah-i-Ankabootiyah exists?",
    options: ["In the heart", "In the ear", "In the eye", "In the testis"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Tabqah-i-Ankabootiyah (spider-web like layer) is a layer of the eye described in Unani anatomy. The eye in Unani medicine has several layers (Tabqaat) including Tabqah Shabakiyah (retina) and Tabqah Ankabootiyah. This cobweb-like layer exists in the eye.",
  },
  {
    id: 205,
    text: "Which of the following taste has Murakhkhee (softening/relaxing) action?",
    options: [
      "Qabiz (astringent)",
      "Afas (insipid)",
      "Dasam (oily/fatty)",
      "Hamiz (sour)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Dasam (oily, fatty, greasy taste) has Murakhkhi (softening, moistening, relaxing) action on tissues. It moistens and lubricates organs, reduces dryness, and softens tissues. Qabiz causes contraction, Hamiz causes constriction, Afas has minimal action.",
  },
  {
    id: 206,
    text: "Hypertonic dehydration occurs in:",
    options: ["Fever", "Excess use of diuretic", "Diarrhea", "Vomiting"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Hypertonic dehydration (hypernatremic dehydration) occurs when water loss exceeds electrolyte loss, increasing plasma osmolality. Excess use of diuretics causes water loss proportionally greater than sodium loss, leading to hypertonic dehydration. Diarrhea and vomiting typically cause isotonic or hypotonic dehydration.",
  },
  {
    id: 207,
    text: "Re-arrange the order of appearance of Rigor-mortis: (A) Finger and toes (B) Muscle of chest (C) Eyelids (D) Muscles of face",
    options: [
      "(A), (B), (C), (D)",
      "(B), (A), (C), (D)",
      "(C), (D), (B), (A)",
      "(D), (C), (B), (A)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Rigor mortis follows Nysten's law: it begins in smaller muscles first. The order is Eyelids (C) then Muscles of face (D) then Muscles of chest (B) then Fingers and toes (A). It starts from head and neck, then descends to the trunk and extremities. Appears 2-6 hours after death.",
  },
  {
    id: 208,
    text: "The correct order of immunization as per Indian Academy of Pediatrics: (A) BCG at birth (B) DTP-1 at 10th week (C) DTP-1 at 6th week (D) DTP-2 at 10th week (E) DTP-3 at 14th week",
    options: [
      "(A), (B), (D), (E)",
      "(A), (C), (D), (E)",
      "(A), (B), (C), (D)",
      "(A), (D), (B), (C)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "IAP immunization schedule: BCG at birth, DTP-1 at 6 weeks (C), DTP-2 at 10 weeks (D), DTP-3 at 14 weeks (E). This follows the 6-10-14 week schedule (EPI schedule). Hence option (A),(C),(D),(E) is correct.",
  },
  {
    id: 209,
    text: "According to Arastu, the special tool for Hiss Lams (sense of touch) is:",
    options: [
      "Asab (Nerves)",
      "Ghosht (Muscle)",
      "Dimagh (Brain)",
      "Nukha (Spinal Cord)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "According to Aristotle (Arastu), Asab (nerves) are the special organ/tool for sense of touch (Hiss Lams). Nerves serve as conduits for conveying tactile sensations from skin to brain.",
  },
  {
    id: 210,
    text: "Woman with Adenomyosis presents with the features of:",
    options: [
      "Amenorrhea with infertility",
      "Polymetrorrhagia",
      "Dysmenorrhea with menorrhagia",
      "Hypomenorrhea with dysmenorrhea",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Niswan",
    year: 2025,
    explanation:
      "Adenomyosis (endometrial glands/stroma within myometrium) classically presents with dysmenorrhea (painful periods) and menorrhagia (heavy bleeding). The uterus is uniformly enlarged, tender, and boggy. Dysmenorrhea is due to prostaglandin release; menorrhagia occurs due to increased uterine surface area and impaired contraction.",
  },
  {
    id: 211,
    text: "Which statement is correct regarding Unani pharmaceutical terms? (A) Silbatta is also known as Salaya (B) Haleeb is basically a type of Mazeej (C) Any crude or powdered drug kept in liquid is known as Tasqiya (D) Zimad is a type of Majoon (E) Taqsheer has two meanings: peeling off and scaling",
    options: [
      "(E) and (B) only",
      "(C), (D) and (B) only",
      "(A), (C) and (E) only",
      "(B) only",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "Correct statements: (A) Silbatta (flat grinding stone) is also known as Salaya: TRUE. (C) Tasqiya means keeping drug in liquid (maceration): TRUE. (E) Taqsheer has two meanings, peeling off and scaling: TRUE. Incorrect: (B) Haleeb is milk, not a type of Mazeej. (D) Zimad is an external paste/plaster, not Majoon.",
  },
  {
    id: 212,
    text: "Given below are two statements about brachial plexus injury. Statement I: Injury to the upper trunk causes waiter's tip hand deformity. Statement II: Upper trunk injury leads to paralysis of Deltoid, Supraspinatus, Infraspinatus, Biceps brachii, Brachialis, Coracobrachialis and Supinator muscles.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Both statements are correct. Upper trunk (C5-C6) injury (Erb's palsy) causes waiter's tip deformity: arm hangs with medial rotation, elbow extended, forearm pronated, wrist flexed. Muscles paralyzed: Deltoid, Supraspinatus, Infraspinatus, Biceps brachii, Brachialis, Coracobrachialis, and Supinator (all supplied by C5-C6).",
  },
  {
    id: 213,
    text: "Intiqal Mawad (transfer of matter) from Uzu Sharif (noble organ) to Uzu Khasis (ignoble organ) is known as:",
    options: [
      "Intiqal Radi",
      "Intiqal Tazayyud",
      "Intiqal Taqayyuh",
      "Intiqal Jayyid",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Intiqal Jayyid means transfer of good/beneficial matter from a noble organ (Uzu Sharif) to an ignoble organ (Uzu Khasis). This is beneficial for the noble organ. Intiqal Radi = transfer of bad matter. Intiqal Tazayyud = increase in morbid matter. Intiqal Taqayyuh = transfer causing suppuration.",
  },
  {
    id: 214,
    text: "Which power or Faculty is NOT essential for the survival of an individual?",
    options: [
      "Quwwat-i-Failah (Active faculty)",
      "Quwwat-i-Musawwirah (Formative faculty)",
      "Quwwat-i-Mughaiyrah Saniah (Secondary alterative faculty)",
      "Quwwat-i-Wahimah (Estimative faculty)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Quwwat-i-Wahimah (estimative/imaginative faculty) is a psychological faculty NOT essential for basic physiological survival. The other three are essential: Failah (active/motor), Musawwirah (formative, for reproduction), and Mughaiyrah Saniah (secondary alteration in digestion).",
  },
  {
    id: 215,
    text: "Match List I with List II: (A) Hydrocele (B) Felon (C) Septic Shock (D) Complication of Blood transfusion",
    options: [
      "(A) Hypothermia, (B) Systemic Vasodilation, (C) Abscess in fingertip, (D) Fluid in Tunica Vaginalis",
      "(A) Fluid collection between Tunica Vaginalis layers, (B) Abscess in fibrous septa of fingertip, (C) Systemic Vasodilation, (D) Hypothermia",
      "(A) Systemic Vasodilation, (B) Fluid in Tunica Vaginalis, (C) Hypothermia, (D) Abscess in fingertip",
      "(A) Abscess in fingertip, (B) Hypothermia, (C) Fluid in Tunica Vaginalis, (D) Systemic Vasodilation",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Correct matching: (A) Hydrocele: fluid collection between layers of Tunica Vaginalis. (B) Felon: abscess in specialized fibrous septa of fingertip (closed-space infection). (C) Septic Shock: systemic vasodilation due to cytokines. (D) Blood transfusion complication: hypothermia from cold blood products.",
  },
  {
    id: 216,
    text: "Given below are two statements about Nawm-e-Motadil (Moderate sleep). Statement I: It causes inward movement of hararat-e-gharizia, improves digestion, and increases memory. Statement II: It reduces tahallul.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Both statements are correct. During moderate sleep, Hararat-e-Gharizia moves inward improving digestion, and memory consolidation occurs. Moderate sleep also reduces Tahallul (dissipation/catabolism of vital substances), preserving vitality.",
  },
  {
    id: 217,
    text: "Which is NOT recommended for patients of osteoporosis?",
    options: ["Weight-bearing exercise", "Walking", "Aerobics", "Bed rest"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Bed rest is contraindicated in osteoporosis: immobility causes further bone loss (disuse osteoporosis) by reducing mechanical loading, the key stimulus for bone remodeling. Weight-bearing exercise, walking, and aerobics all stimulate osteoblast activity and bone formation.",
  },
  {
    id: 218,
    text: "The writer of book Al-Tohfatul Hamidiya fil Sanatul Takleesiya:",
    options: [
      "Sharif Khan",
      "Abdul Aziz",
      "Ajmal Khan",
      "Ahmad Husain Usmani",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Al-Tohfatul Hamidiya fil Sanatul Takleesiya (a classical Unani text on the art of calcination/Kushta preparation) was written by Hakeem Abdul Aziz, a renowned scholar of Unani pharmacology.",
  },
  {
    id: 219,
    text: "Humoral Immunity comes from which of the following:",
    options: [
      "Bone-marrow derived B-Lymphocytes",
      "Thymus derived T-Lymphocytes",
      "Natural Killer Cells",
      "Cytotoxic Cells",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Humoral immunity is antibody-mediated. B-lymphocytes (derived from and mature in bone marrow) are responsible for humoral immunity. Upon antigen stimulation, B-cells differentiate into plasma cells producing specific antibodies. T-lymphocytes mediate cellular immunity.",
  },
  {
    id: 220,
    text: "According to Jawhar (substance) and Mizaj (temperament), Reham (Uterus) is:",
    options: [
      "Haar Ratab (Hot and Moist)",
      "Haar Yabis (Hot and Dry)",
      "Barid Ratab (Cold and Moist)",
      "Barid Yabis (Cold and Dry)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "According to its substance (Jawhar) and temperament (Mizaj), the Reham (uterus) is Haar Yabis (Hot and Dry). Being primarily muscular tissue (myometrium), muscles have a hot and dry temperament in Unani. This Mizaj makes it capable of strong contractions.",
  },
  {
    id: 221,
    text: "What is contraindicated with Mus'hil (purgative) drug?",
    options: [
      "Hammam before taking mus'hil",
      "Hammam after taking mus'hil",
      "Intake of pomegranate after taking mus'hil",
      "Intake of hot water with Joshanda-e-Mus'hil",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Hammam (bath) AFTER taking Mus'hil (purgative) is contraindicated. It causes increased drug absorption due to vasodilation, redistributes Hararat away from gut, and weakens the patient, all interfering with the purgative action. Hammam BEFORE taking mus'hil is permitted.",
  },
  {
    id: 222,
    text: "In which of the following micro-organelles is the limiting membrane absent:",
    options: ["Peroxisome", "Lysosome", "Centrosome", "Ribosome"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Ribosomes are non-membrane-bound organelles: they lack any surrounding membrane. They consist of rRNA and proteins in two subunits. All others have membranes: Peroxisomes and Lysosomes have a single membrane, Centrosomes are bounded by pericentriolar material.",
  },
  {
    id: 223,
    text: "Who described that Taghaiyurat-e-ghair Tabaiyah ghair Muzadah are related to Umoor-e-Falki (celestial matters)?",
    options: [
      "Ali Ibn-e-Abbas Majoosi",
      "Shaikhur Rais Ibn Sina",
      "Zakariya Razi",
      "Allama Burhan Uddin Nafees",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Allama Burhan Uddin Nafees (author of Sharh-e-Asbab wa Alamaat) described that non-natural non-contrary changes are related to Umoor-e-Falki (celestial/astronomical factors) such as planetary positions and cosmic influences.",
  },
  {
    id: 224,
    text: "Immediate sustained laryngeal spasm occurs in which of the following types of drowning:",
    options: [
      "Primary Drowning",
      "Secondary Drowning",
      "Immersion Syndrome",
      "Dry Drowning",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Dry Drowning is characterized by immediate sustained laryngeal spasm upon contact of water with the larynx/vocal cords. This prevents water from entering lungs but causes death by asphyxia. Lungs contain little or no water at autopsy.",
  },
  {
    id: 225,
    text: "An idea of time of death by cooling of the dead body: which formula is correct?",
    options: [
      "(Normal body temperature minus Rectal temperature) divided by Rate of fall per hour = Time of Death",
      "(Rectal temperature minus Normal body temperature) divided by Rate of fall per hour = Time of Death",
      "Rate of fall per hour divided by (Rectal temperature minus Normal body temperature) = Time of Death",
      "(Normal body temperature minus Rate of fall per hour) divided by Rectal temperature = Time of Death",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Time since death = (Normal body temperature minus Rectal temperature) divided by Rate of temperature fall per hour. Normal body temperature is 37 degrees C; body cools approximately 1-1.5 degrees C per hour. Example: rectal temp 31 degrees C means (37-31)/1.5 = 4 hours since death.",
  },
  {
    id: 226,
    text: "A person complains of a snapping sound and sharp pain in the heel after jumping from a height. What is the most likely diagnosis?",
    options: [
      "Rupture of patellar tendon",
      "Rupture of Achilles tendon",
      "Foot drop",
      "Minor tears of the peroneal tendons",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Rupture of Achilles tendon presents with sudden sharp heel/calf pain, an audible snap at injury, and difficulty walking. Occurs with sudden forceful plantarflexion (jumping from height). Thompson's test (absent plantarflexion on calf squeeze) is diagnostic.",
  },
  {
    id: 227,
    text: "Boas's sign is seen in:",
    options: [
      "Appendicitis",
      "Cholecystitis",
      "Diverticulitis",
      "Pancreatitis",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Boas's sign is hyperaesthesia in the right infrascapular region (9th-11th thoracic dermatome, right side) found in acute Cholecystitis. It occurs due to referred pain from the inflamed gallbladder via phrenic and right inferior intercostal nerves.",
  },
  {
    id: 228,
    text: "Most common position in vertex presentation is:",
    options: [
      "Right occipito anterior position",
      "Left occipito anterior position",
      "Right occipito posterior position",
      "Left occipito posterior position",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Niswan",
    year: 2025,
    explanation:
      "Left Occipito Anterior (LOA) is the most common position in vertex presentation. The occiput faces the left anterior maternal pelvis. The uterus rotates slightly to the right and the sigmoid colon occupies the left posterior quadrant, favoring LOA position.",
  },
  {
    id: 229,
    text: "Isometric relaxation period is responsible for:",
    options: [
      "Opening of atrioventricular valve",
      "First heart sound",
      "Second heart sound",
      "Opening of semilunar valves",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "The isovolumetric relaxation period begins with closure of semilunar valves, producing S2 (Second heart sound: dub). Ventricular pressure falls rapidly but AV valves have not opened yet. S1 is caused by closure of AV valves.",
  },
  {
    id: 230,
    text: "Match List I (Type of pelvis) with List II (Shape): (A) Android pelvis (B) Platypelloid pelvis (C) Gynaecoid pelvis (D) Anthropoid pelvis",
    options: [
      "(A) Round, (B) Triangular, (C) Oval, (D) Transverse oval",
      "(A) Triangular shape, (B) Transversely oval, (C) Round Inlet, (D) Inlet is oval",
      "(A) Oval, (B) Round, (C) Transverse oval, (D) Triangular",
      "(A) Transverse oval, (B) Oval, (C) Triangular, (D) Round",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Niswan",
    year: 2025,
    explanation:
      "Pelvic types: (A) Android: triangular/heart-shaped inlet. (B) Platypelloid: transversely oval (flat pelvis). (C) Gynaecoid: round inlet (ideal female pelvis, approximately 50%). (D) Anthropoid: oval inlet with longer AP diameter. Gynaecoid is most favorable for normal labor.",
  },
  {
    id: 231,
    text: "Cholesterosis of gall bladder is also known as:",
    options: [
      "Blueberry gall bladder",
      "Raspberry gall bladder",
      "Gooseberry gall bladder",
      "Strawberry gall bladder",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Cholesterosis of the gall bladder is called Strawberry gall bladder: yellow cholesterol deposits (foam cells) against a red hyperemic background resembling a strawberry. It is benign, associated with bile supersaturation with cholesterol.",
  },
  {
    id: 232,
    text: "Which of the following is NOT related to problems affecting elderly males?",
    options: [
      "Benign Prostatic Hypertrophy",
      "Prostatic Cancer",
      "Male Sexual Dysfunction",
      "Cervical Cancer",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Cervical cancer is exclusively a female condition (cervix uteri). BPH, Prostatic Cancer, and Male Sexual Dysfunction are all common problems in elderly males.",
  },
  {
    id: 233,
    text: "Transformation of Rutubat Ula (primary fluid) into Rutubat Thaniya (secondary fluid) is:",
    options: [
      "Hazm Awwal (First digestion)",
      "Hazm Duwwam (Second digestion)",
      "Hazm Suwwam (Third digestion)",
      "Hazm Chaharum (Fourth digestion)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Hazm Duwwam (hepatic/second digestion) transforms Rutubat Ula (primary chyle absorbed from intestines) into Rutubat Thaniya (blood and other humours) in the liver. Hazm Awwal = gastric. Hazm Suwwam = vascular. Hazm Chaharum = cellular.",
  },
  {
    id: 234,
    text: "Match List I (Type of bath) with List II (Benefits): (A) Ghusl-e-Baarid (B) Hammam-e-Moarriq (C) Ghusl Chashma-e-Gandhak (D) Ghusl-e-Hammaat",
    options: [
      "(A) Beneficial for less exercise, (B) Faalij/Raasha, (C) Hot Springs, (D) Makes body strong",
      "(A) Faalij/Raasha, (B) Hot Springs, (C) Makes body strong, (D) Less exercise",
      "(A) Hot Springs, (B) Faalij/Raasha, (C) Makes body strong, (D) Less exercise",
      "(A) Makes body strong, (B) Beneficial for those who exercise less, (C) Bathing in Hot Springs, (D) Beneficial for Faalij and Raasha",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilaj bil Tadbeer",
    year: 2025,
    explanation:
      "(A) Ghusl-e-Baarid (cold bath): Makes body strong and firms muscles. (B) Hammam-e-Moarriq (sudorific bath): Beneficial for those who exercise less, promotes perspiration. (C) Ghusl Chashma-e-Gandhak (sulphur spring bath): Bathing in hot sulphur springs, for skin diseases. (D) Ghusl-e-Hammaat (mud bath): Beneficial for Faalij (hemiplegia) and Raasha (tremors).",
  },
  {
    id: 235,
    text: "Mojiz al-Qanoon is the Talkhees (abridgment) of which book?",
    options: [
      "Firdus al-Hikmat",
      "Kamil al-Sana",
      "Alqanoon Fi-al-Tibb",
      "Kitab al-Tasreef",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Mojiz al-Qanoon (Al-Mojiz) is the Talkhees (summary/abridgment) of Al-Qanoon Fi-al-Tibb (Canon of Medicine) by Ibn Sina. It was written by Ibn al-Nafis: the same scholar who described pulmonary circulation.",
  },
  {
    id: 236,
    text: "Which compound in leech saliva has a vasodilator effect?",
    options: [
      "Bdellins",
      "Hirustatin",
      "Histamine-like substances",
      "Hyaluronidase",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilaj bil Tadbeer",
    year: 2025,
    explanation:
      "Leech saliva compounds: Hirudin = anticoagulant. Bdellins = anti-inflammatory. Hirustasin = inhibits kallikrein/trypsin. Hyaluronidase = spreading factor. Histamine-like substances are responsible for VASODILATOR effect, causing local vasodilation to increase blood flow.",
  },
  {
    id: 237,
    text: "Given below are two statements regarding acquired Vesicular blisters. Statement I: Localized causes include Herpes simplex, Herpes zoster, Impetigo, Pompholyx. Statement II: Generalized causes include Toxic epidermal necrolysis, Erythema multiforme, Stevens-Johnson syndrome.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Jild",
    year: 2025,
    explanation:
      "Both correct. Localized vesicular blisters: Herpes simplex, Herpes zoster, Impetigo, Pompholyx. Generalized: TEN (Toxic Epidermal Necrolysis), Erythema multiforme, Stevens-Johnson syndrome. All are acquired vesiculobullous conditions.",
  },
  {
    id: 238,
    text: "Barron's Banding (rubber band ligation) is done in:",
    options: [
      "First degree internal haemorrhoids",
      "Second degree internal haemorrhoids",
      "Third degree internal haemorrhoids",
      "Fourth degree internal haemorrhoids",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Barron's banding is for 2nd degree haemorrhoids (prolapse during straining, spontaneous reduction). 1st degree = conservative. 3rd degree = manual reduction/surgical. 4th degree = permanently prolapsed/surgical. Rubber band causes necrosis and sloughing of haemorrhoidal tissue.",
  },
  {
    id: 239,
    text: "Match List I with List II (Unani anatomical characteristics): (A) Ashaab (B) Lahm (C) Shiryan (D) Tabiyyat",
    options: [
      "(A) Falak, (B) Kamun-o-Baruz, (C) Ghuddi, (D) Jauf",
      "(A) Kamun-o-Baruz, (B) Ghuddi, (C) Jauf, (D) Falak",
      "(A) Ghuddi, (B) Jauf, (C) Falak, (D) Kamun-o-Baruz",
      "(A) Jauf, (B) Falak, (C) Kamun-o-Baruz, (D) Ghuddi",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "(A) Ashaab (nerves): Kamun-o-Baruz (hidden and appearing). (B) Lahm (muscle): Ghuddi (glandular characteristic). (C) Shiryan (artery): Jauf (hollow tubular structure). (D) Tabiyyat (natural faculty): Falak (celestial, guiding bodily processes).",
  },
  {
    id: 240,
    text: "Subserving Kayfiyat (Qualities) of Quwwat Dafia (expulsive faculty) are:",
    options: [
      "Hararat Wa Rutubat (Heat and Moisture)",
      "Hararat Wa Yubusat (Heat and Dryness)",
      "Burudat Wa Rutubat (Cold and Moisture)",
      "Burudat Wa Yubusat (Cold and Dryness)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Quwwat Dafia (expulsive faculty) is served by Hararat (heat) and Rutubat (moisture). Heat facilitates propulsion; moisture eases passage of waste matter. Other faculties: Jaziba = Heat+Dryness; Masika = Cold+Dryness; Hadima = Heat+Moisture.",
  },
  {
    id: 241,
    text: "Which Arq (distillate) is used in preparation of Shingraf Musaffa (purified Cinnabar)?",
    options: [
      "Arq Lemoon (Lemon distillate)",
      "Arq Badiyan (Fennel distillate)",
      "Arq Mokoy",
      "Arq Kasni (Chicory distillate)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "Shingraf (Cinnabar, mercuric sulphide) is purified using Arq Lemoon (lemon distillate). The citric acid helps remove impurities including toxic unreacted mercury compounds during the Tasfiya (purification) process.",
  },
  {
    id: 242,
    text: "Ludwig's Angina is a disease of:",
    options: [
      "Heart pain",
      "Cellulitis of floor of mouth",
      "III Grade fatty liver",
      "Heart pain and fatty liver combined",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Ludwig's Angina is rapidly spreading bilateral cellulitis of the floor of the mouth involving submandibular, sublingual, and submental spaces. Usually odontogenic (mandibular molar infection). Life-threatening due to airway obstruction from tongue displacement. Requires urgent airway management and antibiotics.",
  },
  {
    id: 243,
    text: "Find the correct sequence of lobar pneumonia stages: (A) Red hepatization, (B) Grey hepatization, (C) Congestion, (D) Resolution",
    options: [
      "(A), (B), (C), (D)",
      "(D), (B), (A), (C)",
      "(C), (D), (B), (A)",
      "(C), (A), (B), (D)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "Lobar pneumonia stages: (C) Congestion (Day 1-2, hyperemia) then (A) Red hepatization (Day 2-4, alveoli filled with RBCs/fibrin, firm red lung) then (B) Grey hepatization (Day 4-8, RBCs lyse, grey color) then (D) Resolution (Day 8+, return to normal). Sequence: C then A then B then D.",
  },
  {
    id: 244,
    text: "In fracture of the neck of the fibula, which nerve is most likely injured?",
    options: [
      "Tibial Nerve",
      "Deep Peroneal Nerve",
      "Sural Nerve",
      "Common Peroneal Nerve",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "The Common Peroneal Nerve winds around the neck of fibula and is vulnerable in fibular neck fractures. Injury causes foot drop (weak dorsiflexion/eversion) and sensory loss over dorsum of foot. Also seen in knee dislocations and tight plaster casts.",
  },
  {
    id: 245,
    text: "According to Shaikh ur Raees (Ibn Sina), which of the following are the direct state/substrate of Health and Disease?",
    options: [
      "Arkan (Elements) and Arwah (Spirits)",
      "Arkan (Elements) and Akhlat (Humours)",
      "Akhlat (Humours) and Aza (Organs)",
      "Aza (Organs) and Arwah (Spirits)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "According to Ibn Sina in Al-Qanoon, Akhlat (humours) and Aza (organs) are the direct substrates of health and disease. Health is proper balance of Akhlat and Aza. Disease manifests directly in humoral imbalance and organ dysfunction.",
  },
  {
    id: 246,
    text: "A child presents with sudden onset of fever, headache and neck stiffness. Which is the most appropriate NEXT step?",
    options: [
      "Broad Spectrum antibiotics",
      "Lumbar puncture",
      "CT scan of the head",
      "Observation and follow-up",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Fever + headache + neck stiffness = meningitis until proven otherwise. Most appropriate next step is Lumbar puncture to analyze CSF (WBC, protein, glucose, culture). CT head is done first only if papilledema or focal neurological signs present. Antibiotics follow diagnosis.",
  },
  {
    id: 247,
    text: "Given below are two statements about sebaceous glands. Statement I: Sebocytes produce lipids including triglycerides, wax esters, squalene, and cholesterol. Statement II: Sebum excretion is under hormonal control, with androgens increasing sebum production.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Jild",
    year: 2025,
    explanation:
      "Both correct. Sebum contains triglycerides (~57%), wax esters (~26%), squalene (~12%), free fatty acids, cholesterol. Androgens (testosterone, DHT) stimulate sebaceous glands, explaining seborrhea and acne at puberty.",
  },
  {
    id: 248,
    text: "What is the dose of Kalaunji (Nigella sativa)?",
    options: [
      "250 mg to 500 mg",
      "1 gram to 2 grams",
      "5 grams to 7 grams",
      "7 grams to 10 grams",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Kalaunji (Nigella sativa, Black seed) standard therapeutic dose in Unani pharmacopoeia is 1-2 grams per dose. Used in Zeequn Nafs (asthma), Nazla, and as general tonic. Contains thymoquinone. Higher doses cause gastric irritation.",
  },
  {
    id: 249,
    text: "Which of the following is effective in Asthma (Zeequn Nafs)?",
    options: ["Sanbhaloo", "Kakraunda", "Katan", "Kahoo"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2025,
    explanation:
      "Kakraunda is specifically used in Zeequn Nafs (asthma) in Unani medicine as a bronchodilator and expectorant, relieving bronchospasm and facilitating expulsion of phlegm. Sanbhaloo = joint pains. Katan = skin/expectorant. Kahoo = sedative.",
  },
  {
    id: 250,
    text: "According to Ibn Rushd (Averroes), Azae Mutashabihatul Ajza (homogeneous organs) are: (A) Mirra Sawda (B) Jild (C) Ruh (D) Mukh",
    options: [
      "(A) Mirra Sawda, (B) Jild, (C) Ruh only",
      "(A) Mirra Sawda, (C) Ruh, (D) Mukh only",
      "(A) Mirra Sawda, (B) Jild, (D) Mukh only",
      "(B) Jild, (C) Ruh, (D) Mukh only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "According to Ibn Rushd in Kitab al-Kulliyat, Azae Mutashabihatul Ajza include (A) Mirra Sawda, (B) Jild, and (C) Ruh. These are homogeneous organs/substances whose parts are similar to the whole (homoeomerous concept from Aristotle).",
  },
  {
    id: 251,
    text: "The establishment of All India Vedic and Unani Tibbi Conference belongs to:",
    options: [
      "Options A and B",
      "Hakim Ajmal Khan only",
      "Options A and D",
      "Option E only",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "The All India Vedic and Unani Tibbi Conference was established by Hakim Ajmal Khan (1868-1927), legendary Unani physician and freedom fighter. He founded Hindustani Dawakhana and Tibbiya College, Delhi, and championed traditional Indian medicine.",
  },
  {
    id: 252,
    text: "Match List I with List II: (A) Glycated Hemoglobin (B) Rolled out margin (C) Onion skin lesion (D) Punched out margin",
    options: [
      "(A) Diabetes mellitus, (B) Squamous cell carcinoma, (C) Ewing's sarcoma, (D) Tropical/syphilitic ulcer",
      "(A) Diabetes, (B) Tropical ulcer, (C) Ewing's, (D) SCC",
      "(A) Ewing's sarcoma, (B) Diabetes, (C) SCC, (D) Tropical ulcer",
      "(A) Tropical ulcer, (B) Diabetes, (C) SCC, (D) Ewing's sarcoma",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2025,
    explanation:
      "(A) Glycated Hemoglobin (HbA1c): Diabetes mellitus marker. (B) Rolled out (everted) margin: Squamous cell carcinoma ulcer. (C) Onion skin periosteal reaction: Ewing's sarcoma. (D) Punched out margin: Tropical/syphilitic/trophic ulcer.",
  },
  {
    id: 253,
    text: "Mom (wax) and Roghan (oil) are used in preparation of:",
    options: ["Sulaqa", "Khabees", "Qairooti (Cerate)", "Hareera"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2025,
    explanation:
      "Qairooti (Cerate) is a semi-solid Unani external preparation made from Mom (wax) and Roghan (oil/fat). Harder than Marham due to wax content. Used for skin conditions. Derived from Qir (wax). Sulaqa = plaster-like. Khabees = thick electuary. Hareera = thin gruel.",
  },
  {
    id: 254,
    text: "The statement Anatomy is the basis of medical discourse is attributed to:",
    options: ["Galen", "Avicenna", "Vesalius", "Hippocrates"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2025,
    explanation:
      "Galen (Jalinus, 129-216 AD) stated that anatomy is the basis of medical discourse. He wrote extensive anatomical texts (De Anatomicis Administrationibus) forming the foundation of medical anatomy for 1400 years. While Vesalius corrected Galen's errors, Galen established anatomy as fundamental to medicine.",
  },
  {
    id: 255,
    text: "Neonates presenting small, white vesiculopustular papules on face/trunk 2-3 days after birth:",
    options: [
      "Pustular melanosis",
      "Erythema migrans",
      "Erythema toxicum",
      "Erythema nodosum",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Jild",
    year: 2025,
    explanation:
      "Erythema toxicum neonatorum appears 24-72 hours after birth as blotchy erythema, papules, vesicles, and pustules on face/trunk. Pustules contain eosinophils. Benign and self-limiting (resolves in 1-2 weeks). Pustular melanosis = present at birth. Erythema migrans = Lyme disease.",
  },
  {
    id: 256,
    text: "Given below are two statements about Triple Assessment for breast disease. Statement I: Applied for breast lump or nipple discharge. Statement II: Combination of clinical examination, imaging, and tissue sampling.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2025,
    explanation:
      "Both correct. Triple Assessment: (1) Clinical examination: history and physical examination. (2) Imaging: mammography (>35 years) or ultrasound. (3) Tissue sampling: FNAC or core biopsy. Each scored 1-5; concordance gives >99% diagnostic accuracy.",
  },
  {
    id: 257,
    text: "A classic pigmented pathological lesion known as powder burns is found in:",
    options: [
      "Polycystic ovarian syndrome (PCOD)",
      "Pelvic endometriosis and produces PGF",
      "Pelvic organ prolapse (POP)",
      "Pelvic endometriosis and releases inflammatory factors",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Niswan",
    year: 2025,
    explanation:
      "Powder burns are small dark brown-black peritoneal spots seen in pelvic endometriosis at laparoscopy: hemosiderin deposits from repeated bleeding of endometrial implants. Endometriotic implants also produce prostaglandin F2-alpha (PGF2a), contributing to dysmenorrhea.",
  },
  {
    id: 258,
    text: "Identify the correct statements: (A) Injection in Subarachnoid space is spinal anesthesia (B) Suxamethonium is short acting muscle relaxant",
    options: [
      "(A) and (B) only",
      "(A) and (C) only",
      "(C) and (D) only",
      "(D) and (E) only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2025,
    explanation:
      "Both A and B are correct. (A) Spinal anesthesia = injection into subarachnoid space (between arachnoid and pia mater), mixing with CSF. (B) Suxamethonium (succinylcholine) = short-acting depolarizing NMB, duration 5-10 min, rapidly hydrolyzed by plasma pseudocholinesterase.",
  },
  {
    id: 259,
    text: "Dalk-e-Istedad Taweel (prolonged preparatory massage) is suitable for:",
    options: [
      "Solid body, Hot season, Thick matter, Youth age",
      "Thin body, Hot season, Thin matter, Old age",
      "Solid/Strong body, Abundance of matter, Spring season, Any age",
      "Flaccid body, Weak power, Light matter, Autumn season",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilaj bil Tadbeer",
    year: 2025,
    explanation:
      "Dalk-e-Istedad Taweel (prolonged preparatory massage) is for: Solid/firm body (withstands manipulation), Hot season (facilitates tissue softening), Thick morbid matter (needs prolonged massage), Youth age (better tissue resilience). Prepares body for subsequent therapeutic procedures.",
  },
  {
    id: 260,
    text: "The disease produced by Sauda (black bile) and burnt Dam (blood):",
    options: [
      "Pityriasis Nigra",
      "Pityriasis Alba",
      "Ecchymosis",
      "Melasma",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Jild",
    year: 2025,
    explanation:
      "Pityriasis Nigra (Bars Aswad) is caused by excess Sawda (black bile) and Ihtiqa al-Dam (burnt/oxidized blood) in Unani etiopathology. Excess black bile deposited in skin causes dark, blackish-brown patches. Distinct from Melasma (estrogen/UV related facial pigmentation).",
  },

  // ===== 2024 AIAPGET Questions (Q1-Q60) =====
  {
    id: 261,
    text: "Literary meaning of word 'Ruh' is:",
    options: [
      "Zawiul Arwah",
      "La Infi'al",
      "Amezish (mixture)",
      "Hawa e Muheet",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "The literary (lughawi) meaning of 'Ruh' is 'Hawa e Muheet' (surrounding air/wind). In Unani medicine, Ruh refers to a subtle vaporous substance, and linguistically it relates to air or breath.",
  },
  {
    id: 262,
    text: "The excretion of Mawad-e-Fasida in the form of saliva, ear wax, sweat etc. is the function of:",
    options: [
      "Aaza only",
      "Quwwat-e-Mudabir e Badan",
      "Quwwat-e-Tabiyah",
      "Quwwat-e-Nafsaniyah",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Quwwat-e-Mudabir e Badan (the body's governing faculty) is responsible for excreting Mawad-e-Fasida (waste/morbid matter) through channels like saliva, ear wax, and sweat.",
  },
  {
    id: 263,
    text: "On the basis of definition, the Ustaqussat are:",
    options: [
      "Solid (Jamid)",
      "Liquid (Sayyal)",
      "Mufrad (Single)",
      "Vaporous (Bukhari)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Ustaqussat (four elements: Fire, Air, Water, Earth) are Mufrad (single/simple) by definition. They are the most basic indivisible components that cannot be further broken down.",
  },
  {
    id: 264,
    text: "The Feal (action) of Tabiyat is:",
    options: [
      "Muharik-e-Mizaj",
      "Tabreed-e-Mizaj",
      "Taskeen-e-Mizaj",
      "Ta'deel-e-Mizaj",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "The primary action of Tabiyat (nature/physis) is Ta'deel-e-Mizaj (balancing of temperament). Tabiyat works constantly to maintain and restore the natural temperament of the body.",
  },
  {
    id: 265,
    text: "Which concept has the prime importance, and is the backbone of Unani system of medicine:",
    options: ["Afa'al", "Mizaj", "Azaa", "Arwah"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Mizaj (temperament) is the backbone and central concept of Unani medicine. It determines individual constitution, susceptibility to disease, and response to treatment. All diagnosis and treatment revolves around Mizaj.",
  },
  {
    id: 266,
    text: "Who is also known as Abul Al-Arwah (Father of Spirits)?",
    options: ["Galen", "Irasittratis", "Herophilus", "Aristotle"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Aristotle is known as 'Abul Al-Arwah' (Father of Spirits). He extensively studied the concept of soul (Ruh/Arwah) and wrote about it in 'De Anima'. His theories greatly influenced Unani scholars.",
  },
  {
    id: 267,
    text: "Match List I with List II: (A) Ribat, (B) Dimagh, (C) Khusiya, (D) Aasab. List II: (I) Uzw Raees, (II) Uzw Mufrad, (III) Uzw Barid, (IV) Quwwat Muwallida",
    options: [
      "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(II), (B)-(IV), (C)-(III), (D)-(I)",
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(III)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Ribat (ligament) = Uzw Mufrad (simple organ); Dimagh (brain) = Uzw Raees (principal organ); Khusiya (testes) = Quwwat Muwallida (generative power); Aasab (nerves) = Uzw Barid (cold organ).",
  },
  {
    id: 268,
    text: "In all organs of the human body, what is more Barid (cold) after Izaam (bones)?",
    options: ["Asaab (Nerves)", "Ribat", "Kurri/Ghuzruf", "Baal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Baal (hair) is the coldest organ after Izaam (bones) in the human body according to Unani medicine. Bones are the coldest and driest organs, and Baal comes second.",
  },
  {
    id: 269,
    text: "Opposite of Nafrat-e-Kimiavia is:",
    options: [
      "Ulfat-e-Kimiavia",
      "Nafrat-e-Kimiavia",
      "Istehala-e-Haqiqiya",
      "Istehala Johariya",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "The opposite of Nafrat-e-Kimiavia (chemical repulsion) is Ulfat-e-Kimiavia (chemical affinity/attraction). These are opposing chemical forces in Unani pharmacology.",
  },
  {
    id: 270,
    text: "Assertion (A): Sin-e-Rihaq and Sin-e-Fata are sub types of Sin-e-Numu. Reasons (R): In both stages, growth and development are progressive towards Sin-e-Shabab.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Both A and R are correct. Sin-e-Rihaq (adolescence, 14-21 yrs) and Sin-e-Fata (21-35 yrs) are subtypes of Sin-e-Numu. In both stages, growth is progressive toward Sin-e-Shabab.",
  },
  {
    id: 271,
    text: "Statement I: Rukn Hawa is Lateef because of its Haar Ratab (hot and moist) Mizaj. Statement II: The characteristic of Yabusat is not accepting and leaving shapes easily.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Both statements are correct. Hawa (Air element) is Lateef (subtle/fine) due to its Haar Ratab nature. Yabusat (dryness) is characterized by rigidity — not easily accepting or releasing shapes.",
  },
  {
    id: 272,
    text: "Statement I: Mizaj Moatadil Naui and Mizaj Moatadil Sinfi are types of Mizaj Moatadil Tibbi. Statement II: Mizaj Moatadil Haqeeqi is not present in any species.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Both true. Mizaj Moatadil Tibbi includes Naui (species-specific) and Sinfi (gender-specific) types. Mizaj Moatadil Haqeeqi is purely theoretical and does not exist in any actual species or individual.",
  },
  {
    id: 273,
    text: "Assertion (A): Imam Fakhruddin Razi says moderate region is Fourth Iqlim; Ibn Sina says it is near equator. Reasons (R): Fourth Iqlim is moderate as it lies between hot and cold regions.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Both A and R correct. Imam Fakhruddin Razi considered Fourth Iqlim most moderate — situated between hot southern and cold northern regions. Ibn Sina placed the moderate zone near the equator.",
  },
  {
    id: 274,
    text: "In which age is the process of anabolism (formation) equal to catabolism (destruction):",
    options: [
      "Sin-i-Numu",
      "Sin-i-Shabab",
      "Sin-i-Kuhulat",
      "Sin-i-Shaikhukhat",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "In Sin-i-Kuhulat (middle age, ~35-60 years), Tauleed (anabolism) and Tahleel (catabolism) are in equilibrium. Before this growth dominates; after this, catabolism exceeds anabolism.",
  },
  {
    id: 275,
    text: "Which is NOT included in Asbab Musakhkhina (causes of warming)?",
    options: [
      "Mo'tadil Miqdar ki Ghiza",
      "Harkat Mo'tadil",
      "Sudda basabab Fuzlat",
      "Ufoonat",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Mo'tadil Miqdar ki Ghiza (moderate food) is NOT a cause of warming. Asbab Musakhkhina includes Harkat Mo'tadil (exercise), Sudda basabab Fuzlat (obstruction by wastes), and Ufoonat (putrefaction) — all generate heat.",
  },
  {
    id: 276,
    text: "Enzyme elevated in first 2 hours of MI is:",
    options: ["CKMB", "LDH", "SGPT", "Acid phosphatase"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2024,
    explanation:
      "CKMB (Creatine Kinase-MB) rises within 2-4 hours of Myocardial Infarction, peaks at 12-24 hours. It is the earliest traditional enzyme marker for MI.",
  },
  {
    id: 277,
    text: "Diagnostic feature of rheumatic fever is:",
    options: [
      "Antischkow cells",
      "Aschoff's bodies",
      "MacCallum's patch",
      "Epithelioid cells",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2024,
    explanation:
      "Aschoff's bodies (nodules) are pathognomonic of rheumatic fever. These granulomatous lesions in myocardium contain Aschoff giant cells, Anitschkow cells, and fibrinoid necrosis.",
  },
  {
    id: 278,
    text: "Intravascular hemolysis occurs in:",
    options: [
      "Hereditary spherocytosis",
      "Autoimmune haemolytic anemia",
      "Paroxysmal nocturnal hemoglobinuria",
      "Thalassemia",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2024,
    explanation:
      "Paroxysmal Nocturnal Hemoglobinuria (PNH) causes intravascular hemolysis via complement-mediated lysis within blood vessels, causing hemoglobinuria. Spherocytosis and autoimmune hemolytic anemia are primarily extravascular.",
  },
  {
    id: 279,
    text: "Assertion (A): Troponins become detectable in 2 to 4 hours in MI. Reasons (R): In MI, cellular enzymes leak into the blood.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2024,
    explanation:
      "Both A and R correct. Myocardial necrosis disrupts cell membranes, allowing intracellular Troponin I and T to leak into circulation within 2-4 hours of MI onset.",
  },
  {
    id: 280,
    text: "Match: (A) Angina pectoris, (B) Stroke, (C) Awqat Amraz, (D) Diabetes mellitus. List II: (I) Irreversible cell injury, (II) 4, (III) Retinopathy, (IV) Reversible cell injury",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(I), (C)-(II), (D)-(III)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Amraz",
    year: 2024,
    explanation:
      "Angina pectoris = Reversible cell injury (ischemia, no necrosis); Stroke = Irreversible cell injury; Awqat Amraz (stages of disease) = 4 stages; Diabetes mellitus = Retinopathy (diabetic complication).",
  },
  {
    id: 281,
    text: "The muscle responsible for unlocking the knee joint is: (A) Popliteus muscle, (B) Soleus, (C) Soleus and gastrocnemius, (D) Plantaris",
    options: [
      "(A) only",
      "(A) and (B) only",
      "(B) and (C) only",
      "(D) only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Tashreeh",
    year: 2024,
    explanation:
      "Popliteus muscle alone unlocks the knee joint by rotating the tibia medially to initiate flexion from full extension (screw-home mechanism). No other muscle performs this specific unlocking function.",
  },
  {
    id: 282,
    text: "The rotation of trunk is produced by: (A) External oblique with opposite internal oblique, (B) Contraction of both muscles, (C) Rectus abdominis with opposite external oblique, (D) Transversus abdominis",
    options: [
      "(A) only",
      "(A) and (B) only",
      "(B) and (C) only",
      "(C) only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Tashreeh",
    year: 2024,
    explanation:
      "Trunk rotation is produced by combined action of external oblique on one side with internal oblique on the opposite side. E.g., right rotation = right external oblique + left internal oblique.",
  },
  {
    id: 283,
    text: "Match nerve supply: (A) Gluteus maximus, (B) Gluteus medius, (C) Gemellus superior, (D) Gemellus inferior. Nerves: (I) Superior gluteal, (II) Nerve to Quadratus femoris, (III) Nerve to obturator internus, (IV) Inferior gluteal",
    options: [
      "(A)-(IV), (B)-(I), (C)-(III), (D)-(II)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(II), (C)-(III), (D)-(I)",
      "(A)-(II), (B)-(IV), (C)-(III), (D)-(I)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Tashreeh",
    year: 2024,
    explanation:
      "Gluteus maximus = Inferior gluteal nerve; Gluteus medius = Superior gluteal nerve; Gemellus superior = Nerve to Obturator internus; Gemellus inferior = Nerve to Quadratus femoris.",
  },
  {
    id: 284,
    text: "The recurrent laryngeal nerve supplies all muscles of larynx EXCEPT:",
    options: [
      "Cricothyroid",
      "Lateral cricoarytenoid",
      "Oblique cricoarytenoid",
      "Vocalis",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Tashreeh",
    year: 2024,
    explanation:
      "Cricothyroid is supplied by the External branch of Superior Laryngeal Nerve, not the Recurrent Laryngeal Nerve (RLN). All other intrinsic laryngeal muscles are supplied by RLN.",
  },
  {
    id: 285,
    text: "The 3rd part of duodenum is supplied by the following artery:",
    options: [
      "Supraduodenal artery",
      "Superior pancreaticoduodenal artery",
      "Inferior pancreaticoduodenal artery",
      "Gastroduodenal artery",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Tashreeh",
    year: 2024,
    explanation:
      "The 3rd (horizontal) part of duodenum is supplied by Inferior pancreaticoduodenal artery (branch of Superior Mesenteric Artery). 1st and 2nd parts are supplied by branches of Gastroduodenal artery.",
  },
  {
    id: 286,
    text: "Assertion (A): Basal Metabolic Rate is higher in males. Reasons (R): Due to larger body surface area of male bodies.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Wazaif",
    year: 2024,
    explanation:
      "Both A and R are correct. BMR is higher in males primarily because males have larger body surface area. BMR is directly proportional to body surface area.",
  },
  {
    id: 287,
    text: "Who proposed the double helical model of DNA?",
    options: [
      "Erwin Chargaff",
      "Rosalind Franklin",
      "Watson & Crick",
      "Linus Pauling",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Wazaif",
    year: 2024,
    explanation:
      "Watson and Crick proposed the double helix model of DNA in 1953, using X-ray data from Rosalind Franklin and Chargaff's base pairing rules. They received the Nobel Prize in 1962.",
  },
  {
    id: 288,
    text: "The functions of cerebellum are:",
    options: [
      "Muscle tone and posture",
      "Thinking",
      "Hearing",
      "Reticular formation",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Wazaif",
    year: 2024,
    explanation:
      "Cerebellum functions: coordination of voluntary movements, maintenance of muscle tone and posture, equilibrium. Thinking = cerebral cortex; Hearing = temporal lobe; Reticular formation = brainstem.",
  },
  {
    id: 289,
    text: "Functions of Vitamin A: (A) Blood coagulation, (B) Immunity, (C) Forming Epithelium, (D) Acts as coenzyme, (E) Produces Rhodopsin",
    options: [
      "(A) and (B) only",
      "(C) and (E) only",
      "(B) and (D) only",
      "(C) and (D) only",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Wazaif",
    year: 2024,
    explanation:
      "Specific functions of Vitamin A: Forming/maintaining Epithelium (C) and producing Rhodopsin for night vision (E). Blood coagulation = Vitamin K; coenzyme activity = B vitamins.",
  },
  {
    id: 290,
    text: "Statement I: Agglutination occurs with both Anti sera A and B in blood group test. Statement II: Blood group is AB.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Wazaif",
    year: 2024,
    explanation:
      "Both correct. Agglutination with both Anti-A and Anti-B serum indicates both A and B antigens present on RBCs, confirming blood group AB.",
  },
  {
    id: 291,
    text: "Who is the writer of the book 'Kitab al-Manazir'?",
    options: ["Ibn Sina", "Ibn Haytham", "Ibn Rushd", "Ibn Zuhr"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Kitab al-Manazir (Book of Optics) was written by Ibn al-Haytham (Alhazen, 965-1040 CE). This masterwork correctly described the mechanism of vision and influenced European optics greatly.",
  },
  {
    id: 292,
    text: "Who is the writer of the book 'Ganj Badaward'?",
    options: [
      "Amanullah Khan",
      "Muhammad Kabiruddin",
      "Mehmood Khan",
      "Ajmal Khan",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Ganj Badaward is a famous book on Unani medicine written by Amanullah Khan, an important historical text covering various aspects of Unani pharmacology and therapeutics.",
  },
  {
    id: 293,
    text: "Statement I: 'Jawame al-Iskandaranain' is a collection of fourteen books. Statement II: Seven books by Buqarat and seven by Jalinoos.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Both correct. Jawame al-Iskandaranain (Alexandrian Summaries) consists of fourteen books — seven by Buqarat (Hippocrates) and seven by Jalinoos (Galen), summarized by Alexandrian physicians.",
  },
  {
    id: 294,
    text: "Which physicians belong to the Mughal period? (A) Hakim Ziauddin Mehmood Zangi, (B) Hakim Yusufi, (C) Hakim Ali Gilani, (D) Hakim Mehmood Khan, (E) Hakim Alwi Khan",
    options: [
      "(A) (B) (C) only",
      "(B) (C) (D) only",
      "(C) (D) (E) only",
      "(B) (C) (E) only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2024,
    explanation:
      "Hakim Ziauddin Mehmood Zangi, Hakim Yusufi (wrote Ilajul Amraz), and Hakim Ali Gilani (court physician to Mughal emperors) all belonged to the Mughal period.",
  },
  {
    id: 295,
    text: "As per Indian Factory Act 1948, total hours of work per week including overtime shall not exceed:",
    options: ["40 hours", "48 hours", "60 hours", "90 hours"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Tibbe Qaanuni",
    year: 2024,
    explanation:
      "Indian Factories Act 1948, Section 64: maximum total working hours per week including overtime is 60 hours. Normal week = 48 hours; with overtime maximum = 60 hours per week.",
  },
  {
    id: 296,
    text: "Regarding term 'Social Medicine': (A) First introduced by Jules Guerin, (B) Jules Guerin from Berlin, (C) First introduced by Alfred Grotjahn, (D) Alfred Grotjahn from France, (E) First introduced in 1848",
    options: [
      "(A) (B) only",
      "(C) (D) only",
      "(C) (E) only",
      "(A) (E) only",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "'Social Medicine' was first introduced by Jules Guerin (French physician) in 1848. A and E are correct. Guerin was French (not from Berlin). Alfred Grotjahn developed the concept later but did not introduce the term.",
  },
  {
    id: 297,
    text: "Match food classification: (A) Motadil, Mutawassitul Taghzia, Radi-ul-Kaimoos, (B) Motadil, Qaleel-ul-Taghzia, Radi-ul-Kaimoos, (C) Motadil, Qaleel-ul-Taghzia, Jayyad-ul-Kaimoos, (D) Kaseef, Kaseer-ul-Taghzia, Jayyad-ul-Kaimoos. List II: (I) Sookhi Machhli, (II) Boiled Egg, (III) Gobhi, (IV) Shaljam",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(I), (B)-(III), (C)-(IV), (D)-(II)",
      "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "(A) Moderate nutrition, good chyme = Gobhi; (B) Less nutrition, good chyme = Sookhi Machhli; (C) Less nutrition, excellent chyme = Boiled Egg; (D) Heavy food, high nutrition, excellent chyme = Shaljam.",
  },
  {
    id: 298,
    text: "Minimum distance between well and source of contamination should be at least:",
    options: ["500 meter", "50 feet", "15 meter", "100 feet"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "Minimum safe distance between a well and any contamination source should be at least 50 feet (~15 meters) to prevent seepage of contaminants through soil into well water.",
  },
  {
    id: 299,
    text: "Match occupational diseases: (A) Anthracosis, (B) Byssinosis, (C) Silicosis, (D) Bagassosis. Industries: (I) Textile, (II) Sugar, (III) Ceramic, (IV) Coal Mines",
    options: [
      "(A)-(IV), (B)-(I), (C)-(III), (D)-(II)",
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(III)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "Anthracosis = Coal Mines (coal dust); Byssinosis = Textile Industry (cotton dust, Monday fever); Silicosis = Ceramic Industry (silica dust); Bagassosis = Sugar Industry (sugarcane bagasse dust).",
  },
  {
    id: 300,
    text: "Acceptable level of Thermal comfort is:",
    options: [
      "20\u00b0C",
      "20\u00b0C - 25\u00b0C",
      "25\u00b0C - 27\u00b0C",
      "27\u00b0C - 28\u00b0C",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "Acceptable thermal comfort level is 20-25 degree Celsius. This range is recommended by WHO for indoor environments to maintain human comfort and productivity.",
  },
  {
    id: 301,
    text: "Arrange vaccines in ascending order by year of invention: (A) Hepatitis B, (B) Yellow Fever, (C) Diphtheria Toxoid, (D) Smallpox, (E) Anthrax",
    options: [
      "A, B, C, D, E",
      "B, C, D, A, E",
      "D, C, B, E, A",
      "E, D, C, B, A",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "Ascending order by year: Smallpox vaccine (Jenner, 1796), Diphtheria Toxoid (1923), Yellow Fever (1937), Anthrax (1950s-70s), Hepatitis B (1981). Order: D, C, B, E, A.",
  },
  {
    id: 302,
    text: "Which aging theory describes 'Old age sets in when body cells exhaust multiplication capacity'?",
    options: [
      "Somatic Mutation Theory",
      "Autoimmune Theory",
      "Hayflick's Theory",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilme Sehat",
    year: 2024,
    explanation:
      "Hayflick's Theory (Hayflick Limit, 1961): normal cells can only divide ~50-70 times. When replication capacity is exhausted, cells enter senescence and aging results.",
  },
  {
    id: 303,
    text: "According to which rule, square root of fetus length in cm gives age in months (first 5 months of fetal life):",
    options: [
      "Bishop scoring",
      "Rule of nines",
      "Hiss's rule",
      "Rule of halves",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Qabalat",
    year: 2024,
    explanation:
      "Hiss's Rule: in first 5 months, square root of crown-rump length in cm = age in months. E.g., 9 cm fetus = sqrt(9) = 3 months. After 5 months, length/5 = age in months.",
  },
  {
    id: 304,
    text: "Which is NOT an active principle of AKDO (Calotropis procera)?",
    options: ["Uscharin", "Calotoxin", "Calactin", "Capsicin"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Capsicin (Capsaicin) is NOT from Calotropis procera (AKDO/Madar). AKDO's active principles include Uscharin, Calotoxin, Calactin, Calotropin, and Calotropagenin. Capsaicin is from Capsicum (chili peppers).",
  },
  {
    id: 305,
    text: "Most widely used substance dependence drug is:",
    options: ["Opium", "Cocaine", "Amphetamines", "Cannabis"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Tibbe Qaanuni",
    year: 2024,
    explanation:
      "Cannabis (marijuana/hashish) is the most widely used illicit drug globally according to WHO and UNODC reports, used by the largest number of people worldwide.",
  },
  {
    id: 306,
    text: "Match antidotes: (A) Active Charcoal, (B) Canned fruit Juice, (C) Potassium permanganate, (D) EDTA. Poisons: (I) Barbiturates, (II) Strychnine, (III) Lead, (IV) Alkalies",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(II), (B)-(IV), (C)-(I), (D)-(III)",
      "(A)-(III), (B)-(II), (C)-(IV), (D)-(I)",
      "(A)-(II), (B)-(III), (C)-(IV), (D)-(I)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Tibbe Qaanuni",
    year: 2024,
    explanation:
      "Active Charcoal = Strychnine (adsorbs alkaloid); Canned Fruit Juice (acidic) = Alkalies (neutralization); Potassium permanganate = Barbiturates (oxidizes them); EDTA = Lead (chelation therapy).",
  },
  {
    id: 307,
    text: "Kahroba Shamai is also known as:",
    options: ["Qarnal Ayyal", "Qarnal Bahr", "Azba", "Baqlatul Ghazal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Kahroba Shamai (amber/fossil resin) is also known as Qarnal Bahr (horn of the sea). It has sedative and hemostatic properties in Unani medicine.",
  },
  {
    id: 308,
    text: "Match dosage forms: (A) Zarooq, (B) Nafookh, (C) Mufarreh, (D) Inkebab. List II: (I) Gaseous, (II) Semisolid, (III) Liquid, (IV) Solid",
    options: [
      "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
      "(A)-(I), (B)-(II), (C)-(IV), (D)-(III)",
      "(A)-(II), (B)-(III), (C)-(I), (D)-(IV)",
      "(A)-(IV), (B)-(II), (C)-(I), (D)-(III)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Zarooq = Liquid dosage form (eye/nose drops); Nafookh = Gaseous dosage form (insufflation blown into cavities); Mufarreh = Semisolid (cardiac electuary/paste); Inkebab = Solid (fumigation form).",
  },
  {
    id: 309,
    text: "Which of the following is an example of Nashif (desiccant)?",
    options: ["Beladur", "Khushk choona", "Suddab", "Rewand"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Khushk choona (dried slaked lime/Calcium hydroxide) is a Nashif (desiccant) — it absorbs moisture and dries the application area. Beladur = Semecarpus anacardium; Suddab = Ruta graveolens; Rewand = Rheum emodi.",
  },
  {
    id: 310,
    text: "Which effect is produced by Jhaw (Tamarix)?",
    options: ["Muzir Sar", "Muzir Halaq", "Muzir Bah", "Muzir Basar"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Jhaw (Tamarix gallica/Tamarisk) produces Muzir Halaq (harmful to throat). This is an important adverse effect noted in classical Unani pharmacology.",
  },
  {
    id: 311,
    text: "Panwad is also known as:",
    options: ["Khilaf Balakhi", "Kiram Shab Tab", "Qalb", "Tira Tezak"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Panwad (Cassia tora/Cassia obtusifolia) is also known as Khilaf Balakhi in classical Unani texts. Used for skin diseases and as a mild laxative.",
  },
  {
    id: 312,
    text: "Correct statements about Palas/Dhak (Butea monosperma): (A) Flower = Gul-e-Tisu, (B) Chinya Gond from Balsan, (C) Gul-e-Tisu = Muhallil-e-waram, (D) Two leaves per branch, (E) Samagh-e-Dhak = Kamar Kas",
    options: ["B, D, E", "A, B", "A, C, E", "D, E"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Correct: A (flower = Gul-e-Tisu, flame of the forest), C (Gul-e-Tisu has Muhallil-e-waram/anti-inflammatory action), E (Samagh-e-Dhak and Kamar Kas are same substance). D is wrong — Dhak has 3 leaflets per compound leaf, not two.",
  },
  {
    id: 313,
    text: "Match drug parts: (A) Satawar, (B) Afyun, (C) Darfilfil, (D) Nakhoona. Parts: (I) Latex, (II) Root, (III) Pods, (IV) Fruit",
    options: [
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(III)",
      "(A)-(I), (B)-(III), (C)-(II), (D)-(IV)",
      "(A)-(IV), (B)-(II), (C)-(I), (D)-(III)",
      "(A)-(III), (B)-(II), (C)-(IV), (D)-(I)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Satawar (Asparagus racemosus) = Root; Afyun (Papaver somniferum/Opium) = Latex (dried milky sap from capsules); Darfilfil (Piper longum) = Fruit; Nakhoona (Martynia annua) = Pods.",
  },
  {
    id: 314,
    text: "Statement I: Harrif taste drugs produce Tafteeh, Talteef, Tahleel, Tarqeeq and Taskheen. Statement II: Afas taste drugs produce Tarteeb, Tarqeeq, Irkha, Taleen and Nuzj.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Statement I is true: Harrif (pungent) drugs do produce those five actions. Statement II is false: Afas (astringent) taste drugs produce Taqtee', Taqbeed, Tadmeel, Tabreed — not the actions listed in Statement II.",
  },
  {
    id: 315,
    text: "Assertion (A): Bhilawan produces cardiotonic action. Reasons (R): Bhilawan resembles the shape of heart.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Both A and R correct. Bhilawan (Semecarpus anacardium) has cardiotonic properties AND resembles the heart shape. Classical Unani Doctrine of Signatures held that physical resemblance indicates therapeutic use.",
  },
  {
    id: 316,
    text: "Alkaloids in Asrol (Rauwolfia serpentina): (A) Reserpine, (B) Rescinnamine, (C) Isoajmaline, (D) Peganine",
    options: [
      "A, B and C only",
      "A and C only",
      "B and C only",
      "A and B only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Rauwolfia serpentina contains Reserpine (antihypertensive), Rescinnamine (antihypertensive), and Isoajmaline (antiarrhythmic). Peganine is from Peganum harmala (Harmal), not Rauwolfia. Hence A, B and C only.",
  },
  {
    id: 317,
    text: "Afloonia is used in the form of:",
    options: ["Safoof", "Marham", "Sharbat", "Majoon"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2024,
    explanation:
      "Afloonia (Hyoscyamus niger/Henbane) is used as Majoon (semi-solid electuary). Due to its narcotic/toxic nature, it is incorporated in small doses in Majoon for safe therapeutic use.",
  },
  {
    id: 318,
    text: "Khesanda is called as:",
    options: ["Matbookh", "Zulal", "Naqoo", "Zaroor"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Khesanda (maceration/soaking process in Unani pharmacy) is also called Naqoo. Drugs are soaked in a solvent to extract active constituents — a basic Unani pharmaceutical process.",
  },
  {
    id: 319,
    text: "Sikanjbeen Lemuni does NOT contain:",
    options: ["Asl", "Shakar-i-Teghal", "Shakar", "Lemun"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Sikanjbeen Lemuni (lemon oxymel) does NOT contain Shakar-i-Teghal (jaggery). Its ingredients are Asl (honey), Shakar (refined sugar), Lemun (lemon juice), and water.",
  },
  {
    id: 320,
    text: "The following ingredient is part of Tiryaq-i-Pechish:",
    options: ["Kamoon Siyah", "Hubb-al-Aas", "Kafoor", "Anisoon"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Hubb-al-Aas (Myrtus communis/Myrtle berries) is an ingredient of Tiryaq-i-Pechish. It has astringent and anti-inflammatory properties useful in dysentery treatment.",
  },
  {
    id: 321,
    text: "Match List I with List II: (A) Atishak, (B) Warm-i-Kabid, (C) Warm-i-Lozatain, (D) Zaheer. List II: (I) Sharbat Toot Siyah, (II) Sufoof Moya, (III) Jauhar Seen, (IV) Dawa al-Kurkum",
    options: [
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(II), (B)-(III), (C)-(IV), (D)-(I)",
      "(A)-(I), (B)-(II), (C)-(IV), (D)-(III)",
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Munafeul Aza",
    year: 2024,
    explanation:
      "Atishak (Syphilis) is treated with Jauhar Seen; Warm-i-Kabid with Dawa al-Kurkum; Warm-i-Lozatain with Sharbat Toot Siyah; Zaheer with Sufoof Moya.",
  },
  {
    id: 322,
    text: "Assertion (A): Triyaq Samania is named after. Reasons (R): Because it contains eight constituents.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Triyaq Samania means antidote of eight — it is named so because it contains eight ingredients. Both assertion and reason are correct.",
  },
  {
    id: 323,
    text: "Statement I: Qurs musallas is used externally. Statement II: Use of Barsha'sha increases pain.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Qurs musallas is used internally (orally). Barsha'sha (scarification) generally reduces rather than increases pain. Per exam key: Statement I is true but Statement II is false.",
  },
  {
    id: 324,
    text: "Arrange in the descending order: (A) Dang, (B) Dirham, (C) Daam, (D) Chhatank, (E) Tola",
    options: ["CEBDA", "BDACE", "DCEBA", "DBECA"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Descending order of Unani weight measures: Chhatank (D) > Dirham (B) > Tola (E) > Dang (A) > Daam (C) = DBECA.",
  },
  {
    id: 325,
    text: "Safoof Moalif is used for: (A) Chronic Diarrhoea, (B) Jiryan-e-Mani, (C) Dysentery, (D) Riqqat-e-Mani, (E) Anaemia",
    options: [
      "B and D only",
      "A and B only",
      "C and E only",
      "A and D only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Safoof Moalif is used primarily for Jiryan-e-Mani (spermatorrhoea) and Riqqat-e-Mani (thinning of semen), strengthening the reproductive system.",
  },
  {
    id: 326,
    text: "Statement I: Ibn-e-Hubal written that the joint of greater toe is called Angaroos, this is the origin of word Niqras. Statement II: Shaikh has written that Niqras starts from fingers especially from toe, but sometimes from heel.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz wa Ilaj",
    year: 2024,
    explanation:
      "Both statements about Niqras (Gout) are authentic classical references from Ibn-e-Hubal and Ibn Sina respectively. Both are correct.",
  },
  {
    id: 327,
    text: "Causes of Aortic Regurgitation are: (A) Congenital (Bicuspid), Myxomatous (Prolapse), (B) Endocarditis, Rheumatic fever, (C) Syphilis, (D) Ankylosing spondylitis",
    options: [
      "A, B, C, D only",
      "A and B only",
      "B, C and D only",
      "A, B and D only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Qalb",
    year: 2024,
    explanation:
      "All four are causes of Aortic Regurgitation: congenital bicuspid valve, myxomatous degeneration, infective endocarditis, rheumatic fever, syphilitic aortitis, and ankylosing spondylitis.",
  },
  {
    id: 328,
    text: "Farismoos:",
    options: [
      "Is the other name for Azyoot",
      "Is an uncommon or excessive erection of penis",
      "Is another name for Aqoona",
      "Is another name for Ramak",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz wa Ilaj",
    year: 2024,
    explanation:
      "Farismoos (Priapism) refers to a prolonged, painful, and excessive erection of the penis unrelated to sexual stimulation — a urological emergency.",
  },
  {
    id: 329,
    text: "Marham Qimooliya is effective in:",
    options: ["Azyoot", "Hikkatal Qazeeb", "Aaqoona", "Shuqaq al-Qazeeb"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Marham Qimooliya is a classical Unani topical ointment used for Shuqaq al-Qazeeb (cracks/fissures of the penis) with healing and emollient properties.",
  },
  {
    id: 330,
    text: "Ramak:",
    options: [
      "Is a disease",
      "Is a symptom",
      "Is a formulation made from Sate Amla and other medicines",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Ramak is a classical Unani compound formulation prepared using Sate Amla (extract of Amla/Indian gooseberry) along with other medicines, used as a tonic.",
  },
  {
    id: 331,
    text: "Which of the following is a Arz-e-Laazim and meaning of Sara' (Epilepsy)?",
    options: [
      "Frothing from mouth",
      "To fall",
      "Repeated contractions and relaxations of muscles",
      "Tongue bite",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Asab",
    year: 2024,
    explanation:
      "The literal meaning of Sara' (Epilepsy) in Arabic is 'to fall'. The essential/obligatory symptom (Arz-e-Laazim) is sudden falling.",
  },
  {
    id: 332,
    text: "Identify correct statements related to Niqras (Gout): (A) Madda Niqrasiya Hazm Chaharum ka fuzla hai, (B) It usually affects the poor people, (C) Its pain mostly affects finger joints specially toes, (D) Incidence is more in Females as compared to Males.",
    options: [
      "A and B only",
      "A and C only",
      "B and D only",
      "B and C only",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz wa Ilaj",
    year: 2024,
    explanation:
      "Niqras material is the waste of 4th digestion (A). It mostly affects the toe joints (C). It is more common in affluent people (not poor) and more in males. So A and C are correct.",
  },
  {
    id: 333,
    text: "Assertion (A): 'Marze Akhzar' or 'Khizra' is a special type of Sooul Qiniya. Reasons (R): This is common in young girls due to menstrual abnormalities, causing greenish or yellowish green skin.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz wa Ilaj",
    year: 2024,
    explanation:
      "Marze Akhzar (Chlorosis/Green Sickness) is indeed a type of Sooul Qiniya affecting young girls due to menstrual irregularities, causing greenish-yellow skin. Both assertion and reason are correct.",
  },
  {
    id: 334,
    text: "Identify correct statements related to renal stones: (A) Faaeli Sabab is 'Hararat', (B) Maddi Sabab is 'Ghaleez Laisdar Ratubat', (C) Renal stones are often formed due to 'Qarha', (D) Causes in Kidney and Urinary Bladder are similar.",
    options: [
      "A and B only",
      "A, B and C only",
      "A, C and D only",
      "B, C and D only",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Kulya",
    year: 2024,
    explanation:
      "Faaeli Sabab (efficient cause) is Hararat; Maddi Sabab (material cause) is Ghaleez Laisdar Ratubat; Qarha also contributes. A, B, and C are all correct.",
  },
  {
    id: 335,
    text: "Assertion (A): Bronchial breathing classically heard in Pneumonia. Reasons (R): When underlying area is airless, sounds from large airways are transmitted more efficiently.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Sadr",
    year: 2024,
    explanation:
      "In pneumonia, lung consolidation makes the lung airless, transmitting bronchial breath sounds efficiently to chest wall. Both assertion and reason are correct.",
  },
  {
    id: 336,
    text: "Match List I with List II: (A) Guarding, (B) Rigidity, (C) Murphy sign. List II: (I) Acute Cholecystitis, (II) Diffuse Peritonitis, (III) Uncomplicated Acute Appendicitis",
    options: [
      "(A)-(I), (B)-(II), (C)-(III)",
      "(A)-(III), (B)-(II), (C)-(I)",
      "(A)-(II), (B)-(III), (C)-(I)",
      "(A)-(I), (B)-(III), (C)-(II)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Guarding — uncomplicated acute appendicitis (III); Rigidity (board-like) — diffuse peritonitis (II); Murphy sign — acute cholecystitis (I). Correct: A-III, B-II, C-I.",
  },
  {
    id: 337,
    text: "Identify correct statements related to Asbab-e-Nabz: (A) Arteries are among the Asbab-e-Muqawwima, (B) Physical activity and Repose are among the Asbab-e-Ghair Muqawwima Lazima, (C) Sleep and Awakening are among the Asbab-e-Ghair Muqawwima Mughayyara, (D) Fever is among Asbab-e-Ghair Muqawwima Lazima.",
    options: [
      "A and B only",
      "B and C only",
      "C and D only",
      "A and D only",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Nabz",
    year: 2024,
    explanation:
      "Arteries are Asbab-e-Muqawwima (structural causes). Physical activity and Repose are Asbab-e-Ghair Muqawwima Lazima (essential non-structural causes). A and B are correct.",
  },
  {
    id: 338,
    text: "Assertion (A): Fasd is contraindicated in poisoned patients, same applies to plague patients. Reasons (R): Otherwise its toxicity will spread.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Munafeul Aza",
    year: 2024,
    explanation:
      "Fasd is contraindicated in plague as in poisoning — venesection may spread the toxic material throughout the body via circulation. Both assertion and reason are correct.",
  },
  {
    id: 339,
    text: "Shafviya, Khataliya, Mantiqiya are some of the types of:",
    options: [
      "Surkh Bada (Erysipelas)",
      "Jamrah (Anthrax)",
      "Nar Farsi (Eczema)",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Jild",
    year: 2024,
    explanation:
      "Shafviya, Khataliya, and Mantiqiya are classical Unani subtypes of Jamrah (Anthrax/carbuncle), classified based on location and spread pattern.",
  },
  {
    id: 340,
    text: "The Deedan Jarb are first mentioned by Arab physicians in:",
    options: [
      "Moalajate Buqratiya",
      "Moalajate Sharah Asbab",
      "Usoole Tibb",
      "Kitab Al Hawi",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Tarikh wa Falsafa",
    year: 2024,
    explanation:
      "Deedan Jarb (scabies mites) were first described by Arab physicians in Moalajate Sharah Asbab, an important classical Unani text.",
  },
  {
    id: 341,
    text: "Keratinocytes comprise what percentage of epidermal cells? (A) 95%, (B) 90%, (C) 80% to 99%, (D) 50% to 60%, (E) 55%",
    options: ["A and C only", "B and C only", "A only", "E only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Amraz Jild",
    year: 2024,
    explanation:
      "Keratinocytes constitute approximately 80-99% of epidermal cells (most cited as ~95%). Both A (95%) and C (80-99%) correctly represent this range.",
  },
  {
    id: 342,
    text: "Chajan and Akoota are the other names for:",
    options: [
      "Namla (Herpes)",
      "Jamrah (Anthrax)",
      "Nar Farsi (Eczema)",
      "Shara (Urticaria)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Jild",
    year: 2024,
    explanation:
      "Chajan and Akoota are synonyms for Nar Farsi (Eczema/dermatitis) in classical Unani texts, describing the burning fire-like nature of the condition.",
  },
  {
    id: 343,
    text: "Match List I with List II: (A) Calorie reserve, (B) Vitamin D synthesis, (C) Temperature Regulation, (D) Body Odour. List II: (I) Keratinocytes, (II) Subcutaneous fat, (III) Eccrine glands, (IV) Apocrine sweat glands",
    options: [
      "(A)-(III), (B)-(II), (C)-(IV), (D)-(I)",
      "(A)-(I), (B)-(IV), (C)-(II), (D)-(III)",
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Jild",
    year: 2024,
    explanation:
      "Calorie reserve — Subcutaneous fat (II); Vitamin D synthesis — Keratinocytes (I); Temperature Regulation — Eccrine glands (III); Body Odour — Apocrine glands (IV). Correct: A-II, B-I, C-III, D-IV.",
  },
  {
    id: 344,
    text: "Match List I with List II: (A) Marham Ushq, (B) Marham Jadwar, (C) Marham Dakhliyoon, (D) Marham Raal. List II: (I) Qarooh, (II) Auram Reham Salaat, (III) Tahleel Auram, (IV) Khanazeer Rasoli",
    options: [
      "(A)-(I), (B)-(III), (C)-(IV), (D)-(II)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(I), (B)-(IV), (C)-(II), (D)-(III)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Marham Ushq — Khanazeer Rasoli (IV); Marham Jadwar — Tahleel Auram (III); Marham Dakhliyoon — Auram Reham Salaat (II); Marham Raal — Qarooh (I). Correct: A-IV, B-III, C-II, D-I.",
  },
  {
    id: 345,
    text: "An Aromatic liquid preparation kept in a wide mouthed bottle used for inhalation is known as:",
    options: ["Shamoom", "Lakhlakha", "Mazmaza", "Gharghara"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Lakhlakha is an aromatic liquid inhalation preparation kept in a wide-mouthed bottle. It differs from Shamoom (aromatic powder) and Gharghara (gargle).",
  },
  {
    id: 346,
    text: "Assertion (A): Taking food before Hamam produces obesity and empty stomach Hamam produces lean/dry body. Reasons (R): Persons with dry temperament should intake less water during Hamam.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Munafeul Aza",
    year: 2024,
    explanation:
      "The assertion about food timing and Hamam effects is correct, but the reason about water intake for dry temperament is not the correct explanation for the assertion.",
  },
  {
    id: 347,
    text: "Statement I: Injecting liquid drug or food into the rectum is called Huqna. Statement II: Huqna-e-Ghizayi is given in diseases of throat or when food cannot be given orally.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Munafeul Aza",
    year: 2024,
    explanation:
      "Huqna is the Unani rectal enema. Huqna-e-Ghizayi (nutritional enema) is used when oral feeding is impossible. Both statements are correct.",
  },
  {
    id: 348,
    text: "Exercise/Riyazat strengthens which of the following:",
    options: ["Arwah", "Akhlat", "Arkan", "Az'aa"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Munafeul Aza",
    year: 2024,
    explanation:
      "Riyazat (exercise) primarily strengthens Az'aa (organs/tissues) by improving their tone, nutrition, and function.",
  },
  {
    id: 349,
    text: "What is Naqoo?",
    options: ["Sheera", "Joshanda", "Khaisanda", "Zulal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Saidla",
    year: 2024,
    explanation:
      "Naqoo (maceration) is called Khaisanda in Unani pharmacy — drugs are soaked in liquid to extract active constituents without boiling.",
  },
  {
    id: 350,
    text: "Statement I: Diuresis is advised for treatment of purgation and vomiting. Statement II: Diuretics are given in cardio Pulmonary diseases.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Munafeul Aza",
    year: 2024,
    explanation:
      "Statement I is incorrect — diuresis is not the treatment for purgation/vomiting. Statement II is correct — diuretics are used in cardiopulmonary diseases to reduce fluid overload.",
  },
  {
    id: 351,
    text: "In case of varicose, venesection of which vein is indicated?",
    options: [
      "Cephalic vein",
      "Basalic vein",
      "Sciatic vein",
      "Popliteal vein",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "In classical Unani medicine, for varicose veins of lower limbs, Fasd (venesection) of the Sciatic vein (posterior thigh region) is indicated.",
  },
  {
    id: 352,
    text: "Which is not increased during pregnancy?",
    options: [
      "Vital Capacity",
      "Blood-volume",
      "Extra cellular fluid",
      "Weight",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Blood volume, extracellular fluid, and weight all increase in pregnancy. Vital Capacity remains unchanged or slightly decreases due to diaphragm elevation.",
  },
  {
    id: 353,
    text: "Most commonest cause of post partum Haemorrhage:",
    options: [
      "Atonic Uterus",
      "Traumatic",
      "Mixed causes",
      "Retained placenta",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Atonic uterus is the most common cause of PPH (~70-80% of cases). The uterus fails to contract after delivery, causing excessive bleeding.",
  },
  {
    id: 354,
    text: "Assertion (A): Maternal BP decreased during pregnancy. Reasons (R): Due to smooth muscle relaxing effect of progesterone.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "BP decreases in 2nd trimester due to progesterone-induced smooth muscle relaxation causing peripheral vasodilation. Both assertion and reason are correct.",
  },
  {
    id: 355,
    text: "Statement I: Obstetric conjugate is distance between sacral promontory to inner surface of symphysis pubis. Statement II: Diagonal conjugate is distance between lower border of symphysis pubis to sacral promontory.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Both conjugate measurements are correctly described. Obstetric conjugate and diagonal conjugate definitions are accurate as given.",
  },
  {
    id: 356,
    text: "Order of weight gain during pregnancy: (A) Uterus, (B) Placenta, (C) Liquor Amnii, (D) Fetus, (E) Breasts",
    options: [
      "E > B > C > A > D",
      "D > A > C > B > E",
      "B > C > D > A > E",
      "A > C > D > B > E",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Descending weight gain order: Fetus (~3.4kg) > Uterus (~0.9kg) > Liquor Amnii (~0.8kg) > Placenta (~0.65kg) > Breasts (~0.4kg). So D > A > C > B > E.",
  },
  {
    id: 357,
    text: "Assertion (A): When Biparietal diameter of fetus stretches the Vulval outlet. Reasons (R): This is called as crowning of the head.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Crowning occurs when the biparietal diameter passes through the vulval outlet and remains visible between contractions. Both assertion and reason are correct.",
  },
  {
    id: 358,
    text: "Diagnostic indications of laparoscopy for infertility: (A) Fulguration of endometriotic implants, (B) Abnormal HSG, (C) Age > 35 yrs, (D) Women with comorbid pelvic pathology.",
    options: ["A, D only", "B, C, D only", "A, B, C only", "A, B, D only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Diagnostic laparoscopy is indicated for: abnormal HSG (B), age >35 requiring prompt evaluation (C), comorbid pelvic pathology (D). Fulguration (A) is therapeutic, not a diagnostic indication.",
  },
  {
    id: 359,
    text: "Match List I with List II: (A) Emergency pills, (B) Triphasic pills, (C) Mini pill, (D) IVth generation pills. List II: (I) Levonorgestral 75 ugm, (II) Drospirenone, (III) Levonorgestral and ethinylestradiol, (IV) Levonorgestral 0.75 mg",
    options: [
      "(A)-(IV), (B)-(I), (C)-(II), (D)-(III)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
      "(A)-(III), (B)-(II), (C)-(I), (D)-(IV)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Emergency pills — Levonorgestral 0.75mg (IV); Triphasic pills — Levonorgestral and ethinylestradiol varying doses (III); Mini pill — Levonorgestral 75mcg (I); 4th generation — Drospirenone (II). Correct: A-IV, B-III, C-I, D-II.",
  },
  {
    id: 360,
    text: "Which of the entities are included in PID? (A) Endometritis, (B) Salpingitis, (C) Pelvic peritonitis, (D) Cervicitis",
    options: ["B, D only", "D, A only", "B, C, D only", "A, B, C only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "PID includes Endometritis (A), Salpingitis (B), and Pelvic peritonitis (C). Cervicitis (D) is not classically included in PID. Correct: A, B, C only.",
  },
  {
    id: 361,
    text: "Match List I with List II: (A) Bacterial vaginosis, (B) Vaginal candidiasis, (C) Chlamydia vaginal infection, (D) Trichomoniasis vaginalis. List II: (I) Mucopurulent, (II) Greenish yellow discharge, (III) Curdy discharge, (IV) Grey white to green yellow discharge",
    options: [
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
      "(A)-(II), (B)-(III), (C)-(I), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
      "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Niswan",
    year: 2024,
    explanation:
      "Bacterial vaginosis — grey/green-yellow (IV); Candidiasis — curdy (III); Chlamydia — mucopurulent (I); Trichomoniasis — frothy greenish-yellow (II). Correct: A-IV, B-III, C-I, D-II.",
  },
  {
    id: 362,
    text: "First molar tooth appears around the age:",
    options: [
      "9 month to 12 month",
      "15 month and 18 month",
      "12 month and 15 month",
      "6 month to 9 month",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Amraz Atfal",
    year: 2024,
    explanation:
      "First deciduous molar appears between 12-15 months. Eruption sequence: central incisors (6-9m), lateral incisors (9-12m), first molars (12-15m), canines (15-18m), second molars (18-24m).",
  },
  {
    id: 363,
    text: "Gower's sign is found in:",
    options: [
      "Poliomyelitis",
      "Muscular Dystrophy",
      "Epilepsy",
      "Myasthenia Gravis",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Atfal",
    year: 2024,
    explanation:
      "Gower's sign is seen in Duchenne Muscular Dystrophy — the child walks their hands up their body to stand up due to proximal muscle weakness.",
  },
  {
    id: 364,
    text: "Duckett Jones major criteria for Rheumatic fever: (A) Carditis, (B) Meningitis, (C) Chorea, (D) Erythema marginatum",
    options: ["B, C, D only", "A, C only", "A, C, D only", "A, B, C only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Amraz Atfal",
    year: 2024,
    explanation:
      "Major criteria: Carditis (A), Polyarthritis, Chorea (C), Erythema marginatum (D), Subcutaneous nodules. Meningitis (B) is NOT a major criterion. So A, C, D are correct.",
  },
  {
    id: 365,
    text: "Match List I with List II: (A) Prolapse of Rectum, (B) Acute Fissure in Ano, (C) Hydrocele, (D) Carcinoma of Stomach. List II: (I) Lord's anal dilatation, (II) Well's operation, (III) Eversion of sac, (IV) Billroth-II",
    options: [
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(I), (C)-(II), (D)-(III)",
      "(A)-(I), (B)-(IV), (C)-(III), (D)-(II)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Prolapse of Rectum — Well's operation (II); Fissure in Ano — Lord's anal dilatation (I); Hydrocele — Eversion of sac (III); Carcinoma of Stomach — Billroth-II (IV). Correct: A-II, B-I, C-III, D-IV.",
  },
  {
    id: 366,
    text: "The Littre's Hernia is protrusion of viscus through an abnormal opening:",
    options: [
      "A portion of circumference of the Intestine",
      "A Meckel's diverticulum",
      "Part of urinary bladder",
      "Part of stomach",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Littre's hernia contains a Meckel's diverticulum in the hernial sac — a rare type named after Alexis Littre.",
  },
  {
    id: 367,
    text: "Statement I: Severe ulcerative colitis is characterised by more than four motions a day with systemic illness. Statement II: Acute Pancreatitis presents with abdominal pain and raised pancreatic enzyme levels.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Both statements represent standard clinical definitions. Severe UC: >4 motions/day with systemic illness. Acute pancreatitis: abdominal pain + raised amylase/lipase. Both are correct.",
  },
  {
    id: 368,
    text: "Assertion (A): Full thickness prolapse of rectum involves all layers and is associated with weak pelvic floor. Reasons (R): Rectal prolapse commences as intussusception of the rectum.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Full thickness rectal prolapse involves all rectal layers with weak pelvic floor. It begins as internal intussusception that progresses. Both assertion and reason are correct.",
  },
  {
    id: 369,
    text: "Statement I: In trauma airway assessment, check verbal response, clear airway, if GCS ≤ 8 consider definitive airway. Statement II: There is no need of oxygen to all trauma patients.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Statement I is correct per ATLS guidelines. Statement II is incorrect — all trauma patients require high-flow oxygen to prevent hypoxia.",
  },
  {
    id: 370,
    text: "Assertion (A): Pancreatitis is inflammation of the parenchyma of the Pancreas. Reasons (R): The underlying mechanism is premature activation of pancreatic enzymes.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Pancreatitis is pancreatic parenchyma inflammation caused by premature intracellular activation of trypsinogen to trypsin leading to autodigestion. Both are correct.",
  },
  {
    id: 371,
    text: "Shock is a systemic state of:",
    options: [
      "Low tissue perfusion",
      "High tissue perfusion",
      "Normal tissue perfusion",
      "Very high tissue perfusion",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Shock is defined as inadequate tissue perfusion where oxygen and nutrient delivery is insufficient to meet metabolic demands.",
  },
  {
    id: 372,
    text: "Stress gastritis is characterised by:",
    options: [
      "Reduction in blood supply to superficial mucosa of stomach",
      "Disturbance of gastric mucosal barrier",
      "Enterogastric reflux",
      "Autoimmune condition",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Stress gastritis is characterised by reduction in blood supply to superficial gastric mucosa in critically ill patients, causing mucosal ischaemia, erosions, and ulceration.",
  },
  {
    id: 373,
    text: "The life threatening event with major burn is:",
    options: [
      "Inflammatory changes of skin",
      "Burn around the face and neck",
      "Burn of Genitals",
      "Cell mediated immunity is significantly reduced",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "Burns around face and neck are immediately life-threatening due to airway oedema, inhalation injury, and respiratory compromise requiring prompt airway management.",
  },
  {
    id: 374,
    text: "The General anaesthetic triad includes:",
    options: [
      "Unconsciousness and pain relief",
      "Unconsciousness, pain relief and muscle relaxation",
      "Unconsciousness, pain relief and Haemostasis",
      "Unconsciousness, Pain relief and wound care",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Jarahat",
    year: 2024,
    explanation:
      "The classical anaesthetic triad: (1) Unconsciousness/narcosis, (2) Analgesia/pain relief, (3) Muscle relaxation — essential for safe general anaesthesia.",
  },
  {
    id: 375,
    text: "What is chalazion? (A) Inflammation of gland of Zeis, (B) Inflammation of gland of Moll, (C) Inflammation of gland of Meibomian, (D) Inflammation of lid margin.",
    options: ["A and C only", "B and C only", "C only", "D and C only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Amraz Ain",
    year: 2024,
    explanation:
      "Chalazion is chronic granulomatous inflammation specifically of the Meibomian gland (tarsal gland), caused by obstruction of its duct leading to lipogranuloma.",
  },
  {
    id: 376,
    text: "Match List I with List II: (A) Light house sign, (B) Rising sun sign, (C) Hennebert's sign, (D) Griesinger's sign. List II: (I) Inflamed mastoid vein, (II) Fistula in labyrinth, (III) Suppurative otitis media, (IV) Glomus jugulare",
    options: [
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(I), (B)-(II), (C)-(IV), (D)-(III)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Amraz Uzn",
    year: 2024,
    explanation:
      "Light house sign — CSOM (III); Rising sun sign — Glomus jugulare (IV); Hennebert's sign — Fistula in labyrinth (II); Griesinger's sign — Inflamed mastoid vein (I). Correct: A-III, B-IV, C-II, D-I.",
  },
  {
    id: 377,
    text: "What is epiphora? (A) Excessive secretion of tears, (B) Obstruction to outflow of tears, (C) Steven's Johnson's syndrome, (D) Sensory stimulation of eyes",
    options: ["(A) only", "(B) only", "(C) only", "(D) only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Amraz Ain",
    year: 2024,
    explanation:
      "Epiphora is overflow of tears due to obstruction to lacrimal drainage outflow. It differs from hyperlacrimation (excessive tear production).",
  },
  {
    id: 378,
    text: "Assertion (A): There is severe pain in otitis externa. Reasons (R): Because skin is adhered to underlying cartilage and due to congestion in recumbent position.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Amraz Uzn",
    year: 2024,
    explanation:
      "Severe pain in otitis externa occurs because skin is tightly adherent to underlying cartilage, leaving no room for oedema. Recumbent position worsens congestion. Both assertion and reason are correct.",
  },
  {
    id: 379,
    text: "Which of the following is NOT a symptom of corneal ulcer? (A) Acute pain in eye, (B) Mucopurulent Discharge, (C) Redness of eye, (D) Lacrimation, (E) Blepharospasm",
    options: ["B and D only", "D and E only", "B only", "A only"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Amraz Ain",
    year: 2024,
    explanation:
      "Corneal ulcer symptoms: acute pain (A), redness (C), lacrimation (D), blepharospasm (E). Mucopurulent discharge (B) is characteristic of conjunctivitis, not specifically corneal ulcer. So B only is the answer.",
  },
  {
    id: 380,
    text: "What term is used to describe perverted sense of smell?",
    options: ["Anosmia", "Hyposmia", "Parosmia", "Cocosmia"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Amraz Uzn",
    year: 2024,
    explanation:
      "Parosmia is distorted/perverted sense of smell where odours are perceived differently. Anosmia = absent smell; Hyposmia = reduced smell.",
  },
  // ── 2023 AIAPGET Questions ──
  {
    id: 381,
    text: "Step wise line of treatment of Zoafe Bah is: (A) Musakhkhinat, (B) Muqawwiyat, (C) Mumsikat, (D) Muwallidat-e-Mani",
    options: [
      "(A), (B), (C), (D)",
      "(D), (A), (B), (C)",
      "(D), (B), (A), (C)",
      "(A), (D), (B), (C)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "The stepwise treatment of Zoafe Bah (sexual weakness) follows: first Muwallidat-e-Mani (semen producers) to build the raw material, then Musakhkhinat (warming agents) to stimulate, then Muqawwiyat (strengthening agents) to consolidate, and finally Mumsikat (retaining agents) to prevent premature ejaculation. Sequence: D→A→B→C.",
  },
  {
    id: 382,
    text: "The meaning of 'Lams' in the definition of Nabz is:",
    options: [
      "To touch with the tip of fingers",
      "To see with the eyes",
      "To feel the movement of the artery",
      "To hear the sound of the artery",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "In the classical Unani definition of Nabz (pulse), 'Lams' means to touch with the tip of the fingers. The physician places the fingertips over the artery to feel its movement, hence 'Lams' specifically refers to tactile palpation with fingertips.",
  },
  {
    id: 383,
    text: "In which condition Nabz is 'Saree' and 'Mutawatir'?",
    options: [
      "Warm-e-Kabid",
      "Warm-e-Reham",
      "Warm-e-Hazaab",
      "Warm-e-Kulya",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "In Warm-e-Hazaab (inflammation of the diaphragm/pericardium), the pulse is characteristically 'Saree' (fast/rapid) and 'Mutawatir' (continuous without interruption) because the inflammation is close to the heart, causing it to beat rapidly and continuously.",
  },
  {
    id: 384,
    text: "'Dawa-e-Ghisali' (detergent) means:",
    options: [
      "That cleanses the surface of the organ",
      "That produces heat in the organ",
      "That produces coldness in the organ",
      "That produces moisture in the organ",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Ilaj",
    year: 2023,
    explanation:
      "Dawa-e-Ghisali (from 'Ghasl' meaning to wash/cleanse) refers to a drug that cleanses the surface of an organ by removing morbid matter and impurities from its surface, similar to a detergent action.",
  },
  {
    id: 385,
    text: "Which of the following is not included in 'Asbab-e-Sittah Zarooriyah'?",
    options: [
      "Hawa-e-Muheet",
      "Makul-o-Mashrub",
      "Harkat-o-Sukoon-e-Badani",
      "Daalk-o-Riyazat",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Asbab-e-Sittah Zarooriyah (Six Essential Causes) are: (1) Hawa-e-Muheet, (2) Makul-o-Mashrub, (3) Harkat-o-Sukoon-e-Badani, (4) Harkat-o-Sukoon-e-Nafsani, (5) Naum-o-Yaqza, (6) Ihtibas-o-Istifragh. Daalk-o-Riyazat is not a separate category — Riyazat falls under Harkat-e-Badani.",
  },
  {
    id: 386,
    text: "The temperament (Mizaj) of 'Rooh' is:",
    options: ["Haar-Yabis", "Haar-Ratab", "Barid-Yabis", "Barid-Ratab"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Rooh (vital spirit) has a Haar-Ratab (hot and moist) temperament. This is because Rooh is a vaporous substance derived from the finest part of blood and resides in the heart; heat and moisture are essential qualities for its vitality.",
  },
  {
    id: 387,
    text: "Which organ is the 'Markaz' (center) of 'Quwwat-e-Haiwaniyah'?",
    options: ["Dimagh", "Kabid", "Qalb", "Khusiyatain"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Quwwat-e-Haiwaniyah (vital/animal faculty) has its Markaz (center/seat) in the Qalb (heart). The heart generates Rooh-e-Haiwani and distributes it through arteries, controlling vital functions like heartbeat and respiration.",
  },
  {
    id: 388,
    text: "According to Ibn-e-Sina, the number of 'Aaza-e-Raeesah' is:",
    options: ["3", "4", "5", "6"] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "According to Ibn-e-Sina (Avicenna), there are 4 Aaza-e-Raeesah (principal/chief organs): Qalb (heart), Dimagh (brain), Kabid (liver), and Khusiyatain (testes/gonads). Each governs one of the four major faculties.",
  },
  {
    id: 389,
    text: "Which 'Khilt' is called 'Khadim-e-Dam' (servant of blood)?",
    options: ["Safra", "Balgham", "Sawda", "None of these"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Balgham (phlegm) is called 'Khadim-e-Dam' (servant of blood) because it acts as a nutrient reserve that can be converted to blood when needed. It keeps the blood moist and serves as a backup nutritive substance.",
  },
  {
    id: 390,
    text: "The meaning of 'Tabiyat' is:",
    options: [
      "The power that governs the body",
      "The physical structure of the body",
      "The psychological state of the body",
      "The environmental influence on the body",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Tabiyat (Nature) in Unani medicine refers to the inherent power or force that governs and regulates all bodily functions — nutrition, growth, reproduction, and maintenance of health. It is also called Quwwat-e-Mudabbira-e-Badan.",
  },
  {
    id: 391,
    text: "Which organ is most 'Haar' (hot) in the human body?",
    options: ["Kabid", "Qalb", "Lahm", "Jild"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Qalb (heart) is the hottest organ in the human body according to Unani medicine. It is the seat of innate heat (Hararat-e-Ghariziyah) and Rooh, making it the warmest organ.",
  },
  {
    id: 392,
    text: "'Ustaqussat' are also known as:",
    options: ["Akhlat", "Arkan", "Aaza", "Arwah"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Ustaqussat is the Greek term for Arkan (elements). The four Arkan — Nar (fire), Hawa (air), Maa (water), Arz (earth) — are also called Ustaqussat, meaning basic/fundamental elements that constitute all matter.",
  },
  {
    id: 393,
    text: "The number of 'Quwa-e-Nafsaniyah' is:",
    options: ["2", "3", "4", "5"] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Quwa-e-Nafsaniyah (psychic/nervous faculties) are 3 in number: (1) Quwwat-e-Mudrika (perceptive power — further divided into Hiss and Hayyiz), (2) Quwwat-e-Muhrika (motor power), and (3) Quwwat-e-Khayal (imaginative power). The main three are sensation, movement, and imagination.",
  },
  {
    id: 394,
    text: "'Baul-e-Zit-e-Duhni' (oily urine) is a sign of:",
    options: [
      "Zoaf-e-Kulya",
      "Zoaf-e-Kabid",
      "Tahlil-e-Badan",
      "Waram-e-Masana",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Baul",
    year: 2023,
    explanation:
      "Baul-e-Zit-e-Duhni (oily/fatty urine) indicates Tahlil-e-Badan (bodily dissolution/wasting), where body fats are being broken down and excreted through urine. This is seen in severe cachexia or advanced wasting diseases.",
  },
  {
    id: 395,
    text: "'Harkat-e-Moatadil' (moderate exercise) produces:",
    options: [
      "Hararat-e-Ghariziyah",
      "Hararat-e-Gharibah",
      "Burudat",
      "Yubusat",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Moderate exercise (Harkat-e-Moatadil) strengthens and enhances Hararat-e-Ghariziyah (innate/natural heat). It improves digestion, circulation, and vitality by increasing the body's intrinsic warmth without causing harmful excess.",
  },
  {
    id: 396,
    text: "Which 'Khilt' is 'Barid-Yabis' in temperament?",
    options: ["Dam", "Balgham", "Safra", "Sawda"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Sawda (black bile) has Barid-Yabis (cold and dry) temperament. It corresponds to the earth element and governs cold, dry conditions. Excess Sawda leads to melancholic disorders.",
  },
  {
    id: 397,
    text: "'Afa'al-e-Nafis' (psychological functions) are related to:",
    options: ["Qalb", "Kabid", "Dimagh", "Mi'da"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Afa'al-e-Nafis (psychological/psychic functions) are governed by the Dimagh (brain), which is the seat of Quwa-e-Nafsaniyah. All mental faculties including perception, cognition, memory, and voluntary movement originate from the brain.",
  },
  {
    id: 398,
    text: "The 'Maddi Sabab' (material cause) of Health and Disease is:",
    options: ["Arkan", "Akhlat", "Aaza", "Arwah"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Aaza (organs) are the Maddi Sabab (material/structural cause) of health and disease. They are the physical substrate — disease manifests in and through the organs. Note: Some texts place Akhlat here, but in context of structural material cause, Aaza is the direct physical matter.",
  },
  {
    id: 399,
    text: "'Nabz-e-Azim' is a sign of:",
    options: [
      "Excessive Hararat",
      "Excessive Burudat",
      "Excessive Yubusat",
      "Excessive Ratubat",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Azim (large/full pulse) indicates excessive Hararat (heat) in the body. When there is excess heat, the heart expands more to dissipate it, producing a large volume pulse.",
  },
  {
    id: 400,
    text: "The meaning of 'Istehala' is:",
    options: ["Movement", "Transformation", "Stagnation", "Elimination"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Istehala means transformation or qualitative change — the conversion of one substance into another. In Unani physiology, food undergoes Istehala during digestion, being transformed into blood and other humours.",
  },
  {
    id: 401,
    text: "'Nafs-e-Natiqa' is the other name of:",
    options: [
      "Rooh-e-Haiwani",
      "Rooh-e-Nafsani",
      "Rooh-e-Tabiyi",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Nafs-e-Natiqa (rational soul) is another name for Rooh-e-Nafsani (psychic/nervous spirit), which resides in the brain and governs psychic functions, rational thought, and voluntary movement.",
  },
  {
    id: 402,
    text: "'Baul-e-Rasubi' (sedimentary urine) is found in:",
    options: [
      "Amraz-e-Haddah",
      "Amraz-e-Muzminah",
      "Amraz-e-Baridah",
      "Amraz-e-Yabisah",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Baul",
    year: 2023,
    explanation:
      "Baul-e-Rasubi (urine with sediment) is characteristically found in Amraz-e-Muzminah (chronic diseases), where prolonged illness leads to accumulation of morbid matter that settles as sediment in the urine.",
  },
  {
    id: 403,
    text: "The meaning of 'Tabai' (natural) in Nabz is:",
    options: [
      "Movement of the artery according to the requirement of the body",
      "Movement of the artery faster than normal",
      "Movement of the artery slower than normal",
      "Absence of movement in the artery",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Tabai (natural pulse) refers to arterial movement that is perfectly in accordance with the body's needs — neither too fast, nor too slow, neither too strong nor too weak. It reflects normal physiological state.",
  },
  {
    id: 404,
    text: "'Dawa-e-Mudir' (diuretic) acts on:",
    options: ["Mi'da", "Kabid", "Kulya", "Masana"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Ilaj",
    year: 2023,
    explanation:
      "Dawa-e-Mudir (diuretic drug) specifically acts on the Kulya (kidneys) to increase urine production and output. It stimulates the kidneys to filter and excrete more fluid and waste products.",
  },
  {
    id: 405,
    text: "Which 'Quwwat' is responsible for the growth of the body?",
    options: [
      "Quwwat-e-Ghaziya",
      "Quwwat-e-Namiyah",
      "Quwwat-e-Muwallida",
      "Quwwat-e-Musawwira",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Quwwat-e-Namiyah (growing/augmentative faculty) is responsible for the growth of the body. It increases the body's dimensions in all directions by adding appropriate matter to all parts proportionally.",
  },
  {
    id: 406,
    text: "'Ghalba-e-Dam' (excess of blood) produces:",
    options: [
      "Humrat-e-Wajh (redness of face)",
      "Safrat-e-Wajh (yellowness of face)",
      "Khuzrat-e-Wajh (greenness of face)",
      "Sawad-e-Wajh (blackness of face)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Ghalba-e-Dam (dominance of blood humour) produces Humrat-e-Wajh (redness of the face). Excess blood causes flushing and redness due to increased blood flow and vasodilation in facial vessels.",
  },
  {
    id: 407,
    text: "'Nabz-e-Dauqi' (hectic pulse) is found in:",
    options: [
      "Humma-e-Yaum",
      "Humma-e-Ufooni",
      "Humma-e-Diq",
      "Humma-e-Murakkaba",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Dauqi (hectic/undulating pulse — like a worm) is the characteristic pulse of Humma-e-Diq (hectic/consumptive fever). It is small, fast, and soft, reflecting severe debility and wasting of vital power.",
  },
  {
    id: 408,
    text: "'Mizaj-e-Atfal' (temperament of children) is:",
    options: ["Haar-Ratab", "Haar-Yabis", "Barid-Ratab", "Barid-Yabis"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Atfal (children) have Haar-Ratab (hot and moist) temperament. Children are in a phase of growth, requiring heat for metabolism and moisture for tissue development. Their bodies are soft, moist, and warm.",
  },
  {
    id: 409,
    text: "'Aaza-e-Aaliya' (subservient organs) of the heart are:",
    options: ["Nerves", "Veins", "Arteries", "Muscles"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Arteries are the Aaza-e-Aaliya (serving/subservient organs) of the heart. They carry the heart's products (Rooh and vital spirit) to all body parts, serving as the instruments through which the heart performs its vital functions.",
  },
  {
    id: 410,
    text: "'Khilt-e-Safra' is produced in:",
    options: ["Qalb", "Dimagh", "Kabid", "Tihal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Safra (yellow bile) is produced in the Kabid (liver) during the process of Hazm-e-Kabidi (hepatic digestion). The excess hot and light froth of blood produced in the liver is Safra.",
  },
  {
    id: 411,
    text: "'Baul-e-Asali' (honey-like urine) is a sign of:",
    options: [
      "Ziabetus Sadiq",
      "Ziabetus Shakri",
      "Zoaf-e-Masana",
      "Waram-e-Kulya",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Baul",
    year: 2023,
    explanation:
      "Baul-e-Asali (honey-like sweet urine) is the hallmark of Ziabetus Shakri (diabetes mellitus/sugar diabetes). The sweet taste and honey-like consistency is due to excess glucose in the urine (glycosuria).",
  },
  {
    id: 412,
    text: "'Harkat-e-Qasriyah' (forced movement) is:",
    options: [
      "Natural movement",
      "Movement produced by an external force",
      "Movement produced by internal will",
      "Absence of movement",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Harkat-e-Qasriyah is movement produced by an external force — against the natural tendency of the body. It is compulsory/forced movement, not arising from the body's own will or natural faculty.",
  },
  {
    id: 413,
    text: "'Nabz-e-Ghazali' (gazelle pulse) is:",
    options: [
      "Slow and weak",
      "Fast and irregular",
      "Strong and hard",
      "Small and soft",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Ghazali (gazelle-like pulse) is characterised by a fast and irregular rhythm, named after the quick, bounding movements of a gazelle. It alternates between fast and slow beats, creating an irregular pattern.",
  },
  {
    id: 414,
    text: "'Quwwat-e-Masika' is a sub-power of:",
    options: [
      "Quwwat-e-Nafsaniyah",
      "Quwwat-e-Haiwaniyah",
      "Quwwat-e-Tabiyah",
      "Quwwat-e-Mughayyarah",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Quwwat-e-Masika (retaining power) is a sub-faculty of Quwwat-e-Tabiyah (natural faculty). It is one of the four sub-powers of Quwwat-e-Tabiyah: Jaziba (attracting), Masika (retaining), Hazima (digesting), and Dafia (expelling).",
  },
  {
    id: 415,
    text: "'Arkan-e-Arba' (four elements) are:",
    options: [
      "Fire, Air, Water, Earth",
      "Blood, Phlegm, Yellow Bile, Black Bile",
      "Heart, Brain, Liver, Testicles",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Arkan-e-Arba (four elements) are: Nar (Fire), Hawa (Air), Maa (Water), and Arz (Earth). These are the four fundamental elements that constitute all matter according to Greek-Unani philosophy.",
  },
  {
    id: 416,
    text: "'Mizaj-e-Kuhul' (temperament of the middle-aged) is:",
    options: ["Haar-Ratab", "Haar-Yabis", "Barid-Ratab", "Barid-Yabis"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Kuhul (middle/old age) has Barid-Yabis (cold and dry) temperament. As age advances, innate moisture and heat decline, leading to a cold and dry constitution, characteristic of ageing.",
  },
  {
    id: 417,
    text: "'Aaza-e-Murakkabah' (compound organs) are also called:",
    options: [
      "Aaza-e-Mufradah",
      "Aaza-e-Aliyah",
      "Aaza-e-Raeesah",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Aaza-e-Murakkabah (compound organs composed of multiple tissue types) are also known as Aaza-e-Aliyah (noble/complex organs). They are formed from multiple Aaza-e-Mufradah (simple organs/tissues) combined together.",
  },
  {
    id: 418,
    text: "'Rooh' is the 'Hamal' (carrier) of:",
    options: ["Akhlat", "Quwa", "Aaza", "Arkan"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Rooh (spirit/vital force) is the Hamal (vehicle/carrier) of Quwa (faculties/powers). Rooh carries and transmits the various faculties — Tabiyah, Haiwaniyah, and Nafsaniyah — to all parts of the body.",
  },
  {
    id: 419,
    text: "'Nabz-e-Munshari' (saw-like pulse) is a sign of:",
    options: [
      "Waram-e-Ahsha",
      "Waram-e-Dimagh",
      "Waram-e-Qalb",
      "Waram-e-Mafasil",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Munshari (saw-like/serrated pulse) is a characteristic sign of Waram-e-Ahsha (visceral inflammation/pleuritis). The irregular, jagged pulse pattern resembles the teeth of a saw.",
  },
  {
    id: 420,
    text: "'Hararat-e-Ghariziyah' is found in:",
    options: ["Living bodies", "Dead bodies", "Both", "None"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Hararat-e-Ghariziyah (innate/vital heat) is found only in living bodies. It is the life-sustaining heat that maintains all metabolic and physiological functions. Upon death, this innate heat is extinguished.",
  },
  {
    id: 421,
    text: "Which of the following is 'Muzir' (harmful) for the 'Dimagh' (brain)?",
    options: [
      "Adas (Lentils)",
      "Hantam (Wheat)",
      "Maash (Black gram)",
      "Chana (Gram)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Ghiza",
    year: 2023,
    explanation:
      "Adas (lentils) are considered Muzir-e-Dimagh (harmful for the brain) in classical Unani texts because they produce Sawda (black bile), which is cold and dry, adversely affecting the brain's moist temperament and causing mental heaviness.",
  },
  {
    id: 422,
    text: "'Dawa-e-Munaftith' (expectorant) is used in the treatment of:",
    options: ["Diarrhoea", "Cough with phlegm", "Constipation", "Headache"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Ilaj",
    year: 2023,
    explanation:
      "Dawa-e-Munaftith (expectorant) helps in expelling phlegm from the respiratory tract. It is used in cough with phlegm (productive cough) to facilitate expectoration and clear the airways.",
  },
  {
    id: 423,
    text: "The meaning of 'Su-e-Mizaj' is:",
    options: [
      "Normal temperament",
      "Abnormal temperament",
      "Change in physical structure",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Su-e-Mizaj literally means 'badness of temperament' — it refers to an abnormal or altered temperament where the normal balance of qualities is disturbed. It is the fundamental cause of disease in Unani medicine.",
  },
  {
    id: 424,
    text: "Which 'Khilt' is called 'Khadim-e-Sawda'?",
    options: ["Dam", "Balgham", "Safra", "None of these"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Balgham is also called 'Khadim-e-Sawda' (servant of black bile). Balgham serves multiple roles — it is Khadim-e-Dam (servant of blood) by nourishing tissues and also has a relationship with Sawda in balancing cold humours.",
  },
  {
    id: 425,
    text: "'Nabz-e-Sagheer' is a sign of:",
    options: [
      "Strong power",
      "Weak power",
      "High heat",
      "Excessive moisture",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Sagheer (small/thin pulse) indicates weak Quwwat (weak vital power). When the heart's power is diminished, it cannot dilate the artery adequately, resulting in a small volume pulse.",
  },
  {
    id: 426,
    text: "The 'Faeli Sabab' (efficient cause) of Health is:",
    options: ["Arkan", "Akhlat", "Tabiyat", "Aaza"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Tabiyat (Nature/the governing power) is the Faeli Sabab (efficient/active cause) of health. Tabiyat actively maintains health by regulating all physiological processes, making it the active agent responsible for the state of health.",
  },
  {
    id: 427,
    text: "'Baul-e-Abraz' (white urine) is a sign of:",
    options: [
      "Excess of Safra",
      "Excess of Balgham",
      "Excess of Dam",
      "Excess of Sawda",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Baul",
    year: 2023,
    explanation:
      "Baul-e-Abraz (white/pale urine) indicates excess Balgham (phlegm) in the body. Phlegm is cold and white in colour, and its excess is reflected in pale, white urine.",
  },
  {
    id: 428,
    text: "'Harkat-e-Iradiyah' (voluntary movement) is related to:",
    options: [
      "Quwwat-e-Tabiyah",
      "Quwwat-e-Haiwaniyah",
      "Quwwat-e-Nafsaniyah",
      "Quwwat-e-Mughayyarah",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Harkat-e-Iradiyah (voluntary movement) is governed by Quwwat-e-Nafsaniyah (psychic faculty). Voluntary movements arise from conscious will, which is a function of the nervous system/psychic faculty seated in the brain.",
  },
  {
    id: 429,
    text: "Which 'Rukn' is 'Barid-Ratab' (cold and moist)?",
    options: ["Nar (Fire)", "Hawa (Air)", "Ma'a (Water)", "Arz (Earth)"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Ma'a (Water) is Barid-Ratab (cold and moist) in temperament. Among the four elements: Fire is hot-dry, Air is hot-moist, Water is cold-moist, and Earth is cold-dry.",
  },
  {
    id: 430,
    text: "The temperament of 'Sin-e-Shabab' (youth) is:",
    options: ["Haar-Ratab", "Haar-Yabis", "Barid-Ratab", "Barid-Yabis"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Sin-e-Shabab (youth/young adulthood) has Haar-Yabis (hot and dry) temperament. After childhood's moist phase, youth becomes hotter and drier as moisture decreases and heat remains high.",
  },
  {
    id: 431,
    text: "'Aaza-e-Mufradah' are also called:",
    options: [
      "Simple organs",
      "Compound organs",
      "Primary organs",
      "Secondary organs",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Aaza-e-Mufradah are called Simple organs — they are uniform in structure, composed of a single tissue type (like bone, cartilage, nerve, vein, artery). They are the basic building blocks of complex organs.",
  },
  {
    id: 432,
    text: "'Quwwat-e-Dafia' (expulsive power) is a sub-power of:",
    options: [
      "Quwwat-e-Nafsaniyah",
      "Quwwat-e-Tabiyah",
      "Quwwat-e-Haiwaniyah",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Quwwat-e-Dafia (expulsive faculty) is one of the four sub-faculties of Quwwat-e-Tabiyah (natural faculty). It expels waste and useless matter from the body, completing the cycle of digestion and metabolism.",
  },
  {
    id: 433,
    text: "'Nabz-e-Layi' (soft pulse) is found in:",
    options: [
      "Dry temperament",
      "Moist temperament",
      "Hot temperament",
      "Cold temperament",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Layi (soft/yielding pulse) is found in moist temperament. Excess moisture softens the arterial wall, making the pulse feel soft and easily compressible under the fingers.",
  },
  {
    id: 434,
    text: "'Baul-e-Rasubi-e-Kharati' (shred-like sediment) is a sign of:",
    options: [
      "Waram-e-Kulya",
      "Qarha-e-Masana",
      "Zoaf-e-Mi'da",
      "Waram-e-Kabid",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Baul",
    year: 2023,
    explanation:
      "Baul-e-Rasubi-e-Kharati (shred/thread-like sediment in urine) is a specific sign of Qarha-e-Masana (ulcer of the urinary bladder). The shredded appearance represents sloughed tissue from the bladder ulcer.",
  },
  {
    id: 435,
    text: "Which 'Khilt' is 'Haar-Ratab' in temperament?",
    options: [
      "Dam (Blood)",
      "Balgham (Phlegm)",
      "Safra (Yellow Bile)",
      "Sawda (Black Bile)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Dam (blood) has Haar-Ratab (hot and moist) temperament, corresponding to the air element. Blood is the most balanced humour, carrying nutrition and warmth throughout the body.",
  },
  {
    id: 436,
    text: "'Afal-e-Haiwani' (vital functions) are related to:",
    options: ["Dimagh", "Kabid", "Qalb", "Tihal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Afal-e-Haiwani (vital/animal functions — heartbeat, pulse, respiration) are governed by the Qalb (heart). The heart is the seat of Quwwat-e-Haiwaniyah and performs vital life-sustaining functions.",
  },
  {
    id: 437,
    text: "'Maddi Sabab' (material cause) of Health and Disease refers to:",
    options: [
      "The forces acting on the body",
      "The physical parts of the body",
      "The psychological state",
      "The environment",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Maddi Sabab (material cause) refers to the physical/corporeal parts of the body — the actual material substance (Akhlat, Aaza) in which health and disease manifest. It is the physical substrate of the body.",
  },
  {
    id: 438,
    text: "'Nabz-e-Bati' (slow pulse) is a sign of:",
    options: [
      "High Hararat",
      "Low Hararat (Burudat)",
      "High Yubusat",
      "High Ratubat",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Nabz",
    year: 2023,
    explanation:
      "Nabz-e-Bati (slow pulse) indicates low Hararat or Burudat (cold temperament). When body temperature is low, the heart beats slowly as the need to dissipate heat is minimal, resulting in a slow pulse rate.",
  },
  {
    id: 439,
    text: "'Quwwat-e-Mughayyarah' (transformative power) is part of:",
    options: [
      "Quwwat-e-Tabiyah",
      "Quwwat-e-Nafsaniyah",
      "Quwwat-e-Haiwaniyah",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Quwwat-e-Mughayyarah (alterative/transformative power — also called Quwwat-e-Hazima) is part of Quwwat-e-Tabiyah (natural faculty). It transforms and digests food, converting it into body substance.",
  },
  {
    id: 440,
    text: "'Arkan' are the most 'Mufrad' (simple) parts of:",
    options: ["Akhlat", "Aaza", "Arwah", "All of these"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Arkan (elements) are the most fundamental and simple parts of everything — Akhlat (humours), Aaza (organs), and Arwah (spirits) are all ultimately composed of Arkan. Hence 'All of these' is correct.",
  },
  {
    id: 441,
    text: "Match List - I with List - II: (A) Vitamin C, (B) Vitamin B12, (C) Niacin (Vit. B3), (D) Vitamin D.",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(III)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Biochemistry",
    year: 2023,
    explanation:
      "Vitamin C (Ascorbic acid) deficiency causes Scurvy (III); Vitamin B12 deficiency causes Megaloblastic anaemia / Pernicious anaemia (IV); Niacin (B3) deficiency causes Pellagra (II); Vitamin D deficiency causes Rickets / Osteomalacia (I). Correct match: (A)-(III), (B)-(IV), (C)-(II), (D)-(I).",
  },
  {
    id: 442,
    text: "Bitot spot is sign of:",
    options: [
      "Vitamin D deficiency",
      "Vitamin A deficiency",
      "Vitamin K deficiency",
      "Vitamin B12 deficiency",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Biochemistry",
    year: 2023,
    explanation:
      "Bitot's spots are triangular, foamy, white patches on the conjunctiva caused by Vitamin A deficiency. They are a classic sign of xerophthalmia and represent keratinised epithelial debris.",
  },
  {
    id: 443,
    text: "The daily requirement of Vitamin C in children is:",
    options: ["40-70 mg", "30-40 mg", "50-100 mg", "100-150 mg"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Biochemistry",
    year: 2023,
    explanation:
      "The recommended daily allowance (RDA) of Vitamin C for children is 40-70 mg per day according to ICMR guidelines. This is sufficient to prevent scurvy and support collagen synthesis and immune function.",
  },
  {
    id: 444,
    text: "The commonest cause of Haematuria in children is:",
    options: [
      "Glomerula nephritis (post infectious)",
      "Alport syndrome",
      "Thrombocytopenia",
      "Vascular malformation",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Paediatrics",
    year: 2023,
    explanation:
      "Post-infectious (post-streptococcal) glomerulonephritis is the commonest cause of haematuria in children. It typically follows a throat or skin infection by Group A beta-haemolytic streptococcus and presents with haematuria, proteinuria, oedema and hypertension.",
  },
  {
    id: 445,
    text: "Match List - I with List - II regarding the 'seat of Nafse Natiqah' and vital organs: (A) Dimagh is the seat..., (B) Qalb is the seat..., (C) Every essential power..., (D) Compound organs....",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(II), (B)-(I), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
      "(A)-(III), (B)-(I), (C)-(II), (D)-(IV)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "According to Unani philosophy, Dimagh (brain) is the seat of Quwwat-e-Nafsaniyah (psychic faculty), Qalb (heart) is the seat of Quwwat-e-Haiwaniyah (vital faculty). The matching aligns Dimagh with (II) and Qalb with (I).",
  },
  {
    id: 446,
    text: '"Sabbabah" is described with respect to:',
    options: ["Arkan", "Mizaj", "Akhlat", "Afal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Sabbabah refers to a type or quality described in the context of Akhlat (humours). It is used in Unani medicine to describe a specific quality/state of the humours, particularly related to putrefaction or specific characteristics of Akhlat.",
  },
  {
    id: 447,
    text: "What is the correct sequence of the different ages included in the growing age? (A) Sinne Tafulat, (B) Sinne Trar'a, (C) Sinne Rihaque, (D) Sinne Saba, (E) Sinne Fata'.",
    options: [
      "(A), (D), (B), (C), (E)",
      "(C), (E), (A), (D), (B)",
      "(B), (D), (A), (E), (C)",
      "(E), (D), (B), (C), (A)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "The correct bookish sequence of growing ages in Unani medicine is: Sinne Tafulat (infancy, 0-2 yrs), Sinne Saba (childhood, 2-7 yrs), Sinne Trar'a (adolescence, 7-14 yrs), Sinne Rihaque (puberty, 14-21 yrs), Sinne Fata' (youth, 21-30 yrs). Sequence: (A), (D), (B), (C), (E).",
  },
  {
    id: 448,
    text: "The observation of Akhlate Arabah is possible through:",
    options: ["Riyazat", "Hammam", "Fasd", "Hijamah bila Shurt"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Fasd (venesection/bloodletting) allows direct observation of Akhlate Arabah (four humours). When blood is drawn and allowed to settle, it separates into layers corresponding to Dam (blood), Balgham (phlegm), Safra (yellow bile), and Sawda (black bile).",
  },
  {
    id: 449,
    text: "Assertion (A): Qalb is a simple organ. Reason (R): The Qalb as a whole and a small part of it may not be called by one name.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Qalb (heart) is NOT a simple (Mufrad) organ; it is a compound (Murakkab) organ composed of different tissues. The Reason (R) is correct — a simple organ is one where the whole and its part can be called by one name, which does not apply to Qalb. Hence (A) is incorrect but (R) is correct.",
  },
  {
    id: 450,
    text: 'What does it mean "Imshaje Badan"?',
    options: ["Arkan", "Mizaj", "Akhlat", "Afal"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Imshaje Badan literally means 'the mixture of the body', which refers to Akhlat (humours). Akhlat are the fluid mixtures/blends within the body that result from digestion and metabolism of food, forming the material basis of body composition.",
  },
  {
    id: 451,
    text: "Which Mizaj is called Mutadil Haqiqi?",
    options: [
      "The mizaj which is based on two elements",
      "The mizaj where the quality and quantity of the anasir are exactly same",
      "The mizaj which a human has",
      "The mizaj where the quality and quantity of the anasir are not same to each other",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Mutadil Haqiqi (truly balanced temperament) is the theoretical ideal where all four anasir (elements) are present in exactly equal quality and quantity. This is a philosophical concept — it does not exist in reality but serves as the benchmark for comparing other temperaments.",
  },
  {
    id: 452,
    text: "How many parts Juz-e-Ilmi of Ilm-e-Tibb has:",
    options: ["Two", "Four", "Eight", "Ten"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Juz-e-Ilmi (theoretical part) of Ilm-e-Tibb (Unani medicine) has two parts: Hifzan-e-Sehat (preservation of health) and Izalat-e-Marz (elimination of disease). These together constitute the complete theoretical framework of Unani medicine.",
  },
  {
    id: 453,
    text: "Statement (I): Individually every organ has a natural power. Statement (II): By the natural power, the nutrition of an organ continues.",
    options: [
      "Both Statement (I) and Statement (II) are true",
      "Both Statement (I) and Statement (II) are false",
      "Statement (I) is correct but Statement (II) is false",
      "Statement (I) is incorrect but Statement (II) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Both statements are true. Each organ possesses its own Quwwat-e-Tabiyah (natural power/faculty) that governs its functions. Nutrition (Taghziya) is one of the primary functions of Quwwat-e-Tabiyah — it ensures each organ receives and utilises nutrients for growth and maintenance.",
  },
  {
    id: 454,
    text: "Mizaj-e-Mutadil Tibbi is based on:",
    options: ["Taadul", "Mutadil", "Ad'l Fi-al-Qismat", "Mizaj-e-Insaani"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Mizaj-e-Mutadil Tibbi (medically balanced temperament) is based on Ad'l Fi-al-Qismat (justice in proportion/distribution), meaning the elements are present in proportions appropriate to the species and individual, not necessarily in exact equal amounts. This is the practical/clinical concept of balanced temperament.",
  },
  {
    id: 455,
    text: "The number of Anasire Arbah depends on:",
    options: [
      "Kaifiyate Arbah",
      "Arkan Arbah",
      "Akhlat-e-Arbah",
      "Fusal-e-Arbah",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "The number of Anasire Arbah (four elements/humours) is derived from and depends upon Kaifiyate Arbah (four primary qualities — hot, cold, moist, dry). These four qualities combine in pairs to produce four distinct elements: Fire (hot+dry), Air (hot+moist), Water (cold+moist), Earth (cold+dry).",
  },
  {
    id: 456,
    text: "What is the bookish sequence of Umoor-e-Tabiya? (A) Arwah, (B) Mizaj, (C) Arkan, (D) Aza, (E) Akhlat.",
    options: [
      "(E), (B), (D), (A), (C)",
      "(C), (B), (E), (D), (A)",
      "(D), (A), (C), (E), (B)",
      "(C), (B), (E), (A), (D)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "The standard bookish (textbook) sequence of Umoor-e-Tabiya (natural things) is: Arkan (elements) → Mizaj (temperament) → Akhlat (humours) → Arwah (spirits) → Aza (organs). This sequence: (C), (B), (E), (A), (D) represents the progression from simple to complex in Unani physiology.",
  },
  {
    id: 457,
    text: "What are the properties of Khilte Dam? (A) Hot and Moist, (B) Hot and Dry, (C) Bright red, (D) Bright yellow.",
    options: [
      "(B), (D) only",
      "(A), (D) only",
      "(A), (C) only",
      "(C), (D) only",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Khilte Dam (blood humour) is Hot and Moist in temperament (A) and Bright red in colour (C). It is the most balanced of all four humours and provides nutrition and vitality. Bright yellow colour belongs to Safra, not Dam.",
  },
  {
    id: 458,
    text: "What is Balghame Ghair Tabai in accordance to the Qiwam?",
    options: [
      "Balghame Hamiz",
      "Balghame Hulu",
      "Balghame Maee",
      "Balghame Afi's",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Balghame Maee (watery phlegm) is the Ghair Tabai (abnormal) form of Balgham according to its Qiwam (consistency/density). It is more dilute/watery than normal Balgham, indicating incomplete digestion or excessive dilution, making it pathological.",
  },
  {
    id: 459,
    text: "Who wrote the book on anatomy namely 'A special treatise of the eyes'?",
    options: ["Herophilus", "Galen", "Hippocrates", "William Harvey"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "History of Medicine",
    year: 2023,
    explanation:
      "Galen (129-216 AD), the renowned Greek physician, wrote 'A Special Treatise of the Eyes'. Galen made extensive contributions to anatomy and physiology, writing numerous texts that formed the basis of medical education for centuries. Herophilus was known for dissections, Hippocrates for clinical medicine, and Harvey for circulation.",
  },
  {
    id: 460,
    text: "Assertion (A): The Rectus femoris is the only muscle in the Quadriceps group that crosses both the hip and knee joint. Reason (R): It acts on both above mentioned joint as flexor hip and flexor of knee.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Anatomy",
    year: 2023,
    explanation:
      "Assertion (A) is true — Rectus femoris is the only quadriceps muscle crossing both hip and knee joints. However, Reason (R) is false — Rectus femoris acts as a flexor of the hip but an EXTENSOR (not flexor) of the knee. The quadriceps group extends the knee, not flexes it.",
  },
  {
    id: 461,
    text: "Varicocele is a condition where the pampiniform plexus of veins becomes tortuous, dilated and forms a palpable mass. It is more common on the left side due to: (R1) the left testicular vein drains into the left renal vein at right angles (90°) hence the venous pressure is high, and (R2) compression of left testicular vein by loaded colon.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Surgery",
    year: 2023,
    explanation:
      "Both reasons are correct and explain why varicocele is more common on the left side. The left testicular vein drains at a right angle (90°) into the left renal vein (unlike the right which drains obliquely into the IVC), creating higher venous pressure. Additionally, the loaded sigmoid colon can compress the left testicular vein, further contributing to venous stasis.",
  },
  {
    id: 462,
    text: "Which muscles move the eyeball superiorly?",
    options: [
      "Inferior Rectus and Lateral Rectus",
      "Superior Rectus and Inferior oblique",
      "Medial Rectus and Levator palpebrae superioris",
      "Superior Oblique and Levator palpebrae superioris",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Anatomy",
    year: 2023,
    explanation:
      "Superior Rectus and Inferior Oblique muscles move the eyeball superiorly (upward). Superior Rectus elevates the eye when it is abducted; Inferior Oblique elevates the eye when it is adducted. Inferior Rectus depresses the eye; Superior Oblique depresses the adducted eye.",
  },
  {
    id: 463,
    text: "What is Topographic anatomy?",
    options: [
      "Study of structures with the aid of a microscope",
      "Study of deeper organs by plain and radiography",
      "Study of deeper parts of the body in relation to the skin surface",
      "Study of structures without a microscope",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Anatomy",
    year: 2023,
    explanation:
      "Topographic (regional) anatomy is the study of the spatial relationships of structures within specific regions of the body, particularly studying deeper structures in relation to surface landmarks on the skin. It is essential for clinical examination, surgical planning, and understanding body regions.",
  },
  {
    id: 464,
    text: "Which hormone stimulates secretion of HCl and pepsin in stomach?",
    options: ["Cholecystokinin", "Gastrokinin", "Gastrin", "Gastrone"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Physiology",
    year: 2023,
    explanation:
      "Gastrin is the hormone secreted by G-cells in the gastric antrum that stimulates secretion of HCl (hydrochloric acid) by parietal cells and pepsinogen by chief cells. Cholecystokinin stimulates pancreatic enzyme and bile secretion; Gastrone inhibits gastric secretion.",
  },
  {
    id: 465,
    text: "Body's energy exchange is based on:",
    options: [
      "First law of Thermodynamics",
      "First Law of Thermogenesis",
      "Law of conservation of energy",
      "Quantum mechanics",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Physiology",
    year: 2023,
    explanation:
      "The body's energy exchange is based on the First Law of Thermodynamics (Law of Conservation of Energy), which states that energy can neither be created nor destroyed, only converted from one form to another. In the body, chemical energy from food is converted to heat, mechanical work, and stored energy.",
  },
  {
    id: 466,
    text: "Assertion (A): Heart sounds are produced by movement of heart valves. Reason (R): Heart sounds are produced due to vibrations in blood.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Physiology",
    year: 2023,
    explanation:
      "Both statements are correct but (R) does not explain (A). Heart sounds are produced by the sudden closure of heart valves (A is correct). The mechanism involves vibrations set up in the blood, heart walls, and surrounding tissues when valves close (R is also correct). However, R is a separate explanation of the mechanism, not the reason why A is true.",
  },
  {
    id: 467,
    text: "Assertion (A): Protein metabolism is related to exogenous proteins. Reason (R): Protein metabolism is related to both endogenous and exogenous proteins.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Biochemistry",
    year: 2023,
    explanation:
      "Assertion (A) is false — protein metabolism is NOT related only to exogenous proteins. Reason (R) is true — protein metabolism involves both endogenous proteins (body proteins that are continuously broken down and resynthesised) and exogenous proteins (dietary proteins). The body maintains dynamic protein turnover from both sources.",
  },
  {
    id: 468,
    text: "Functions of Plasma Protein include:",
    options: [
      "Co-enzyme and Blood clotting",
      "Bone formation and Viscosity of blood",
      "Genetic functions and Blood clotting",
      "Blood clotting and Viscosity of blood",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Biochemistry",
    year: 2023,
    explanation:
      "Plasma proteins perform important functions including: Blood clotting (fibrinogen, prothrombin), Viscosity of blood (albumin, globulins), Oncotic pressure, Transport (albumin carries drugs, hormones), Immune defense (immunoglobulins), and pH buffering. Blood clotting and viscosity are both correct functions of plasma proteins.",
  },
  {
    id: 469,
    text: "Alamaate daal indicates:",
    options: [
      "Present condition",
      "Present and Past condition",
      "Past condition",
      "Future condition",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Alamaate Daal (indicative signs) in Unani diagnostic terminology indicate the present condition of the patient — the current state of disease and the patient's constitution. They help the physician understand what is happening in the body at the time of examination.",
  },
  {
    id: 470,
    text: "Statement (I): The temperament of the body is subject to the temperament of the heart. Statement (II): From the heart all the organs receive Rooh Haiwani.",
    options: [
      "Both Statement (I) and Statement (II) are true",
      "Both Statement (I) and Statement (II) are false",
      "Statement (I) is correct but Statement (II) is false",
      "Statement (I) is incorrect but Statement (II) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat-e-Unani",
    year: 2023,
    explanation:
      "Both statements are true. In Unani medicine, the heart (Qalb) is the chief organ (Aaza Raeesah) and the seat of Quwwat-e-Haiwaniyah. The overall body temperament is governed by the heart's temperament (I). The heart produces and distributes Rooh Haiwani (vital spirit) to all organs via arteries (II).",
  },
  {
    id: 471,
    text: "Amraze Tafarruq-e-Ittesal is also known as:",
    options: [
      "Marze Khaas",
      "Marze Aam",
      "Marze Azae Mufridah",
      "Marze Azae Murakkabah",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Amraze Tafarruq-e-Ittesal (diseases of discontinuity/disruption of tissue continuity, e.g., wounds, fractures) are also known as Marze Azae Mufridah — diseases of simple/individual organs. These affect the structural integrity of individual organ tissues.",
  },
  {
    id: 472,
    text: "Assertion (A): Some diseases are passed down from generation to generation like Zeequn Nafas. Reason (R): Naqras is hereditary disease.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Both (A) and (R) are correct but (R) does not explain (A). Some diseases are indeed hereditary like Zeequn Nafas (asthma), and Naqras (gout) also has a hereditary component. However, R (Naqras is hereditary) is a separate fact and does not explain why A (some diseases pass through generations) is true.",
  },
  {
    id: 473,
    text: 'Fifth sign of inflammation "functio laesa" was later on added by:',
    options: ["John Hunter", "Paul Ehrlich", "Galen", "Christ Gram"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "The four classical signs of inflammation (Rubor, Calor, Tumor, Dolor) were described by Celsus. Galen later added the fifth sign 'Functio Laesa' (loss of function). This five-sign description of inflammation remains fundamental in pathology teaching to this day.",
  },
  {
    id: 474,
    text: "Match the water type with its effect: (A) Cold water, (B) Hot water, (C) Salt water, (D) Dirty water.",
    options: [
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(II), (B)-(I), (C)-(IV), (D)-(III)",
      "(A)-(III), (B)-(IV), (C)-(II), (D)-(I)",
      "(A)-(IV), (B)-(III), (C)-(I), (D)-(II)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "In Unani medicine, different types of water have specific therapeutic effects: Cold water — constricts, cools, reduces fever; Hot water — relaxes, opens pores, promotes sweating; Salt water — has drying/astringent and antiseptic properties; Dirty water — harmful, causes disease. The correct matching places cold water with its cooling effect (II) and hot water with its relaxing effect (I).",
  },
  {
    id: 475,
    text: "Leprosy is also known as:",
    options: [
      "Wilson's disease",
      "Whipple's disease",
      "Hansen's disease",
      "Hirschsprung's disease",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation:
      "Leprosy is also called Hansen's disease, named after Norwegian physician Gerhard Armauer Hansen who discovered Mycobacterium leprae in 1873. Wilson's disease is copper metabolism disorder; Whipple's disease is intestinal lipodystrophy; Hirschsprung's disease is congenital megacolon.",
  },
  {
    id: 476,
    text: "The book Yadgar-e-Razai consists of which subject:",
    options: [
      "Kulliyat",
      "Ilmul Advia",
      "Moalijat",
      "Tahaffuzi wa Samaji Tibb",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "History of Medicine",
    year: 2023,
    explanation:
      "Yadgar-e-Razai is a classical Unani text that deals with Moalijat (therapeutics/treatment). It is attributed to or inspired by Zakariya Razi's therapeutic works and contains treatments for various diseases, making it a valuable reference in Unani clinical medicine.",
  },
  {
    id: 477,
    text: "Statement (I): Zakariya Razi put forth the correct concept of Judri wa Husbah. Statement (II): Discovery of pulmonary circulation is the contribution of Arab Physician Allama Qarshi.",
    options: [
      "Both Statement (I) and Statement (II) are correct",
      "Both Statement (I) and Statement (II) are incorrect",
      "Statement (I) is correct but Statement (II) is incorrect",
      "Statement (I) is incorrect but Statement (II) is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "History of Medicine",
    year: 2023,
    explanation:
      "Both statements are correct. Zakariya Razi (865-925 AD) wrote 'Kitab fi al-Judari wa al-Hasba' — the first scientific description distinguishing smallpox from measles. Ibn al-Nafis (Allama Qarshi) discovered pulmonary circulation in the 13th century, predating Harvey's description by 300 years.",
  },
  {
    id: 478,
    text: "Renowned translators of the Abbasid Period include:",
    options: [
      "(A), (B), (C) and (D) only",
      "(A), (B) and (E) only",
      "(A), (B) and (D) only",
      "(A), (C) and (E) only",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "History of Medicine",
    year: 2023,
    explanation:
      "The Abbasid Period (8th-13th century) was the golden age of Islamic translation. Renowned translators include Hunain ibn Ishaq (A), his son Ishaq ibn Hunain (B), and Thabit ibn Qurra (D) who translated Greek medical and scientific texts into Arabic. This translation movement preserved and advanced ancient medical knowledge.",
  },
  {
    id: 479,
    text: "Match the book with its author: (A) Kitabul Nabz, (B) Kitabul Hashaish, (C) Kitabul Manazir, (D) Kitabul Advia wa Al Mufrada.",
    options: [
      "(A)-(I), (B)-(III), (C)-(II), (D)-(IV)",
      "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
      "(A)-(IV), (B)-(II), (C)-(I), (D)-(III)",
      "(A)-(III), (B)-(II), (C)-(IV), (D)-(I)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "History of Medicine",
    year: 2023,
    explanation:
      "Kitabul Nabz (Book of Pulse) was written by Galen; Kitabul Hashaish (Book of Plants/Herbs) by Dioscorides; Kitabul Manazir (Book of Optics) by Ibn al-Haytham; Kitabul Advia wa Al Mufrada by Ibn al-Baitar. The correct matching: (A)-(III) Galen, (B)-(I) Dioscorides, (C)-(IV) Ibn al-Haytham, (D)-(II) Ibn al-Baitar.",
  },
  {
    id: 480,
    text: "Assertion (A): The most important adverse effect of Aspirin is gastric mucosal damage and peptic ulceration. Reason (R): Because Aspirin inhibits Cox enzyme non selectively.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Pharmacology",
    year: 2023,
    explanation:
      "Both are true and R correctly explains A. Aspirin non-selectively inhibits both COX-1 and COX-2 enzymes. COX-1 inhibition reduces prostaglandin synthesis in the gastric mucosa — prostaglandins normally protect the stomach by stimulating mucus secretion and reducing acid production. Loss of this protection leads to gastric mucosal damage and peptic ulceration.",
  },
  {
    id: 481,
    text: "The hydro-alcoholic solutions of drugs, usually sweetened with syrup and flavoured by fruit extracts are called:",
    options: ["Linctus", "Liniment", "Elixir", "Emulsion"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Elixir is a hydroalcoholic (water + alcohol) solution of medicinal substances, sweetened with syrup and flavoured with fruit extracts or aromatic substances. Linctus is a viscous oral preparation for cough; Liniment is an external preparation; Emulsion is an oil-in-water or water-in-oil dispersion.",
  },
  {
    id: 482,
    text: "Which of the following is toxic to the brain?",
    options: ["Aaqaraqaraha", "Heeng", "Ikleelul Malik", "Habb-e-Balsan"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Ikleelul Malik (Melilotus officinalis / Sweet clover) is considered toxic to the brain (Mukhdir-e-Dimagh) in Unani pharmacology. Aaqaraqaraha is used as a stimulant; Heeng (asafoetida) is used as an antispasmodic and carminative; Habb-e-Balsan is generally beneficial.",
  },
  {
    id: 483,
    text: "Which of the following is used as Mus'hir?",
    options: [
      "Filfil Siyah",
      "Pudina Kohi",
      "Samandar Sookh",
      "Roghan Nilofar",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Roghan Nilofar (Nymphaea lotus / Water lily oil) is used as a Mus'hil (purgative/laxative) in Unani medicine. Filfil Siyah is a stimulant and digestive; Pudina Kohi is carminative and diaphoretic; Samandar Sookh (Salamander) is used externally.",
  },
  {
    id: 484,
    text: "Match List - I with List - II: (A) High Ceiling Diuretic, (B) Calcium Channel Blocker, (C) ACE inhibitor, (D) Beta adrenergic Blocker.",
    options: [
      "(A)-(I), (B)-(II), (C)-(IV), (D)-(III)",
      "(A)-(III), (B)-(I), (C)-(IV), (D)-(II)",
      "(A)-(II), (B)-(III), (C)-(I), (D)-(IV)",
      "(A)-(IV), (B)-(I), (C)-(II), (D)-(III)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Pharmacology",
    year: 2023,
    explanation:
      "High Ceiling Diuretic (e.g., Furosemide) — (IV) acts on loop of Henle; Calcium Channel Blocker (e.g., Amlodipine) — (I) blocks L-type Ca2+ channels; ACE Inhibitor (e.g., Enalapril) — (II) inhibits Angiotensin Converting Enzyme; Beta-adrenergic Blocker (e.g., Atenolol) — (III) blocks beta-adrenergic receptors.",
  },
  {
    id: 485,
    text: "Write the names and actions of Azaraqi: (A) Habbul Qalb, (B) Habbul Ghurab, (C) Muharrik Asaab, (D) Habis Dam, (E) Khaniqul Kalb.",
    options: [
      "(A), (C) and (D)",
      "(B), (C) and (E)",
      "(C), (D) and (E)",
      "(A), (B) and (C)",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Azaraqi (Aconitum species / Monkshood) is known by the names Habbul Ghurab (B) and Khaniqul Kalb (E) in Unani pharmacology, and its action is Muharrik Asaab (nerve stimulant) (C). It is a highly toxic plant used in small quantities for its analgesic and nerve-stimulating properties.",
  },
  {
    id: 486,
    text: "Match List - I with List - II: (A) Farzija, (B) Sikanjabeen, (C) Washoo, (D) Atoos.",
    options: [
      "(A)-(III), (B)-(IV), (C)-(I), (D)-(II)",
      "(A)-(IV), (B)-(III), (C)-(II), (D)-(I)",
      "(A)-(I), (B)-(II), (C)-(III), (D)-(IV)",
      "(A)-(IV), (B)-(I), (C)-(III), (D)-(II)",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "In Unani pharmacological preparations: Farzija (A) is matched with (III) a medicated steam inhalation; Sikanjabeen (B) — (IV) oxymel (vinegar+honey preparation); Washoo (C) — (I) a type of collyrium/eye preparation; Atoos (D) — (II) a snuff/nasal preparation. These are traditional Unani dosage forms.",
  },
  {
    id: 487,
    text: "Find the drug, which is attributed with cold temperament of fourth degree:",
    options: ["Farfiyoon", "Sankhiya", "Mazaryoon", "Sumaq"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Sumaq (Rhus coriaria / Sumac) is attributed with a cold temperament of the fourth degree (Barid Darjah Chaharum) in Unani pharmacology. Fourth degree cold indicates extreme cold property, making it useful in conditions requiring strong cooling action. Farfiyoon and Mazaryoon are hot in temperament; Sankhiya (arsenic) has different classification.",
  },
  {
    id: 488,
    text: "Assertion (A): Ajwain Khurasani is used in Insomnia. Reason (R): Because it is a Mus'hir drug.",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Assertion (A) is correct — Ajwain Khurasani (Hyoscyamus niger / Henbane) is used in insomnia due to its sedative/hypnotic properties (contains hyoscine/scopolamine). However, Reason (R) is incorrect — it is NOT a Mus'hil (purgative) but rather a Mukhdir (narcotic/sedative). Its use in insomnia is due to its sedative action, not purgative action.",
  },
  {
    id: 489,
    text: "Identify the drug, which exerts Mukharrish action on conjunctival layer of the eye:",
    options: ["Afyun", "Neela thotha", "Luffah", "Rasot"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Neela Thotha (Copper sulphate / Blue vitriol) exerts Mukharrish (irritant) action on the conjunctival layer of the eye. It is used in eye preparations in very small doses for its astringent and antimicrobial properties, but in higher concentrations it is irritating/caustic to the conjunctiva.",
  },
  {
    id: 490,
    text: "Which of the following drug is useful in Siql Zaban (stammering)?",
    options: ["Waj", "Badari Kund", "Lisan-al-Hamal", "Jhaw"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Waj (Acorus calamus / Sweet flag) is useful in Siql-e-Zaban (heaviness/stammering of tongue). It has properties that strengthen nerves and muscles of the tongue and pharynx. It is a well-known nervine tonic in Unani medicine used for speech-related disorders and cognitive enhancement.",
  },
  {
    id: 491,
    text: "Which of the following mainly consists of Glycosides?",
    options: ["Jadwar", "Atees", "Elwa", "Ajwain Khurasani"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Elwa (Aloe vera / Musabbar) mainly consists of Anthraquinone glycosides (aloin, barbaloin) as its active chemical constituents. These glycosides are responsible for its purgative action. Jadwar contains alkaloids; Atees (Aconitum heterophyllum) contains bitter glycosides and alkaloids; Ajwain Khurasani contains alkaloids (hyoscyamine).",
  },
  {
    id: 492,
    text: "Which of the following is the active principle found in Saum?",
    options: ["Alliin", "Allicin", "Leucine", "Methionine"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Allicin is the active principle in Saum (Allium sativum / Garlic) responsible for its characteristic odour and medicinal properties. Alliin is the precursor found in intact garlic cells; when garlic is crushed, alliinase enzyme converts alliin to allicin. Allicin has antimicrobial, antihypertensive, and cardioprotective properties.",
  },
  {
    id: 493,
    text: "Kunnash is Known as:",
    options: [
      "Pharmacopoeia",
      "Encyclopedia",
      "Unani formulary",
      "Materia medica",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "History of Medicine",
    year: 2023,
    explanation:
      "Kunnash is the Arabic term for an Encyclopedia of medicine — a comprehensive compilation covering all branches of medical knowledge. It is a broad medical compendium that includes theory, diagnosis, and treatment. Examples include Kunnash-e-Ahwazi by Ahwazi.",
  },
  {
    id: 494,
    text: "Qairooti Ard karasna is used in:",
    options: ["Hepatitis", "Inflammation in uterus", "Piles", "Pleurisy"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Qairooti Ard Karasna (a poultice/plaster made with Karasna — Bitter vetch flour) is used in Pleurisy (Zaat-ul-Janb). It is applied externally on the chest wall as a counterirritant and anti-inflammatory preparation to reduce inflammation and pain in pleurisy.",
  },
  {
    id: 495,
    text: "1 Ratti is equal to:",
    options: ["250 mg", "500 mg", "15 mg", "125 mg"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "1 Ratti (a traditional Unani unit of weight) is equal to 125 mg. This is equivalent to the weight of one Ratti seed (Abrus precatorius / Gunja). Traditional Unani weights: 1 Ratti = 125 mg; 8 Ratti = 1 Masha (approximately 1 gram); 12 Masha = 1 Tola (approximately 12 grams).",
  },
  {
    id: 496,
    text: "Assertion (A): Sirka is used for Tadbeer of Zeera siyah in all types of Jawarish Kamooni. Reason (R): Because Sirka neutrilizes acidity of stomach (Meda).",
    options: [
      "Both (A) and (R) are correct and (R) is the correct explanation of (A)",
      "Both (A) and (R) are correct but (R) is not the correct explanation of (A)",
      "(A) is correct but (R) is not correct",
      "(A) is not correct but (R) is correct",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Assertion (A) is correct — Sirka (vinegar) is used as Tadbeer (modification/processing) of Zeera siyah (black cumin) in Jawarish Kamooni formulations. However, Reason (R) is incorrect — Sirka (acetic acid) does not neutralize acidity; rather it helps modify the temperament of Zeera siyah and enhances its therapeutic properties for digestive disorders.",
  },
  {
    id: 497,
    text: "Sabun is one of the ingredients of the following dosage form:",
    options: ["Rushoya", "Paashoya", "Kuhl (Chikni Dawa)", "Ghaaza"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Sabun (soap) is an ingredient in Kuhl (Chikni Dawa) — a type of smooth/oily eye preparation (collyrium) in Unani medicine. The inclusion of Sabun helps achieve the smooth, emollient consistency required for ocular preparations. Rushoya and Paashoya are bathing preparations; Ghaaza is a cosmetic facial preparation.",
  },
  {
    id: 498,
    text: "Statement (I): Seemab Khalis is obtained from Shingraf. Statement (II): It is free from any impurities, hence, no requirement of any tadbir.",
    options: [
      "Both Statement (I) and Statement (II) are correct",
      "Both Statement (I) and Statement (II) are incorrect",
      "Statement (I) is correct but Statement (II) is incorrect",
      "Statement (I) is incorrect but Statement (II) is correct",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Statement (I) is correct — Seemab Khalis (pure mercury) is obtained from Shingraf (cinnabar, HgS) by heating. Statement (II) is incorrect — even though Seemab Khalis appears pure, mercury is inherently toxic and requires Tadbeer (pharmaceutical processing/detoxification) before internal use to reduce its toxicity and make it safe for therapeutic use.",
  },
  {
    id: 499,
    text: "Which one of the following is not part of Maa'ul-Hayat?",
    options: ["Guggal", "Khardal", "Zafran", "Asl"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Maa'ul-Hayat (Water of Life) is a classical Unani compound preparation. Its ingredients include Guggal (Commiphora mukul), Zafran (Saffron), Asl (Honey), and other invigorating substances. Khardal (mustard) is NOT an ingredient of Maa'ul-Hayat — it is a separate Unani drug used as a rubefacient and expectorant.",
  },
  {
    id: 500,
    text: "Amle Tasyeed is also called as:",
    options: [
      "Damru Jantar",
      "Garbh Jantar",
      "Pataal Jantar",
      "Distilation",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2023,
    explanation:
      "Amle Tasyeed (sublimation in Unani pharmaceutical chemistry) is also called Damru Jantar. It is a process in which a solid substance is converted to vapour by heating and then reconverted to solid on cooling, used for purification of mineral drugs. Garbh Jantar and Pataal Jantar are other apparatus used in Unani pharmaceutical processes.",
  },
  {
    id: 501,
    text: "Bradykinin causes:",
    options: [
      "Vasoconstrictions",
      "Pain at the site of inflammation",
      "Bronchodilation",
      "Decreased vascular permeability",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Pathology",
    year: 2021,
    explanation:
      "Bradykinin is a vasoactive peptide released during inflammation. It causes vasodilation (not vasoconstriction), increased vascular permeability, bronchoconstriction (not dilation), and notably causes pain at the site of inflammation by stimulating pain receptors. Hence option 2 is correct.",
  },
  {
    id: 502,
    text: "Match the disease with its cause: (A) Byssinosis, (B) Siderosis, (C) Grinder's disease, (D) Black lung disease.",
    options: [
      "A-IV (Cotton), B-I (Iron), C-II (Silica), D-III (Coal)",
      "A-IV, B-II, C-I, D-III",
      "A-II, B-III, C-IV, D-I",
      "A-IV, B-III, C-II, D-I",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "Byssinosis is caused by cotton dust, Siderosis by iron dust, Grinder's disease (a type of pneumoconiosis) by silica dust, and Black lung disease (coal worker's pneumoconiosis) by coal dust. The correct match is A-Cotton, B-Iron, C-Silica, D-Coal.",
  },
  {
    id: 503,
    text: "Pulseless disease is:",
    options: [
      "Giant cell arteritis",
      "Takayasu arteritis",
      "Kawasaki disease",
      "Polyarteritis nodosa",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Pathology",
    year: 2021,
    explanation:
      "Takayasu arteritis is known as 'Pulseless disease' because it causes granulomatous inflammation of the aorta and its major branches, leading to stenosis/occlusion and absent pulses in the upper extremities. It predominantly affects young women.",
  },
  {
    id: 504,
    text: "Statement I: Ballooning degeneration is seen in acute hepatitis. Statement II: Bridging necrosis is seen in chronic hepatitis.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Pathology",
    year: 2021,
    explanation:
      "Both statements are true. Ballooning degeneration (swelling of hepatocytes due to cell injury) is a hallmark of acute hepatitis. Bridging necrosis, where necrosis extends between portal tracts or portal tracts to central veins, is characteristic of chronic/severe hepatitis.",
  },
  {
    id: 505,
    text: "Match the following: (A) Fasikh, (B) Basiq, (C) Sahaj, (D) Batir.",
    options: [
      "A-III, B-I, C-II, D-IV",
      "A-II, B-I, C-IV, D-III",
      "A-IV, B-II, C-I, D-III",
      "A-II, B-III, C-IV, D-I",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat-e-Nabz",
    year: 2021,
    explanation:
      "In Unani pulse terminology: Fasikh refers to a pulse that is soft/relaxed, Basiq is the rising/ascending pulse, Sahaj is the easy/smooth pulse, and Batir is the cutting/sharp pulse. The correct matching is A-II, B-III, C-IV, D-I.",
  },
  {
    id: 506,
    text: "Causes of Ittesa e Majari include:",
    options: [
      "Both weak Quwwate masika/strong Quwwate dafeah AND use of Mushil/Murakhkhi drugs",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Ittesa-e-Majari (dilation of channels/vessels) is caused by both: (1) weak Quwwat-e-Masika (retentive power) or strong Quwwat-e-Dafeah (expulsive power), and (2) use of Mushil (purgative) or Murakhkhi (relaxant) drugs. Both causes are correct.",
  },
  {
    id: 507,
    text: "Statement I: Alamate Arziya and Alamate Tamamiya are types of Alamate Sahiha. Statement II: Alamate Muwaqqita and Alamate Ghair Muwaqqita are types of Alamate Marziya.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Both statements are correct. Alamat-e-Sahiha (signs of health) includes Alamat-e-Arziya (accidental signs) and Alamat-e-Tamamiya (signs of complete health). Alamat-e-Marziya (signs of disease) includes Alamat-e-Muwaqqita (temporary signs) and Alamat-e-Ghair Muwaqqita (permanent signs).",
  },
  {
    id: 508,
    text: "The causes which still have their effects even after their removal are termed as:",
    options: [
      "Asbabe Ghair Mukhallifa",
      "Asbabe ghair Muzadda",
      "Asbabe Wasila",
      "Asbabe Mukhallifa",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Asbab-e-Mukhallifa are those causative factors whose effects persist even after their removal. These are persistent/lingering causes. In contrast, Asbab-e-Ghair Mukhallifa are causes whose effects cease once the cause is removed.",
  },
  {
    id: 509,
    text: "Arrange the correct sequence of steps in stages of Waram e har: (A) Darja Tazayyid, (B) Darja Ibtida, (C) Darja Inteha, (D) Darja Inhetat.",
    options: ["A, B, C, D", "B, C, A, D", "B, A, C, D", "A, C, B, D"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "The correct sequence of stages of Waram-e-Har (hot inflammation) is: Darja Ibtida (beginning stage) → Darja Tazayyid (increasing stage) → Darja Inteha (peak/maximum stage) → Darja Inhetat (declining stage). This follows the classical Unani description of disease progression.",
  },
  {
    id: 510,
    text: "Riyah ul Afrisah belongs to:",
    options: [
      "Marz-e-majari",
      "Marz-e-shakl",
      "Marz-e-adad",
      "Marz-e-safaaih",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Riyah-ul-Afrisah (a type of flatulence/wind disease) is classified under Marz-e-Shakl (diseases of shape/form), as it causes distortion or abnormal shape of the affected organ due to accumulation of gases.",
  },
  {
    id: 511,
    text: "Assertion A: Presence of fever in case of ascites is an example of Marz-e-Ghair Musallam. Reason R: These are diseases difficult to treat due to complications.",
    options: [
      "Both A and R are correct and R is the correct explanation of A",
      "Both A and R are correct but R is NOT the correct explanation of A",
      "A is correct but R is not correct",
      "A is not correct but R is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Marz-e-Ghair Musallam refers to complicated or mixed diseases where one disease is complicated by another (like fever with ascites). The reason that these are diseases difficult to treat due to complications is the correct explanation for this classification. Hence both A and R are correct and R correctly explains A.",
  },
  {
    id: 512,
    text: "Identify which one is NOT included in Marz-e-khilqat:",
    options: [
      "Marz-e-majari",
      "Marz-e-shakl",
      "Marz-e-safaaih",
      "Marz-e-adad",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Marz-e-Khilqat (congenital/constitutional diseases) includes Marz-e-Majari (diseases of channels), Marz-e-Shakl (diseases of shape), and Marz-e-Adad (diseases of number). Marz-e-Safaaih (diseases of surfaces/membranes) is NOT included in Marz-e-Khilqat.",
  },
  {
    id: 513,
    text: "Match the Physician with their era: (A) Unani, (B) Mughliya, (C) Arabic, (D) Rumi.",
    options: [
      "A-IV (Buqrat), B-I (Amanullah Khan), C-III (Razi), D-II (Jalinoos)",
      "A-III, B-I, C-II, D-IV",
      "A-II, B-I, C-IV, D-III",
      "A-IV, B-II, C-I, D-III",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Tarikh-e-Tibb",
    year: 2021,
    explanation:
      "The correct matching of physicians with their eras: Unani era – Buqrat (Hippocrates); Mughliya era – Amanullah Khan; Arabic era – Razi (Rhazes); Rumi era – Jalinoos (Galen). This reflects the historical classification of Unani medicine's development.",
  },
  {
    id: 514,
    text: "Statement I: Azaraqi detoxifies in milk. Statement II: Halelajat detoxifies in Sirka.",
    options: [
      "Both statement I and statement II are true",
      "Both statement I and statement II are false",
      "Statement I is incorrect but statement II is true",
      "Statement I is correct but statement II is false",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Azaraqi (Aconitum species) is detoxified in milk — Statement I is correct. However, Halelajat (Myrobalan/Terminalia chebula) does not require detoxification in Sirka (vinegar); it is used as such — Statement II is false. Hence only Statement I is correct.",
  },
  {
    id: 515,
    text: "Which is NOT prepared from Takhmeer and Ta'feen?",
    options: ["Arq", "Nabeez", "Fiqaa", "Darbahra"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Takhmeer (fermentation) and Ta'feen (putrefaction) are processes used to prepare Nabeez (fermented drink), Fiqaa (beer-like drink), and Darbahra (fermented preparation). Arq (distillate) is prepared by the process of distillation (Taqteer), NOT by fermentation or putrefaction.",
  },
  {
    id: 516,
    text: '"Mawad ko rokne wala" is the meaning of:',
    options: ["Amroosiya", "Aflooniya", "Angarooiya", "Anoshdaru"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "The Urdu phrase 'Mawad ko rokne wala' means 'that which stops/retains matter/discharge'. In Unani pharmacology, Amroosiya refers to a drug that has the property of retaining or stopping mawad (matter/discharge), making it an astringent/retaining agent.",
  },
  {
    id: 517,
    text: "Johar Loban is prepared by:",
    options: [
      "Amal Taseer",
      "Amal Tabkheer",
      "Amal Tas'eed",
      "Amal Tajfeef",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Johar Loban (essence of benzoin/frankincense) is prepared by Amal Tas'eed (sublimation process). In this process, Loban is heated and its vapours are collected and condensed to obtain the pure essence. Tas'eed involves conversion of solid to vapour and back to solid.",
  },
  {
    id: 518,
    text: "The chief ingredient of Kohal Chikni Dawa is:",
    options: ["Ghee", "Fat/Charbi", "Soap", "Roghan Bedanjeer"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Kohal Chikni Dawa is a classical Unani ophthalmic preparation (collyrium). Its chief/base ingredient is Sabun (soap), which acts as the vehicle or base in this formulation, giving it its characteristic smooth texture.",
  },
  {
    id: 519,
    text: "Match authors with their books: (A) Ibn Roomia, (B) Khajandi, (C) Samarqandi, (D) Ibn Abu Albyan.",
    options: [
      "A-V, B-II, C-III, D-IV",
      "A-II, B-V, C-I, D-III",
      "A-I, B-III, C-IV, D-II",
      "A-V, B-IV, C-III, D-I",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Tarikh-e-Tibb",
    year: 2021,
    explanation:
      "The correct matching of Unani authors with their books: Ibn Roomia wrote Kitab-ul-Adwiyah al-Mufrada (V), Khajandi wrote related to Ophthalmology (IV), Samarqandi wrote Sharah-ul-Asbab (III), and Ibn Abu Albyan wrote Kitab-ul-Mughni (I). The correct sequence is A-V, B-IV, C-III, D-I.",
  },
  {
    id: 520,
    text: "Which of the following is used as Raabta? (A) Gulqand, (B) Haloon, (C) Khatmi, (D) Roghan Bedanjeer.",
    options: [
      "A, B and D only",
      "B, C and D only",
      "A, C and D only",
      "B and D only",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Raabta (binding agent/vehicle) in Unani pharmacology binds ingredients together. Haloon (garden cress seeds), Khatmi (marshmallow), and Roghan Bedanjeer (castor oil) are used as Raabta. Gulqand (rose conserve) is used as a corrective and flavoring agent, not primarily as Raabta.",
  },
  {
    id: 521,
    text: "Statement I: Kajli is a preparation that involves Sankhya, Para, Kasees, and Gandhak. Statement II: The black color of Kajli is due to the mixing of Para and Gandhak in Kharal.",
    options: [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Kajli is a classical Unani/Ayurvedic preparation made primarily by triturating Para (mercury) and Gandhak (sulphur) together in a Kharal (mortar). The black color of Kajli is indeed due to this mixing. Statement I is incorrect as Sankhya and Kasees are NOT ingredients of Kajli. Statement II is correct.",
  },
  {
    id: 522,
    text: "The 'Pharmacy Act' came into force in the year:",
    options: ["1947", "1948", "1949", "1950"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "The Pharmacy Act of India came into force in the year 1948. It regulates the profession of pharmacy in India, setting standards for pharmaceutical education and registration of pharmacists.",
  },
  {
    id: 523,
    text: "Mixing of Oil and Water is which type of antagonism (Tanaquz)?",
    options: [
      "Tanaquz Faeli",
      "Tanaquz Kaifi",
      "Tanaquz Suri",
      "Tanaquz Keemyawi",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Tanaquz Suri (physical antagonism) refers to incompatibility based on physical properties. Mixing oil and water is a classic example of Tanaquz Suri because they don't chemically react but are physically incompatible due to their immiscible nature.",
  },
  {
    id: 524,
    text: "Which of the following drugs is not included in Ibn Sina's list of Cardiac medicine (Advia Qalbia)?",
    options: ["Ushna", "Arjun", "Daronaj aqrabi", "Halela"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Ibn Sina's list of Advia Qalbia (cardiac medicines) includes Ushna, Daronaj aqrabi, Halela, and several other herbs. Arjun (Terminalia arjuna), though used in modern Unani/Ayurvedic practice for cardiac conditions, was not included in Ibn Sina's original list of Advia Qalbia.",
  },
  {
    id: 525,
    text: "Rijlultaer is the synonym of:",
    options: ["Atrilal", "Bisfaye", "Samagh-e-Arabi", "Kateera"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Rijlultaer (literally 'bird's foot') is an Arabic synonym for Atrilal (Trifolium alexandrinum / Egyptian clover). This plant is also known as Barseem and is used in Unani medicine for its nutritive properties.",
  },
  {
    id: 526,
    text: "Match the Family in List I with the Drug in List II: (A) Convolvulaceae, (B) Cruciferae, (C) Compositae, (D) Caricaceae.",
    options: [
      "A-I, B-III, C-II, D-IV",
      "A-II, B-IV, C-III, D-I",
      "A-II (Aftimun), B-III (Todri Surkh), C-I (Aqarqarha), D-IV (Papita)",
      "A-III, B-II, C-I, D-IV",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Correct family-drug matching: Convolvulaceae – Aftimun (Cuscuta epithymum); Cruciferae (Brassicaceae) – Todri Surkh (Matthiola incana); Compositae (Asteraceae) – Aqarqarha (Anacyclus pyrethrum); Caricaceae – Papita (Carica papaya).",
  },
  {
    id: 527,
    text: "If there is an increase in the volume of distribution of a drug in the body, then:",
    options: [
      "Half-life of the drug remains constant",
      "Half-life of drug increases",
      "Half-life of drug decreases",
      "Half-life of drug may increase or decrease",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Pharmacology",
    year: 2021,
    explanation:
      "Half-life (t½) = 0.693 × Volume of Distribution (Vd) / Clearance. When Vd increases (with clearance constant), the half-life of the drug increases. A larger Vd means more drug is distributed into tissues, taking longer to be eliminated.",
  },
  {
    id: 528,
    text: "Which of the following drugs is NOT of plant origin?",
    options: ["Godanti", "Lajwanti", "Nagandbabri", "Ghongchi"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Godanti (Selenite/Gypsum – Calcium sulphate) is a mineral drug, NOT of plant origin. Lajwanti (Mimosa pudica), Nagandbabri (Bacopa monnieri), and Ghongchi (Abrus precatorius) are all plant-origin drugs used in Unani medicine.",
  },
  {
    id: 529,
    text: "Which of the following drugs is of animal origin?",
    options: ["Maein", "Kahruba Shamayi", "Shakr Tighal", "Hiran Khuri"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Shakr Tighal (hyena's bile/gall) is a drug of animal origin, derived from the hyena. Maein is a plant-origin drug, Kahruba Shamayi (amber) is of mineral/fossilized origin, and Hiran Khuri (deer hoof) — though from animal, Shakr Tighal is the correct answer here as it is clearly of direct animal glandular origin.",
  },
  {
    id: 530,
    text: '"Khaya Iblees" is the synonym of:',
    options: ["Kewda", "Karanjawa", "Kaiphal", "Kahruba"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Khaya Iblees (Devil's testicles/egg) is an Arabic synonym for Karanjawa (Caesalpinia bonducella / Nicker bean). This plant is also known as Karanj and its seeds are used in Unani medicine for their antimalarial and anthelmintic properties.",
  },
  {
    id: 531,
    text: "Kuth is the synonym of:",
    options: [
      "Semicarpus anacardium",
      "Melissa parviflora",
      "Emblica officinalis",
      "Saussurea lappa",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Kuth (also spelled Qust/Kost) is a well-known Unani drug whose botanical source is Saussurea lappa (Costus root). Its root is aromatic and used for respiratory, digestive, and anti-inflammatory conditions. Semicarpus anacardium is Bhilawa, Melissa parviflora is Fanjankasht, and Emblica officinalis is Amla.",
  },
  {
    id: 532,
    text: 'One "Misqal" weight is equivalent to:',
    options: ["2.5 gm", "3.5 gm", "4.5 gm", "5.5 gm"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "In Unani pharmacology, one Misqal is equivalent to 4.5 grams (approximately). It is a traditional unit of weight used in Unani formulations. Other common weights: 1 Dirham = 3.5 g, 1 Tola = 11.66 g.",
  },
  {
    id: 533,
    text: "Ajwain Desi belongs to the family:",
    options: ["Rutaceae", "Apiaceae", "Brassicaceae", "None of these"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Ajwain Desi (Trachyspermum ammi / Carom seeds) belongs to the family Apiaceae (formerly Umbelliferae). This family is characterized by umbrella-shaped flower clusters. Ajwain is an important Unani drug used for digestive, carminative, and antispasmodic properties.",
  },
  {
    id: 534,
    text: '"Anjdan" is a/an:',
    options: ["Oleo gum resin", "Oleo resin", "Gum", "None of these"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Anjdan (Asafoetida / Ferula foetida) is an oleo gum resin — a mixture of volatile oil (oleo), gum, and resin. It is obtained as an exudate from the rhizome and roots of Ferula species and is classified as an oleo gum resin in Unani pharmacognosy.",
  },
  {
    id: 535,
    text: "Which Unani Physician was born in the Greek city of Pergamon in Asia Minor (now Turkey)?",
    options: ["Rhazes", "Galen (Jalinoos)", "Hippocrates", "Aesculapius"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Tarikh-e-Tibb",
    year: 2021,
    explanation:
      "Galen (Jalinoos in Arabic/Urdu), the great Greek physician (129–216 AD), was born in Pergamon (modern-day Bergama, Turkey). He contributed enormously to anatomy, physiology, and medicine, and his works formed the basis of Unani medicine for centuries.",
  },
  {
    id: 536,
    text: 'Statement I: Any loss or abnormality of psychological, physiological, or anatomical structure or function is termed "Impairment". Statement II: Inability to carry out normal activities due to an impairment is termed "disability".',
    options: [
      "Both Statement I and Statement II are False",
      "Both Statement I and Statement II are True",
      "Statement I is True, Statement II is False",
      "Statement II is True, Statement I is False",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "Both statements are correct per WHO definitions. Impairment = any loss or abnormality of psychological, physiological, or anatomical structure or function. Disability = any restriction or lack of ability to perform an activity in the manner considered normal due to impairment. Both definitions are accurate.",
  },
  {
    id: 537,
    text: 'The "Treatment 2.0" initiative, launched by WHO, is related to:',
    options: ["AIDS", "COVID-19", "Diabetes", "Malaria"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "WHO's 'Treatment 2.0' initiative is related to AIDS/HIV. It was launched to simplify HIV treatment, make it more affordable and accessible globally, and to dramatically scale up treatment. It focused on simpler drug regimens, diagnostic approaches, and community delivery of HIV care.",
  },
  {
    id: 538,
    text: "Match the Agent in List I with the Water-borne Disease in List II: (A) Viral, (B) Bacterial, (C) Protozoal, (D) Leptospiral.",
    options: [
      "A-I (Hepatitis E), B-II (Typhoid), C-III (Giardiasis), D-IV (Weil's disease)",
      "A-II, B-III, C-I, D-IV",
      "A-IV, B-III, C-II, D-I",
      "A-I, B-IV, C-III, D-II",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "Correct matching: Viral – Hepatitis E (water-borne viral hepatitis); Bacterial – Typhoid (Salmonella typhi); Protozoal – Giardiasis (Giardia lamblia); Leptospiral – Weil's disease (Leptospira icterohemorrhagiae). All are classic water-borne diseases transmitted through contaminated water.",
  },
  {
    id: 539,
    text: "The cause of a high birth rate includes:",
    options: [
      "Low standard of living",
      "Early puberty",
      "Early marriage",
      "All of the above",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "High birth rate is caused by multiple factors including: low standard of living (more children as economic support), early puberty (longer reproductive period), and early marriage (longer fertility window). All three are recognized demographic factors contributing to high birth rates.",
  },
  {
    id: 540,
    text: 'This pill is commonly referred to as the "minipill":',
    options: [
      "Combined pill",
      "Progestogen only pill (POP)",
      "Post-coital pill",
      "Male pill",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "The Progestogen Only Pill (POP) is commonly called the 'minipill' because it contains only progestogen (no estrogen) and in smaller doses. It is used by women who cannot take estrogen-containing contraceptives (e.g., breastfeeding mothers, those with cardiovascular risk).",
  },
  {
    id: 541,
    text: "Assertion A: In Plenum Ventilation fresh air is blown into the room by centrifugal fans. Reason R: Plenum Ventilation creates positive pressure and displaces the vitiated air.",
    options: [
      "Both A & R are True and R is not the correct explanation of A",
      "Both A & R are True and R is the correct explanation of A",
      "Both A & R are False",
      "A is True and R is False",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "In Plenum (Mechanical) Ventilation, fresh air is indeed blown in by centrifugal fans (A is true). This creates positive pressure inside the room, which effectively displaces the vitiated (stale/contaminated) air outwards (R is true and correctly explains A). Hence both are true and R is the correct explanation.",
  },
  {
    id: 542,
    text: "Residents of mountain regions belong to which of the following?",
    options: [
      "Masakin Ghayrah",
      "Masakin Hijriyah",
      "Masakin Bhairyah",
      "Masakin Aliya",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "In Unani medicine, Masakin (habitations/dwellings) are classified based on location. Masakin Aliya (elevated habitations) refers to high-altitude or mountainous regions. Residents of mountain regions are classified under Masakin Aliya due to their elevated geographic location.",
  },
  {
    id: 543,
    text: "This water is beneficial for the liver & spleen and also advantageous in Ascites:",
    options: [
      "Ma-e-hadidya",
      "Ma-e-nihasyaa",
      "All of the above",
      "None of them",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Ma-e-Hadidya (iron water/chalybeate water) contains dissolved iron salts and is beneficial for the liver and spleen. It is also used therapeutically in ascites (Istisqa). Its tonic properties make it useful for hepatosplenic conditions in Unani medicine.",
  },
  {
    id: 544,
    text: "Exercise that is done with the intention and purpose to get the desired benefits does NOT include:",
    options: [
      "Riyazat Zatiya",
      "Riyazat Khalisa",
      "Riyazat Khassa",
      "Riyazat Arziya",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Riyazat Arziya (incidental/accidental exercise) is exercise done without specific intention — it occurs as a byproduct of other activities (like walking to work). In contrast, Riyazat Zatiya, Riyazat Khalisa, and Riyazat Khassa are all forms of exercise done with specific intention and purpose.",
  },
  {
    id: 545,
    text: "Which is the thickest boundary of the orbit?",
    options: ["Lateral", "Medial", "Roof", "Floor"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "The lateral wall of the orbit is the thickest boundary. It is formed by the zygomatic bone anteriorly and the greater wing of the sphenoid posteriorly. The medial wall is the thinnest (lamina papyracea of ethmoid), making it prone to fractures.",
  },
  {
    id: 546,
    text: "Which of the following structures does not pass through the foramen magnum?",
    options: [
      "Accessory pharyngeal artery",
      "Vertebral artery",
      "Spinal accessory nerve",
      "Vertical band of cruciate ligament",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "The foramen magnum transmits: medulla oblongata, vertebral arteries, spinal roots of accessory nerve (CN XI), anterior and posterior spinal arteries, and the vertical band of cruciate ligament. Accessory pharyngeal artery does NOT pass through the foramen magnum — it is not a recognized structure.",
  },
  {
    id: 547,
    text: "Which of the following is an example of elastic cartilage?",
    options: [
      "Trachea",
      "Intervertebral disc",
      "Epiglottis",
      "Thyroid cartilage",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "Elastic cartilage contains elastic fibers in addition to collagen, giving it flexibility. Examples include: epiglottis, pinna of ear, Eustachian tube, and cuneiform cartilage. Trachea and thyroid cartilage are hyaline cartilage; intervertebral disc is fibrocartilage.",
  },
  {
    id: 548,
    text: "The first cervical vertebra has all of the following except:",
    options: [
      "Lateral masses",
      "Foramen transversarum",
      "Anterior arch",
      "Spinous process",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "The first cervical vertebra (Atlas/C1) has lateral masses, foramen transversarium (for vertebral artery), and anterior arch. However, it does NOT have a spinous process or a body — instead it has a posterior tubercle. The spinous process is a feature of other cervical vertebrae.",
  },
  {
    id: 549,
    text: "Which of the following arteries supply the fundus of the stomach?",
    options: [
      "Right gastric artery",
      "Splenic artery",
      "Short gastric arteries",
      "Gastroduodenal artery",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "The fundus of the stomach is supplied by the short gastric arteries (vasa brevia), which are branches of the splenic artery. The right gastric artery supplies the lesser curvature, the gastroduodenal artery supplies the pyloric region, and the splenic artery gives off the short gastric branches.",
  },
  {
    id: 550,
    text: "Foot drop is due to injury of:",
    options: [
      "Common peroneal nerve",
      "Superficial peroneal nerve",
      "Femoral nerve",
      "Tibial nerve",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "Foot drop (inability to dorsiflex the foot) is caused by injury to the common peroneal nerve (common fibular nerve). This nerve supplies the muscles responsible for dorsiflexion and eversion of the foot (tibialis anterior, extensor muscles). It is the most common nerve injured in the lower limb.",
  },
  {
    id: 551,
    text: "Intramuscular injections in the upper and lateral quadrant of the gluteal region are given in:",
    options: [
      "Glutei maximus and minimus",
      "Gluteus medius",
      "Glutei maximus and medius",
      "Gluteus maximus",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Anatomy",
    year: 2021,
    explanation:
      "IM injections in the upper outer quadrant of the gluteal region are given in the Gluteus medius muscle to avoid the sciatic nerve. The gluteus maximus occupies the lower quadrants, and the sciatic nerve passes through the lower and medial parts. The safe zone is the upper lateral quadrant = gluteus medius.",
  },
  {
    id: 552,
    text: "In isometric contraction, the length of the muscle fibre:",
    options: [
      "Increases",
      "Decreases",
      "Remains same",
      "None of the above",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Physiology",
    year: 2021,
    explanation:
      "In isometric contraction (static contraction), the muscle generates force/tension but the length of the muscle fiber remains the same — there is no change in length, and no joint movement occurs. Examples include holding a weight in a fixed position. Contrast with isotonic contraction where length changes.",
  },
  {
    id: 553,
    text: "Which of the following is NOT an abnormal hemoglobin derivative?",
    options: [
      "Sulfhemoglobin",
      "Carboxyhemoglobin",
      "Ferrihemoglobin",
      "Reticulocyte",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Physiology",
    year: 2021,
    explanation:
      "Abnormal hemoglobin derivatives include Sulfhemoglobin (hemoglobin + hydrogen sulfide), Carboxyhemoglobin (hemoglobin + CO), and Ferrihemoglobin/Methemoglobin (Fe2+ oxidized to Fe3+). Reticulocyte is an immature RBC (red blood cell) — it is a cell type, NOT a hemoglobin derivative.",
  },
  {
    id: 554,
    text: "Dysbarism is due to:",
    options: [
      "Change in temperature",
      "Gravitational force",
      "High barometric pressure",
      "Low barometric pressure",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "Dysbarism refers to health problems arising from changes in ambient pressure, particularly low barometric pressure (altitude sickness, decompression sickness in divers ascending too fast). It results from dissolved gases (nitrogen) coming out of solution when pressure decreases rapidly.",
  },
  {
    id: 555,
    text: "Oxygen-hemoglobin dissociation curve is sigmoid shaped. If this curve is shifted to the right, it means:",
    options: [
      "Excess of 2,3-diphosphoglycerate in RBC",
      "Decrease in partial pressure of oxygen",
      "Increase in body temperature",
      "All of the above",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Physiology",
    year: 2021,
    explanation:
      "Right shift of the O2-Hb dissociation curve indicates decreased affinity of hemoglobin for oxygen (Bohr effect), meaning more O2 is released to tissues. It is caused by: increased 2,3-DPG in RBCs, increased body temperature, increased CO2, decreased pH (acidosis). All three options contribute to rightward shift.",
  },
  {
    id: 556,
    text: "Ability to speak is linked to which of the following?",
    options: [
      "Brocas Area",
      "Occipital Lobe",
      "Basal Ganglia",
      "None of the above",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Physiology",
    year: 2021,
    explanation:
      "Broca's area (Brodmann areas 44 and 45) is located in the inferior frontal gyrus of the dominant (usually left) hemisphere. It is the motor speech area responsible for the production of speech. Damage to Broca's area causes Broca's aphasia (expressive aphasia) — patient understands speech but cannot speak fluently.",
  },
  {
    id: 557,
    text: "Tardieu's spots are seen in:",
    options: [
      "Death from gunshot injury",
      "Death from asphyxia",
      "Death from starvation",
      "Death from cold",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Forensic Medicine",
    year: 2021,
    explanation:
      "Tardieu's spots are small petechial hemorrhages (subpleural ecchymoses) seen on the surface of lungs, heart, and pericardium in cases of death from asphyxia (suffocation, strangulation, drowning). They result from rupture of small capillaries due to increased venous pressure during asphyxial struggle.",
  },
  {
    id: 558,
    text: "Which of the following is a universal antidote?",
    options: [
      "Mixture of charcoal and copper sulphate",
      "Mixture of charcoal and ferric chloride",
      "Soap",
      "Mixture of charcoal, tannic acid and magnesium oxide",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Forensic Medicine",
    year: 2021,
    explanation:
      "The universal antidote is a mixture of activated charcoal (2 parts) + tannic acid (1 part) + magnesium oxide (1 part). Charcoal adsorbs toxins, tannic acid precipitates alkaloids and metals, and magnesium oxide neutralizes acids. This combination addresses multiple types of poisoning.",
  },
  {
    id: 559,
    text: "When does Saue Mizaj occur?",
    options: [
      "Imbalance in Akhlat",
      "Disturbance in Kaifiyate Arba",
      "Both conditions occur",
      "Khalale Shikam",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Su-e-Mizaj (abnormal/imbalanced temperament) occurs specifically due to disturbance in Kaifiyate Arba (the four qualities — heat, cold, moisture, dryness). When these qualities become imbalanced, the mizaj deviates from its normal state. Imbalance in Akhlat is a separate pathological condition.",
  },
  {
    id: 560,
    text: "Which kaifiya't are called \"kaifiya'at e Fayela\"?",
    options: [
      "Harata o Ratubat",
      "Hrarat o Yabusat",
      "Ratubat o Yabusat",
      "Hararat o Barudat",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Kaifiyat-e-Fayela (active qualities) are Hararat (heat) and Barudat (cold). These are called 'Fayela' (active/effective) because they actively cause change in other things. In contrast, Ratubat (moisture) and Yabusat (dryness) are called Kaifiyat-e-Munfaila (passive qualities) as they are acted upon.",
  },
  {
    id: 561,
    text: "With reference to Aa'za, Quwa & Af'al, how many types of Rooh exist?",
    options: ["One", "Two", "Five", "Three"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "According to Unani philosophy, Rooh (vital spirit) exists in three types corresponding to Aa'za (organs), Quwa (faculties/powers), and Af'al (functions): (1) Rooh-e-Haywani (Animal spirit) in heart, (2) Rooh-e-Nafsani (Psychic spirit) in brain, (3) Rooh-e-Tabiee (Natural spirit) in liver. Thus three types of Rooh exist.",
  },
  {
    id: 562,
    text: "As per the definition, the ustuqussat (Anasir) are:",
    options: ["Jamid", "Sayyal", "Rihi", "Munfarid"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Ustuqussat (Anasir/Elements) are defined as Munfarid (simple/singular) substances that cannot be further divided into simpler components. They are the basic building blocks of all matter. The four Anasir are: Aab (Water), Naar (Fire), Khak (Earth), and Hawa (Air) — each being Munfarid in nature.",
  },
  {
    id: 563,
    text: "What is the last stage of Hazm (digestion)?",
    options: [
      "Food reaching inside the liver",
      "Undigested food excreted from the body",
      "The Khilt becomes Johare Uzu",
      "Production of Khilt in the liver",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Hazm (digestion) in Unani medicine occurs in four stages: (1) Hazm-e-Meadi (gastric), (2) Hazm-e-Kabdi (hepatic — production of Akhlat), (3) Hazm-e-Urooqi (vascular), (4) Hazm-e-Uzwi (tissue digestion). The last and final stage is Hazm-e-Uzwi, where Khilt (humour) is assimilated into the tissue (Johare Uzu), making it the ultimate stage.",
  },
  {
    id: 564,
    text: 'To whom does the following statement regarding the Mizaj belong: "المزاج و هو مصدر اطلق على الممتزج مجازا"?',
    options: ["Ibn Sina", "Abu Sahl Masihi", "Ibn Rushd", "Allama Nafis"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "This Arabic statement about Mizaj — 'Al-Mizaj wa huwa masdar utliqa ala al-mumtazij majazan' (Mizaj is a verbal noun applied metaphorically to the mixture) — is attributed to Allama Nafis ibn Awad Al-Kirmani, a prominent Unani scholar who wrote Sharah-e-Asbab, an important commentary on Unani medicine.",
  },
  {
    id: 565,
    text: "The theory of three elements was formulated by a group of philosophers known as:",
    options: [
      "Ashab-e-Khlit",
      "Mashshayeen",
      "Ahl-e-Akseer",
      "None of these",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "Ahl-e-Akseer (Alchemists/Paracelsists) proposed the theory of three elements: Sulphur (representing combustibility/soul), Mercury (representing volatility/spirit), and Salt (representing solidity/body). This tria prima theory was put forward by Paracelsus and his followers, distinct from the classical four-element theory.",
  },
  {
    id: 566,
    text: "In which disease is Qai (Emesis) contraindicated?",
    options: ["Istisqa", "Sara", "Mufrit farbahi", "Rasha"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 3,
    topic: "Ilaj bil Tadbeer",
    year: 2021,
    explanation:
      "Qai (therapeutic emesis) is contraindicated in Rasha (Parkinsonism/tremor) because it can aggravate neurological instability and worsen tremors. Emesis is also contraindicated in conditions like pregnancy, advanced age, weakness, and cardiac diseases. In Rasha, the strain of vomiting can worsen the condition.",
  },
  {
    id: 567,
    text: "Which therapy (tadbeer) strengthens the effect of diuretics (Mudirrat)?",
    options: ["Tabreed", "Pashoya", "Inkebab", "Bakhoor"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Ilaj bil Tadbeer",
    year: 2021,
    explanation:
      "Pashoya (foot bath / immersion of feet in warm water) strengthens the effect of Mudirrat (diuretics) by causing peripheral vasodilation, drawing blood and fluids towards the lower extremities, and reflexively increasing renal blood flow and urine output. It is a classical supportive tadbeer used alongside diuretic drugs.",
  },
  {
    id: 568,
    text: "Which of the following options is the appropriate technique in case of excessive morbid material (kasrat-e-mawad) in an organ?",
    options: [
      "Fasd before Hijamah",
      "Hijamah before Fasd",
      "Dalak before Hijamah",
      "Hijamah-e-nariyah",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Ilaj bil Tadbeer",
    year: 2021,
    explanation:
      "When there is kasrat-e-mawad (excess of morbid material) in an organ, the classical Unani approach is to first perform Fasd (venesection/bloodletting from a vein) to reduce the overall load of morbid humours from the systemic circulation, followed by Hijamah (cupping) to remove localised material from the affected area.",
  },
  {
    id: 569,
    text: "Advantages of Istifragh through emesis (qai) include:",
    options: [
      "Taqwiyat-e-Jigar",
      "Taqwiyat-e-Sadar",
      "Taqwiyat-e-Ama",
      "Taqwiyat-e-Basarat",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ilaj bil Tadbeer",
    year: 2021,
    explanation:
      "One of the recognised benefits of Istifragh through Qai (therapeutic emesis) is Taqwiyat-e-Basarat (strengthening of vision/eyesight). By evacuating excess morbid humours — particularly Balgham (phlegm) — from the upper body, pressure on cranial nerves including the optic pathway is reduced, thereby improving vision.",
  },
  {
    id: 570,
    text: "Excess of which type of food items causes tasahul and takahul (Lethargy) in the body?",
    options: [
      "Tasteless (phika) food items",
      "Sweet (shirin) food items",
      "Sour (Tursh) food items",
      "Salty (Namkeen) food items",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation:
      "Excess consumption of sweet (Shirin) food items leads to Tasahul (relaxation/flaccidity) and Takahul (lethargy/sluggishness) in the body. Sweet foods increase Balgham (phlegm) and Ratubat (moisture), weakening the overall tone of the body and causing heaviness and lethargy according to Unani dietary principles.",
  },
  {
    id: 571,
    text: "Which regimen is given priority in Acute fevers (Hummiyat-e-Hadda)?",
    options: [
      "Istifragh-e-madda",
      "Taskeen-e-hararat",
      "Tasfiya-e-dam",
      "Tadheen",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "In Hummiyat-e-Hadda (acute fevers), the first priority is Taskeen-e-Hararat (reduction/pacification of heat/fever). The immediate danger is from excessive heat which can damage vital organs. Once the fever is controlled, other treatments like Istifragh-e-Madda can be considered. This principle is fundamental in Unani management of acute febrile conditions.",
  },
  {
    id: 572,
    text: "Madda-e-Niqris (Gouty material) is derived from which source?",
    options: [
      "Hazm-e-Kabdi",
      "Hazm-e-Uzwi",
      "Hazm-e-Arbaee",
      "None of the above",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Madda-e-Niqris (gouty material/uric acid deposits) is derived from Hazm-e-Uzwi (tissue-level digestion). At the tissue level, incomplete metabolism of Akhlat produces waste material. In Niqris (gout), defective Hazm-e-Uzwi in the joint tissues leads to accumulation of morbid material (analogous to uric acid crystals in modern medicine).",
  },
  {
    id: 573,
    text: "The first line of treatment in Ascites (Istisqa-e-Ziqqi) is:",
    options: [
      "Dietary salt Restriction",
      "Diuretics",
      "Paracentesis",
      "Shunt",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "In Istisqa-e-Ziqqi (ascites), the first line of treatment is dietary salt restriction (low sodium diet). Reducing sodium intake decreases water retention and fluid accumulation in the peritoneal cavity. This conservative measure is tried first before diuretics (second line) or more invasive procedures like paracentesis.",
  },
  {
    id: 574,
    text: "Left ventricular hypertrophy is caused by all of the following, EXCEPT:",
    options: [
      "Mitral stenosis",
      "Aortic stenosis",
      "Mitral regurgitation",
      "Aortic regurgitation",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Mitral stenosis causes LEFT ATRIAL hypertrophy and right ventricular hypertrophy (due to pulmonary hypertension), NOT left ventricular hypertrophy. The left ventricle is actually protected in mitral stenosis as less blood enters it. Aortic stenosis, mitral regurgitation, and aortic regurgitation all cause left ventricular hypertrophy due to pressure or volume overload.",
  },
  {
    id: 575,
    text: "What is the most common complication of acute Pancreatitis?",
    options: [
      "Pancreatic Abscess",
      "Pseudocyst",
      "Phlegmon",
      "Pleural Effusion",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Pseudocyst is the most common complication of acute pancreatitis, occurring in approximately 10-20% of cases. It forms when pancreatic enzymes and fluid become encapsulated by fibrous tissue, usually appearing 4-6 weeks after the acute episode. Most pseudocysts resolve spontaneously; large or symptomatic ones require drainage.",
  },
  {
    id: 576,
    text: "Which sue-mizaj (maldistemperament) is found in Bars (Vitiligo)?",
    options: [
      "Sue-mizaj Haar Ratab",
      "Sue-mizaj Barid Ratab",
      "Sue-mizaj Haar Yabis",
      "Sue-mizaj Barid Yabis",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Bars (Vitiligo) is caused by Sue-mizaj Barid Ratab (cold-moist maldistemperament). In Unani medicine, the depigmentation in vitiligo is attributed to excess Balgham (phlegm) which is cold and moist, leading to loss of skin colour. The cold-moist temperament suppresses the normal pigment-forming activity of the skin.",
  },
  {
    id: 577,
    text: "Which of the following conditions leads to exudative pleural effusion?",
    options: [
      "Cirrhosis of liver",
      "Nephrotic syndrome",
      "Congestive heart failure",
      "Bronchogenic Carcinoma",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Bronchogenic carcinoma (lung cancer) causes exudative pleural effusion by direct invasion or lymphatic obstruction, increasing pleural membrane permeability and protein content. Cirrhosis, nephrotic syndrome, and congestive heart failure all cause transudative effusions due to low protein/oncotic pressure or increased hydrostatic pressure. Light's criteria distinguish exudates from transudates.",
  },
  {
    id: 578,
    text: "Assertion A: Levity headache (Sudai khiffa) is commonly seen in women during puerperium. Reason R: Because the main cause of Levity headache is dryness.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Both the assertion and reason are correct, and R correctly explains A. Suda-e-Khiffa (levity/lightness headache) is indeed commonly seen in women during puerperium (post-delivery period). Its main cause is Yabusat (dryness), which increases after delivery due to blood loss and fluid shifts. The puerperium state naturally causes dryness, thus explaining the increased incidence.",
  },
  {
    id: 579,
    text: "Statement I: The cause of Anasarca (Istisqa-e-Lami) is weakness of liver function and its coldness. Statement II: Anasarca is not a type of Ascites.",
    options: [
      "Statement I is correct but Statement II is incorrect",
      "Statement II is correct but I is incorrect",
      "Statement I & Statement II both are correct",
      "Statement I & Statement II both are incorrect",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Statement I is correct: Istisqa-e-Lami (Anasarca/generalised oedema) is caused by weakness and coldness of the liver (Zoufe Kabid Barid), leading to failure of protein synthesis and fluid regulation. Statement II is incorrect: Anasarca IS actually considered a type of Istisqa (dropsy/oedema) in Unani medicine — Istisqa has three types: Ziqqi (ascites), Lami (anasarca), and Tabalي (tympanites).",
  },
  {
    id: 580,
    text: "Match List I with List II: (A) WARDEENAJ, (B) WADQAH, (C) BAYAZ, (D) BAMNI.",
    options: [
      "AI (Cornea), BII (Eyelid), CIII (Conjunctiva), DIV (Retina)",
      "AII, BIII, CIV, DI",
      "AIV, BIII, CI, DII",
      "AIII (Conjunctiva), BIV (Retina), CII (Eyelid), DI (Cornea)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "In Unani ophthalmology: Wardeenaj = Conjunctiva (the mucous membrane lining the eye), Wadqah = Retina (the innermost light-sensitive layer), Bayaz = Eyelid (white of the outer eye area/eyelid), Bamni = Cornea (the transparent front part of the eye). Option 4 correctly matches: A-III (Conjunctiva), B-IV (Retina), C-II (Eyelid), D-I (Cornea).",
  },
  {
    id: 581,
    text: "According to Ibn Sina, what is the first stage of Humma-e-Diq?",
    options: ["Zubool", "Iltisaq", "Mufatit", "Muhashif"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "According to Ibn Sina (Avicenna) in Al-Qanun, Humma-e-Diq (hectic/consumptive fever) progresses through four stages: (1) Iltisaq — the fever adheres to the vital spirit/rooh, (2) Zubool — wasting begins, (3) Mufatit — bone-consuming stage, (4) Muhashif — final stage with complete desiccation. Iltisaq is the first/earliest stage.",
  },
  {
    id: 582,
    text: "In Parkinsonism (Rasha), which of the following is NOT present?",
    options: [
      "Tremor at rest",
      "Past Pointing",
      "Bradykinesia",
      "Muscular Rigidity",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Past Pointing (dysmetria) is a cerebellar sign, NOT a feature of Parkinsonism. The classical triad of Parkinson's disease is: Tremor at rest (pill-rolling), Rigidity (cogwheel/lead pipe), and Bradykinesia (slowness of movement). Other features include postural instability and shuffling gait. Past pointing indicates cerebellar ataxia, which is a different condition.",
  },
  {
    id: 583,
    text: "In which type of headache does the head feel very hot but very light?",
    options: [
      "Suda-e-Damvi",
      "Suda-e-Safravi",
      "Suda-e-Balghami",
      "Suda-e-Sodawi",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Suda-e-Safravi (bilious/hot-dry headache) is characterised by the head feeling very hot (due to Safra/yellow bile being hot) but very light (Safra is light in weight). Other features include bitter taste, thirst, and nausea. Suda-e-Damvi feels hot and heavy, Suda-e-Balghami feels heavy and cold, Suda-e-Sodawi feels heavy, cold and dark.",
  },
  {
    id: 584,
    text: "Which type of Malankholia (Melancholia) is associated with Junoon (Mania)?",
    options: [
      "Sauda Balghami",
      "Sauda Safravi",
      "Sauda Saudavi",
      "Sauda Damvi",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Sauda Safravi (melancholia due to burnt/adust bile) is associated with Junoon (mania). When Safra (yellow bile) gets burnt (Ihtiraaq), it produces a caustic, acrid Sauda (black bile) called Sauda Safravi. This type causes the most violent and agitated form of melancholia that can transition into manic episodes.",
  },
  {
    id: 585,
    text: "Intisabi (Orthopnea) is a recommended clinical sign/position for the diagnosis of which disorder?",
    options: [
      "Faale",
      "Zeuf e meada",
      "Hassatul kuliya",
      "Zeequnafas (Asthma)",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Intisabi (orthopnea — difficulty breathing while lying flat, relieved by sitting upright) is a classic diagnostic sign for Zeequnafas (Asthma/respiratory distress). Patients with asthma or cardiac-related breathlessness prefer to sit upright (Intisab) to breathe easier. In Unani diagnostics, observing this posture helps confirm Zeequnafas.",
  },
  {
    id: 586,
    text: "Zubha Sadriya (Angina Pectoris) is related to which of the following?",
    options: [
      "Pleura",
      "Pulmonary embolism",
      "Coronary Artery Disease",
      "Valvular Heart Disease",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Zubha Sadriya is the Unani term for Angina Pectoris, which is directly caused by Coronary Artery Disease (CAD). Reduced blood supply through narrowed coronary arteries causes ischaemic chest pain (angina). In Unani concepts, it correlates with weakness and obstruction of the vessels supplying the Qalb (heart).",
  },
  {
    id: 587,
    text: "Sooul Qinniya (Anemia/Pre-ascites) is always associated with which of the following?",
    options: [
      "Zoufe Jigar (Liver weakness)",
      "Ascites",
      "Anasarca",
      "All of the above",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Sooul Qinniya is always associated with Zoufe Jigar (liver weakness). In Unani medicine, this condition represents a pre-ascitic state where liver dysfunction leads to impaired blood formation and fluid regulation. The primary pathology is in the liver, making liver weakness (Zoufe Jigar) the constant association.",
  },
  {
    id: 588,
    text: "Humma Maeviya (Enteric Fever) is which type of fever?",
    options: [
      "Humma Mufatra, Muaziba and Matbaqa",
      "Humma Matbaqa and Muaziba",
      "Humma Matbaqa, Lasqa and Damviya Afooniya",
      "Humma Matbaqa and Damviya Afooniya",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Humma Maeviya (Enteric/Typhoid fever) is classified as Humma Mufatra (intermittent pattern), Muaziba (stubborn/persistent), and Matbaqa (continuous/remittent). These three characteristics together describe the typical fever pattern of typhoid: it starts intermittently, becomes persistent and stubborn to treat, and shows a step-ladder remittent pattern.",
  },
  {
    id: 589,
    text: "Nuskha Gariussamak is recommended for which of the following?",
    options: [
      "Bronchial Asthma",
      "Tuberculosis (Diq-e-Revi)",
      "Paralysis",
      "All the above",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Nuskha Gariussamak is a classical Unani compound formulation recommended specifically for Diq-e-Revi (Tuberculosis/pulmonary consumption). It is a nutritive and tonic preparation used to strengthen the lungs and support the patient's constitution in chronic wasting diseases like TB.",
  },
  {
    id: 590,
    text: "Non-bullous Impetigo is which of the following diseases?",
    options: ["Fungal", "Autoimmune", "Bacterial", "Atopic"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Non-bullous impetigo (also called impetigo contagiosa) is a bacterial skin infection. It is primarily caused by Staphylococcus aureus and/or Streptococcus pyogenes (Group A Streptococcus). It presents as honey-coloured crusted lesions, most commonly on the face in children. Bullous impetigo is exclusively caused by Staph. aureus toxin-producing strains.",
  },
  {
    id: 591,
    text: "Bowen's Disease is related to which of the following?",
    options: [
      "Liver Diseases",
      "Kidney Diseases",
      "Skin Diseases",
      "Haematological disorders",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Bowen's Disease is a skin condition — specifically squamous cell carcinoma in situ (intraepidermal SCC). It presents as a slowly enlarging, well-demarcated, erythematous plaque with crusting. It is considered a pre-invasive malignancy confined to the epidermis. Risk factors include sun exposure, HPV infection, and arsenic exposure.",
  },
  {
    id: 592,
    text: "ECG in Prinzmetal angina shows:",
    options: [
      "ST-segment elevation",
      "ST-segment depression",
      "Absent P wave",
      "Prolonged PR interval",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Prinzmetal (variant) angina is caused by coronary artery vasospasm rather than fixed atherosclerotic obstruction. The ECG during an attack shows transient ST-segment elevation (similar to STEMI) due to transmural ischaemia from complete vessel spasm. This differentiates it from stable angina (ST depression) and occurs typically at rest, often at night.",
  },
  {
    id: 593,
    text: "Which of the following is NOT a feature of nephrotic syndrome?",
    options: [
      "Peripheral oedema",
      "Microscopic Hematuria",
      "Hypoalbuminaemia",
      "Proteinuria > 3.5 g/day",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation:
      "Microscopic haematuria is NOT a typical feature of nephrotic syndrome. The classic tetrad of nephrotic syndrome is: (1) Heavy proteinuria (>3.5 g/day), (2) Hypoalbuminaemia (<3.5 g/dL), (3) Generalised oedema (peripheral, periorbital, ascites), (4) Hyperlipidaemia and lipiduria. Haematuria is more characteristic of nephritic syndrome.",
  },
  {
    id: 594,
    text: "SARS is called a zoonotic virus because:",
    options: [
      "They are confined only to animals",
      "They do not cause disease to animals",
      "They emerge from animals to cross the species barrier infrequently",
      "They cause pandemics",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "SARS (Severe Acute Respiratory Syndrome) is classified as a zoonotic disease because the virus originated in animals (bats, with civet cats as intermediate hosts) and crossed the species barrier to infect humans. Zoonoses are diseases that can be transmitted from vertebrate animals to humans. The infrequent but significant species-crossing is what defines SARS as zoonotic.",
  },
  {
    id: 595,
    text: "Cleft lip is ideally repaired at what age?",
    options: [
      "Soon after birth",
      "06 wks - 12 wks",
      "12 wks - 24 wks",
      "24 wks - 36 wks",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Surgery",
    year: 2021,
    explanation:
      "Cleft lip repair follows the 'Rule of 10s': weight ≥10 lbs, haemoglobin ≥10 g/dL, and age ≥10 weeks. The ideal timing for cleft lip repair is 12–24 weeks (3–6 months) of age. This allows sufficient growth and development for anaesthetic safety while enabling early correction before speech and feeding problems become established.",
  },
  {
    id: 596,
    text: "Which of the following is the LEAST common position of the appendix?",
    options: ["Retrocaecal", "Retroileal", "Preileal", "Pelvic"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Surgery",
    year: 2021,
    explanation:
      "The positions of appendix in order of frequency: Retrocaecal (most common, ~65%), Pelvic/Descending (~31%), Preileal (least common, ~1%), Postileal/Retroileal (~0.5%), Subcaecal. Preileal (in front of the ileum) is the least common position. This is clinically important as the position affects the presentation of appendicitis.",
  },
  {
    id: 597,
    text: "Griesinger's sign means:",
    options: [
      "Pain over the temporo-mandibular joint",
      "Pain in the eye",
      "Pain and tenderness over the mastoid",
      "Pain and tenderness over the auricle",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Surgery",
    year: 2021,
    explanation:
      "Griesinger's sign is pain and oedematous swelling/tenderness over the mastoid process (behind the ear), caused by thrombophlebitis of the mastoid emissary vein. It is a sign of lateral (sigmoid) sinus thrombosis, a serious intracranial complication of otitis media/mastoiditis. It indicates spread of infection to the sigmoid sinus.",
  },
  {
    id: 598,
    text: "Statement I: Hydrocele fluid does not clot if drained into a vessel. Statement II: It coagulates if mixed with a small quantity of blood.",
    options: [
      "Statement I and Statement II both are correct",
      "Statement I and Statement II both are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Surgery",
    year: 2021,
    explanation:
      "Both statements are correct. Hydrocele fluid (a transudate) lacks clotting factors and fibrinogen, so it does not spontaneously clot when drained — this is a characteristic property used in diagnosis. However, when even a small amount of blood is mixed with it (introducing clotting factors), it can coagulate. These properties help differentiate hydrocele from haematocele.",
  },
  {
    id: 599,
    text: "Match the clinical case in List I with the diagnosis in List II: (A) Painless scrotal swelling, (B) Scrotal swelling increasing on straining, (C) Lower limb swelling with scrotal enlargement, (D) Left scrotum lower than right.",
    options: [
      "AI, BIV, CIII, DII",
      "AIII, BI, CII, DIV",
      "AII (Hydrocele), BIII (Hernia), CI (Filariasis), DIV (Varicocele)",
      "AIV, BII, CI, DIII",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Surgery",
    year: 2021,
    explanation:
      "The correct clinical matches are: (A) Painless scrotal swelling = Hydrocele (fluid collection, transilluminates), (B) Scrotal swelling increasing on straining = Hernia (reducible, cough impulse positive), (C) Lower limb swelling with scrotal enlargement = Filariasis (lymphatic obstruction causing lymphoedema), (D) Left scrotum lower than right = Varicocele (dilated pampiniform plexus, more common on left due to angle of left testicular vein drainage).",
  },
  {
    id: 600,
    text: "Which of the following statements regarding triage is FALSE?",
    options: [
      "Triage means treating the most seriously injured first",
      "Triage is carried out where casualties are found",
      "Triage is carried out at the same time as simple emergency life-saving procedures",
      "Triage category cannot be reviewed once assigned",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "The FALSE statement is that triage category cannot be reviewed once assigned. Triage is a DYNAMIC process — categories must be regularly reassessed as patient conditions can change rapidly. A patient initially categorised as delayed may deteriorate to immediate, or a patient may improve. The principle of triage is to do the greatest good for the greatest number, and this requires ongoing reassessment.",
  },
  {
    id: 601,
    text: "Match the condition in List I with the correct surgical operation in List II: (A) Rectal prolapse, (B) High Anal fistula, (C) Grade 3 piles, (D) Anal fissure.",
    options: [
      "A-III, B-I, C-II, D-IV",
      "A-IV, B-II, C-I, D-III",
      "A-I (Altemier's), B-III (Glyceryl trinitrate), C-IV (Lateral internal Sphincterotomy), D-II (Stapled Anopexy)",
      "A-II, B-IV, C-III, D-I",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Surgery",
    year: 2021,
    explanation:
      "Correct surgical matches: (A) Rectal prolapse → Altemeier's procedure (perineal rectosigmoidectomy), (B) High anal fistula → Glyceryl trinitrate/Seton (conservative approach to preserve sphincter), (C) Grade 3 piles → Lateral internal sphincterotomy/Stapled anopexy, (D) Anal fissure → Lateral internal sphincterotomy. Option 3 is correct: A-I (Altemeier's), B-III (GTN), C-IV (LIS), D-II (Stapled anopexy).",
  },
  {
    id: 602,
    text: "A 35-year-old male presents with painless haematuria. Endoscopy reveals scattered tubercles and pale patches resembling sand. What is the diagnosis?",
    options: [
      "Bladder Stone",
      "Tuberculosis of the bladder",
      "Schistosomiasis of bladder",
      "Bladder carcinoma",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Surgery",
    year: 2021,
    explanation:
      "The classic endoscopic appearance of scattered tubercles and pale sandy patches ('sandy patches') in the bladder wall is pathognomonic of Schistosomiasis (Bilharziasis) of the bladder, caused by Schistosoma haematobium. The 'sandy patches' represent calcified dead eggs in the submucosa. It presents with terminal haematuria and is common in Africa/Middle East.",
  },
  {
    id: 603,
    text: "The tympanic membrane is positioned obliquely at an angle of:",
    options: ["55 degree", "65 degree", "80 degree", "70 degree"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 0,
    topic: "ENT",
    year: 2021,
    explanation:
      "The tympanic membrane (eardrum) is not perpendicular to the ear canal but is tilted obliquely. It is positioned at an angle of approximately 55 degrees to the floor of the external auditory canal. This oblique positioning means the anterior wall and floor of the canal are longer than the posterior wall and roof, which is important during otoscopic examination.",
  },
  {
    id: 604,
    text: "Which coat of the eye supplies nutrition to various structures of the eyeball?",
    options: [
      "Fibrous Coat",
      "Uveal tissue",
      "Nervous Coat",
      "None of the above",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Ophthalmology",
    year: 2021,
    explanation:
      "The Uveal tract (uvea) is the vascular/nutritive coat of the eye, consisting of the iris, ciliary body, and choroid. The choroid is highly vascular and provides nutrition to the outer retinal layers. The ciliary body produces aqueous humour nourishing the lens and cornea. The uveal tissue is the primary nutritive layer of the eyeball.",
  },
  {
    id: 605,
    text: "Anotia refers to the complete absence of:",
    options: [
      "Ear Ossicles",
      "Teeth",
      "Auricle of Ear",
      "Tympanic Membrane",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "ENT",
    year: 2021,
    explanation:
      "Anotia (from Greek: 'an' = without, 'otia' = ear) refers to the complete congenital absence of the auricle (pinna) of the ear. It is the most severe form of microtia spectrum (grade IV). It is a rare congenital anomaly that may be associated with other craniofacial abnormalities and requires surgical reconstruction.",
  },
  {
    id: 606,
    text: 'Which ear ossicle is also known as the "anvil"?',
    options: ["Malleus", "Incus", "Stapes", "None"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "ENT",
    year: 2021,
    explanation:
      "The Incus is known as the 'anvil' due to its resemblance to a blacksmith's anvil. The three ossicles and their common names: Malleus = Hammer (attached to tympanic membrane), Incus = Anvil (middle ossicle), Stapes = Stirrup (attached to oval window). Together they form a mechanical chain transmitting sound vibrations from eardrum to inner ear.",
  },
  {
    id: 607,
    text: "Bayonetting sign is seen in:",
    options: [
      "Cataract",
      "Conjunctivitis",
      "Glaucoma",
      "Ophthalmic injury",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Ophthalmology",
    year: 2021,
    explanation:
      "Bayonetting sign is seen in Glaucoma. It refers to the appearance of blood vessels at the optic disc margin that appear to 'dip' and then re-emerge due to the deep glaucomatous cupping of the optic disc. The vessels appear to have a bayonet-like bend as they pass over the sharp margin of the deeply excavated glaucomatous disc.",
  },
  {
    id: 608,
    text: "Which of the following systemic diseases has nasal manifestations?",
    options: [
      "Wegener's granulomatosis",
      "Sarcoidosis",
      "Churg-strauss syndrome",
      "All of the above",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "ENT",
    year: 2021,
    explanation:
      "All three systemic diseases have nasal manifestations: (1) Wegener's granulomatosis (GPA) — saddle nose deformity, nasal septal perforation, bloody nasal discharge; (2) Sarcoidosis — nasal polyps, mucosal granulomas, epistaxis; (3) Churg-Strauss syndrome (EGPA) — allergic rhinitis, nasal polyposis, chronic sinusitis. These are all granulomatous/vasculitic conditions affecting the nasal mucosa.",
  },
  {
    id: 609,
    text: "Which mucocutaneous blistering disease is associated with severe ocular complications?",
    options: [
      "Stevens Johnsons syndrome",
      "Lyell syndrome",
      "Mayer Rokitansky Kuster Hauser syndrome",
      "Both 1 and 2",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Ophthalmology",
    year: 2021,
    explanation:
      "Both Stevens-Johnson syndrome (SJS) and Lyell syndrome (Toxic Epidermal Necrolysis/TEN) are severe mucocutaneous blistering diseases associated with serious ocular complications including conjunctivitis, symblepharon, corneal ulceration, and blindness. SJS and TEN are considered part of the same disease spectrum (TEN being more severe). Mayer-Rokitansky-Kuster-Hauser syndrome is a Müllerian aplasia affecting the reproductive tract.",
  },
  {
    id: 610,
    text: "Jarjavay fracture is attributed to:",
    options: ["Maxilla", "Nasal septum", "Mandible", "None of the above"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 1,
    topic: "ENT",
    year: 2021,
    explanation:
      "Jarjavay fracture is a fracture of the nasal septum. It specifically refers to a fracture of the perpendicular plate of the ethmoid bone (part of the bony nasal septum). This type of injury typically results from direct trauma to the nose and is important to recognise as it can cause nasal septal deviation and obstruction if not properly managed.",
  },
  {
    id: 611,
    text: "Gestational hypertension is characterized by hypertension in pregnancy:",
    options: [
      "Without proteinuria",
      "Without pathological oedema",
      "With proteinuria",
      "Without proteinuria and pathological oedema",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Obstetrics & Gynaecology",
    year: 2021,
    explanation:
      "Gestational hypertension (pregnancy-induced hypertension without proteinuria) is defined as BP ≥140/90 mmHg arising after 20 weeks of gestation WITHOUT proteinuria and WITHOUT pathological oedema. If proteinuria develops, it becomes pre-eclampsia. The absence of both proteinuria AND pathological oedema distinguishes gestational hypertension from pre-eclampsia.",
  },
  {
    id: 612,
    text: "The cause of Mittelschmerz's Syndrome is:",
    options: [
      "Menstrual pain",
      "Premenstrual tension",
      "Ovular pain",
      "Prelabour pains",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Obstetrics & Gynaecology",
    year: 2021,
    explanation:
      "Mittelschmerz (German: 'middle pain') is caused by ovulation (ovular pain). It occurs at mid-cycle (around day 14) when the follicle ruptures and releases the egg. The pain is thought to be caused by the released follicular fluid and blood irritating the peritoneum. It presents as unilateral lower abdominal pain at mid-cycle, lasting a few hours to 2 days.",
  },
  {
    id: 613,
    text: "A placenta implanted partially or completely over the lower uterine segment is called:",
    options: [
      "Abruptio placenta",
      "Placenta praevia",
      "Vasa praevia",
      "Velamentous placenta",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Obstetrics & Gynaecology",
    year: 2021,
    explanation:
      "Placenta praevia is when the placenta is partially or completely implanted in the lower uterine segment, covering or near the internal os. It presents with painless, bright-red antepartum haemorrhage in the third trimester. Abruptio placentae is premature separation of a normally situated placenta. Vasa praevia involves fetal vessels crossing over the cervical os.",
  },
  {
    id: 614,
    text: "The relation of the different parts of the foetus to one another is called:",
    options: ["Lie", "Position", "Attitude", "Presentation"] as [
      string,
      string,
      string,
      string,
    ],
    correctIndex: 2,
    topic: "Obstetrics & Gynaecology",
    year: 2021,
    explanation:
      "Attitude (also called posture) refers to the relation of the different parts of the foetus to one another — specifically the degree of flexion or extension of the foetal spine, head, and limbs. Normal foetal attitude is complete flexion (foetus curled up). Lie = relation of long axis of foetus to mother. Presentation = part of foetus at pelvic inlet. Position = relation of denominator to maternal pelvis.",
  },
  {
    id: 615,
    text: "Assertion A: Breast milk is a rich source of vitamin D. Reason R: Exclusively breastfed infants are at high risk of developing vitamin D deficiency.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ] as [string, string, string, string],
    correctIndex: 3,
    topic: "Paediatrics",
    year: 2021,
    explanation:
      "Assertion A is FALSE: Breast milk is actually POOR in vitamin D (contains only 15-40 IU/L, far below requirements). Reason R is TRUE: Exclusively breastfed infants ARE at high risk of vitamin D deficiency precisely because breast milk lacks adequate vitamin D. Therefore, R is the correct and important clinical fact, while A is the false statement. Vitamin D supplementation (400 IU/day) is recommended for all breastfed infants.",
  },
  {
    id: 616,
    text: "Match the Disease in List I with its Feature in List II: (A) Rabies, (B) Rubeola, (C) Scarlet Fever, (D) Tetanus.",
    options: [
      "AI, BIII, CII, DV",
      "AIII, BII, CI, DIV",
      "AIII (Negri Bodies), BI (Koplik's spot), CIV (Strawberry Tongue), DII (Trismus)",
      "AIII, BI, CII, DV",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Community Medicine",
    year: 2021,
    explanation:
      "Classic pathognomonic features: (A) Rabies → Negri bodies (intracytoplasmic inclusions in neurons, especially Purkinje cells and hippocampal neurons), (B) Rubeola (Measles) → Koplik's spots (white spots on buccal mucosa, pathognomonic of measles), (C) Scarlet Fever → Strawberry tongue (red papillae on white-coated tongue), (D) Tetanus → Trismus (lock-jaw, spasm of masseter muscles). Option 3 is correct.",
  },
  {
    id: 617,
    text: "Arrange the following terms in sequence from birth towards adulthood: (A) Sinn-i-Rihaq, (B) Sinn-i-Fata, (C) Sinn-i-Tufulat, (D) Sinn-i-Saba, (E) Sin-i-Tara'ru.",
    options: [
      "C, A, B, D, E",
      "C, D, E, A, B",
      "D, B, C, A, E",
      "D, C, B, E, A",
    ] as [string, string, string, string],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2021,
    explanation:
      "The correct sequence of Sinn (ages of life) from birth to adulthood in Unani medicine is: (C) Sinn-i-Tufulat (infancy, 0-4 years) → (D) Sinn-i-Saba (childhood, 4-14 years) → (E) Sinn-i-Tara'ru (adolescence/youth, 14-30 years) → (A) Sinn-i-Rihaq (young adulthood, 30-40 years) → (B) Sinn-i-Fata (maturity, 40+ years). This gives sequence C, D, E, A, B.",
  },
  {
    id: 618,
    text: "Which of the following are synonyms for Tashannuj al-Atfal (Infantile convulsion)? (A) Tashannuj-i-Salaami, (B) Ra'sha al-Atfal, (C) Uqaal al-Atfal, (D) Uqaal al-Hawamil, (E) Khunaq.",
    options: [
      "A, B and D only",
      "C and D only",
      "A and C only",
      "D and E only",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Paediatrics",
    year: 2021,
    explanation:
      "Tashannuj al-Atfal (infantile convulsions) has two recognised synonyms in classical Unani texts: (A) Tashannuj-i-Salaami — meaning convulsions/spasms of the bones/skeleton, and (C) Uqaal al-Atfal — literally meaning 'binding/restraint of children' referring to the rigidity/spasm. Ra'sha al-Atfal means infantile tremor, Uqaal al-Hawamil refers to convulsions in pregnant women, and Khunaq is angina/throat spasm.",
  },
  {
    id: 619,
    text: "Statement I: Children are prone to bedwetting (Bowl fi'l Farash) because their organs are more moist. Statement II: It is caused by the flaccidity of the urinary bladder muscles.",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ] as [string, string, string, string],
    correctIndex: 0,
    topic: "Paediatrics",
    year: 2021,
    explanation:
      "Both statements are correct. In Unani medicine, children have Ratab (moist) Mizaj — their organs and tissues are more moist, which affects the tone of the urinary bladder. The excess moisture leads to flaccidity (laxity) of the bladder muscles (Zoufe Quwa-e-Masika of the bladder), resulting in inability to retain urine during sleep — causing bedwetting (Bowl fi'l Farash/nocturnal enuresis).",
  },
  {
    id: 620,
    text: "Delayed closure of the anterior fontanelle in babies is seen in which conditions? (A) Rickets, (B) Craniostenosis, (C) Hypothyroidism, (D) Microcephaly, (E) Hydrocephalus.",
    options: [
      "A, B and D only",
      "A, B and E only",
      "A, C and E only",
      "A, C and D only",
    ] as [string, string, string, string],
    correctIndex: 2,
    topic: "Paediatrics",
    year: 2021,
    explanation:
      "Delayed closure of the anterior fontanelle (normally closes by 18-24 months) is seen in: (A) Rickets (vitamin D deficiency causing defective bone mineralisation), (C) Hypothyroidism (cretinism — delayed bone maturation), (E) Hydrocephalus (increased intracranial pressure keeping fontanelle open). Craniostenosis (B) causes premature closure of fontanelles. Microcephaly (D) is associated with small/early closed fontanelles.",
  },
];
