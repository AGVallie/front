import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 모든 네트워크 인터페이스에서 접속 가능하도록 설정
    port: 5173, // 포트 번호 (원하는 포트로 변경 가능)
  },
});
