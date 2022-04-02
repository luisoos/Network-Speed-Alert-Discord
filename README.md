# Network Speed Alert Tester to Discord Webhook
Simple program that tests the network speed and sends the value of Mbps to a Discord Webhook if it is under a defined value.


# Installation
## Clone the project
**HHTPS: `git clone https://github.com/luisoos/Network-Speed-Alert-Discord.git`**

SSH: `git@github.com:luisoos/Network-Speed-Alert-Discord.git`

GitHub CLI: `gh repo clone luisoos/Network-Speed-Alert-Discord`


## Add parameters

- Enter value of Mbps under what the program should contact you on Discord (line 10).
- Enter your token (=> see https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-) (line 26).
- Enter your Discord Webhook (line 51).


# Annotations

## Get token
Go on fast.com, open your browser devtools, go on Network tab and copy the token on the request url that looks like `https://api.fast.com/netflix/speedtest?https=true&token=<the-token>&urlCount=5`. 

_(from https://github.com/branchard/fast-speedtest-api#how-to-get-app-token-)_


## License
This project is licensed under [Apache 2.0](https://github.com/luisoos/Network-Speed-Alert-Discord/blob/main/LICENSE).
