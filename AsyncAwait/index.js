const url = "https://jsonplaceholder.typicode.com/todos";
async function asynFun(url) {
  try {
    const fatchData = await fetch(url);
    // console.log(fatchData);
    if (fatchData.status !== 200) {
      throw new Error("error is found");
    }
    const actualData = await fatchData.json();
    console.log(actualData);
  } catch (error) {
    console.log(error);
  }
}

asynFun(url);

function data() {
  console.log(arguments[0]);
}

data("akhlaq");
