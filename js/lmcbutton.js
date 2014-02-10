// LettersMarket Clipboard Button
// LMCButton
// http://www.lettersmarket.com

function isNotEmpty(str) {
 return !((str == undefined) || (str == ''));
}


function ShowLMCButton(cliptext, capt, js, furl, htmlElemId)
{
  var params = 'txt=' + encodeURIComponent(cliptext); 
  if (!isNotEmpty(furl)) { furl = "lmcbutton.swf"; }
  if (isNotEmpty(capt)) { params += '&capt=' + capt; }
  if (isNotEmpty(js)) { params += '&js=' + js; }
  
 if(!htmlElemId) {
  document.write('<object width="40" height="20">');
  document.write(' <param name="movie" value="' + furl + '">');
  document.write(' <PARAM NAME=FlashVars VALUE="' + params + '">');
  document.write(' <embed src="' + furl + '" flashvars="' + params + '"  width="40" height="20"></embed>');
  document.write('</object>');
 } else {
  var html = '<object width="40" height="20">';
  html += ' <param name="movie" value="' + furl + '">';
  html += ' <PARAM NAME=FlashVars VALUE="' + params + '">';
  html += ' <embed src="' + furl + '" flashvars="' + params + '"  width="40" height="20"></embed>';
  html += '</object>';
  
  var htmlElement = document.getElementById(htmlElemId);
  if(htmlElement) {
    htmlElement.innerHTML = html;
  }
 }

//alert('file: ' + furl + ' Params: ' + params); // debug
}
