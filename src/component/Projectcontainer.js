import React, { useEffect, useState } from "react";
import Card, { CardDefault } from "./Card";
import Swal from 'sweetalert2';
import moment from "moment/moment";
import "moment/locale/ar-dz"; // استيراد ملف اللغة العربية
export default function Projectcontainer() {
  const [data, setdata] = useState([]);
  const [city, setcity] = useState("الاسكندرية");
  const [cityValue, setcityValue] = useState("Alexandria");
  const [time, settime] = useState(null);
  const [nextSala, setnextSala] = useState(null);
  moment.locale("ar-dz");
  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity/03-03-2024?city=%D9%90${cityValue}&country=Egypr&method=8`
    )
      .then((res) => res.json())
      .then((data) => setdata(data.data.timings));
  }, [cityValue]);

  const chooseCity = {
    city: "الاسكندرية",
    value: "Alexandria",
  };
  useEffect(() => {
    const inter = setInterval(() => {
      const timeNow = moment().format("HH:mm:ss");
      settime(timeNow);
    }, 1000);
    return () => clearInterval(inter);
  });
  useEffect(() => {
    Swal.fire({
      title: "ملحوظة",
      text: "اهلا صديقي العزيز , اسمي محمد حنفي و ده احد اعمالي لعلها تكون صدقة جارية لي  بعد موتي و الله اعلم , اتمني ان تقوم بالدعاء لي بالتوفيق و الهدايا في كل مرة تتذكرني فيها أو تدخل احد اعمالي",
      icon: "warning"
    });
  },[]);
  const Fajr = moment(data.Fajr, "hh:mm");
  const Dhuhr = moment(data.Dhuhr, "hh:mm");
  const Asr = moment(data.Asr, "hh:mm");
  const Maghrib = moment(data.Maghrib, "hh:mm");
  const Isha = moment(data.Isha, "hh:mm");
  useEffect(() => {
    const checkNextSala = setInterval(() => {
      if (moment().isAfter(Fajr) && moment().isBefore(Dhuhr)) {
        setnextSala("الظهر");
      } else if (moment().isAfter(Dhuhr) && moment().isBefore(Asr)) {
        setnextSala("العصر");
      } else if (moment().isAfter(Asr) && moment().isBefore(Maghrib)) {
        setnextSala("المغرب");
      } else if (moment().isAfter(Maghrib) && moment().isBefore(Isha)) {
        setnextSala("العشاء");
      } else {
        setnextSala("الفجر");
      }
    }, 1000);
    return () => clearInterval(checkNextSala);
  }, []);
  return (
    <div className="Projectcontainer w-[100vw] h-[100vh]">
      <div className="text-white font-bold flex justify-evenly flex-wrap">
        <h1 className="text-[30px] mt-20 w-[280px]">
          الصلاة التالية : {nextSala}
        </h1>
        <h1 className="text-[30px] mt-20 w-[250px]">{time}</h1>
        <h1 className="text-[30px] mt-20 w-[250px]">
          {moment().format("MMM | Do | YY")}
        </h1>
      </div>
      <div className="text-white font-bold flex justify-evenly flex-wrap">
        <form className="max-w-sm w-[250px] mt-10">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              const cityname =
                e.target.value === "Alexandria"
                  ? (chooseCity.city = "الاسكندرية")
                  : (chooseCity.city = "القاهرة");

              setcity(cityname);
              setcityValue(e.target.value);
              console.log(cityValue);
            }}
          >
            <option value="Alexandria">الاسكندرية</option>
            <option value="Cairo">القاهرة</option>
          </select>
        </form>
        <h1 className="text-[30px] w-[250px] mt-20">{city}</h1>
      </div>
      <div className="Card flex justify-evenly flex-wrap gap-5 mt-32">
        <Card
          time={data.Fajr}
          name="الفجر"
          image={require("../img/_0350927d-7fda-441e-9c11-e4f4947f915c.jpeg")}
        />
        <Card
          time={data.Dhuhr}
          name="الظهر"
          image={require("../img/_16507fa3-8e68-4918-b0ea-c85f7b00e8b4.jpeg")}
        />
        <Card
          time={data.Asr}
          name="العصر"
          image={require("../img/_5005c191-07aa-489e-b47f-635a1ae1c664.jpeg")}
        />
        <Card
          time={data.Maghrib}
          name="المغرب"
          image={require("../img/_b7a97450-b59e-443d-a45e-a9630eabf713.jpeg")}
        />
        <Card
          time={data.Isha}
          name="العشاء"
          image={require("../img/_5601b845-b65a-4092-8d58-eb7b9cddf0c0.jpeg")}
        />
      </div>
    </div>
  );
}
