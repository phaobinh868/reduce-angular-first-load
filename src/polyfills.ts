/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'core-js/features/reflect';
import 'zone.js';
// rtc peer connection patch
import 'zone.js/dist/webapis-rtc-peer-connection';
// getUserMedia patch
import 'zone.js/dist/zone-patch-user-media';

