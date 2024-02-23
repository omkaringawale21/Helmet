const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");

app.get("/blog-a", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.concat(`<title>Blog A</title>`);
    data = data.concat(
      `<meta name="description" content="Description for Tutorial for React Helmet Blog A" data-react-helmet="true">`
    );
    data = data.concat(
      `<link rel="icon" type="image/x-icon" href="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta property="og:image" content="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" data-react-helmet="true">`
    );
    data = data.concat(
      `<link href="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" title="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" data-react-helmet="true">`
    );
    data = data.concat(
      `<link href="/blog-b" title="/blog-b" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta name="description" content="Description for Tutorial for React Helmet Blog A" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta name="og:description" content="Beautiful Nature" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta name="og:description" content="Explore Now" data-react-helmet="true">`
    );

    // console.log("data", data);
    response.send(data);
  });
});

app.get("/blog-b", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.concat(`<title>Blog B</title>`);
    data = data.concat(
      `<meta name="description" content="Description for Tutorial for React Helmet Blog B" data-react-helmet="true">`
    );
    data = data.concat(
      `<link rel="icon" type="image/x-icon" href="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta property="og:image" content="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" data-react-helmet="true">`
    );
    data = data.concat(
      `<link href="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" title="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D" data-react-helmet="true">`
    );
    data = data.concat(
      `<link href="/blog-a" title="/blog-a" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta name="description" content="Description for Tutorial for React Helmet Blog B" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta name="og:description" content="Childhood Memories" data-react-helmet="true">`
    );
    data = data.concat(
      `<meta name="og:description" content="Visit It" data-react-helmet="true">`
    );

    //   console.log("data", data);
    response.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => {
  // console.log(`Listening on port ${port}`);
});
