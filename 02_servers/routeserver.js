
// import http from "http"

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){

//         res.end ("this is home");
//     }
//     else if (req.url ==="/about"){

//         res.end("this is about ")
//     }
//     else if (req.url === "/service"){

//         res.end("this is service") 
//     }else if (req.url === "/help"){
//         res.end("this is help   ")
//     }else
//         res.end("request rout not found ")
// })

// const port = 1112;

// server.listen(port, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(`server running on ${port}`);
// });



// example 2 //  

// import http from "http";

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.end("Welcome to Student Website");
//     }
//     else if (req.url === "/courses") {
//         res.end("Our Courses: BCA, MCA, BBA");
//     }
//     else if (req.url === "/contact") {
//         res.end("Contact us for more information");
//     }
//     else if (req.url === "/login") {
//         res.end("Welcome to Login Page");
//     }
//     else {
//         res.end("Request route not found");
//     }

// });

// const port = 1113;

// server.listen(port, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(`server running on ${port}`);
// });


// example 3 //


import http from "http";

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Welcome to Shopping Website");
    }
    else if (req.url === "/products") {
        res.end("Here are our Products");
    }
    else if (req.url === "/cart") {
        res.end("Your Shopping Cart");
    }
    else if (req.url === "/profile") {
        res.end("Your User Profile");
    }
    else {
        res.end("Request route not found");
    }

});

const port = 1114;

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }

    console.log(`server running on ${port}`);
});

