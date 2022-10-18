import i18n, { configure } from 'i18n';
import { join } from 'path';

configure({
    directory: join(__dirname, '/locales')
});

export default i18n;
