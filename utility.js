//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU5MTE4NDc2LCJleHAiOjE2NTkxMjIwNzYsIm5iZiI6MTY1OTExODQ3NiwianRpIjoiTFJuWXZ5cnNGNVZ2ZU1ZcSIsInN1YiI6ODQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v3OoAPNHoXpMlQRq3hWjueZfmUml3bmtC_FB0oQ_rVw"; // put access token
const student = {
  name: 'Ratchaneekorn Sunnongnok', // replace with your full name.
  age: 21, // put your age.
  gender: 'Female', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}