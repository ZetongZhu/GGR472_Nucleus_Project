# Mapping Food Bank Accessibility in Halton Region for Nucleus Independent Living

This project is an interactive web mapping tool developed to support Nucleus Independent Living in identifying and addressing geographic barriers to food bank accessibility across Halton Region, Ontario. Built using ArcGIS Pro and ArcGIS Online, the map visualizes critical spatial relationships between food banks, public transit stops, and residential areas, providing actionable insights for community service planning.

# Key Analysis

- Dissemination Area (DA) and Food Bank Proximity: Color-gradient visualization showing distance from DA centroids to nearest food banks, helping to identify underserved neighborhoods.
- Food Banks and Public Transit: 1,000-metre buffer analysis around food banks, highlighting areas with strong or limited transit connectivity.
- Residential Address Points and Bus Stops: Near analysis evaluating household-level access to public transit for precise, client-specific assessment.

# Technologies

- ArcGIS Pro – Spatial analysis (Near, Buffer, Spatial Join)
- ArcGIS Online – Web map hosting and interactivity
- Visual Studio Code – Basic styling and interface configuration
- GitHub-  Version control and collaboration

#Data Sources

- Statistics Canada– Dissemination Area boundaries
- Municipal Open Data Portals– Bus stops, address points (Burlington, Oakville, Milton, Halton Hills)
- FeedHalton.ca – Food bank and community meal locations
- Food for Life & Kerr Street Mission – Supplementary service provider data

#How to Use the Web Map

1. Navigate through the main sections: DA Access, Transit Coverage, and Address-Level Access.
2. Use the layer toggle menu to turn on/off data relevant to each analysis type.
3. Hover or click on map features to explore pop-up windows showing detailed attributes such as food bank hours, address proximity, and bus stop counts.
4. Use the search bar to input an address and evaluate its accessibility.
5. Visit the “How to Use” section on the website for additional guidance and interpretation of map layers.

#Limitations

- Missing residential address data for Halton Hills limits full-region analysis.
- Transit accessibility analysis does not account for frequency, schedule, or route diversity.
- Lack of detailed demographic data limits client segmentation by age, income, or mobility needs.

#Future Enhancements

- Integrate transit schedules and route data for time-sensitive accessibility analysis.
- Incorporate demographic overlays to support targeted outreach strategies.
- Explore platform migration to Mapbox GL JS for greater customization and performance flexibility.

#Authors

- Zetong Zhu & Yisu Chen


---

