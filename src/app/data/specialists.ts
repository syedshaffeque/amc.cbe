import drSyedImage from '../../assets/specialists/dr-syed.png';
import drPratapImage from '../../assets/specialists/dr-pratap.jpg';
import pharmaAyeshaImage from '../../assets/specialists/pharma-ayesha.png';
import pharmaAbdullah from '../../assets/specialists/pharma-abdullah.png';
import pharmaSafi from '../../assets/specialists/pharma-safi.png';

export interface CareerTimelineItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: 'work' | 'education' | 'certification' | 'achievement';
}

export interface Specialist {
  id: string;
  name: string;
  title: string;
  specialization: string;
  education: string;
  experience: string;
  image: string;
  bio: string;
  qualifications: string[];
  areasOfExpertise: string[];
  approach: string;
  languages: string[];
  availability: string;
  careerTimeline: CareerTimelineItem[];
}

export const specialists: Specialist[] = [
  {
    id: 'dr-sarah-mitchell',
    name: 'Dr. Syed Ummar Ibrahim',
    title: 'Consultant Psychiatrist',
    specialization: 'Anxiety, Depression & Bipolar Treatment Specialist',
    education: 'Gold Medalist - MBBS - PHD -Stanley Medical College',
    experience: '23 years',
    image: drSyedImage,
    bio: 'Dr. Syed Ummar Ibrahim is a board-certified psychiatrist with over 20 years of experience in treating anxiety, depression, and bipolar disorders. He is dedicated to providing evidence-based care and has helped hundreds of patients achieve lasting mental wellness.',
    qualifications: [
      'Doctor of Medicine M.D (Psychiatry) - Gold Medalist, Stanley Medical College',
      'Licensed Clinical Psychologist (#PSY12345)',
      'Board Certified in Cognitive Behavioral Therapy',
      'Certified EMDR Therapist'
    ],
    areasOfExpertise: [
      'Anxiety Disorders',
      'Major Depressive Disorder',
      'Post-Traumatic Stress Disorder (PTSD)',
      'Panic Disorder',
      'Obsessive-Compulsive Disorder (OCD)',
      'Stress Management'
    ],
    approach: 'Dr. Syed uses a combination of Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and mindfulness-based techniques to help clients develop practical coping strategies and achieve their therapeutic goals.',
    languages: ['English', 'Tamil', 'Urdu', 'Hindi'],
    availability: 'Monday - Friday: 9:00 AM - 6:00 PM',
    careerTimeline: [
      {
        year: '2023 - Present',
        title: 'MD - AMC',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Leading the anxiety and trauma treatment program, providing comprehensive psychological services to adults dealing with complex mental health challenges.',
        type: 'work'
      },
      {
        year: '2021',
        title: 'EMDR Certification',
        organization: 'EMDR International Association',
        location: 'TN, India',
        description: 'Completed advanced training in Eye Movement Desensitization and Reprocessing therapy for trauma treatment.',
        type: 'certification'
      },
      {
        year: '2016 - 2023',
        title: 'Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Provided individual and group therapy for patients with anxiety disorders, depression, and PTSD. Supervised doctoral interns and contributed to research studies.',
        type: 'work'
      },
      {
        year: '2015',
        title: 'Board Certification in CBT',
        organization: 'Academy of Cognitive & Behavioral Therapies',
        location: 'TN, India',
        description: 'Achieved board certification in Cognitive Behavioral Therapy, demonstrating advanced expertise in evidence-based treatment methods.',
        type: 'certification'
      },
      {
        year: '2009 - 2016',
        title: 'Staff Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Specialized in treating combat veterans with PTSD, anxiety, and depression. Developed and implemented group therapy programs.',
        type: 'work'
      },
      {
        year: '2009',
        title: 'Ph.D. in Clinical Psychology',
        organization: 'PSG College of Arts and Science',
        location: 'Coimbatore, TN, India',
        description: 'Completed doctoral dissertation on cognitive-behavioral interventions for anxiety disorders. Graduated with honors.',
        type: 'education'
      },
      {
        year: '2005',
        title: 'B.A. in Psychology',
        organization: 'Stanford University',
        location: 'Stanford, CA',
        description: 'Graduated magna cum laude with a Bachelor of Arts in Psychology. Active member of Psi Chi Honor Society.',
        type: 'education'
      }
    ]
  },
  {
    id: 'dr-james-rodriguez',
    name: 'Dr. Pratap Chander R',
    title: 'Counseling Psychologist',
    specialization: 'Mental Health and Behavioral Sciences Specialist',
    education: 'MBBS, MD Psychiatry',
    experience: '16 years',
    image: drPratapImage,
    bio: 'Dr. Sarah Mitchell is a board-certified clinical psychologist with over 15 years of experience helping individuals overcome anxiety, depression, and trauma-related disorders. She specializes in evidence-based therapeutic approaches and has helped hundreds of clients achieve lasting mental wellness.',
    qualifications: [
      'Ph.D. in Clinical Psychology, University of California',
      'Licensed Clinical Psychologist (#PSY12345)',
      'Board Certified in Cognitive Behavioral Therapy',
      'Certified EMDR Therapist'
    ],
    areasOfExpertise: [
      'Anxiety Disorders',
      'Major Depressive Disorder',
      'Post-Traumatic Stress Disorder (PTSD)',
      'Panic Disorder',
      'Obsessive-Compulsive Disorder (OCD)',
      'Stress Management'
    ],
    approach: 'Dr. Pratap uses a combination of Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and mindfulness-based techniques to help clients develop practical coping strategies and achieve their therapeutic goals.',
    languages: ['English', 'Tamil'],
    availability: 'Monday - Friday: 9:00 AM - 6:00 PM',
    careerTimeline: [
      {
        year: '2023 - Present',
        title: 'Senior Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Leading the anxiety and trauma treatment program, providing comprehensive psychological services to adults dealing with complex mental health challenges.',
        type: 'work'
      },
      {
        year: '2021',
        title: 'EMDR Certification',
        organization: 'EMDR International Association',
        location: 'TN, India',
        description: 'Completed advanced training in Eye Movement Desensitization and Reprocessing therapy for trauma treatment.',
        type: 'certification'
      },
      {
        year: '2016 - 2023',
        title: 'Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Provided individual and group therapy for patients with anxiety disorders, depression, and PTSD. Supervised doctoral interns and contributed to research studies.',
        type: 'work'
      },
      {
        year: '2015',
        title: 'Board Certification in CBT',
        organization: 'Academy of Cognitive & Behavioral Therapies',
        location: 'TN, India',
        description: 'Achieved board certification in Cognitive Behavioral Therapy, demonstrating advanced expertise in evidence-based treatment methods.',
        type: 'certification'
      },
      {
        year: '2009 - 2016',
        title: 'Staff Psychologist',
        organization: 'Veterans Affairs Hospital',
        location: 'Coimbatore, TN, India',
        description: 'Specialized in treating combat veterans with PTSD, anxiety, and depression. Developed and implemented group therapy programs.',
        type: 'work'
      },
      {
        year: '2009',
        title: 'Ph.D. in Clinical Psychology',
        organization: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        description: 'Completed doctoral dissertation on cognitive-behavioral interventions for anxiety disorders. Graduated with honors.',
        type: 'education'
      },
      {
        year: '2005',
        title: 'B.A. in Psychology',
        organization: 'Stanford University',
        location: 'Stanford, CA',
        description: 'Graduated magna cum laude with a Bachelor of Arts in Psychology. Active member of Psi Chi Honor Society.',
        type: 'education'
      }
    ]
  },
  {
    id: 'pharma-syesha-ayesha',
    name: 'RPh.Ayesha',
    title: 'Pharmacist',
    specialization: 'Chemical Compound Specialist',
    education: 'Bpharm',
    experience: '8 years',
    image: pharmaAyeshaImage,
    bio: 'Dr. Sarah Mitchell is a board-certified clinical psychologist with over 15 years of experience helping individuals overcome anxiety, depression, and trauma-related disorders. She specializes in evidence-based therapeutic approaches and has helped hundreds of clients achieve lasting mental wellness.',
    qualifications: [
      'B.Pharm - MMC',
      'Licensed Pharmacist (#PSY12345)',
    ],
    areasOfExpertise: [
      'Pharmacist','Chemical Compound Specialist'
    ],
    approach: 'Ayesha uses a combination of Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and mindfulness-based techniques to help clients develop practical coping strategies and achieve their therapeutic goals.',
    languages: ['English', 'Tamil'],
    availability: 'Monday - Friday: 9:00 AM - 6:00 PM',
    careerTimeline: [
      {
        year: '2023 - Present',
        title: 'Senior Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Leading the anxiety and trauma treatment program, providing comprehensive psychological services to adults dealing with complex mental health challenges.',
        type: 'work'
      },
      {
        year: '2021',
        title: 'EMDR Certification',
        organization: 'EMDR International Association',
        location: 'TN, India',
        description: 'Completed advanced training in Eye Movement Desensitization and Reprocessing therapy for trauma treatment.',
        type: 'certification'
      },
      {
        year: '2016 - 2023',
        title: 'Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Provided individual and group therapy for patients with anxiety disorders, depression, and PTSD. Supervised doctoral interns and contributed to research studies.',
        type: 'work'
      },
      {
        year: '2015',
        title: 'Board Certification in CBT',
        organization: 'Academy of Cognitive & Behavioral Therapies',
        location: 'TN, India',
        description: 'Achieved board certification in Cognitive Behavioral Therapy, demonstrating advanced expertise in evidence-based treatment methods.',
        type: 'certification'
      },
      {
        year: '2009 - 2016',
        title: 'Pharmacist',
        organization: 'Veterans Affairs Hospital',
        location: 'Coimbatore, TN',
        description: 'Specialized in treating combat veterans with PTSD, anxiety, and depression. Developed and implemented group therapy programs.',
        type: 'work'
      }
    ]
  },
  {
    id: 'pharma-abdullah',
    name: 'Mr. Abdullah',
    title: 'Admin',
    specialization: 'Health Care Administration',
    education: 'BBA',
    experience: '12 years',
    image: pharmaAbdullah,
    bio: 'Dr. Sarah Mitchell is a board-certified clinical psychologist with over 15 years of experience helping individuals overcome anxiety, depression, and trauma-related disorders. She specializes in evidence-based therapeutic approaches and has helped hundreds of clients achieve lasting mental wellness.',
    qualifications: [
      'B.Pharm - MMC',
      'Licensed Pharmacist (#PSY12345)',
    ],
    areasOfExpertise: [
      'Pharmacist','Chemical Compound Specialist'
    ],
    approach: 'Ayesha uses a combination of Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and mindfulness-based techniques to help clients develop practical coping strategies and achieve their therapeutic goals.',
    languages: ['English', 'Tamil'],
    availability: 'Monday - Friday: 9:00 AM - 6:00 PM',
    careerTimeline: [
      {
        year: '2023 - Present',
        title: 'Senior Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Leading the anxiety and trauma treatment program, providing comprehensive psychological services to adults dealing with complex mental health challenges.',
        type: 'work'
      },
      {
        year: '2021',
        title: 'EMDR Certification',
        organization: 'EMDR International Association',
        location: 'TN, India',
        description: 'Completed advanced training in Eye Movement Desensitization and Reprocessing therapy for trauma treatment.',
        type: 'certification'
      },
      {
        year: '2016 - 2023',
        title: 'Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Provided individual and group therapy for patients with anxiety disorders, depression, and PTSD. Supervised doctoral interns and contributed to research studies.',
        type: 'work'
      },
      {
        year: '2015',
        title: 'Board Certification in CBT',
        organization: 'Academy of Cognitive & Behavioral Therapies',
        location: 'TN, India',
        description: 'Achieved board certification in Cognitive Behavioral Therapy, demonstrating advanced expertise in evidence-based treatment methods.',
        type: 'certification'
      },
      {
        year: '2009 - 2016',
        title: 'Pharmacist',
        organization: 'Veterans Affairs Hospital',
        location: 'Coimbatore, TN',
        description: 'Specialized in treating combat veterans with PTSD, anxiety, and depression. Developed and implemented group therapy programs.',
        type: 'work'
      }
    ]
  },
  {
    id: 'pharma-safi',
    name: 'Mr. Safi',
    title: 'Junior Pharmacist',
    specialization: 'Junior Pharmacist',
    education: 'B.Pharm',
    experience: '2 years',
    image: pharmaSafi,
    bio: 'Mr. Safi is a dedicated junior pharmacist with a strong foundation in pharmaceutical sciences. He is committed to providing excellent patient care and ensuring the safe and effective use of medications.',
    qualifications: [
      'B.Pharm',
    ],
    areasOfExpertise: [
      'Pharmacist'
    ],
    approach: 'Ayesha uses a combination of Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), and mindfulness-based techniques to help clients develop practical coping strategies and achieve their therapeutic goals.',
    languages: ['English', 'Tamil'],
    availability: 'Monday - Friday: 9:00 AM - 6:00 PM',
    careerTimeline: [
      {
        year: '2023 - Present',
        title: 'Senior Clinical Psychologist',
        organization: 'Aafiya Medical Centre',
        location: 'Coimbatore, TN, India',
        description: 'Leading the anxiety and trauma treatment program, providing comprehensive psychological services to adults dealing with complex mental health challenges.',
        type: 'work'
      },
      {
        year: '2021',
        title: 'EMDR Certification',
        organization: 'EMDR International Association',
        location: 'TN, India',
        description: 'Completed advanced training in Eye Movement Desensitization and Reprocessing therapy for trauma treatment.',
        type: 'certification'
      }
    ]
  }
];
