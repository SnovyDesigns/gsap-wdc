// Font Awesome 5 icons import & setup
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHomeLgAlt } from '@fortawesome/pro-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
library.add(faHomeLgAlt, faTwitter, faFacebookF, faInstagram);
dom.watch();
