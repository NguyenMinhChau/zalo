const { i18n } = require('next-i18next');

module.exports = {
	i18n: {
		locales: ['en', 'vi'],
		defaultLocale: 'en',
	},
	react: {
		useSuspense: false, // Nếu bạn muốn sử dụng React Suspense
	},
};
