import { eyes, eyeEvent } from './signModule/eye.js';
import { emailInput, emailCheck } from './signModule/email_validation.js';
import { pwdInput, pwdCheck } from './signModule/pwd_validation.js';
import { pwdConfirmInput, pwdConfirmCheck } from './signModule/pwd_confirm.js';
import { btn, btnCheck } from './signup_btn.js';


emailCheck(emailInput);
pwdCheck(pwdInput);
pwdConfirmCheck(pwdConfirmInput);
eyeEvent(eyes);
btnCheck(btn);