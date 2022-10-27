const d = document,
  $main = d.querySelector("main");

const getHTML = (options) => {
  let { url, sucess, error } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let html = xhr.responseText;
      sucess(html);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
  xhr.send();
};

d.addEventListener("DOMContentLoaded", (e) => {
  getHTML({
    url: "assets/home.html",
    sucess: (html) => ($main.innerHTML = html),
    error: (err) => {
      $main.innerHTML = `<h1>${err}</h1>`;
    },
  });
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".menu a")) {
    e.preventDefault();
    getHTML({
      url: e.target.href,
      sucess: (html) => ($main.innerHTML = html),
      error: (err) => {
        $main.innerHTML = `<h1>${err}</h1>`;
      },
    });
  }
});
