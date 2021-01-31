const path =  "/users/download/index.html";

const isHtml = (path) => {
    const neededExt = ".html";

    const realExt = path.slice(-5);

    return realExt === neededExt;

}

console.log(isHtml(path));