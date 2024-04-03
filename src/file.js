import { initialize } from './dist/index.mjs';

export default function loadAds(clickIds) {
    if (clickIds.length >= 1) {            
        const myOptions = {
            apiKey: 'your-api-key-here',
            clickIds: clickIds,
        };
        initialize(myOptions);
    } else {
        console.error('Invalid click IDs:', clickIds);
    }
}
