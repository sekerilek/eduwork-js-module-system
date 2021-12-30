import Tabel from "./module.js";

const table = new Tabel({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Wildan", "wildan@gmail.com", "(62) 123456"]
  ]
});
const app = document.getElementById("app");
table.render(app);
