require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(`${ process.env.STRIPE_SECRET_KEY }`);

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("/ route working :)");
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    
    res.status(201).json({
        clientSecret: paymentIntent.client_secret
    });
})

exports.api = functions.https.onRequest(app)