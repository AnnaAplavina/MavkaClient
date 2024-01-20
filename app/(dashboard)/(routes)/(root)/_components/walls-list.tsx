"use client"
import React, { useEffect, useState } from 'react';
import { WallElement } from "./wall-element";
import { Maximize2 } from 'lucide-react';
import axios from 'axios';
import { getAddress, getWallsByUser } from '@/db_methods/methods';

interface WallsElementTypes {
    id: number;
    name: string;
    admin_id: number; 
};

function createListElements(walls : never[]) {
    const elements = [];

    for (const wall of walls) {
        // console.log(wall);
        elements.push(
        <div className='p-1 pl-2 pr-2'>
            <WallElement 
              key={wall[0]}
              id={wall[0]}
              wall_name={wall[1]}
              admin_id={wall[4]}
            />
        </div>)
    }

    return elements;
}


const studentId = "user_2WlV1B9tAJ82SQmgCPWn0FOvX7o"; // TODO
var apiUrl = `${getAddress()}/walls/all`;


export const WallsList = () => {
    const [walls, setWalls] = useState([]);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    // TODO getWallsByUser(studentId)d
    // console.log(formattedDate);
    useEffect(() => {
        axios.get(apiUrl, {
          params: {
              student_id: studentId
          }
          })
          .then((response) => {
            setWalls(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [apiUrl]);
    
    // console.log(walls);

    const renderedElements = createListElements(walls);
    return (
        <div className="border rounded-lg shadow-sm max-w-xs m-2 p-2 bg-slate-50 hover:shadow-md">
          <div className='p-2'>
            <p className='text-lg font-semibold text-black'>Мои курсы</p>
            <a href="/schedule">
              <div className='flex items-center'>
                <Maximize2  className='w-4 h-4 text-slate-500'/>
                <p className='text-sm text-slate-500 ml-2'>Все курсы</p>
              </div>
            </a>
          </div>
          <div>
              {renderedElements} 
          </div>
        </div>
    );
}
