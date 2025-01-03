import { NextResponse } from "next/server";
const Mixpanel = require("mixpanel");
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);

exports.handler = async function (event: any, context: any) {
  const data = JSON.parse(event.body);
  try {
    const { event: eventName, properties } = data;

    mixpanel.track(eventName, properties);

    return {
      statusCode: 200,
      body: JSON.stringify({ status: "Event tracked successfully" }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};