import React, { useRef, useLayoutEffect, useState } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import ThreeGlobe from 'three-globe'
import * as THREE from 'three'
import countries from "/custom.geo.json"
import map from "/map.json"
import { useProgress } from '@react-three/drei'



extend({ ThreeGlobe })

export default function Globe(props) {
  // This reference will give us direct access to the ThreeGlobe class
  const globeRef = useRef()

  const countriesVisited = ["United States of America", "Canada", 
  "Bahamas", "France", "Australia", "Italy", "Germany", "Costa Rica", "Belize", "Dominican Republic", "Israel"  ]

  const N = 30;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 7 + Math.random() * 30,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));

  



  // An effect that runs after three.js elements are created but before render
  useLayoutEffect(() => {
    // Configure the globe
    // globeRef.current.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    // globeRef.current.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    const globeMaterial = globeRef.current.globeMaterial()
    globeMaterial.color = new THREE.Color(0x3a228a)
    globeMaterial.emissive = new THREE.Color(0x220038)
    globeMaterial.emissiveIntensity = 0.1
    globeMaterial.shininess=0.7
    globeRef.current.position.y = 0
    globeRef.current.position.x = 0
    globeRef.current.scale.set(0.023,0.023,0.023)
    globeRef.current.hexPolygonsData(countries.features)
    globeRef.current.hexPolygonColor((feature) => {
      // Check if the country is Brazil
      const countryName = feature.properties.name || feature.properties.admin;
      if (countriesVisited.includes(countryName)) {
        return `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`
      } else {
        return 'black'; // All other countries
      }
    })

    globeRef.current.hexPolygonResolution(4)
    globeRef.current.hexPolygonMargin(0.3)
    
    // globeRef.current.labelsData(gData)
    // globeRef.current.labelText(d => `(${Math.round(d.lat * 1e2) / 1e2}, ${Math.round(d.lng * 1e2) / 1e2})`)
    // globeRef.current.labelSize(3)
    // globeRef.current.labelDotRadius(0.5)
    // globeRef.current.labelColor('color');
    globeRef.current.labelsData(map.maps)
    globeRef.current.labelText("country")
    globeRef.current.labelSize(2)
    globeRef.current.labelDotRadius(0.5)
    globeRef.current.labelAltitude(0.01)


    


    





  }, []);

  useFrame(() => {
    globeRef.current.rotation.y += .0005
  })


  // This is a ThreeGlobe object but represented in JSX.
  // Any valid properties of that class are valid props
  return <threeGlobe {...props} ref={globeRef} />

}