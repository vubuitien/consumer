import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.data,
      activeSlide: 0,
    };
  }
  get pagination() {
        const { slides, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={slides.length}
              tappableDots={!!this.slideRef}
              carouselRef={this.slideRef}
              activeDotIndex={activeSlide}
              containerStyle={{ marginTop: -60 }}
              dotStyle={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginHorizontal: 0,
                  borderWidth: 2,
                  borderColor: 'white',
                  backgroundColor: 'white',
              }}
              inactiveDotStyle={{ backgroundColor: 'transparent' }}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
        );
    }
  _renderSlideItem({ item, index }) {
    const { width } = Dimensions.get('window');
    return (
      <View key={index} style={{ width: this.props.width ? this.props.width : width }}>
        {item}
      </View>
    );
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View>
        <Carousel
          ref={(r) => { this.slideRef = r; }}
          data={this.state.slides}
          renderItem={this._renderSlideItem.bind(this)}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
          itemWidth={this.props.width ? this.props.width : width}
          sliderWidth={this.props.sliderwidth ? this.props.sliderwidth : width}
          loop={this.props.loop !== undefined ? this.props.loop : true}
        />
        {this.props.showDot ? this.pagination : null}
      </View>
    );
  }
}

export default Slide;
