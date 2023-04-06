function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${data.firstName}</h1>
        <p>${data.location}</p>
        <h2>Bio</h2>
        <p>${data.bio}</p>
        <h2>Contact</h2>
        <ul>
            <li>${data.linkedin}</li>
            <li>${data.github}</li>
        </ul>
    </body>
    </html>
    `;
}

module.exports = generateHTML;