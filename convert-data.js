const fs = require("fs");

(() => {
  try {
    const fileData = fs.readFileSync("output.json", "utf8");
    const data = JSON.parse(fileData);

    const jsonData = data.map((item) => {
      return JSON.parse(item);
    });

    fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2));
    console.log("Data has been saved to data.json");
  } catch (err) {
    console.error("Error:", err);
  }
})();
