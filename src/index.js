import { createRoot } from "react-dom/client";
import { App } from "./App";

// 기존 HTML 컨텐츠를 지웁니다.
document.body.innerHTML = '<div id="app"></div>';

// 대신에 여러분이 작성한 React 컴포넌트를 렌더링합니다.
const root = createRoot(document.getElementById("app"));
root.render(<App />);
