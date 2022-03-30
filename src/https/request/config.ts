
export default class Base {
    static BASE_URL = process.env.NODE_ENV === "development"
        ? "https://mock.mengxuegu.com/mock/606f08eeb43557571f7269a4"
        : "https://produceCommon.com(生产线地址)"
    static TIME_OUT = 10000;
}