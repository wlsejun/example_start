const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
const naver = new URL(string);

console.log('모든키 가져오기:', naver.searchParams.keys());
console.log('모든값 가져오기:', naver.searchParams.values());
naver.searchParams.delete('sm');
console.log('sm키 제거:', naver.searchParams.keys());