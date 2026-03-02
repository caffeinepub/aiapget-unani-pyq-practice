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
  'Kulliyat',
  'Ilmul Advia',
  'Moalijat',
  'Tashreeh wa Wazaif',
  'Ilmul Amraz',
  'Jarahat',
  'Ilmul Qabalat',
  'Hifzane Sehat',
  'Tahaffuzi wa Samaji Tib',
];

export const YEARS = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

export const questions: Question[] = [
  // Kulliyat
  {
    id: 1,
    text: "According to Unani system, the four primary qualities (Kaifiyat) are:",
    options: ["Hot, Cold, Moist, Dry", "Fire, Water, Air, Earth", "Blood, Phlegm, Yellow Bile, Black Bile", "Qalb, Dimagh, Jigar, Uns"],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2019,
    explanation: "The four primary qualities (Kaifiyat-e-Awwaliya) in Unani medicine are Hot (Haar), Cold (Barid), Moist (Ratab), and Dry (Yabis)."
  },
  {
    id: 2,
    text: "The concept of 'Mizaj' in Unani medicine refers to:",
    options: ["Diet and nutrition", "Temperament or constitution", "Pulse diagnosis", "Urine examination"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2018,
    explanation: "Mizaj refers to the temperament or constitution of an individual, formed by the interaction of the four elements and their qualities."
  },
  {
    id: 3,
    text: "Which of the following is NOT one of the Arkan (elements) in Unani medicine?",
    options: ["Nar (Fire)", "Hawa (Air)", "Khak (Earth)", "Noor (Light)"],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2020,
    explanation: "The four Arkan (elements) in Unani medicine are Nar (Fire), Hawa (Air), Maa (Water), and Khak (Earth). Noor (Light) is not one of them."
  },
  {
    id: 4,
    text: "The term 'Akhlat' in Unani medicine refers to:",
    options: ["Organs", "Humours", "Temperaments", "Vital forces"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2017,
    explanation: "Akhlat refers to the four humours: Dam (Blood), Balgham (Phlegm), Safra (Yellow Bile), and Sauda (Black Bile)."
  },
  {
    id: 5,
    text: "According to Unani medicine, the seat of Rooh (vital spirit) is:",
    options: ["Jigar (Liver)", "Dimagh (Brain)", "Qalb (Heart)", "Tilli (Spleen)"],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2021,
    explanation: "According to Unani medicine, Qalb (Heart) is the seat of Rooh (vital spirit/pneuma)."
  },
  {
    id: 6,
    text: "The process of digestion in Unani medicine is called:",
    options: ["Istehala", "Inhizam", "Ikhraj", "Imtisas"],
    correctIndex: 1,
    topic: "Kulliyat",
    year: 2022,
    explanation: "Inhizam refers to the process of digestion in Unani medicine, which occurs at multiple levels."
  },
  {
    id: 7,
    text: "Which humour is associated with the season of Spring according to Unani medicine?",
    options: ["Sauda", "Balgham", "Dam", "Safra"],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2016,
    explanation: "Dam (Blood) is associated with Spring season. It is hot and moist in temperament, similar to the spring season."
  },
  {
    id: 8,
    text: "The concept of 'Quwwat' (faculty/power) in Unani medicine includes all EXCEPT:",
    options: ["Quwwat-e-Tabiya", "Quwwat-e-Nafsania", "Quwwat-e-Haywania", "Quwwat-e-Ilahiya"],
    correctIndex: 3,
    topic: "Kulliyat",
    year: 2023,
    explanation: "The three Quwwat (faculties) in Unani medicine are Tabiya (Natural), Nafsania (Psychic), and Haywania (Vital). Quwwat-e-Ilahiya is not a recognized faculty."
  },

  // Ilmul Advia
  {
    id: 9,
    text: "The drug 'Afsanteen' (Artemisia absinthium) is primarily used for:",
    options: ["Cardiac disorders", "Digestive disorders and worm infestation", "Respiratory disorders", "Urinary disorders"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2019,
    explanation: "Afsanteen (Artemisia absinthium) is primarily used for digestive disorders and worm infestation due to its bitter and anthelmintic properties."
  },
  {
    id: 10,
    text: "Which of the following is the Unani name for Terminalia chebula?",
    options: ["Bahera", "Amla", "Haritaki/Halela Zard", "Bael"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2018,
    explanation: "Terminalia chebula is known as Halela Zard or Haritaki in Unani medicine. It is one of the three fruits in Triphala."
  },
  {
    id: 11,
    text: "The Mizaj (temperament) of Zanjabeel (Zingiber officinale) is:",
    options: ["Cold and Dry", "Hot and Moist", "Hot and Dry", "Cold and Moist"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2020,
    explanation: "Zanjabeel (Ginger) has a Hot and Dry temperament (Haar Yabis) in the third degree according to Unani pharmacology."
  },
  {
    id: 12,
    text: "Which drug is known as 'Asl-us-Soos' in Unani medicine?",
    options: ["Glycyrrhiza glabra", "Acacia arabica", "Ficus benghalensis", "Withania somnifera"],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2017,
    explanation: "Asl-us-Soos is the Unani name for Glycyrrhiza glabra (Licorice root), widely used for respiratory and digestive conditions."
  },
  {
    id: 13,
    text: "The drug 'Tukhm-e-Kasoos' is obtained from which plant?",
    options: ["Cuscuta reflexa", "Cannabis sativa", "Carum carvi", "Cuminum cyminum"],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2021,
    explanation: "Tukhm-e-Kasoos refers to the seeds of Cuscuta reflexa (Dodder), used in Unani medicine for liver and kidney disorders."
  },
  {
    id: 14,
    text: "Which of the following is a Muqawwi-e-Bah (aphrodisiac) drug in Unani medicine?",
    options: ["Senna", "Ashwagandha (Asgand)", "Neem", "Tulsi"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2022,
    explanation: "Asgand (Withania somnifera/Ashwagandha) is a well-known Muqawwi-e-Bah (aphrodisiac) and general tonic in Unani medicine."
  },
  {
    id: 15,
    text: "The term 'Mudir-e-Baul' in Unani pharmacology refers to drugs that:",
    options: ["Promote sweating", "Promote urination", "Promote menstruation", "Promote digestion"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2023,
    explanation: "Mudir-e-Baul refers to diuretic drugs that promote urination in Unani medicine."
  },
  {
    id: 16,
    text: "Qust (Saussurea lappa) is primarily classified as which type of drug in Unani medicine?",
    options: ["Musakkin (Sedative)", "Muqawwi-e-Meda (Gastric tonic)", "Muqawwi-e-Dimagh (Brain tonic)", "Mudir-e-Haiz (Emmenagogue)"],
    correctIndex: 2,
    topic: "Ilmul Advia",
    year: 2016,
    explanation: "Qust (Saussurea lappa) is primarily classified as Muqawwi-e-Dimagh (Brain tonic) and is also used for respiratory conditions."
  },

  // Moalijat
  {
    id: 17,
    text: "The Unani treatment principle 'Ilaj bil Zid' means:",
    options: ["Treatment by similars", "Treatment by opposites", "Treatment by diet", "Treatment by surgery"],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2019,
    explanation: "Ilaj bil Zid means treatment by opposites — treating a hot disease with cold remedies and vice versa, which is the fundamental principle of Unani therapeutics."
  },
  {
    id: 18,
    text: "Which of the following is the Unani treatment for Humma-e-Ghib (Tertian fever)?",
    options: ["Musakkinat", "Munzijat and Mushilat-e-Safra", "Muqawwiyat-e-Qalb", "Mudirat-e-Baul"],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2018,
    explanation: "Humma-e-Ghib (Tertian fever) is caused by excess Safra (Yellow Bile). Treatment involves Munzijat (maturatives) and Mushilat-e-Safra (cholagogues/purgatives for bile)."
  },
  {
    id: 19,
    text: "In Unani medicine, 'Fasad' (venesection/bloodletting) is indicated in which condition?",
    options: ["Imtila-e-Dam (Plethora of blood)", "Balgham predominance", "Sauda predominance", "Weakness and debility"],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2020,
    explanation: "Fasad (venesection) is indicated in Imtila-e-Dam (plethora/excess of blood) to remove excess blood and restore humoral balance."
  },
  {
    id: 20,
    text: "The Unani formulation 'Jawarish Jalinus' is primarily used for:",
    options: ["Cardiac disorders", "Gastric disorders", "Neurological disorders", "Respiratory disorders"],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2021,
    explanation: "Jawarish Jalinus is a classical Unani formulation primarily used for gastric disorders including dyspepsia and loss of appetite."
  },
  {
    id: 21,
    text: "Which Unani regimen therapy involves the use of steam?",
    options: ["Hammam", "Dalk", "Taleeq", "Idrar"],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2022,
    explanation: "Hammam (Turkish bath/steam bath) is a regimen therapy in Unani medicine that uses steam and heat for therapeutic purposes."
  },
  {
    id: 22,
    text: "The Unani treatment 'Hijama' (cupping) is classified under:",
    options: ["Ilaj bil Dawa", "Ilaj bil Tadbeer", "Ilaj bil Ghiza", "Ilaj bil Yad"],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2023,
    explanation: "Hijama (cupping therapy) is classified under Ilaj bil Tadbeer (Regimenal therapy), one of the four modes of treatment in Unani medicine."
  },
  {
    id: 23,
    text: "Sharbat Bazoori Motadil is used in Unani medicine for:",
    options: ["Fever", "Urinary disorders", "Cardiac weakness", "Skin diseases"],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2016,
    explanation: "Sharbat Bazoori Motadil is a classical Unani formulation used for urinary disorders including dysuria and urinary tract infections."
  },
  {
    id: 24,
    text: "In Unani medicine, 'Munzij' drugs are used to:",
    options: ["Purge the body", "Mature the morbid matter before evacuation", "Strengthen the organs", "Reduce inflammation"],
    correctIndex: 1,
    topic: "Moalijat",
    year: 2017,
    explanation: "Munzij (maturative) drugs are used to mature (ripen) the morbid matter (Maada-e-Fasida) before it can be evacuated from the body."
  },

  // Tashreeh wa Wazaif
  {
    id: 25,
    text: "According to Unani anatomy, the liver (Jigar) produces which humour?",
    options: ["Safra", "Balgham", "Dam", "Sauda"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2019,
    explanation: "According to Unani physiology, the liver (Jigar) is the primary organ for the production of Dam (Blood) and is considered the seat of natural faculty."
  },
  {
    id: 26,
    text: "The 'Nafs Nabatat' (vegetative soul) in Unani medicine is associated with which organ?",
    options: ["Heart", "Brain", "Liver", "Spleen"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2018,
    explanation: "The Nafs Nabatat (vegetative/natural soul) is associated with the Jigar (Liver), which governs nutrition, growth, and reproduction."
  },
  {
    id: 27,
    text: "In Unani physiology, 'Ruh Haywani' (vital spirit) is produced in:",
    options: ["Liver", "Brain", "Heart", "Lungs"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2020,
    explanation: "Ruh Haywani (vital spirit) is produced in the Qalb (Heart) and is responsible for life, pulse, and vital functions."
  },
  {
    id: 28,
    text: "The process of 'Hazm-e-Kabidi' (hepatic digestion) in Unani medicine occurs in:",
    options: ["Stomach", "Small intestine", "Liver", "Spleen"],
    correctIndex: 2,
    topic: "Tashreeh wa Wazaif",
    year: 2021,
    explanation: "Hazm-e-Kabidi (hepatic digestion) is the second stage of digestion occurring in the Jigar (Liver), where chyle is converted into blood."
  },
  {
    id: 29,
    text: "According to Unani medicine, the number of bones in the human body is:",
    options: ["206", "248", "360", "300"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2022,
    explanation: "According to classical Unani anatomists, the human body has 248 bones, which differs from the modern count of 206."
  },
  {
    id: 30,
    text: "The term 'Asab' in Unani anatomy refers to:",
    options: ["Muscles", "Nerves", "Bones", "Ligaments"],
    correctIndex: 1,
    topic: "Tashreeh wa Wazaif",
    year: 2023,
    explanation: "Asab refers to nerves in Unani anatomy. They are classified as Asab Hassasa (sensory nerves) and Asab Muharrika (motor nerves)."
  },

  // Ilmul Amraz
  {
    id: 31,
    text: "The Unani concept of 'Imtila' refers to:",
    options: ["Deficiency of humours", "Excess/fullness of humours", "Imbalance of temperament", "Obstruction of channels"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2019,
    explanation: "Imtila refers to the excess or fullness of humours in the body, which is a major cause of disease in Unani pathology."
  },
  {
    id: 32,
    text: "According to Unani medicine, 'Waram' (inflammation) is caused by:",
    options: ["Viral infection", "Accumulation of morbid matter in tissues", "Deficiency of vital force", "Imbalance of Mizaj"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2018,
    explanation: "Waram (inflammation) in Unani pathology is caused by the accumulation of morbid matter (Maada-e-Fasida) in the tissues."
  },
  {
    id: 33,
    text: "The Unani term for diabetes mellitus is:",
    options: ["Zatul Janb", "Ziabetus", "Istisqa", "Humma"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2020,
    explanation: "Ziabetus (also written as Ziabetes) is the Unani term for diabetes mellitus, characterized by excessive urination and thirst."
  },
  {
    id: 34,
    text: "In Unani medicine, 'Suda' refers to:",
    options: ["Headache", "Fever", "Cough", "Diarrhea"],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2021,
    explanation: "Suda refers to headache in Unani medicine. It can be caused by various factors including excess of humours, vapors, or external causes."
  },
  {
    id: 35,
    text: "The Unani disease 'Zatul Janb' corresponds to which modern condition?",
    options: ["Pneumonia/Pleurisy", "Appendicitis", "Hepatitis", "Nephritis"],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2022,
    explanation: "Zatul Janb in Unani medicine corresponds to Pneumonia or Pleurisy in modern medicine, characterized by chest pain and respiratory symptoms."
  },
  {
    id: 36,
    text: "According to Unani pathology, 'Sue Mizaj Mufrid' refers to:",
    options: ["Simple temperamental disorder without humoral involvement", "Complex humoral disorder", "Structural disease", "Functional disorder"],
    correctIndex: 0,
    topic: "Ilmul Amraz",
    year: 2023,
    explanation: "Sue Mizaj Mufrid (simple dycrasia) refers to a temperamental disorder without humoral involvement, affecting only the quality of the organ."
  },
  {
    id: 37,
    text: "The Unani term 'Istisqa' corresponds to which modern condition?",
    options: ["Jaundice", "Ascites/Dropsy", "Anemia", "Hypertension"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2016,
    explanation: "Istisqa in Unani medicine corresponds to Ascites or Dropsy (edema) in modern medicine, characterized by abnormal fluid accumulation."
  },

  // Jarahat
  {
    id: 38,
    text: "The Unani surgical procedure 'Shaq' refers to:",
    options: ["Cauterization", "Incision", "Cupping", "Leeching"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2019,
    explanation: "Shaq refers to incision (cutting) in Unani surgery, used to drain abscesses and treat various surgical conditions."
  },
  {
    id: 39,
    text: "In Unani medicine, 'Kai' refers to:",
    options: ["Leeching", "Cauterization", "Venesection", "Cupping"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2018,
    explanation: "Kai refers to cauterization in Unani medicine, used as a last resort treatment for various conditions including tumors and chronic wounds."
  },
  {
    id: 40,
    text: "The Unani term for wound healing is:",
    options: ["Tansheef", "Iltiam", "Tahleel", "Taqteer"],
    correctIndex: 1,
    topic: "Jarahat",
    year: 2020,
    explanation: "Iltiam refers to wound healing in Unani medicine. Drugs that promote wound healing are called Multaim."
  },

  // Ilmul Qabalat
  {
    id: 41,
    text: "The Unani term for normal delivery is:",
    options: ["Wiladat-e-Aseer", "Wiladat-e-Tabii", "Wiladat-e-Qais", "Wiladat-e-Maqloob"],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2021,
    explanation: "Wiladat-e-Tabii refers to normal/natural delivery in Unani obstetrics, where the baby is delivered in the vertex presentation."
  },
  {
    id: 42,
    text: "According to Unani medicine, the duration of normal pregnancy is:",
    options: ["9 months", "270 days", "9 months and 9 days", "280 days"],
    correctIndex: 2,
    topic: "Ilmul Qabalat",
    year: 2022,
    explanation: "According to Unani medicine, the normal duration of pregnancy is 9 months and 9 days (approximately 279 days)."
  },
  {
    id: 43,
    text: "The Unani drug used to promote lactation is called:",
    options: ["Mudir-e-Haiz", "Mudir-e-Laban", "Muqawwi-e-Rahim", "Habis-e-Dam"],
    correctIndex: 1,
    topic: "Ilmul Qabalat",
    year: 2023,
    explanation: "Mudir-e-Laban refers to galactagogue drugs that promote milk production (lactation) in Unani medicine."
  },

  // Hifzane Sehat
  {
    id: 44,
    text: "The six essential factors for health maintenance in Unani medicine are called:",
    options: ["Arkan-e-Sitta", "Asbab-e-Sitta Zarooriya", "Quwwat-e-Sitta", "Akhlat-e-Sitta"],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2019,
    explanation: "Asbab-e-Sitta Zarooriya (Six Essential Factors) are the six non-naturals that must be regulated for maintaining health in Unani medicine."
  },
  {
    id: 45,
    text: "Which of the following is NOT included in Asbab-e-Sitta Zarooriya?",
    options: ["Hawa (Air)", "Naum wa Yaqzah (Sleep and wakefulness)", "Dawa (Medicine)", "Harkat wa Sukoon-e-Nafsani (Mental activity and rest)"],
    correctIndex: 2,
    topic: "Hifzane Sehat",
    year: 2018,
    explanation: "Dawa (Medicine) is not part of Asbab-e-Sitta Zarooriya. The six are: Hawa, Makool wa Mashroob, Naum wa Yaqzah, Harkat wa Sukoon Badani, Harkat wa Sukoon Nafsani, and Ihtibas wa Istifragh."
  },
  {
    id: 46,
    text: "The Unani concept of 'Riyazat' refers to:",
    options: ["Dietary regimen", "Physical exercise", "Mental relaxation", "Spiritual practice"],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2020,
    explanation: "Riyazat refers to physical exercise in Unani medicine. It is considered essential for maintaining health and is part of Harkat wa Sukoon Badani."
  },
  {
    id: 47,
    text: "According to Unani medicine, the ideal time for Riyazat (exercise) is:",
    options: ["After meals", "Before meals on empty stomach", "At night before sleep", "Immediately after waking up"],
    correctIndex: 1,
    topic: "Hifzane Sehat",
    year: 2021,
    explanation: "According to Unani medicine, the ideal time for Riyazat (exercise) is before meals on an empty stomach, when the body has completed digestion."
  },

  // Tahaffuzi wa Samaji Tib
  {
    id: 48,
    text: "The Unani concept of preventive medicine is known as:",
    options: ["Ilaj bil Tadbeer", "Hifzane Sehat", "Tahaffuzi Tib", "Islah-e-Ghiza"],
    correctIndex: 2,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2022,
    explanation: "Tahaffuzi Tib refers to preventive medicine in Unani system, focusing on preventing disease before it occurs."
  },
  {
    id: 49,
    text: "The AYUSH full form is:",
    options: [
      "Ayurveda, Yoga, Unani, Siddha, Homeopathy",
      "Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homeopathy",
      "Ayurveda, Yoga, Unani, Surgery, Homeopathy",
      "Ayurveda, Yoga, Unani, Siddha, Herbal"
    ],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2023,
    explanation: "AYUSH stands for Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy — the traditional and alternative medicine systems recognized in India."
  },
  {
    id: 50,
    text: "The AIAPGET examination is conducted by:",
    options: ["CCIM", "NTA (National Testing Agency)", "AYUSH Ministry directly", "State Medical Councils"],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2022,
    explanation: "AIAPGET (All India Ayush Post Graduate Entrance Test) is conducted by NTA (National Testing Agency) on behalf of the Ministry of AYUSH."
  },
  {
    id: 51,
    text: "The Central Council of Indian Medicine (CCIM) was established under which Act?",
    options: ["Indian Medicine Central Council Act, 1970", "AYUSH Act, 2014", "Medical Council Act, 1956", "Traditional Medicine Act, 1980"],
    correctIndex: 0,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2016,
    explanation: "The Central Council of Indian Medicine (CCIM) was established under the Indian Medicine Central Council Act, 1970."
  },
  {
    id: 52,
    text: "Which of the following is the minimum qualification for BUMS (Bachelor of Unani Medicine and Surgery)?",
    options: ["10th standard", "12th standard with Biology", "Graduation in any subject", "Diploma in Unani"],
    correctIndex: 1,
    topic: "Tahaffuzi wa Samaji Tib",
    year: 2017,
    explanation: "The minimum qualification for BUMS is 12th standard (Higher Secondary) with Biology as a subject, along with Physics and Chemistry."
  },
  // Additional questions
  {
    id: 53,
    text: "The drug 'Rewand Chini' in Unani medicine is obtained from:",
    options: ["Rheum emodi", "Rheum rhabarbarum", "Rheum palmatum", "All of the above"],
    correctIndex: 3,
    topic: "Ilmul Advia",
    year: 2017,
    explanation: "Rewand Chini (Rhubarb) can be obtained from multiple Rheum species including R. emodi, R. rhabarbarum, and R. palmatum."
  },
  {
    id: 54,
    text: "The Unani formulation 'Majoon Chobchini' is primarily used for:",
    options: ["Syphilis and skin diseases", "Cardiac disorders", "Respiratory disorders", "Digestive disorders"],
    correctIndex: 0,
    topic: "Moalijat",
    year: 2018,
    explanation: "Majoon Chobchini is a classical Unani formulation primarily used for syphilis (Atashak) and various skin diseases."
  },
  {
    id: 55,
    text: "According to Unani medicine, 'Balgham' (Phlegm) is associated with which season?",
    options: ["Summer", "Autumn", "Winter", "Spring"],
    correctIndex: 2,
    topic: "Kulliyat",
    year: 2017,
    explanation: "Balgham (Phlegm) is associated with Winter season. It is cold and moist in temperament, similar to the winter season."
  },
  {
    id: 56,
    text: "The Unani drug 'Tukhm-e-Khatmi' is obtained from:",
    options: ["Althaea officinalis", "Hibiscus rosa-sinensis", "Malva sylvestris", "Abelmoschus esculentus"],
    correctIndex: 0,
    topic: "Ilmul Advia",
    year: 2019,
    explanation: "Tukhm-e-Khatmi refers to the seeds of Althaea officinalis (Marshmallow), used in Unani medicine for urinary and respiratory conditions."
  },
  {
    id: 57,
    text: "The Unani concept of 'Tabiyat' (Nature/Vis Medicatrix Naturae) refers to:",
    options: ["The healing power of nature within the body", "The natural environment", "Natural drugs", "Natural diet"],
    correctIndex: 0,
    topic: "Kulliyat",
    year: 2020,
    explanation: "Tabiyat refers to the innate healing power of nature (Vis Medicatrix Naturae) within the body, which maintains health and fights disease."
  },
  {
    id: 58,
    text: "Which of the following is a Mushil-e-Safra (cholagogue/purgative for bile) in Unani medicine?",
    options: ["Turbud", "Senna", "Helteet", "Afsanteen"],
    correctIndex: 1,
    topic: "Ilmul Advia",
    year: 2021,
    explanation: "Senna (Sana Makki) is a well-known Mushil-e-Safra (cholagogue) in Unani medicine, used to purge excess bile from the body."
  },
  {
    id: 59,
    text: "The Unani term for epilepsy is:",
    options: ["Falij", "Sara", "Laqwa", "Khuddar"],
    correctIndex: 1,
    topic: "Ilmul Amraz",
    year: 2017,
    explanation: "Sara is the Unani term for epilepsy, characterized by sudden loss of consciousness and convulsions."
  },
  {
    id: 60,
    text: "According to Unani medicine, 'Safra' (Yellow Bile) is produced in:",
    options: ["Liver", "Gallbladder", "Spleen", "Stomach"],
    correctIndex: 0,
    topic: "Tashreeh wa Wazaif",
    year: 2016,
    explanation: "Safra (Yellow Bile) is produced in the Jigar (Liver) as a byproduct of blood formation. The gallbladder stores it."
  },
];
