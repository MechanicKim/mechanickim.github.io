interface IURLMap {
  [key: string]: string | URL;
};

const urlMap: IURLMap = {
  google: "https://google.com",
};

export function redirectTo(key: string) {
  const url = urlMap[key];
  if (url) {
    window.location.replace(url);
    return;
  }
  alert("no url");
}
