import { Input } from '../ui-input/Input';

/* PasswordInput의 프롭 */
// 기존 Input - value, onChange, placeholder
//
// 에러가 뜰 때 - , 에러 여부, 에러 메세지

// PasswordInput의 state
// + type은 text나 password 중 하나 필수
// 비밀번호 가림 여부 => 타입 바뀌어야됨(password, text)

export default function PasswordInput() {
  return (
    <div>
      <Input value={''} onChange={() => {}} placeholder="" />
    </div>
  );
}
