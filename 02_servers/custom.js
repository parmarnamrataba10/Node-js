
// import http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text / html" });
//   res.end("<h1>hello from custom server</h1>");
// });

// const port = 5000;

// server.listen(port, (err) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log("server running on 5000 ");
// });


// example -2 //

// import http from "http";

// const server= http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });

//     res.end(`
//         <html>
//             <body style="background-color: lightblue;">
//                 <h1 style="color: blue;">Hello Student</h1>
//                 <p>Learning Node.js HTTP module</p>
//             </body>
//         </html>
//     `);
// });

// const port = 3110;

// server.listen(port, (err) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log("server running on 3110");
// });


// example -3 //

import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });

    res.end(`
        <html>
            <body style="background-color: lightyellow; text-align: center;">
                <h1 style="color: green;">Student Registration</h1>

                <h2>Welcome Student!</h2>

                <p>Name: Namrata</p>
                <p>Course: BCA</p>
                <p>Semester: 5</p>

                <button style="background-color: green; color: white; padding: 10px;">
                    Register Now
                </button>
            </body>
        </html>
    `);
});

const port = 5002;

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }

    console.log("server running on 5002");
});