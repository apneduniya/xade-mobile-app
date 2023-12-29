import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';

// Import your images (replace with actual paths)
// import algo from './assets/algo.png';
// import leverage from './assets/leverage.png';
// import limit from './assets/limit.png';
// import stop from './assets/stop.png';
import { ImageAssets } from '../../../../../assets';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';


const TradePage = ({ navigation }) => {
  const [tradeType, setTradeType] = useState("buy");
  const [orderType, setOrderType] = useState("market");
  const [selectedDropDownValue, setSelectedDropDownValue] = useState("Spot");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [value, setValue] = useState("1");
  const [convertedValue, setConvertedValue] = useState("token");
  const [commingSoon, setCommingSoon] = useState(false);
  const [changeSlipage, setChangeSlipage] = useState(false);
  const [slipageValue, setSlipageValue] = useState("1");
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;


  useEffect(() => {
    if (selectedDropDownValue === "Margin" || selectedDropDownValue === "Algo" || orderType === "limit" || orderType === "stop") {
      setCommingSoon(true);
    } else {
      setCommingSoon(false);
    }
  }, [selectedDropDownValue, orderType]);

  return (
    <SafeAreaView
      style={{
        // width: width,
        // height: height,
        // alignSelf: 'flex-start',
        backgroundColor: '#000',
        paddingBottom: 80,
        flex: 1, // Add this line to make the SafeAreaView take up the full screen
        // backgroundColor: 'red'
      }}>
      {/* Top bar */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "3%", width: width, marginBottom: 24 }}>
        <View
          style={{
            // position: 'absolute',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: '5%',
            width: width * 0.9,
          }} >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name={'keyboard-backspace'}
              size={30}
              color={'#f0f0f0'}
              type="materialicons"
              onPress={() => navigation.goBack()}
            />

            <Text
              style={{
                fontSize: 20,
                color: '#ffffff',
                fontFamily: `Sarala-Bold`,
                fontWeight: 500,
                marginLeft: 30
              }}>
              Trade
            </Text>
          </View>
          <TouchableOpacity
          // onPress={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            <View>
              <LinearGradient
                colors={['#5038e1', '#b961ff']}
                useAngle={true}
                angle={103.64}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 22,
                  borderRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{selectedDropDownValue}</Text>
              </LinearGradient>
              {/* <Image source={require('./path-to-your-arrow-image.png')} style={{ width: 24, height: 24 }} /> */}
            </View>
            {/* Drop-down options go here */}
          </TouchableOpacity>
        </View>
      </View>

      {commingSoon ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={
              selectedDropDownValue === "Margin" ?
                ImageAssets.commingSoonImg :
                selectedDropDownValue === "Algo" ?
                  ImageAssets.commingSoonImg :
                  orderType === "limit" ?
                    ImageAssets.commingSoonImg :
                    ImageAssets.commingSoonImg
            }
            style={{ width: 300, height: 300 }}
          />
          <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", fontFamily: "Benzin-Semibold" }}>Coming Soon</Text>
        </View>
      ) : (
        <>
          <ScrollView
            scrollEnabled
            contentContainerStyle={{ flexGrow: 1 }} // Add this line to allow scrolling
          >
            {/* Buy/Sell */}
            <View style={{ flexDirection: "row", borderRadius: 100, backgroundColor: "#151515", alignItems: "center", justifyContent: "space-between", margin: 8, padding: 6 }}>
              <TouchableOpacity
                style={{ width: "50%" }}
                onPress={() => { setTradeType("buy"); setConvertedValue("token") }}
              >
                {
                  tradeType === "buy" ?
                    <LinearGradient
                      colors={['#183e27', '#1d5433']}
                      useAngle={true}
                      angle={93.68}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 22,
                        borderRadius: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontWeight: "bold", color: "#ACFF8E", fontSize: 16, fontFamily: "Benzin-Semibold", width: "40%", textAlign: "center" }}
                      >
                        Buy
                      </Text>
                    </LinearGradient>
                    :
                    <Text
                      style={{ color: "#848484", fontWeight: "bold", fontSize: 16, textAlign: "center" }}
                    >
                      Buy
                    </Text>
                }
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "50%" }}
                onPress={() => setTradeType("sell")}
              >
                {
                  tradeType === "sell" ?
                    <LinearGradient
                      colors={['#183e27', '#1d5433']}
                      useAngle={true}
                      angle={93.68}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 22,
                        borderRadius: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontWeight: "bold", color: "#ACFF8E", fontSize: 16, fontFamily: "Benzin-Semibold", width: "40%", textAlign: "center" }}
                      >
                        Sell
                      </Text>
                    </LinearGradient>
                    :
                    <Text
                      style={{ color: "#848484", fontWeight: "bold", fontSize: 16, textAlign: "center" }}
                    >
                      Sell
                    </Text>
                }
              </TouchableOpacity>
            </View>

            {/* Market, Limit, Stop */}
            <View style={{ flexDirection: "row", borderRadius: 100, backgroundColor: "#151515", alignItems: "center", justifyContent: "space-between", margin: 8, marginTop: 12, padding: 6 }}>
              <TouchableOpacity
                style={{ width: "30%" }}
                onPress={() => setOrderType("market")}
              >
                {
                  orderType === "market" ?
                    <LinearGradient
                      colors={['#5038e1', '#b961ff']}
                      useAngle={true}
                      angle={103.64}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 22,
                        borderRadius: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontWeight: "bold", color: "#ffffff", fontSize: 16, fontFamily: "Benzin-Semibold", textAlign: "center" }}
                      >
                        Market
                      </Text>
                    </LinearGradient>
                    :
                    <Text
                      style={{ color: "#848484", fontWeight: "bold", fontSize: 16, textAlign: "center" }}
                    >
                      Market
                    </Text>
                }
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "30%" }}
                onPress={() => setOrderType("limit")}
              >
                {
                  orderType === "limit" ?
                    <LinearGradient
                      colors={['#5038e1', '#b961ff']}
                      useAngle={true}
                      angle={103.64}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 22,
                        borderRadius: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontWeight: "bold", color: "#ffffff", fontSize: 16, fontFamily: "Benzin-Semibold", textAlign: "center" }}
                      >
                        Limit
                      </Text>
                    </LinearGradient>
                    :
                    <Text
                      style={{ color: "#848484", fontWeight: "bold", fontSize: 16, textAlign: "center" }}
                    >
                      Limit
                    </Text>
                }
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "30%" }}
                onPress={() => setOrderType("stop")}
              >
                {
                  orderType === "stop" ?
                    <LinearGradient
                      colors={['#5038e1', '#b961ff']}
                      useAngle={true}
                      angle={103.64}
                      style={{
                        paddingVertical: 10,
                        paddingHorizontal: 22,
                        borderRadius: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{ fontWeight: "bold", color: "#ffffff", fontSize: 16, fontFamily: "Benzin-Semibold", textAlign: "center" }}
                      >
                        Stop
                      </Text>
                    </LinearGradient>
                    :
                    <Text
                      style={{ color: "#848484", fontWeight: "bold", fontSize: 16, textAlign: "center" }}
                    >
                      Stop
                    </Text>
                }
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 16, color: "#7e7e7e", textAlign: "center" }}>How much would you like to invest?</Text>
            </View>
            <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "center", gap: 8 }}>
              <TextInput
                style={{ fontSize: 56, fontWeight: 900, color: "#ffffff", textAlign: "center" }}
                value={value}
                onChangeText={(text) => setValue(text)}
                keyboardType='numeric'
              />
              <Text style={{ fontSize: 56, fontWeight: 900, color: "#252525", textAlign: "center" }}>$</Text>
            </View>
            <View style={{ marginTop: 40, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 16, color: "#7e7e7e", textAlign: "center" }}>You'll get </Text>
              <Text style={{ fontSize: 16, fontWeight: 900, color: "#7e7e7e", textAlign: "center" }}>0.000029 BTC  </Text>
              <Image source={ImageAssets.arrowImg} />
            </View>

            <View
              style={{
                marginTop: 40,
                margin: 8,
              }}
            >
              <TouchableOpacity
                onPress={() => setIsModalOpen(!isModalOpen)}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    fontFamily: "Satoshi",
                    color: "#ffffff",
                  }}
                >
                  Order summary
                </Text>
                <Icon
                  name={'keyboard-arrow-down'}
                  size={30}
                  color={'#ffffff'}
                  type="materialicons"
                  style={{
                    transform: [{ rotate: isModalOpen ? "180deg" : "0deg" }],
                  }}
                />
              </TouchableOpacity>
            </View>

            {
              isModalOpen && (
                <View
                  style={{
                    margin: 8,
                    marginTop: 10
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 34
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 24
                      }}
                    >
                      <Image
                        source={ImageAssets.dollarImg}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: "Satoshi",
                            color: "#7e7e7e",
                          }}
                        >
                          Entry price
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            fontFamily: "Satoshi",
                            color: "#fff",
                          }}
                        >
                          $34,909.12
                        </Text>
                      </View>
                    </View>
                    <Image
                      source={ImageAssets.infoImg}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 34
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 24
                      }}
                    >
                      <Image
                        source={ImageAssets.slippageImg}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: "Satoshi",
                            color: "#7e7e7e",
                          }}
                        >
                          Slippage
                        </Text>
                        {
                          changeSlipage ?
                            (
                              <TextInput
                                style={{
                                  fontSize: 16,
                                  fontWeight: "700",
                                  fontFamily: "Satoshi",
                                  color: "#fff",
                                }}
                                value={`${slipageValue} %`}
                                onChangeText={(text) => setSlipageValue(text)}
                                keyboardType='numeric'
                              />
                            )
                            :
                            (
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontWeight: "700",
                                  fontFamily: "Satoshi",
                                  color: "#fff",
                                }}
                                
                              >
                                {changeSlipage}%
                              </Text>
                            )
                        }
                      </View>
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "700",
                        fontFamily: "Satoshi",
                        color: "#c397ff",
                      }}
                      onPress={() => setChangeSlipage(!changeSlipage)}
                    >
                      Change
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 34
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 24
                      }}
                    >
                      <Image
                        source={ImageAssets.feeImg}
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontFamily: "Satoshi",
                            color: "#7e7e7e",
                          }}
                        >
                          Estimated fee
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "700",
                            fontFamily: "Satoshi",
                            color: "#fff",
                          }}
                        >
                          $0.01
                        </Text>
                      </View>
                    </View>
                    <Image
                      source={ImageAssets.infoImg}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                </View>
              )
            }

            <View
              style={{
                marginTop: 20,
                margin: 8,
              }}
            >
              <LinearGradient
                style={{
                  borderRadius: 100,
                  borderStyle: "solid",
                  borderColor: "#65ffa3",
                  borderWidth: 1,
                  backgroundColor: "transparent",
                  paddingVertical: 22,
                  paddingHorizontal: 100
                }}
                locations={[0, 1]}
                colors={["#1b4d30", "#328454"]}
                useAngle={true}
                angle={95.96}
              >
                <Text
                  style={{
                    fontSize: 16,
                    letterSpacing: 0.2,
                    fontWeight: "700",
                    fontFamily: "Satoshi",
                    color: "#acff8e",
                    textAlign: "center",
                  }}
                >
                  Confirm order
                </Text>
              </LinearGradient>
            </View>
          </ScrollView>
        </>
      )}

    </SafeAreaView>
  );
};

export default TradePage;
