# Network Speed Alert Tester to Discord Webhook
Simple program that tests the network speed and sends the value of Mbps to a Discord Webhook if it is under a defined value.

<img src="https://user-images.githubusercontent.com/81855420/161382704-552c487f-e6eb-46cc-be8a-d69b46d4d105.png" alt="Discord Webhook message »Your network speed is currently at: 981 Mbps.«"> 

<br>

# Installation
## Clone the project
**HHTPS: `git clone https://github.com/luisoos/Network-Speed-Alert-Discord.git`**

SSH: `git@github.com:luisoos/Network-Speed-Alert-Discord.git`

GitHub CLI: `gh repo clone luisoos/Network-Speed-Alert-Discord`


## Add parameters

- Enter value of Mbps under what the program should contact you on Discord (line 10).
- Enter your token (→ see <a href="#get-token">"Get token"</a>) (line 26).
- Enter your Discord Webhook (line 51).

<br>

# Annotations

## Get token
Go on fast.com, open your browser devtools, go on Network tab and copy the token on the request url that looks like `https://api.fast.com/netflix/speedtest?https=true&token=<the-token>&urlCount=5`. 

_(from [branchard/fast-speedtest-api](https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-))_


## Used packages
**[fast-speedtest-api](https://www.npmjs.com/package/fast-speedtest-api)**
  - GitHub: [branchard/fast-speedtest-api](https://github.com/branchard/fast-speedtest-api/)
  - © [github.com/branchard](https://github.com/branchard)
  - License: `GNU General Public License v3.0`

<br>

**[Discord-Webhook-Node](https://www.npmjs.com/package/discord-webhook-node)** 
  - GitHub: [matthew1232/discord-webhook-node](https://github.com/matthew1232/discord-webhook-node)
  - © [github.com/matthew1232](https://github.com/matthew1232)
  - License: `MIT`


## License
This project is licensed under [GNU General Public License v3.0](https://github.com/luisoos/Network-Speed-Alert-Discord/blob/main/LICENSE).
