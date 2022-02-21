alert("Привіт! Усе в консолі.")

const  Glase = 15.678;
console.log("Скло = 15.678");

const Case = 123.965;
console.log("Чехол = 123.965");

const Charger = 90.2345;
console.log("Зарядне = 90.2345");

const minPrice = Math.min(Glase,Case,Charger);
console.log(`Мінімальна ціна: ${minPrice}`);

const maxPrice = Math.max(Glase,Case,Charger);
console.log(`Максимальна ціна : ${maxPrice}`);

const SumPrice = (Glase+Case+Charger);
console.log(`Вартість усіх товарів : ${SumPrice}`);

const minRoundPrice = Math.floor(Glase) + Math.floor(Case) + Math.floor(Charger);
console.log(`Сумма округлення в меншу сторону: ${minRoundPrice}`);

const maxRoundPrice = Math.ceil((SumPrice / 100)) * 100;
console.log(`Округлення до сотень: ${maxRoundPrice}`);

const SumProduct = minRoundPrice % 2 == 0 ? true : false;
console.log (`Сумма усіх товарів округлених в меншу сторону, парне число?: ${SumProduct}`);

const DifOfProduct = (500 - SumPrice);
console.log (`Решта при покупці усіх товарів: ${DifOfProduct}`);


const AverageValue = (SumPrice / 3).toFixed(2);
console.log (`Середня ціна округлення двох знаків після коми: ${AverageValue}`);

const discount = Math.random().toFixed(3);
console.log(`Ваша знижка складає: ${discount}%`)

const Payment = (SumPrice-discount).toFixed(2);
console.log (`Сумма до оплати: ${Payment}`);

const Profit =(SumPrice / 2);

const WithoutProfit = (Profit-discount).toFixed(2);
console.log(`Чистий прибуток:${WithoutProfit}`);
