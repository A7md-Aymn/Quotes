var quote=[
    {'quote':"Resentment is like drinking poison and waiting for your enemies to die.",
        'aothor':"--Nelson Mandela"
    },
    {
        'quote':"It's not what happens to you, but how you react to it that matters.",
        'aothor':"--Epictetus"
    },
    {
        'quote':"The best revenge is massive success.",
        'aothor':"--Frank Sinatra"
    },
    {
        'quote':"You miss 100% of the shots you don't take.",
        'aothor':"--Wayne Gretzy"
    },
    {
        'quote':"Resentment is like drinking poison and waiting for your enemies to die.",
        'aothor':"--Nelson Mandela"
    },
]

function getquotes(){

    var x=Math.floor(Math.random()*quote.length)
    console.log(x)

    document.getElementById("quote").innerHTML=quote[x].quote
    document.getElementById("author").innerHTML=quote[x].aothor
}