import { UTCDate } from "@date-fns/utc";
import { roundToNearestHours, roundToNearestMinutes } from "date-fns";

export default function TimeTest() {
  const date = new Date(Date.now());
  const pktDate = date.toString();
  const utcDate = date.toUTCString();
  console.log(date);
  console.log(pktDate);
  console.log(utcDate);

  const pktconversion = new UTCDate(date);
  console.log("pkr conversion " + pktconversion);
  console.log(roundToNearestMinutes(pktconversion, { nearestTo: 60 }));

  for (let i = 0; i < 13; i++) {
    console.log(i + " AM");
  }

  for (let i = 0; i < 13; i++) {
    console.log(i + " PM");
  }
}
