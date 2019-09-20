//get_jsonを適宜整形してください

var get_id;
var get_json;

try{
  fetch("http://"+"His IP Address"+ ":8080/get/one", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "id": get_id,
        })
    }).then(response => response.json())
    .then(text => {
      get_json = text;
    });
}catch(e){
  console.log(e)
}