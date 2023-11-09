import { submitBtn, emailInput, passwordInput, inputForm } from "./modules/domSelectors.js";
import regEmail from "./modules/regexPatterns.js";
import { authEvent, specifyWarningPosition } from "./modules/authModule.js";
import userData from "./database/userData.js";

authEvent();
