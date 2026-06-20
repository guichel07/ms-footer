import 'tek-ms-ds/dist/style.css';
import { Footer } from './footer';
import { mockedMessage } from './constant';

const app = document.querySelector<HTMLDivElement>('#app')!;

const footer = new Footer(app);

footer.render(mockedMessage);
