import I18n from '../../I18n';
import { urlFormatRegExp, mobileRegExp, emailRegExp } from '../../utils/regexps';

export const validateMultiple = (value, validators) => {
	const errors = []
	validators.map((validator) => {
		const error = validator(value)
		if(error != null){
			errors.push(error)
		}
	})
	return errors.length > 0 ? errors : undefined;
}

export const required = value => {
	return value ? undefined : 'This field is required';
}

export const notempty = value => {
	if (!value) return true;
	return value.length ? undefined : true;
}

export const urlFormat = (value) => {
	return (value != null && urlFormatRegExp.test(value)) ? undefined : 'invalid_format';
}

export const maxLengthFirstName = (value) => {
	if (value !== undefined && value !== null && value.length > 24) {
		return 'first name has a max length of 24';
	}
};

export const emailValidator = (value) => {
	return value && emailRegExp.test(value) ? undefined : 'invalid_format';
}

export const optionalEmailValidator = (value) => {
	return !value || (value && emailRegExp.test(value)) ? undefined : 'invalid_format';
}

export const optionalMobileFormat = (value) => {
	return !value || (value && mobileRegExp.test(value)) ? undefined : 'invalid_format';
}

export const mobileFormat = (value) => {
	return (value && mobileRegExp.test(value)) ? undefined : 'invalid_format';
}

export const maxValue = max => value => {
	if (!value) return undefined;
	return (Number(value) <= max) ? undefined : `${max} is max value can set`;
}

export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const isNumber = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minLength = min => value => value && value < min ? `Must be at least ${min}` : undefined;
export const rangeLength = (min, max) => value => value && min <= value.length && value.length <= max ? undefined : `Must be in range ${min}-${max} characters`;
