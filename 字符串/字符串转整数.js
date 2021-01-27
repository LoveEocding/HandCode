var myAtoi = function (s) {
    const regexp = /\-?[1-9]+([\d]+)/g;
    const result = regexp.exec(s)[0];
    const flag = result.includes('-') ? -1 : 1;
    return Math.abs(Number.parseInt(result)) > Number.MAX_VALUE ? flag * Number.MAX_VALUE : Number.parseInt(result);
};
console.log(myAtoi('fdsfds-003200005555555555555555555555555555555555555555555555555555555555233fsdfsdf432432'));