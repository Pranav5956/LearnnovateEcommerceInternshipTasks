const addCountriesToSelect = () => {
  fetch("./js/countries.json")
    .then((res) => res.json())
    .then((countries) => {
      for (let country in countries) {
        let option = new Option(
          `${countries[country]["country"]} (${countries[country]["region"]})`,
          country
        );
        selectcountry.append(option);
      }
    })
    .catch((err) => {
      let option = new Option(
        "Failed to load resource. Refresh the page and try again!"
      );
      option.hidden = true;
      selectcountry.append(option);
    });
};

const onFileUpload = (event) => {
  if (event.target.files.length > 0) {
    event.target.nextElementSibling.innerHTML = `
      <div class="loader"><span class="spinner-border spinner-border-sm" role="status"></span> Uploading</div>
    `;

    setTimeout(
      (target, text) => (target.innerHTML = text),
      2500,
      event.target.nextElementSibling,
      event.target.files[0].name
    );
  } else {
    event.target.nextElementSibling.innerHTML = "Add your CV";
  }
};

window.onload = function () {
  addCountriesToSelect();
};
