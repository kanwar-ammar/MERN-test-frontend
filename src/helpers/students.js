import axios from "axios";
const host = "http://localhost:4000/api/";

async function getTopfive() {
  await axios.get(`${host}student/topfive`).then(async function (res) {
    console.log(res.data.data);
    return res;
  });
}

export default getTopfive;
