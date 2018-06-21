import React, { Component } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';

class DatePickerField extends Component {
  render() {
    let picker_time;
    if (this.props.hasShowPickerTime) {
        picker_time = (
          <View>
            <DatePicker
              style={{ width: 90 }}
              date={this.props.time}
              mode="time"
              format="HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              minuteInterval={10}
              showIcon={false}
              customStyles={{
                dateInput: {
                  top: -10,
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  height: 30,
                },
              }}
              onDateChange={this.props.onChange}
            />
          </View>
        );
    } else {
        picker_time = <View />;
    }

    let picker_day;
    if (this.props.hasShowPickerDay) {
        picker_day = (
          <View>
            <DatePicker
              style={{ width: 95 }}
              date={this.props.date}
              mode="date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={this.props.onChange}
              customStyles={{
                  dateInput: {
                    alignItems: 'flex-start'
                  },
                  dateText: {
                    fontSize: 12,
                    color: '#234456',
                    marginLeft: 5,
                  },
                  dateIcon: {
                    position: 'absolute',
                    width: 18,
                    height: 18,
                    left: 70,
                    top: 11,
                    marginLeft: 0
                  },
                }}
            />
          </View>
        );
    } else {
        picker_day = <View />;
    }

    let picker_day_modal;
    if (this.props.hasShowPickerDayModal) {
        picker_day_modal = (
          <View>
            <DatePicker
              style={this.props.style}
              date={this.props.date}
              mode="date"
              format="YYYY-MM"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={this.props.onChange}
              showIcon={false}
              customStyles={{
                  dateInput: {
                    alignItems: 'center',
                    borderWidth: 0,
                  },
                  dateText: {
                    fontSize: 12,
                    color: '#234456',
                    fontStyle: 'italic'
                  },
                }}
            />
          </View>
        );
    } else {
        picker_day_modal = <View />;
    }

    return (
      <View>
        {picker_day}
        {picker_time}
        {picker_day_modal}
      </View>
    );
  }
}
export default DatePickerField;
