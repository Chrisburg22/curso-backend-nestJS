import { propertiesMap as paperwork } from './Paperwork';

const getPropertiesMap = (propertiesMapName: string) => {
	switch (propertiesMapName) {
		case 'paperwork':
			return paperwork;
	}
};

export const normalizeRawWith = (string: string, propertiesMapName: string) => {
	const jsonConverted = JSON.parse(string);

	const propertiesMap = getPropertiesMap(propertiesMapName);

	const finalObject = {};
	Object.keys(jsonConverted).forEach((key) => {
		const newKey = propertiesMap[key];

		if (newKey) {
			finalObject[newKey] = jsonConverted[key];
		}
	});

	return finalObject;
};
