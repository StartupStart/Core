export const setData = (fieldName, newVal) => ({
	type: 'SET_DATA',
	data: {
		fieldName,
		newVal
	}
});
