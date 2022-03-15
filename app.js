let map = L.map("map").setView([12.227658507940783, 79.06892930849011], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([12.242074827424416, 79.05679821175589])
  .addTo(map)
  .bindPopup("This is Tiruvannamalai");
