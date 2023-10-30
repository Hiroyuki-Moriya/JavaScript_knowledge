
//グローバル変数宣言
var textContents2="";

function ZodiacSign_Q()
{
	// 1～12の範囲の整数の乱数を作る
	// 出典
	// [【JavaScript入門】乱数の作り方(範囲指定/重複なし/ランダム文字列)](https://www.sejuku.net/blog/22432)
	var random = Math.floor( Math.random() * 12 ) + 1;
	console.log( "M.r=" + Math.random() + " random="+ random );
	console.log( "ZodiacSignsDict[" + random + "].Ryakufu=" + ZodiacSignsDict[random].Ryakufu );


	//問題と解答をセットする
	switch(random){
		case 01:
			var Ryakufu = ZodiacSignsDict[1].Ryakufu;
			var Gakumei = ZodiacSignsDict[1].Gakumei;
			var Seizamei =  ZodiacSignsDict[1].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[1].SeizameiKanji;
			var Migoro = ZodiacSignsDict[1].Migoro;
			break;
		case 02:
			var Ryakufu = ZodiacSignsDict[2].Ryakufu;
			var Gakumei = ZodiacSignsDict[2].Gakumei;
			var Seizamei =  ZodiacSignsDict[2].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[2].SeizameiKanji;
			var Migoro = ZodiacSignsDict[2].Migoro;
			break;
		case 03:
			var Ryakufu = ZodiacSignsDict[3].Ryakufu;
			var Gakumei = ZodiacSignsDict[3].Gakumei;
			var Seizamei =  ZodiacSignsDict[3].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[3].SeizameiKanji;
			var Migoro = ZodiacSignsDict[3].Migoro;
			break;
		case 04:
			var Ryakufu = ZodiacSignsDict[4].Ryakufu;
			var Gakumei = ZodiacSignsDict[4].Gakumei;
			var Seizamei =  ZodiacSignsDict[4].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[4].SeizameiKanji;
			var Migoro = ZodiacSignsDict[4].Migoro;
			break;
		case 05:
			var Ryakufu = ZodiacSignsDict[5].Ryakufu;
			var Gakumei = ZodiacSignsDict[5].Gakumei;
			var Seizamei =  ZodiacSignsDict[5].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[5].SeizameiKanji;
			var Migoro = ZodiacSignsDict[5].Migoro;
			break;
		case 06:
			var Ryakufu = ZodiacSignsDict[6].Ryakufu;
			var Gakumei = ZodiacSignsDict[6].Gakumei;
			var Seizamei =  ZodiacSignsDict[6].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[6].SeizameiKanji;
			var Migoro = ZodiacSignsDict[6].Migoro;
			break;
		case 07:
			var Ryakufu = ZodiacSignsDict[7].Ryakufu;
			var Gakumei = ZodiacSignsDict[7].Gakumei;
			var Seizamei =  ZodiacSignsDict[7].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[7].SeizameiKanji;
			var Migoro = ZodiacSignsDict[7].Migoro;
			break;
		case 08:
			var Ryakufu = ZodiacSignsDict[8].Ryakufu;
			var Gakumei = ZodiacSignsDict[8].Gakumei;
			var Seizamei =  ZodiacSignsDict[8].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[8].SeizameiKanji;
			var Migoro = ZodiacSignsDict[8].Migoro;
			break;
		case 09:
			var Ryakufu = ZodiacSignsDict[9].Ryakufu;
			var Gakumei = ZodiacSignsDict[9].Gakumei;
			var Seizamei =  ZodiacSignsDict[9].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[9].SeizameiKanji;
			var Migoro = ZodiacSignsDict[9].Migoro;
			break;
		case 10:
			var Ryakufu = ZodiacSignsDict[10].Ryakufu;
			var Gakumei = ZodiacSignsDict[10].Gakumei;
			var Seizamei =  ZodiacSignsDict[10].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[10].SeizameiKanji;
			var Migoro = ZodiacSignsDict[10].Migoro;
			break;
		case 11:
			var Ryakufu = ZodiacSignsDict[11].Ryakufu;
			var Gakumei = ZodiacSignsDict[11].Gakumei;
			var Seizamei =  ZodiacSignsDict[11].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[11].SeizameiKanji;
			var Migoro = ZodiacSignsDict[11].Migoro;
			break;
		case 12:
			var Ryakufu = ZodiacSignsDict[12].Ryakufu;
			var Gakumei = ZodiacSignsDict[12].Gakumei;
			var Seizamei =  ZodiacSignsDict[12].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[12].SeizameiKanji;
			var Migoro = ZodiacSignsDict[12].Migoro;
			break;
		default :
			var Ryakufu = ZodiacSignsDict[0].Ryakufu;
			var Gakumei = ZodiacSignsDict[0].Gakumei;
			var Seizamei =  ZodiacSignsDict[0].Seizamei;
			var SeizameiKanji = ZodiacSignsDict[0].SeizameiKanji;
			var Migoro = ZodiacSignsDict[0].Migoro;
			break;
	}

	//問題文をセット
	var textContents1 = "略符【"
						+ Ryakufu
						+"】の星座名を答えなさい<br>";
	//問題文をDOM表示
	var objtextDiv1 = document.getElementById("textDiv1");
	objtextDiv1.innerHTML=textContents1;

	//解答文（ヌル）をローカル変数にセットしてDOM表示
	textContents2 = "";
	var objtextDiv2 = document.getElementById("textDiv2");
	objtextDiv2.innerHTML=textContents2;

	//解答文をグローバル変数にセット
	textContents2 = "略符【"
					  + Ryakufu
					  + "】（学名"
					  + Gakumei
					  + "）の星座名は「"
					  + Seizamei
					  + "座」（"
					  + SeizameiKanji
					  + "座）で、見頃は"
					  + Migoro
					  + "です<br>";
	console.log("textContents2=" + textContents2);

}

function ZodiacSign_A()
{

	console.log("textContents2=" + textContents2);

	//グローバル変数の解答文をDOM表示
	var objtextDiv2 = document.getElementById("textDiv2");
	objtextDiv2.innerHTML=textContents2;

}

