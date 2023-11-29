import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class TradePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tradeType: 'buy',
      orderType: 'market',
      isDropDownOpen: false,
      selectedDropDownValue: 'Spot',
      isModalOpen: false,
      value: 1,
      changeSlippage: false,
    };
  }

  render() {
    const {
      tradeType,
      orderType,
      isDropDownOpen,
      selectedDropDownValue,
      isModalOpen,
      value,
      changeSlippage,
    } = this.state;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#0E0E0E',
          padding: 14,
          paddingTop: 34,
          color: 'white',
          fontFamily: 'sans-serif',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        {/* Top bar */}
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
            {/* Your SVG component goes here */}
            <Text style={{ fontSize: '1.05em', fontWeight: 'bold' }}>Trade</Text>
          </View>
          <TouchableOpacity
            style={{ position: 'relative' }}
            onPress={() => this.setState({ isDropDownOpen: !isDropDownOpen })}
          >
            <View
              style={{
                background: 'linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)',
                padding: '7px 14px',
                flexDirection: 'row',
                gap: '5px',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '1000px',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: '1em', fontWeight: 'bold' }}>{selectedDropDownValue}</Text>
              {/* Your SVG component goes here */}
            </View>
            {isDropDownOpen && (
              <View
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: 'max-content',
                  background: '#151515',
                  borderRadius: '10px',
                  padding: '10px 0',
                  flexDirection: 'column',
                  gap: '14px',
                  zIndex: 1000,
                }}
              >
                <TouchableOpacity onPress={() => this.setState({ selectedDropDownValue: 'Spot' })}>
                  <Text style={{ color: '#848484', fontWeight: 'bold' }}>Spot</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ selectedDropDownValue: 'Margin' })}>
                  <Text style={{ color: '#848484', fontWeight: 'bold' }}>Margin</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ selectedDropDownValue: 'Algo' })}>
                  <Text style={{ color: '#848484', fontWeight: 'bold' }}>Algo</Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        </View>
        {/* Buy/Sell */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 44,
            borderRadius: '100px',
            backgroundColor: '#151515',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 4,
          }}
        >
          <Text
            style={
              tradeType === 'buy'
                ? {
                    padding: '12px 70px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(94deg, #183E27 -3.78%, #1D5433 112.05%)',
                    borderRadius: '100px',
                    color: '#ACFF8E',
                    fontSize: '1em',
                    cursor: 'pointer',
                  }
                : { color: '#848484', fontWeight: 'bold', fontSize: '1em', padding: '12px 70px', cursor: 'pointer' }
            }
            onPress={() => this.setState({ tradeType: 'buy' })}
          >
            Buy
          </Text>
          <Text
            style={
              tradeType === 'sell'
                ? {
                    padding: '12px 70px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(94deg, #183E27 -3.78%, #1D5433 112.05%)',
                    borderRadius: '100px',
                    color: '#ACFF8E',
                    fontSize: '1em',
                    cursor: 'pointer',
                  }
                : { color: '#848484', fontWeight: 'bold', fontSize: '1em', padding: '12px 70px', cursor: 'pointer' }
            }
            onPress={() => this.setState({ tradeType: 'sell' })}
          >
            Sell
          </Text>
        </View>
        {/* Market, Limit, Stop */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            height: 44,
            borderRadius: '100px',
            backgroundColor: '#151515',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 4,
          }}
        >
          <Text
            style={
              orderType === 'market'
                ? {
                    padding: '12px 30px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)',
                    borderRadius: '100px',
                    color: '#FFFFFF',
                    fontSize: '1em',
                    cursor: 'pointer',
                  }
                : { color: '#848484', fontWeight: 'bold', fontSize: '1em', padding: '12px 30px', cursor: 'pointer' }
            }
            onPress={() => this.setState({ orderType: 'market' })}
          >
            Market
          </Text>
          <Text
            style={
              orderType === 'limit'
                ? {
                    padding: '12px 30px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)',
                    borderRadius: '100px',
                    color: '#FFFFFF',
                    fontSize: '1em',
                    cursor: 'pointer',
                  }
                : { color: '#848484', fontWeight: 'bold', fontSize: '1em', padding: '12px 30px', cursor: 'pointer' }
            }
            onPress={() => this.setState({ orderType: 'limit' })}
          >
            Limit
          </Text>
          <Text
            style={
              orderType === 'stop'
                ? {
                    padding: '12px 30px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(104deg, #5038E1 53.81%, #B961FF 113.49%)',
                    borderRadius: '100px',
                    color: '#FFFFFF',
                    fontSize: '1em',
                    cursor: 'pointer',
                  }
                : { color: '#848484', fontWeight: 'bold', fontSize: '1em', padding: '12px 30px', cursor: 'pointer' }
            }
            onPress={() => this.setState({ orderType: 'stop' })}
          >
            Stop
          </Text>
        </View>
        {/* How much? */}
        <View style={{ marginTop: 45, flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: '#7E7E7E', fontSize: '1em' }}>How much would you like to invest?</Text>
          <View style={{ marginTop: 48, flexDirection: 'row', gap: 10, alignItems: 'center', width: '100%' }}>
            <TextInput
              keyboardType="numeric"
              value={value.toString()}
              onChangeText={(text) => this.setState({ value: text })}
              style={{ backgroundColor: 'transparent', color: '#ffffff', fontSize: '3.5em', width: '50%', textAlign: 'right', outline: 'none' }}
            />
            <Text style={{ color: '#252525', fontSize: '3.5em' }}>$</Text>
          </View>
          <View style={{ marginTop: 24, flexDirection: 'row', gap: 8 }}>
            <View>
              <Text style={{ color: '#7E7E7E' }}>You'll get</Text>
              <Text style={{ color: '#7E7E7E', fontWeight: 'bold', marginLeft: '.3em' }}>0.000029 BTC</Text>
            </View>
            {/* Your SVG component goes here */}
          </View>
        </View>
        {/* Order Summary */}
        <View style={{ marginTop: 45, flexDirection: 'column', gap: 32 }}>
          <TouchableOpacity onPress={() => this.setState({ isModalOpen: !isModalOpen })}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold' }}>Order summary</Text>
              {/* Your SVG component goes here */}
            </View>
          </TouchableOpacity>
          {isModalOpen && (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: '16px' }}>
                  <View
                    style={{
                      padding: 8,
                      backgroundColor: '#1E1E1E',
                      height: 28,
                      width: 28,
                      borderRadius: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* Your SVG component goes here */}
                  </View>
                  <View style={{ flexDirection: 'column', gap: 4 }}>
                    <Text style={{ color: '#7E7E7E' }}>Entry price</Text>
                    <Text style={{ fontWeight: 'bold' }}>$34,909.12</Text>
                  </View>
                </View>
                {/* Your SVG component goes here */}
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: '16px' }}>
                  <View
                    style={{
                      padding: 8,
                      backgroundColor: '#1E1E1E',
                      height: 28,
                      width: 28,
                      borderRadius: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* Your SVG component goes here */}
                  </View>
                  <View style={{ flexDirection: 'column', gap: 4 }}>
                    <Text style={{ color: '#7E7E7E' }}>Slippage</Text>
                    <Text style={{ fontWeight: 'bold' }}>1%</Text>
                  </View>
                </View>
                <Text style={{ color: '#C397FF', cursor: 'pointer' }}>Change</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: '16px' }}>
                  <View
                    style={{
                      padding: 8,
                      backgroundColor: '#1E1E1E',
                      height: 28,
                      width: 28,
                      borderRadius: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* Your SVG component goes here */}
                  </View>
                  <View style={{ flexDirection: 'column', gap: 4 }}>
                    <Text style={{ color: '#7E7E7E' }}>Estimated fee</Text>
                    <Text style={{ fontWeight: 'bold' }}>$0.01</Text>
                  </View>
                </View>
                {/* Your SVG component goes here */}
              </View>
            </>
          )}
        </View>
        {/* Confirm Order Button */}
        <TouchableOpacity
          style={{
            color: '#ACFF8E',
            padding: 22,
            width: '100%',
            borderRadius: '100px',
            border: 0,
            background: 'linear-gradient(96deg, #1B4D30 45.28%, #328454 89.42%)',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1em',
          }}
        >
          Confirm order
        </TouchableOpacity>
      </View>
    );
  }
}

export default TradePage;
