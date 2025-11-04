import { readFile } from "node:fs";

const save = () => {
  readFile("test.json", (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
  });
};

save();
