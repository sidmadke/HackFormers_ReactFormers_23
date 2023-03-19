const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

exports.run=async(req,res)=>{
    console.log(req.body)
    const {weight,gainloose,time}=req.body
    const prompt= `i am ${weight} kg and want to ${gainloose} weight and can give ${time} for workout suggest me sample workout plan and indian veg diet plan. Return response in the following parsable json format
    {
      "Workout_Plan":[
            "Monday":[
                "Bench Press-3 sets of 8-12 reps",
                "Squats-3 sets of 8-12 reps"
            ],
            "Tuesday":[
                "Bench Press-3 sets of 8-12 reps",
                "Squats-3 sets of 8-12 reps"
            ],
            "Wednesday":[
              "Bench Press-3 sets of 8-12 reps",
              "Squats-3 sets of 8-12 reps"
            ],
            "Thursday":[
                "Bench Press-3 sets of 8-12 reps",
                "Squats-3 sets of 8-12 reps"
              ],
            "Friday":[
                "Bench Press-3 sets of 8-12 reps",
                "Squats-3 sets of 8-12 reps"
              ],
            "Saturday":[
                "Bench Press-3 sets of 8-12 reps",
                "Squats-3 sets of 8-12 reps"
              ],
            "Sunday":[
                "Bench Press-3 sets of 8-12 reps",
                "Squats-3 sets of 8-12 reps"
              ]
      
        ],
        "Diet_Plan":
            "Breakfast":[
                "Oatmeal with banana and nuts",
                "Scrambled eggs with vegetables"
            ],
            "Lunch":[
                "Oatmeal with banana and nuts",
                "Scrambled eggs with vegetables"
            ],
            "Snacks":[
                "Oatmeal with banana and nuts",
                "Scrambled eggs with vegetables"
            ],
            "Dinner":[
                "Oatmeal with banana and nuts",
                "Scrambled eggs with vegetables"
            ]
        ]
    }
    `;
    const response=await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens:2048,
        temperature:1
    })
    const jsondata=response.data.choices[0].text;
    if(jsondata){
        return res.status(200).json({jsondata});
    }
    console.log(jsondata);
    console.log(typeof(jsondata));

    const finaldata=JSON.parse(jsondata)

    const category=finaldata.Workout_Plan;
    console.log(category.Monday);
}
