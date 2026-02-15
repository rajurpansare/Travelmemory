// Ideally, point this to your Load Balancer DNS later. 
// For now, to ensure Nginx proxy works, we can use the relative path or the Public IP.
export const baseUrl = "http://13.233.36.41:3000" 
// OR if using Nginx Proxy Pass (Preferred for Production):
// export const baseUrl = "http://<YOUR_EC2_PUBLIC_IP>/api"
