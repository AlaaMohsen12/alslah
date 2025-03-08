// const { default: axios } = require("axios");

function openCitys() {
  let city = document.getElementById("city");
  city.addEventListener("click", function () {
    let citys = document.querySelector(".cityss");
    citys.classList.toggle("citysOpened");
  });
}
openCitys();

function clcikedcity() {
  let selectItme = document.querySelectorAll(".cityss li");
  selectItme.forEach((e) => {
    e.addEventListener("click", () => {
      selectItme.forEach((e) => {
        e.classList.remove("clicked");
      });
      e.classList.add("clicked");
    });
    zoneChanged();
  });
}
clcikedcity();
function zoneChanged() {
  let zone = document.getElementById("zone");
  let cairo = document.getElementById("cairo");
  let qlyob = document.getElementById("qlyob");
  let giza = document.getElementById("giza");
  let one = document.querySelector(".cityssO");
  let two = document.querySelector(".citysstr");
  let three = document.querySelector(".citysst");

  cairo.addEventListener("click", function () {
    two.classList.remove("openQleob");
    three.classList.remove("openGiza");
    one.classList.add("openCiro");
  });

  qlyob.addEventListener("click", function () {
    one.classList.remove("openCiro");
    three.classList.remove("openGiza");
    two.classList.add("openQleob");
  });

  giza.addEventListener("click", function () {
    one.classList.remove("openCiro");
    two.classList.remove("openQleob");
    three.classList.add("openGiza");
  });

  zone.addEventListener("click", function () {
    if (cairo.classList.contains("clicked")) {
      one.classList.toggle("openCiro");
    } else if (qlyob.classList.contains("clicked")) {
      two.classList.toggle("openQleob");
    } else if (giza.classList.contains("clicked")) {
      three.classList.toggle("openGiza");
    }
  });
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
async function dateChanged() {
  let dayname = document.getElementById("dayname");
  let days = document.getElementById("day");
  try {
    let res = await axios.get(
      "https://api.aladhan.com/v1/timingsByCity?city=EG&country=El Zawya El Hamra"
    );
    if (res.status >= 200 || res.status <= 299) {
      days.innerHTML = res.data.data.date.gregorian.day;
      dayname.innerHTML = res.data.data.date.hijri.weekday.ar;
    }
  } catch (e) {
    days.innerHTML = "حدث خطأ";
  }
}
dateChanged();

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clicedZone() {
  let Zoneone = document.querySelectorAll(".cityssO li");
  let Zonetow = document.querySelectorAll(".citysst li");
  let Zonethree = document.querySelectorAll(".citysstr li");
  Zoneone.forEach((e) => {
    e.addEventListener("click", function () {
      Zoneone.forEach((e) => {
        e.classList.remove("clicked");
      });
      e.classList.add("clicked");
    });
  });

  Zonetow.forEach((zone) => {
    zone.addEventListener("click", function () {
      Zonetow.forEach((zone) => {
        zone.classList.remove("clicked");
      });
      zone.classList.add("clicked");
    });
  });

  Zonethree.forEach((zone) => {
    zone.addEventListener("click", function () {
      Zonethree.forEach((zone) => {
        zone.classList.remove("clicked");
      });
      zone.classList.add("clicked");
    });
  });
}
clicedZone();

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// وقت الزاويه
function dataChanged() {
  let alzwya = document.getElementById("alzwya");
  alzwya.addEventListener("click", getDATES);
  async function getDATES() {
    let itme = document.querySelectorAll(".cont div .itme");
    try {
      let res = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=EG&country=El Zawya El Hamra"
      );

      let itmes = Object.values(res.data.data.timings);
      itmes.splice(1, 1);
      itmes.splice(4, 1);
      itmes.splice(5, 1);

      itme.forEach((e, index) => {
        if (itmes[index]) {
          e.innerHTML = convertTo12Hour(itmes[index]);
          sound();
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}
dataChanged();

// وقت السيده
function changeData() {
  let sydaa = document.getElementById("sydaa");
  let data = document.querySelectorAll(".cont div .itme");
  sydaa.addEventListener("click", getData);

  async function getData() {
    try {
      let re = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=EG&country=El Sayeda Zeinab"
      );
      let itmes = Object.values(re.data.data.timings);

      itmes.splice(1, 1);
      itmes.splice(4, 1);
      itmes.splice(5, 1);

      data.forEach((e, i) => {
        if (itmes[i]) {
          e.innerHTML = convertTo12Hour(itmes[i]);
          sound();
        }
      });
    } catch (err) {}
  }
}

changeData();

// وقت شبرا مصر

function datdShbra() {
  let shobra = document.getElementById("shobra");
  let data = document.querySelectorAll(".cont div .itme");
  shobra.addEventListener("click", getData);

  async function getData() {
    try {
      let re = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=EG&country=El Sahel"
      );
      let itmes = Object.values(re.data.data.timings);

      itmes.splice(1, 1);
      itmes.splice(4, 1);
      itmes.splice(5, 1);

      data.forEach((e, i) => {
        if (itmes[i]) {
          e.innerHTML = convertTo12Hour(itmes[i]);
          sound();
        }
      });
    } catch (err) {}
  }
}

datdShbra();
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function galyob() {
  let galyobs = document.getElementById("qalyob");
  let data = document.querySelectorAll(".cont div .itme");
  galyobs.addEventListener("click", getData);
  async function getData() {
    try {
      let re = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=EG&country=Shubra"
      );
      let itmes = Object.values(re.data.data.timings);

      itmes.splice(1, 1);
      itmes.splice(4, 1);
      itmes.splice(5, 1);

      data.forEach((e, i) => {
        if (itmes[i]) {
          e.innerHTML = convertTo12Hour(itmes[i]);
          sound();
        }
      });
    } catch (err) {}
  }
}
galyob();
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function giza() {
  let fasel = document.getElementById("fasle");
  let data = document.querySelectorAll(".cont div .itme");
  fasel.addEventListener("click", getData);
  async function getData() {
    try {
      let re = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=EG&country=Bulaq"
      );
      let itmes = Object.values(re.data.data.timings);

      itmes.splice(1, 1);
      itmes.splice(4, 1);
      itmes.splice(5, 1);

      data.forEach((e, i) => {
        if (itmes[i]) {
          e.innerHTML = convertTo12Hour(itmes[i]);
          sound();
        } else {
          throw "we had problems";
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}
giza();
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function convertTo12Hour(time) {
  let [hours, minutes] = time.split(":").map(Number); // تقسيم الوقت وتحويله إلى أرقام
  let ap = hours >= 12 ? "مساءآ" : "صباحا";
  hours = hours % 12 || 12; // تحويل 0 أو 12 إلى 12، وباقي الأرقام إلى 12 ساعة
  return `${ap}  ${hours}:${minutes} `; // إرجاع التوقيت بصيغة 12 ساعة
}
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function sound() {
  let soun = document.querySelector(".azan");
  soun.src = "https://ia800908.us.archive.org/12/items/90---azan---90---azan--many----sound----mp3---alazan/019--1.mp3";
}
