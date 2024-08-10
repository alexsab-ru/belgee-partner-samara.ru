export function phoneFormat(phone) {
	var cleanNumber = phone.replace(/\D/g, '');

	// Удаляем первую цифру, если это 7 или 8
	if(cleanNumber.length > 10) {
		if (cleanNumber.startsWith('7') || cleanNumber.startsWith('8')) {
			cleanNumber = cleanNumber.substring(1);
		}
	}

	return "+7"+cleanNumber;
}

export function declOfNums(value, words = ['автомобиль', 'автомобиля', 'автомобилей']) {
	value = Math.abs(value) % 100;
	var num = value % 10;
	if (value > 10 && value < 20) return words[2];
	if (num > 1 && num < 5) return words[1];
	if (num == 1) return words[0];
	return words[2];
}

export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

export function currencyFormat(number, locale = 'ru-RU'){
	if (!number || number === 0 || typeof number != 'number' ){
		return;
	}
	return number.toLocaleString(locale, { style: "currency", currency: "RUB", minimumFractionDigits: 0, });
}

const date = new Date();
// let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
// firstDay = firstDay.getDate() < 10 ? `0${firstDay.getDate()}` : firstDay.getDate();
const month = date.getMonth();
const lastDay = new Date(date.getFullYear(), month + 1, 0);
export const LAST_DAY = lastDay.getDate();
export const MONTH = (month + 1) < 10 ? `0${month + 1}` : month + 1;
export const YEAR = date.getFullYear();
