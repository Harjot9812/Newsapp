//rfc funtion compnet
//rcc class compnent

import React from "react";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";

export default function Home() {
  const articlepages = {
    articles1: [
      {
        source: {
          id: "the-wall-street-journal",
          name: "The Wall Street Journal",
        },
        author: "Nick Timiraos",
        title:
          "Fed's Interest Rate Hikes Are Probably Over, but Officials Are Reluctant to Say So - The Wall Street Journal",
        description:
          "Chair Jerome Powell warns against prematurely declaring victory on inflation",
        url: "https://www.wsj.com/economy/central-banking/fed-interest-rate-hikes-b19c2ab2",
        urlToImage: "https://images.wsj.net/im-894067/social",
        publishedAt: "2023-12-01T16:00:00Z",
        content: null,
      },

      {
        source: {
          id: "axios",
          name: "Axios",
        },
        author: "Axios",
        title: "The richer you are the more money you need to be happy - Axios",
        description: null,
        url: "https://www.axios.com/2023/12/01/money-needed-to-be-happy-wealth",
        urlToImage: "https://ychef.files.bbci.co.uk/624x351/p0gwwt7d.jpg",
        publishedAt: "2023-12-01T12:33:47Z",
        content: null,
      },
      {
        source: {
          id: "abc-news",
          name: "ABC News",
        },
        author: "Elizabeth Schulze",
        title:
          "Google begins process of deleting inactive Gmail accounts - ABC News",
        description:
          "Google announced the move in May to protect users from security threats.",
        url: "https://abcnews.go.com/Business/google-begins-process-deleting-inactive-gmail-accounts/story?id=105281283",
        urlToImage:
          "https://i.abcnewsfe.com/a/e7ac58fd-de89-4fe9-9b24-696283a9133f/google-gmail-gty-thg-231130_1701373644681_hpMain_16x9.jpg?w=992",
        publishedAt: "2023-12-01T12:33:45Z",
        content:
          "Old Gmail accounts could be deleted as soon as today, according to Google.\r\nGoogle will begin purging accounts that have not been used or signed into for at least two years. That means emails, Google… [+1080 chars]",
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: "Megan Carnegie and Leah Carroll",
        title:
          "Why Americans' 'YOLO' spending spree baffles economists - BBC.com",
        description:
          "Despite past trends, US consumers are spending at record levels. Economists are mystified – and grappling to forecast an end point.",
        url: "https://www.bbc.com/worklife/article/20231130-why-americans-yolo-spending-attitude-baffles-economists",
        urlToImage: "https://ychef.files.bbci.co.uk/624x351/p0gwwt7d.jpg",
        publishedAt: "2023-12-01T12:00:00Z",
        content:
          "By Megan Carnegie and Leah CarrollFeatures correspondent\r\nAmericans feel pessimistic about the economy yet they're spending in spades (Credit: Getty Images)\r\nDespite past trends, US consumers are spe… [+6767 chars]",
      },
      {
        source: {
          id: null,
          name: "Miami Herald",
        },
        author: "Miami Herald",
        title:
          "Woman wins millions on Massachusetts scratch-off, hides ticket and goes on vacation - Miami Herald",
        description: null,
        url: "https://www.miamiherald.com/news/nation-world/national/article282627088.html",
        urlToImage: null,
        publishedAt: "2023-12-03T20:50:15Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "New York Post",
        },
        author: "Jesse O’Neill",
        title:
          "IRS penalty for underpayments soars to 8% -- nearly triple what it was 2 years ago - New York Post ",
        description:
          "The IRS penalty for estimated tax underpayments has nearly tripled since 2021, which means gig economy workers and consultants could now have to cough up big bucks to Uncle Sam if they don’t …",
        url: "https://nypost.com/2023/12/03/news/irs-underpayment-penalty-soars-to-8/",
        urlToImage:
          "https://nypost.com/wp-content/uploads/sites/2/2023/12/website-magnifying-glass-laptop-irs-73202532.jpg?quality=75&strip=all&w=1024",
        publishedAt: "2023-12-03T19:08:00Z",
        content:
          "The Internal Revenue Service penalty for tax underpayments has nearly tripled since 2021, putting gig economy workers and consultants at the largest risk of having to cough up big bucks to Uncle Sam.… [+2118 chars]",
      },
      {
        source: {
          id: null,
          name: "Fox Business",
        },
        author: "Eric Revell",
        title:
          "Boeing eliminated from Air Force's 'Doomsday Plane' competition - Fox Business",
        description:
          'Boeing has been eliminated from the U.S. Air Force\'s Survivable Airborne Operations Center competition to replace the E-4B Nightwatch with a next-generation "Doomsday plane."',
        url: "https://www.foxbusiness.com/markets/boeing-eliminated-from-air-forces-doomsday-plane-competition",
        urlToImage:
          "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/12/0/0/Boeing-E4B-3765460.jpg?ve=1&tl=1",
        publishedAt: "2023-12-03T19:07:00Z",
        content:
          'Boeing is no longer in the running to deliver the U.S. Air Force’s successor to the E-4B Nightwatch as the service looks to select its next-generation "Doomsday plane."\r\nBoeing on Friday announced it… [+4174 chars]',
      },
      {
        source: {
          id: "buzzfeed",
          name: "Buzzfeed",
        },
        author: "Melanie Aman",
        title:
          "Just 37 Fabulous Gifts For Anyone Who Likes Cool Stuff - BuzzFeed",
        description:
          "Please skip this list if you were planning to get them something boring.",
        url: "https://www.buzzfeed.com/melanie_aman/cool-gift-ideas",
        urlToImage:
          "https://img.buzzfeed.com/buzzfeed-static/static/2023-11/23/17/enhanced/5c4e887dc256/original-1352-1700761736-8.jpg?crop=1581:830;0,0%26downsize=1250:*",
        publishedAt: "2023-12-03T19:01:04Z",
        content:
          'My colleague Emma Lord bought these and loves them. In her own words:\r\n"I bought these for myself, and I love them to pieces. TBH, I use them as decor every bit as much as I use them to eat. Sometime… [+842 chars]',
      },
    ],
    articles2: [
      {
        source: {
          id: null,
          name: "Cointelegraph",
        },
        author: "Rakesh Upadhyay",
        title:
          "Bitcoin price surge toward $40K boosts sentiment in KAS, RUNE, MNT and RNDR - Cointelegraph",
        description:
          "Bitcoin price continues to chase after $40,000. Will KAS, RUNE, MNT and RNDR attempt to follow?",
        url: "https://cointelegraph.com/news/bitcoin-price-surge-toward-40k-boosts-sentiment-in-kas-rune-mnt-and-rndr",
        urlToImage:
          "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-12/75a8a16e-8805-4c15-a6c6-0d273b1bcc20.jpg",
        publishedAt: "2023-12-03T17:35:57Z",
        content:
          "Bitcoin (BTC) finally broke above the formidable resistance of $38,000 in the past week and marched closer to $40,000. This move shows that Bitcoins trajectory remains up. The bulls will try to maint… [+7922 chars]",
      },
      {
        source: {
          id: null,
          name: "Airlive.net",
        },
        author: "AIRLIVE",
        title:
          "Snow is currently falling over Amsterdam Schiphol, some flights are cancelled - AIRLIVE",
        description:
          "Amsterdam Schiphol Airport has cancelled nearly 150 flights due to snow over the weekend. Arrivals are currently regulated at Amsterdam Schiphol due to snow. Visibility is slowly decreasing from 5 km. High delays are expected for the rest of the day. You can …",
        url: "https://airlive.net/news/2023/12/03/snow-is-currently-falling-over-amsterdam-schiphol-some-flights-are-cancelled/",
        urlToImage:
          "https://airlive.net/wp-content/uploads/2023/12/Snow-is-currently-falling-over-Amsterdam-Schiphol-150-flights-are-cancelled2.jpg",
        publishedAt: "2023-12-03T17:34:50Z",
        content:
          "Arrivals are currently regulated at Amsterdam Schiphol due to snow.\r\nVisibility is slowly decreasing from 5 km.\r\nHigh delays are expected for the rest of the day.\r\nYou can watch Amsterdam Schiphol Ai… [+46 chars]",
      },
    ],
  };

  async function componentDidMount() {
    let url = "http://";
    //let data = await fetch(url);
    //let articles = await data.json;
  }

  const [pagenumber, setpage] = useState(1);
  const currentArticles = articlepages[`articles${pagenumber}`];
  return (
    <>
      <div className="container my-3">
        <h1>Top Headlines</h1>
        <div className="row">
          {currentArticles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  des={element.description}
                  title={element.title}
                  imgurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <button
          disabled={pagenumber <= 1}
          type="button"
          class="btn btn-dark"
          onClick={() => {
            setpage(pagenumber - 1);
          }}
        >
          Previous
        </button>
        <p></p>
        <button
          disabled={pagenumber >= 2}
          type="button"
          class="btn btn-dark"
          onClick={() => {
            setpage(pagenumber + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}
