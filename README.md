# Nucleus Food Access Mapping – GGR472 Final Project

This project is an interactive web-based platform built for **Nucleus Independent Living**, designed to support food access planning across the Halton Region. The tool integrates geospatial analysis and cartographic presentation through ArcGIS Online and Bootstrap-powered UI.

## 🌐 Live Web Map
ArcGIS Online Instant App embedded directly in the website:

🔗 https://utoronto.maps.arcgis.com/apps/instant/basic/index.html?appid=5809f2a4f5884667b4161415ccf93517

## 📁 Project Structure

```
index.html              # Main website file with Bootstrap layout
README.md               # Project documentation (this file)
/data                   # (If used) Local GeoJSON or support data
/assets                 # (Optional) Images, icons, logos
```

## ✅ Features
- Food banks spatially analyzed by dissemination area (DA) proximity
- Public transit accessibility shown using buffer zones and stop counts
- Interactive pop-ups for address, hours, and contact info
- Fully responsive layout (Bootstrap 5)
- Accessible, user-friendly design with icon-labeled tabs

## ⚙️ Technologies Used
- HTML, CSS, Bootstrap 5
- ArcGIS Online (Web Map & Instant App)
- ArcGIS Pro (Data processing, Near & Buffer tools)
- Turf.js (Spatial logic)
- Mapbox GL JS (optional for further extensions)

## 📦 Deployment
No build tools are required. Simply open `index.html` in your browser or host it on GitHub Pages, Netlify, or similar static hosting services.

## 👥 Team Members
- Zetong Zhu
- Yisu Chen

## 📄 License
This project was developed as part of the University of Toronto GGR472 course (Spring 2024). For academic and demonstration purposes only.
