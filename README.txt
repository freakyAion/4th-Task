fetch("/api/set/create", 

{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({name: "new set", description: "this is a description"})
})
        .then(function(response){console.log(response)})
        .catch(function(response){console.log(response)})       