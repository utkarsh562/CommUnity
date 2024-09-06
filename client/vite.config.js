// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Bind to all network interfaces, allowing access from outside the container
    port: 1000,        // Specify the port (make sure it matches your Docker port mapping)
    strictPort: true,  // Fail if the port is already in use
    watch: {
      usePolling: true // Enable polling for file changes inside the Docker container
    }
  }
})