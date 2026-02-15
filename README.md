# Travel Memory

`.env` file to work with the backend after creating a database in mongodb: 

```
MONGO_URI='mongodb+srv://rajurpansare_db_user:<b2kk5ni5cMUEfICu>@hvcluster0.hu55roi.mongodb.net/?appName=hvCluster0'
PORT=3000MONGO_URI='mongodb+srv://rajurpansare_db_user:<b2kk5ni5cMUEfICu>@hvcluster0.hu55roi.mongodb.net/?appName=hvCluster0'
PORT=3000
```

Data format to be added: 

```json
{
    "tripName": "Incredible India",
    "startDateOfJourney": "19-03-2022",
    "endDateOfJourney": "27-03-2022",
    "nameOfHotels":"Hotel Namaste, Backpackers Club",
    "placesVisited":"Delhi, Kolkata, Chennai, Mumbai",
    "totalCost": 800000,
    "tripType": "leisure",
    "experience": "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum, ",
    "image": "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    "shortDescription":"India is a wonderful country with rich culture and good people.",
    "featured": true
}
```


For frontend, you need to create `.env` file and put the following content (remember to change it based on your requirements):
```bash
REACT_APP_BACKEND_URL=http://localhost:3001
```

Travelmemory
Travel Memory - Cloud Deployment
Project Description
This repository contains the deployment configuration for the Travel Memory MERN application. The application allows users to store and view travel memories. It is deployed on AWS EC2 with high availability using an Application Load Balancer and served via Nginx.

Architecture
Frontend: React.js (Build served via Nginx)
Backend: Node.js/Express (Running via PM2, reverse proxied by Nginx)
Database: MongoDB Atlas
Infrastructure: AWS EC2 (x2), AWS Application Load Balancer
DNS: Cloudflare
Deployment Steps Summary
Infrastructure: Provisioned Ubuntu 22.04 EC2 instances.
Environment: Installed Node.js v18, Nginx, PM2.
Backend:
Cloned repo.
Configured .env with Mongo URI.
Started process with PM2 (pm2 start index.js).
Frontend:
Updated urls.js to point to the backend API.
Built React app (npm run build).
Deployed to /var/www/travelmemory.
Nginx: configured as a reverse proxy to handle port 80 traffic and route /api requests to port 3000.
Scaling: Created an AMI and launched a second instance; configured an Application Load Balancer (ALB).
DNS: Configured Cloudflare CNAME to point to ALB.
Test
Frontend Access: Verified via 13.233.36.41 and custom domain.

Screenshot 2026-02-15 at 9 31 15 PM
API Health: Verified via curl http://localhost:3000 on server. Screenshot 2026-02-15 at 9 17 36 PM

Load Balancing: Terminated Instance 1, verified Instance 2 continued serving traffic.

Access
Live URL: hvtravelmemory.edu.in
Load Balancer: TravelMemory-ALB-472297692.ap-south-1.elb.amazonaws.com
