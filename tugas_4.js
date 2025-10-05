// Simulasi data cuaca
const weatherData = {
  "Jakarta": {
    temperature: 30,
    condition: "Cerah"
  },
  "Bandung": {
    temperature: 25,
    condition: "Hujan Ringan"
  },
  "Surabaya": {
    temperature: 33,
    condition: "Panas Terik"
  },
  "Samarinda": {
    temperature: 28,
    condition: "Mendung"
  }
};

// Menangani klik tombol
document.getElementById("showWeather").addEventListener("click", function() {
  const city = document.getElementById("cityInput").value;
  
  if (weatherData[city]) {
    const data = weatherData[city];
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  } else {
    console.log(`Data cuaca untuk kota "${city}" tidak ditemukan.`);
  }
});
