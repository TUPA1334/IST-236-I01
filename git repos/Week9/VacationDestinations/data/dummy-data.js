import State from "../models/states";
import Campground from "../models/campgrounds";

export const STATES = [
  new State("s1", "Ireland", "#009a44"),
  new State("s2", "New Zealand", "#2521f3"),
  new State("s3", "Italy", "#4caf50"),
  new State("s4", "Greece", "#ff9800"),
  new State("s5", "Japan", "#9c27b0"),
  new State("s6", "Iceland", "#ffeb3b"),
  new State("s7", "Spain", "#03a9f4"),
  new State("s8", "Australia", "#8bc34a"),
  new State("s9", "Portugal", "#ff5722"),
  new State("s10", "Madagascar", "#002050"),
];

export const CAMPGROUNDS = [
  new Campground(
    "c1",
    "s1",
    "Hore Abbey",
    2273,
    1270,
    4.8,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/02/8f/32/hore-abbey.jpg?w=1200&h=-1&s=1"
  ),
  new Campground(
    "c2",
    "s2",
    "Auckland",
    3409,
    1350,
    4.9,
    "https://a.cdn-hotels.com/gdcs/production133/d294/4e4195aa-b9ca-42cd-923f-e8a65c8c5c7b.jpg"
  ),
  new Campground(
    "c3",
    "s3",
    "Stone Mountain Park Campground",
    40,
    1978,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipN4BCdka5-ZGpE6lhQoGvQyuyvrDYDYRTR9mDZ9=s1360-w1360-h1020"
  ),
  new Campground(
    "c4",
    "s4",
    "Kentucky Horse Park Campground",
    60,
    2001,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOBnp2waOt2jqzmSeGuNr6yw6nDAdfbB_JgTS67=s1360-w1360-h1020"
  ),
  new Campground(
    "c5",
    "s5",
    "Hidden Oaks Campground",
    25,
    1988,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipMKwVkZ66ndyrSL8HNshOPfuFIh6PC8-2OhUJaa=s1360-w1360-h1020"
  ),
  new Campground(
    "c6",
    "s6",
    "Little Black Creek Campground",
    35,
    1995,
    4.1,
    "https://lh3.googleusercontent.com/p/AF1QipMLVH4hUp3VXYReamqUsz1Ljonh76eIal4I4yZZ=s1360-w1360-h1020"
  ),
  new Campground(
    "c7",
    "s7",
    "Camp Hatteras RV Resort & Campground",
    45,
    1975,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipPl_SZNGGy5UrPSTdFEklkVUMi8YF5d3WtBKgsu=s1360-w1360-h1020"
  ),
  new Campground(
    "c8",
    "s8",
    "Table Rock State Park",
    55,
    2003,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNiyUDf100wuxMTsu3OEvAbJ188WBsoVp3FBrs=s1360-w1360-h1020"
  ),
  new Campground(
    "c9",
    "s9",
    "Fall Creek Falls State Park",
    20,
    1982,
    3.9,
    "https://lh3.googleusercontent.com/p/AF1QipOCc6Y1AUqBnXfuL3LVNNso5wCKCjsSQatGwKeq=s1360-w1360-h1020"
  ),
  new Campground(
    "c10",
    "s10",
    "Hungry Mother State Park",
    65,
    1998,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipOOqLSYYgNwxkCHrEgC6AD76Oppmkup2dUtYC_L=s1360-w1360-h1020"
  ),
  new Campground(
    "c11",
    "s1",
    "Dublin",
    2750,
    "Uknown",
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg"
  ),
  new Campground(
    "c12",
    "s2",
    "Hobbiton Set",
    175,
    2003,
    5.0,
    "https://cdn.getyourguide.com/img/tour/5c20c7a23a5b0.jpeg/145.jpg"
  ),
  new Campground(
    "c13",
    "s3",
    "Reed Bingham State Park - Campground",
    50,
    1993,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipOVLpVlPFaMs5PqZkTV1Xp4sag6DeD4a1sETsrg=s1360-w1360-h1020"
  ),
  new Campground(
    "c14",
    "s4",
    "Red River Gorge Campground",
    30,
    1981,
    4.0,
    "https://lh3.googleusercontent.com/p/AF1QipN5RttKwNWNLak8YyI-YK3iJkljMbr6dFAQF3Bk=s1360-w1360-h1020"
  ),
  new Campground(
    "c15",
    "s5",
    "Indian Creek Campground",
    45,
    1996,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipNy_bOjBzIttqJX-T_sTC6_ezMe4hmE1K1myOwG=s1360-w1360-h1020"
  ),
  new Campground(
    "c16",
    "s6",
    "Piney Grove Campground",
    55,
    2005,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020"
  ),
  new Campground(
    "c17",
    "s7",
    "Frisco Woods Campgrounds Inc",
    25,
    1989,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipPBKwR-aaXqBBJV7jZhu68yyAgi2a2K-teX3K4K=s1360-w1360-h1020"
  ),
  new Campground(
    "c18",
    "s8",
    "Huntington Beach State Park",
    60,
    1999,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipNPOTpDCJCUExeJKRS3AJIivH9awUxSQOExnuja=s1360-w1360-h1020"
  ),
  new Campground(
    "c19",
    "s9",
    "David Crockett State Park",
    30,
    1977,
    3.5,
    "https://lh3.googleusercontent.com/p/AF1QipN1UpPQNu6nZ7wgTW9WSfWmoGyKSLffNCJ8PhDg=s1360-w1360-h1020"
  ),
  new Campground(
    "c20",
    "s10",
    "Fairy Stone State Park",
    40,
    1990,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipMMC9ncqLd5gz6rK6uLVv-AM52frv20rwOi-5eM=s1360-w1360-h1020"
  ),
];
