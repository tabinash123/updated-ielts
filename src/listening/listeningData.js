import aud from '../assets/audio.mp3';


export const listeningData = {
  audio: {
    src: aud,
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
            questionNo: 12,
            text: "Sarah prefers to travel by:",
            options: [
              "A. Car",
              "B. Train",
              "C. Plane"
            ],
            answer: "B"
          },
          {
            questionNo: 13,
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
            questionNo: 14,
            text: "What type of accommodation did Sarah book?",
            answer: "hotel room"
          },
          {
            questionNo: 15,
            text: "How much does the accommodation cost per night?",
            answer: "120 dollars"
          },
          {
            questionNo: 16,
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
            questionNo: 17,
            text: "The trip is planned for {BLANK:17} days.",
            answer: "seven"
          },
          {
            questionNo: 18,
            text: "Sarah plans to visit {BLANK:18} during her trip.",
            answer: "museums"
          },
          {
            questionNo: 19,
            text: "The main purpose of the trip is to {BLANK:19}.",
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
            questionNo: 20,
            text: "Airplane travel is {BLANK:20}",
            answer: "C"
          },
          {
            questionNo: 21,
            text: "Train travel is {BLANK:21}",
            answer: "A"
          },
          {
            questionNo: 22,
            text: "Car travel is {BLANK:22}",
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
   },
   {
      part: 3,
      startTime: 901,
      endTime: 1350,
      questions: [
        {
          type: 'categoryMatching',
          instruction: 'Complete the table below. Choose the correct letter, A-C, for each category.',
          title: "Types of Pollution and Their Sources",
          questions: [
            {
              questionNo: 23,
              text: "Water pollution {BLANK:23}",
              answer: "B"
            },
            {
              questionNo: 24,
              text: "Soil pollution {BLANK:24}",
              answer: "C"
            },
            {
              questionNo: 25,
              text: "Noise pollution {BLANK:25}",
              answer: "A"
            }
          ],
          options: [
            { letter: "A", text: "Primarily caused by urban activities." },
            { letter: "B", text: "Often results from agricultural runoff." },
            { letter: "C", text: "Can be caused by improper waste disposal." }
          ]
        },
        {
          type: 'shortAnswer',
          title: "Climate Change Effects",
          instruction: 'Answer the questions below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.',
          questions: [
            {
              questionNo: 26,
              text: "What is the predicted global temperature rise by 2100?",
              answer: "3 degrees Celsius"
            },
            {
              questionNo: 27,
              text: "Which ecosystem is most at risk from rising sea levels?",
              answer: "coral reefs"
            },
            {
              questionNo: 28,
              text: "What percentage of species are at risk of extinction due to climate change?",
              answer: "30 percent"
            }
          ]
        },
        {
          type: 'fillInTheBlank',
          instruction: 'Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
          title: "Renewable Energy",
          questions: [
            {
              questionNo: 29,
              text: "Solar panels convert {BLANK:29} into electricity.",
              answer: "sunlight"
            },
            {
              questionNo: 30,
              text: "Wind turbines are most effective in {BLANK:30} areas.",
              answer: "coastal"
            },
            {
              questionNo: 31,
              text: "Hydroelectric power relies on the flow of {BLANK:31} to generate electricity.",
              answer: "water"
            }
          ]
        },
        {
          type: 'mcq',
          title: "Environmental Issues",
          instruction: 'Choose the correct letter, A, B or C.',
          questions: [
            {
              questionNo: 32,
              text: "The main cause of air pollution in cities is:",
              options: [
                "A. Industrial emissions",
                "B. Vehicle exhaust",
                "C. Household waste"
              ],
              answer: "B"
            },
            {
              questionNo: 33,
              text: "The most effective way to reduce plastic waste is:",
              options: [
                "A. Recycling",
                "B. Incineration",
                "C. Reducing consumption"
              ],
              answer: "C"
            }
          ]
        },
      ],
      transcript: "This is a sample transcript for Part 3 of the listening test. It would contain the full text of the audio for this section, covering topics related to environmental issues, climate change, and renewable energy."
    },
    {
      part: 4,
      startTime: 1351,
      endTime: 1800,
      questions: [
        {
          type: 'fillInTheBlank',
          instruction: 'Complete the sentences. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.',
          title: "AI Ethics",
          questions: [
            {
              questionNo: 34,
              text: "One of the main ethical concerns in AI is {BLANK:34} in decision-making algorithms.",
              answer: "bias"
            },
            {
              questionNo: 35,
              text: "AI systems must be designed with {BLANK:35} to protect user information.",
              answer: "privacy"
            },
            {
              questionNo: 36,
              text: "The concept of {BLANK:36} deals with making AI systems explain their decisions.",
              answer: "explainable AI"
            }
          ]
        },
        {
          type: 'mcq',
          title: "Artificial Intelligence",
          instruction: 'Choose the correct letter, A, B or C.',
          questions: [
            {
              questionNo: 37,
              text: "The main goal of artificial intelligence is to:",
              options: [
                "A. Replace human workers",
                "B. Mimic human intelligence",
                "C. Create conscious machines"
              ],
              answer: "B"
            },
            {
              questionNo: 38,
              text: "Which field has seen the most significant impact from AI?",
              options: [
                "A. Healthcare",
                "B. Education",
                "C. Transportation"
              ],
              answer: "A"
            }
          ]
        },
        {
          type: 'categoryMatching',
          instruction: 'Complete the table below. Choose the correct letter, A-C, for each category.',
          title: "Types of AI and Their Characteristics",
          questions: [
            {
              questionNo: 39,
              text: "Narrow AI {BLANK:39}",
              answer: "C"
            },
            {
              questionNo: 40,
              text: "General AI {BLANK:40}",
              answer: "A"
            },
            {
              questionNo: 41,
              text: "Super AI {BLANK:41}",
              answer: "B"
            }
          ],
          options: [
            { letter: "A", text: "Capable of performing any intellectual task." },
            { letter: "B", text: "Surpasses human intelligence in all domains." },
            { letter: "C", text: "Designed for a specific task or range of tasks." }
          ]
        },
        {
          type: 'shortAnswer',
          title: "AI Applications",
          instruction: 'Answer the questions below. Write NO MORE THAN THREE WORDS AND/OR A NUMBER for each answer.',
          questions: [
            {
              questionNo: 42,
              text: "What type of AI system defeated a world champion in the game of Go?",
              answer: "deep learning"
            },
            {
              questionNo: 43,
              text: "In which year is AI expected to reach human-level intelligence?",
              answer: "2045"
            },
            {
              questionNo: 44,
              text: "What is the name of the AI language model developed by OpenAI?",
              answer: "GPT-3"
            }
          ]
        },
      ],
      transcript: "This is a sample transcript for Part 4 of the listening test. It would contain the full text of the audio for this section, covering topics related to artificial intelligence, its applications, ethics, and different types of AI systems."
    }
],


};
