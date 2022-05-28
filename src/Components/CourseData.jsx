import React from 'react'
import mathsicon from '../images/maths.png';
import chemistryicon from '../images/chemistry.png';
import physicsicon from '../images/physics.png';
import englishicon from '../images/english.png';
import biologyicon from '../images/biology.png';

const coursedatas = [
    {
       id: 1,
       name: "Chemistry",
       image: chemistryicon,
       video: "https://www.youtube.com/embed/lcnIiC8JZg0",
       details: {
         intro: "Chemistry is a physical science, and it is the study of the properties of and interactions between matter and energy. In other words, chemistry is a way to study the properties, characteristics, and physical and chemical changes of matter.",
         branches: [
           "Biochemistry",
           "Analytical chemistry",
           "Physical Chemistry"
         ]
       }
     },
     {
       id: 2,
       name: "Physics",
       image: physicsicon,
       video: "https://www.youtube.com/embed/Xm0pP0mHquI",
       details: {
         intro: "Physics is a science. Science works according to the scientific method. The scientific method accepts only reason, logic, and experimental evidence to tell between what is scientifically correct and what is not. Scientists do not simply believe – they test, and keep testing until satisfied. Just because some “big scientist” says something is right, that thing does not become a fact of science.",
         branches: [
           "Classical Physics.",
           "Modern Physics.",
           "Nuclear Physics.",
           "Atomic Physics.",
           "Geophysics.",
           "Biophysics.",
           "Mechanics.",
           "Acoustics.",
         ]
       }
     },
     {
       id: 3,
       name: "Mathematics",
       image: mathsicon,
       video: 'https://www.youtube.com/embed/MMC0iaz6bac',
       details: {
         intro: "Mathematics is  not  only  concerned with everyday problems, but  also  with  using  imagination,  intuition  and  reasoning  to find new ideas  and  to  solve puzzling problems.",
          branches: [
           "Algebra.",
           "Geometry.",
           "Trigonometry.",
           "Calculus.",
           "Statistics and Probability.",
         ]
       }
     },
     {
       id: 4,
       name: "Biology",
       image: biologyicon,
       video: "https://www.youtube.com/embed/vwAJ8ByQH2U",
       details: {
         intro: "The word biology means, the science of life, from the Greek bios, life, and logos, word or knowledge. Therefore, Biology is the science of Living Things. That is why Biology is sometimes known as Life Science.",
         branches: [
           "Anatomy.",
           "Botany.",
           "Taxonomy.",
           "Zoology.",
           "Microbiology.",
           "Mycology.",
           "Phycology.",
           "Parasitology."
         ]
       }
     },
     {
       id: 5,
       name: "English Language",
       image: englishicon,
       video: "https://youtu.be/J4kd-hG9ZDk",
       details: {
         intro: "English studies (usually called simply English) is an academic discipline taught in primary, secondary, and post-secondary education in English-speaking countries; it is not to be confused with English taught as a foreign language, which is a distinct discipline. It involves the study and exploration of texts created in English literature.",
         branches: [
           "English linguistics.",
           "English sociolinguistics.",
           "Discourse analysis in English.",
           "English Stylistics (linguistics)",
           "World Englishes.",
           "History of the English language.",
           "Composition studies.",
           "Rhetoric.",
         ]
       }
     }
]
export function getCourseData() {
  return coursedatas;
}

