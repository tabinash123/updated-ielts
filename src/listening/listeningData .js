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
          type: 'formCompletion',
          title: "Course Registration Details",
          instruction: 'Complete the form below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
          questions: [
            {
              questionNo: 1,
              text: "Name: John {BLANK}",
              answer: "Smith"
            },
            {
              questionNo: 2,
              text: "Age: {BLANK}",
              answer: "28"
            },
            {
              questionNo: 3,
              text: "Occupation: {BLANK}",
              answer: "Software engineer"
            }
          ]
        },
        {
          type: 'mcq',
          title: "Course Preferences",
          instruction: 'Choose the correct letter, A, B or C.',
          questions: [
            {
              questionNo: 4,
              text: "John prefers to attend classes:",
              options: [
                "A. in the morning",
                "B. in the afternoon",
                "C. in the evening"
              ],
              answer: "C"
            },
            {
              questionNo: 5,
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
              questionNo: 6,
              text: "What does John need to bring to the first class?",
              answer: "laptop"
            },
            {
              questionNo: 7,
              text: "How much is the course fee?",
              answer: "500 pounds"
            },
            {
              questionNo: 8,
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
              questionNo: 9,
              text: "The Web Development course is designed for {BLANK:9} who want to learn how to create websites.",
              answer: "beginners"
            },
            {
              questionNo: 10,
              text: "The course covers topics such as HTML, CSS, and {BLANK:10}.",
              answer: "JavaScript"
            },
            {
              questionNo: 11,
              text: "Students will work on {BLANK:11} projects throughout the course to gain practical experience.",
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
              questionNo: 12,
              text: "Impression fossils {BLANK:12}",
              answer: "B"
            },
            {
              questionNo: 13,
              text: "Cast fossils {BLANK:13}",
              answer: "C"
            },
            {
              questionNo: 14,
              text: "Permineralisation fossils {BLANK:14}",
              answer: "A"
            }
          ],
          options: [
            { letter: "A", text: "They are three-dimensional." },
            { letter: "B", text: "They do not contain any organic matter." },
            { letter: "C", text: "They are found in soft, wet ground." }
          ]
        },
        {
          type: 'flowChartOptionSelection',
          instruction: 'Complete the flow-chart. Choose the correct answer and move it into the gap.',
          title: "Procedure for detecting life on another planet",
          flowChart: [
            { 
              stepNo: 1, 
              type: 'text', 
              content: "A spacecraft lands on a planet and sends out a rover."
            },
            { 
              stepNo: 2, 
              type: 'question', 
              content: "The rover is directed to a {BLANK:15} which has organic material.",
              questionNo: 15
            },
            { 
              stepNo: 3, 
              type: 'question', 
              content: "It collects a sample from below the surface (in order to avoid the effects of {BLANK:16}).",
              questionNo: 16
            },
            { 
              stepNo: 4, 
              type: 'text', 
              content: "The soil and rocks are checked to look for evidence of fossils."
            },
            { 
              stepNo: 5, 
              type: 'text', 
              content: "The sample is converted to powder."
            },
            { 
              stepNo: 6, 
              type: 'question', 
              content: "The sample is subjected to {BLANK:17}.",
              questionNo: 17
            },
            { 
              stepNo: 7, 
              type: 'question', 
              content: "A mass spectrometer is used to search for potential proof of life, e.g {BLANK:18}.",
              questionNo: 18
            },
            { 
              stepNo: 8, 
              type: 'question', 
              content: "The {BLANK:19} are compared with existing data from Earth.",
              questionNo: 19
            }
          ],
          answers: [
            { questionNo: 15, answer: "site" },
            { questionNo: 16, answer: "radiation" },
            { questionNo: 17, answer: "heat" },
            { questionNo: 18, answer: "water" },
            { questionNo: 19, answer: "results" }
          ],
          options: [
            "contamination",
            "vehicle",
            "heat",
            "results",
            "radiation",
            "site",
            "microbes",
            "water"
          ]
        }
      ],
      transcript: "This is a sample transcript for Part 1 of the listening test. It would contain the full text of the audio for this section, allowing for review and answer checking after the test."
    }
    // You can add more parts (2, 3, 4) following the same structure
  ]
};