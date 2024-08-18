export const listeningData = {
  audio: {
    src: "/audio/ielts-listening-full.mp3",
    duration: 1800 // 30 minutes in seconds
  },
 parts: [
  {
    part: 1,
    startTime: 0,
    endTime: 450,
    questions: [
      {
        type: 'mcq',
        title: "Course Preferences",
        instruction: 'Choose the correct letter, A, B or C.',
        questions: [
          {
            questionNo: 1,
            text: "John prefers to attend classes:",
            options: [
              "A. in the morning",
              "B. in the afternoon",
              "C. in the evening"
            ],
            answer: "C"
          },
          {
            questionNo: 2,
            text: "The course duration is:",
            options: [
              "A. 6 weeks",
              "B. 8 weeks",
              "C. 10 weeks"
            ],
            answer: "B"
          }
        ]
      },
      {
        type: 'shortAnswer',
        title: "Course Requirements and Payment",
        instruction: 'Answer the questions below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.',
        questions: [
          {
            questionNo: 3,
            text: "What does John need to bring to the first class?",
            answer: "laptop"
          },
          {
            questionNo: 4,
            text: "How much is the course fee?",
            answer: "500 pounds"
          },
          {
            questionNo: 5,
            text: "What is the deadline for payment?",
            answer: "August 31st"
          }
        ]
      },
      {
        type: 'fillInTheBlank',
        instruction: 'Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
        title: "Course Overview",
        questions: [
          {
            questionNo: 6,
            text: "The Web Development course is designed for {BLANK:6} who want to learn how to create websites.",
            answer: "beginners"
          },
          {
            questionNo: 7,
            text: "The course covers topics such as HTML, CSS, and {BLANK:7}.",
            answer: "JavaScript"
          },
          {
            questionNo: 8,
            text: "Students will work on {BLANK:8} projects throughout the course to gain practical experience.",
            answer: "real-world"
          }
        ]
      },
      {
        type: 'categoryMatching',
        instruction: 'Complete the table below. Choose the correct letter, A-C, for each category.',
        title: "Fossil Categories and Features",
        questions: [
          {
            questionNo: 9,
            text: "Impression fossils {BLANK:9}",
            answer: "B"
          },
          {
            questionNo: 10,
            text: "Cast fossils {BLANK:10}",
            answer: "C"
          },
          {
            questionNo: 11,
            text: "Permineralisation fossils {BLANK:11}",
            answer: "A"
          }
        ],
        options: [
          { letter: "A", text: "They are three-dimensional." },
          { letter: "B", text: "They do not contain any organic matter." },
          { letter: "C", text: "They are found in soft, wet ground." }
        ]
      },
    ],
    transcript: "This is a sample transcript for Part 1 of the listening test. It would contain the full text of the audio for this section, allowing for review and answer checking after the test."
  },
  {
    part: 2,
    startTime: 451,
    endTime: 900,
    questions: [
      {
        type: 'mcq',
        title: "Travel Preferences",
        instruction: 'Choose the correct letter, A, B or C.',
        questions: [
          {
            questionNo: 1,
            text: "Sarah prefers to travel by:",
            options: [
              "A. Car",
              "B. Train",
              "C. Plane"
            ],
            answer: "B"
          },
          {
            questionNo: 2,
            text: "The trip duration is:",
            options: [
              "A. 3 hours",
              "B. 5 hours",
              "C. 7 hours"
            ],
            answer: "A"
          }
        ]
      },
      {
        type: 'shortAnswer',
        title: "Accommodation Details",
        instruction: 'Answer the questions below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.',
        questions: [
          {
            questionNo: 3,
            text: "What type of accommodation did Sarah book?",
            answer: "hotel room"
          },
          {
            questionNo: 4,
            text: "How much does the accommodation cost per night?",
            answer: "120 dollars"
          },
          {
            questionNo: 5,
            text: "What is the check-in time?",
            answer: "2 PM"
          }
        ]
      },
      {
        type: 'fillInTheBlank',
        instruction: 'Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
        title: "Trip Overview",
        questions: [
          {
            questionNo: 6,
            text: "The trip is planned for {BLANK:6} days.",
            answer: "seven"
          },
          {
            questionNo: 7,
            text: "Sarah plans to visit {BLANK:7} during her trip.",
            answer: "museums"
          },
          {
            questionNo: 8,
            text: "The main purpose of the trip is to {BLANK:8}.",
            answer: "relax"
          }
        ]
      },
      {
        type: 'categoryMatching',
        instruction: 'Complete the table below. Choose the correct letter, A-C, for each category.',
        title: "Types of Transportation and Their Characteristics",
        questions: [
          {
            questionNo: 9,
            text: "Airplane travel is {BLANK:9}",
            answer: "C"
          },
          {
            questionNo: 10,
            text: "Train travel is {BLANK:10}",
            answer: "A"
          },
          {
            questionNo: 11,
            text: "Car travel is {BLANK:11}",
            answer: "B"
          }
        ],
        options: [
          { letter: "A", text: "Comfortable and scenic." },
          { letter: "B", text: "Flexible with stops." },
          { letter: "C", text: "Fast but expensive." }
        ]
      },
    ],
    transcript: "This is a sample transcript for Part 2 of the listening test. It would contain the full text of the audio for this section, allowing for review and answer checking after the test."
  }
  // Additional parts can be added here
],


};
