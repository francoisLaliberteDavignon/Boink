"use strict"

const express = require('express')
const morgan = require("morgan");
const port = 8080;


const { handlers } = require('./handlers')

express()

    .use(morgan('tiny'))
    .use(express.json())

    .get("*", (req, res) => {
        res.status(404).json({
          status: 404,
          message: "This is obviously not what you are looking for.",
        });
      })

      .listen(port, () => console.log(`Listening on port ${port}`));
    