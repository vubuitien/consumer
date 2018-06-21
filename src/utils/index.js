export function isNotEmpty(text) {
  return (text !== undefined && text !== '');
}

export function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

export function validateEmpty(string) {
	const reg = /^$/;
	return reg.test(string);
}

export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email) ? undefined : 'invalid_email';
 }

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
