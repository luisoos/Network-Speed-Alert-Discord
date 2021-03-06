# Network Speed Alert Tester to Discord Webhook
Simple Node.js program that tests the network speed and sends the value of Mbps to a Discord Webhook if it is under a defined value.

[![CodeQL Analysis](https://github.com/luisoos/Network-Speed-Alert-Discord/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/luisoos/Network-Speed-Alert-Discord/actions/workflows/codeql-analysis.yml)

<img src="https://user-images.githubusercontent.com/81855420/161384170-18c27fa7-19fd-4699-bae7-2483a9d9e894.png" alt="Discord Webhook message Β»Your network speed is currently at: 981 Mbps.Β«"> 

---

# Index
- [π₯ Installation](#-installation)

  `1.` [π Cloning the project](#-cloning-the-project)
  
  `2.` [π·οΈ Add parameters](#%EF%B8%8F-add-parameters)
  
- [π Annotations](#-annotations)

  `1.` [π Get token](#-get-token)
  
  `2.` [π¦ Used packages & Copyright notes](#-used-packages--copyright-notes)
  
  `3.` [π License](#-license)

<br>

# π₯Installation

Note: You need [Node.js](https://nodejs.org/) installed, since the program is using it. 

## π Cloning the project
**HTTPS: `git clone https://github.com/luisoos/Network-Speed-Alert-Discord.git`**

SSH: `git@github.com:luisoos/Network-Speed-Alert-Discord.git`

GitHub CLI: `gh repo clone luisoos/Network-Speed-Alert-Discord`


## π·οΈ Add parameters

- Enter value of Mbps under what the program should contact you on Discord (line 10).
- Enter your token (β see <a href="#get-token">"Get token"</a>) (line 26).
- Enter your Discord Webhook (line 51).

<br>

# π Annotations

## π Get token
Go to [fast.com](https://fast.com), open your browser DevTools, go on the `Network` tab and copy the token on the request URL that looks like `https://api.fast.com/netflix/speedtest?https=true&token=<the-token>&urlCount=5`. You may be able to filter all requests - search for `netflix` there.

_(from [branchard/fast-speedtest-api](https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-))_


## π¦ Used packages & Copyright notes
**[fast-speedtest-api](https://www.npmjs.com/package/fast-speedtest-api)**
  - π± GitHub:    [branchard/fast-speedtest-api](https://github.com/branchard/fast-speedtest-api/)
  - Β© Copyright:  [github.com/branchard](https://github.com/branchard)
  - π License:   `GNU General Public License v3.0`

<br>

**[Discord-Webhook-Node](https://www.npmjs.com/package/discord-webhook-node)** 
  - π± GitHub:    [matthew1232/discord-webhook-node](https://github.com/matthew1232/discord-webhook-node)
  - Β© Copyright:  [github.com/matthew1232](https://github.com/matthew1232)
  - π License:   `MIT`


## π License
This project is licensed under [GNU General Public License v3.0](https://github.com/luisoos/Network-Speed-Alert-Discord/blob/main/LICENSE).
