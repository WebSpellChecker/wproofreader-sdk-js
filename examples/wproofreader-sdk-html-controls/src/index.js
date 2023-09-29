import './main.css';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

WProofreaderSDK.configure({
	autoSearch: true,
	autoDestroy: true,
	enforceAI: true,
	serviceId: 'your-service-id'
});
