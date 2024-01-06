import Image from "next/image";

function AuthInput({ label, type }: { label: string; type: string }) {
  const ispassword = type === "password";
  return (
    <div className={`sign-input-box ${ispassword && "sign-password"}`}>
      <label className="sign-input-label">{label}</label>
      <input type={type} className="sign-input" autoComplete="username" />
      {type === "password" && (
        <button id="password-toggle" className="eye-button" type="button">
          <Image src="/icons/eye-off.svg" alt="eye-off" width={24} height={24} />
        </button>
      )}
      <p className="error-message"></p>
      <style jsx>
        {`
          .sign-input-box {
            display: flex;
            flex-direction: column;
            row-gap: 1.2rem;
          }

          .sign-password {
            position: relative;
          }

          .sign-input-label {
            font-size: 1.4rem;
            font-weight: 400;
          }

          .sign-input {
            padding: 1.8rem 1.5rem;
            border-radius: 0.8rem;
            border: 0.1rem solid var(--gray20);
            font-size: 1.6rem;
            line-height: 150%;
          }

          .sign-input:focus {
            border-color: var(--primary);
          }

          .sign-input.sign-input-error {
            border-color: var(--red);
          }

          .sign-input.sign-input-error:focus {
            border-color: var(--red);
          }

          .error-message {
            display: none;
            margin-top: -0.4rem;
            font-size: 1.4rem;
            font-weight: 400;
            color: var(--red);
          }

          .error-message.error-message-on {
            display: inline-block;
          }

          .eye-button {
            position: absolute;
            top: 5.1rem;
            right: 1.5rem;
            width: 1.6rem;
            height: 1.6rem;
          }
        `}
      </style>
    </div>
  );
}

export default AuthInput;
