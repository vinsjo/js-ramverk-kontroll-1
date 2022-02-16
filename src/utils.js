import { isArr } from 'x-is-type';

function classNames(...names) {
	return !isArr(names) ? '' : names.filter(name => !!name).join(' ');
}

export { classNames };
