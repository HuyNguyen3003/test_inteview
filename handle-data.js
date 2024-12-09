const fs = require("fs");

(() => {
  try {
    const fileData = fs.readFileSync("data/data.json", "utf8");
    const data = JSON.parse(fileData);

    const uniqueProtocols = new Set();

    data.forEach((item) => {
      if (item.protocol) {
        uniqueProtocols.add(item.protocol);
      }
    });

    const dataType = Array.from(uniqueProtocols).sort();
    console.log(dataType);
  } catch (err) {
    console.error("Error reading or parsing the file:", err);
  }
})();
