export const articles = [
  {
    id: 1,
    title: 'Understanding Your Menstrual Cycle',
    category: 'Menstrual Health',
    description: 'A comprehensive guide to the four phases of your menstrual cycle and what they mean for your body.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    date: '2026-01-15',
  },
  {
    id: 2,
    title: 'Nutrition During Pregnancy',
    category: 'Pregnancy',
    description: 'Essential nutrients and dietary tips for a healthy pregnancy journey.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
    date: '2026-02-10',
  },
  {
    id: 3,
    title: 'Managing Stress and Anxiety',
    category: 'Mental Wellness',
    description: 'Practical techniques and strategies to manage daily stress and anxiety effectively.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    date: '2026-03-05',
  },
  {
    id: 4,
    title: 'Fitness Routines for Women',
    category: 'Nutrition & Fitness',
    description: 'Workout plans tailored for women\'s health, strength, and overall wellbeing.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=400&fit=crop',
    date: '2026-03-20',
  },
  {
    id: 5,
    title: 'Postpartum Recovery Tips',
    category: 'Pregnancy',
    description: 'How to care for yourself after delivery and what to expect during recovery.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop',
    date: '2026-04-12',
  },
  {
    id: 6,
    title: 'Self-Care Rituals That Work',
    category: 'Mental Wellness',
    description: 'Simple self-care practices to incorporate into your daily routine for better mental health.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop',
    date: '2026-05-01',
  },
]

export const faqs = [
  {
    id: 1,
    category: 'Menstrual Health',
    question: 'What is a normal menstrual cycle?',
    answer: 'A normal menstrual cycle lasts between 21 and 35 days, with the average being 28 days. The bleeding phase typically lasts 2-7 days.',
  },
  {
    id: 2,
    category: 'Menstrual Health',
    question: 'How can I track my ovulation?',
    answer: 'You can track ovulation through calendar methods, basal body temperature tracking, cervical mucus observation, or ovulation predictor kits.',
  },
  {
    id: 3,
    category: 'Pregnancy',
    question: 'What are common signs of pregnancy?',
    answer: 'Common early signs include missed periods, nausea, breast tenderness, fatigue, and increased urination. A pregnancy test is the most reliable confirmation.',
  },
  {
    id: 4,
    category: 'General Health',
    question: 'How much water should I drink daily?',
    answer: 'Women should aim for about 2.7 liters (91 ounces) of total water intake per day from all beverages and foods.',
  },
  {
    id: 5,
    category: 'Pregnancy',
    question: 'What exercises are safe during pregnancy?',
    answer: 'Walking, swimming, stationary cycling, and prenatal yoga are generally safe. Always consult your healthcare provider before starting any new exercise routine.',
  },
  {
    id: 6,
    category: 'Menstrual Health',
    question: 'How can I manage PMS symptoms naturally?',
    answer: 'Regular exercise, a balanced diet rich in calcium and magnesium, stress management techniques, and adequate sleep can help reduce PMS symptoms.',
  },
  {
    id: 7,
    category: 'Menstrual Health',
    question: 'When should I see a gynecologist?',
    answer: 'Women should visit a gynecologist annually for routine check-ups, and immediately if experiencing unusual symptoms like irregular bleeding, severe pain, or abnormal discharge.',
  },
  {
    id: 8,
    category: 'Mental Wellness',
    question: 'What are the benefits of mental health counseling?',
    answer: 'Counseling can help manage stress, anxiety, and depression, improve relationships, develop coping strategies, and enhance overall quality of life.',
  },
]

export const FAQ_CATEGORIES = [
  { name: 'All', icon: null },
  { name: 'Menstrual Health', icon: 'HeartPulse', color: 'bg-blush-100 text-blush-700' },
  { name: 'Pregnancy', icon: 'Baby', color: 'bg-lavender-100 text-lavender-700' },
  { name: 'Mental Wellness', icon: 'Brain', color: 'bg-peach-100 text-peach-700' },
  { name: 'General Health', icon: 'Apple', color: 'bg-emerald-100 text-emerald-700' },
]

export const healthCategories = [
  {
    id: 1,
    title: 'Menstrual Health',
    description: 'Learn about your cycle, hormones, and menstrual wellness.',
    icon: 'HeartPulse',
    link: '/articles',
  },
  {
    id: 2,
    title: 'Pregnancy & Maternal Care',
    description: 'Expert guidance for every stage of your pregnancy journey.',
    icon: 'Baby',
    link: '/articles',
  },
  {
    id: 3,
    title: 'Mental Wellness',
    description: 'Resources for emotional health, stress relief, and self-care.',
    icon: 'Brain',
    link: '/articles',
  },
  {
    id: 4,
    title: 'Nutrition & Fitness',
    description: 'Diet plans and workout routines designed for women.',
    icon: 'Apple',
    link: '/articles',
  },
]

export const emergencyInfo = {
  helplines: [
    { name: 'National Domestic Violence Helpline', number: '1-800-799-7233' },
    { name: 'National Sexual Assault Hotline', number: '1-800-656-4673' },
    { name: 'National Suicide Prevention Lifeline', number: '988' },
    { name: 'Crisis Text Line', number: 'Text HOME to 741741' },
    { name: 'National Breast Cancer Foundation', number: '1-800-227-2345' },
    { name: 'National Infertility Association', number: '1-866-466-5448' },
  ],
  guidance: 'If you are experiencing a medical emergency, please call your local emergency services immediately. For mental health crises, the 988 Suicide & Crisis Lifeline is available 24/7.',
  hospitals: [
    { name: 'City General Hospital', address: '123 Main Street', phone: '(555) 123-4567' },
    { name: 'Women\'s Health Center', address: '456 Oak Avenue', phone: '(555) 987-6543' },
    { name: 'Family Care Clinic', address: '789 Pine Road', phone: '(555) 246-8135' },
  ],
}
