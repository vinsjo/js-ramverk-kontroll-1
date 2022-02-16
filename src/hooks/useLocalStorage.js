import React, { useState, useCallback } from 'react';
import { isStr } from 'x-is-type';

/**
 * @param {String} key
 * @param {any} value
 */
function setStorageItem(key, value) {
	try {
		if (!key) throw new Error(`Invalid local storage key: ${key}`);
		localStorage.setItem(key, isStr(value) ? value : JSON.stringify(value));
		return value;
	} catch (e) {
		console.error(e);
		return null;
	}
}
/**
 * @param {String} key
 */
function getStorageItem(key) {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (e) {
		console.error(e);
		return null;
	}
}

/**
 * @param {String} key  key to an item in localStorage
 */
function useLocalStorage(key, initialValue = []) {
	const [data, setData] = useState(() => {
		const data = getStorageItem(key);
		if (!data) {
			setStorageItem(key, initialValue);
			return initialValue;
		}
		return data;
	});

	const updateData = useCallback(
		value => setData(setStorageItem(key, value) || []),
		[key, setData]
	);

	return [data, updateData];
}

export default useLocalStorage;
export { getStorageItem, setStorageItem };
