import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default function SimpleLineChart({sentimentObject}) {
    console.log('sentiment object', sentimentObject)

    const dataRange = (sentimentObj) => {
        let sentimentArray = [];

        const words = sentimentObject.orderedWordsRating
        console.log('words for sentiment Array', words)
        words.forEach( (word, i) => {
            console.log('making iteration ', i, 'in lineChart')
            sentimentArray.push({ currentWord: word.word, Polarity: word.totalScore, })
        })
        console.log('tweets sentimentArray transformed for graph', sentimentArray)
        return sentimentArray;
    };


  	return (
    	<LineChart width={600} height={300} data={dataRange(sentimentObject)}
            margin={{top: 5, right: 30, left: 20, bottom: 30}}>
       <XAxis dataKey="currentWord" hide="true"/>
       <YAxis dataKey="Polarity"/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Polarity" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
};
