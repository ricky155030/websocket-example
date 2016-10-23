'use strict';

import React from 'react'
import { cloneDeep } from 'lodash';

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

const deepAssign = (a, b) => {
  let keys = Object.keys(b) 
  let output = cloneDeep(a)
  
  if(isObject(a) && isObject(b)) {
    keys.forEach((key) => {
      let source = output[key]
      let target = b[key]
    
      if(isObject(target)) {
        if(key in output) {
          output[key] = deepAssign(source, target)
        } else {
          Object.assign(output, { [key]: target })
        }
      } else {
        Object.assign(output, { [key]: target })
      }
    })
  }

  return output
}

export const wrapperProps = (Component, wrapProps) => {
  return class extends React.Component {
    render() {
      const mergedProps = deepAssign(wrapProps, this.props)

      return (
        <Component 
          ref={(ref) => {this.child = ref}}
          {...mergedProps}
        />
      )
    }
  }
}

export const myFetch = (url, option) => {
  option = option || {}

  return fetch(url, option)
    .then((response) => {
      const status = response.status

      return response.json()
        .then((json) => {
          if(status == 200) {
            return Promise.resolve(json)
          } else {
            return Promise.reject(json)
          }
        })
    })
}
