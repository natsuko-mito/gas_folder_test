function myFunction() {
  // テストファイル
  var testStr = "あああああ"; 
  var regex = new RegExp(/.*_/);
  var result = testStr.match(regex);
  Logger.log(result);
  // Logger.log(result[0].replace('_',''));
}
