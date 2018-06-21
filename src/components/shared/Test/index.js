import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MultiSelectModal from '../MultiSelectModal';

class Test extends Component {
  render() {
    const selected = [];
    const options = [
      {
        'id': 1,
        'name': 'Connecticut, Maine, Massachusetts',
        'stores': [
          {
            'id': 1,
            'name': 'The store 1'
          },
          {
            'id': 2,
            'name': 'The store 2'
          }
        ]
      },
      {
        'id': 2,
        'name': 'New Jersey, New York, Puerto Rico',
        'stores': []
      },
      {
        'id': 3,
        'name': 'Delaware, District of Columbia, Maryland',
        'stores': []
      },
      {
        'id': 4,
        'name': 'Alabama, Florida, Georgia',
        'stores': []
      },
      {
        'id': 5,
        'name': 'Illinois, Indiana, Michigan',
        'stores': []
      },
      {
        'id': 6,
        'name': 'Arkansas, Louisiana, New Mexico',
        'stores': []
      },
      {
        'id': 7,
        'name': 'Lowa, Kansas, Missouri',
        'stores': []
      },
      {
        'id': 8,
        'name': 'Colorado, Montana, North Dakota',
        'stores': []
      },
      {
        'id': 9,
        'name': 'Arizona, California, Hawaii',
        'stores': []
      },
      {
        'id': 10,
        'name': ' Alaska, Idaho, Oregon',
        'stores': []
      }
    ];
    return (
      <MultiSelectModal
        visible
        title='Choose Stores'
        subtitle='Please select your store to apply the offer'
        selected={selected}
        options={options}
        groupOptions={(item) => item.stores}
        grouped
        multiple
        canCheckall
      />
    );
  }
}

export default Test;
