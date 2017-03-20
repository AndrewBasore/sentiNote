import React from 'react';



export function emotinator(content) {
  let wordArray = content.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(' ')
  let emotionObject = {}
  let preData = {}
  let emotionInstances = []
  let emotion = require('./emotion')

  wordArray.forEach(word=>{
    if(emotion[word]){
      if(!preData[word]){
        preData[word]=[emotion[word],1]
      }else{
        preData[word][1]=preData[word][1]+1
      }
      emotion[word].forEach(match=>{
        if (!emotionObject[match]) {
          emotionObject[match]=1
        }else{
          emotionObject[match] = emotionObject[match] + 1
        }
      })
    }
  })
 for(let key in preData) {
    emotionInstances.push({value: key, count: preData[key][1]})
  }
  return [emotionObject, emotionInstances]
}

export const customRenderer = (tag, size, color) => (
  <span key={tag.value}
    style={{
      fontSize: `${size+1}em`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: `${color}`
    }}>{tag.value}</span>
);

export function validateSong(values) {
  const error = {}
  if (!values.song_title) {
    error.song_title = 'A Song Title is Required'
  }
  if (!values.song_artist) {
    error.song_artist = 'Artist is  Required'
  }
  console.log('Errors======>', error)
  return error
}

export function validateJournal(values) {
  const error = {}
  if (!values.title) {
    error.title = 'A Title is Required'
  }
  if (!values.content) {
    error.content = 'Content is Required'
  }
  console.log('Errors======>', error)
  return error
}


