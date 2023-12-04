const api_url =
  "https://thingspeak.com/channels/2366767/feeds.json?api_key=HWT0UZPE2RH4TTD5&results=1";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("field-1").innerHTML = obj.field1;
      document.getElementById("field-2").innerHTML = obj.field2;
      document.getElementById("field-3").innerHTML = obj.field2;
    });
}, 1000);
