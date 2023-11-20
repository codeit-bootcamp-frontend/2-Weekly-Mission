import { eyes, eyeEvent } from './signModule/eye.js';
import { emailInput, emailCheck } from './signModule/email_validation.js';
import { pwdInput, pwdCheck } from './signModule/pwd_validation.js';
import { btn, btnCheck } from './signin_btn.js';



eyeEvent(eyes);
emailCheck(emailInput);
pwdCheck(pwdInput);
btnCheck(btn);