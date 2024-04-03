// Copyright (c) 2024 George, Khalil All rights reserved
//
// Created by: George , Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function AreaOfTrapizoid() {
  // input
  const ABase = parseInt(document.getElementById('A-Base').value)
  const BBase = parseInt(document.getElementById('B-Base').value)
  const Height = parseInt(document.getElementById('Height').value)
  // process
  const areaOfTrapizoid = [(ABase + BBase) / 2] * Height

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + ABase + BBase / 2 * Height + ' mm²'

}
