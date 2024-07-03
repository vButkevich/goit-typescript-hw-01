/*
У вас є тип AllType.
Існує функція compare, яка приймає два об'єкти. 
Ці об'єкти містять поля AllType.
Ваше завдання – використовувати Pick та generics для вказівки,
 що поля цих параметрів належать AllType.
 Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeInfo = Pick<AllType, keyof AllType>;

function compare<T extends AllTypeInfo, U extends AllTypeInfo>(
  top: T,
  bottom: U
): AllType {
  console.log("top :>> ", top);
  console.log("bottom :>> ", bottom);
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log("generic:2.ts :>>---------------------------------------- ");
const a: AllType = { name: "a", position: 0 };
const b: AllType = { name: "b", color: "blue" };

console.log("compare() :>> ", compare(a, b));
