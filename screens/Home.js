import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
    LogBox
} from 'react-native';

import {PriceAlert, TransactionHistory} from "../components"
import CreateWallet from '../components/CreateWallet';
import {dummyData, COLORS, SIZES, FONTS, icons, images} from "../constants"
import { auth } from '../firebase'

const Home = ({ navigation }) => {

    const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)
    const [transactionHistory, setTransactionHistory] = React.useState(dummyData.transactionHistory)

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }

    React.useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    function renderHeader() {

        const renderItem = ({item, index}) => (
            <TouchableOpacity
                style={{
                    width: 150,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius,
                    borderRadius:10,
                    backgroundColor: COLORS.white
                }}
                onPress={() => navigation.navigate("CryptoDetail", {
                    currency: item })}
            >
                {/* Currency */}
                <View style={{ flexDirection: 'row'}}>
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                marginTop: 5,
                                width: 25,
                                height: 25
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.base }}>
                        <Text style={{ ...FONTS.h3 }}>{item.currency}</Text>
                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.code}</Text>
                    </View>
                </View>
                 {/* Value */}
                 <View style={{ marginTop: SIZES.radius }}>
                     <Text style={{ ...FONTS.h3 }}>${item.amount}</Text>
                     <Text style={{ color: item.type == "I" ? COLORS.green
                     : COLORS.red, ...FONTS.h4 }}>{item.changes}</Text>
                 </View>
            </TouchableOpacity>
        )

        return (
            <View
                style={{
                    width: "100%",
                    height: 290,
                    ...styles.shadow
                }}
            >
                <ImageBackground
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: 'center'
                    }}
                >
                    {/* Header Bar*/}
                    <View
                        style={{
                            marginTop: SIZES.padding * 2,
                            width: "100%",
                            alignItems: "flex-end",
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 35,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={() => console.log("Notificacion on pressed")}
                        >
                            <Image
                                source={icons.notification_white}
                                resizeMode="contain"
                                style={{ flex: 1 }}
                            />
                        </TouchableOpacity>

                    </View>
                    {/* Balance */}
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h2}}>Balance</Text>
                        <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1}}>${dummyData.portfolio.balance}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body5 }}>{dummyData.portfolio.changes} Last 24 hours</Text>
                    </View>
                    {/* Treding */}
                    <View
                        style={{
                            position: 'absolute',
                            bottom: "-30%"
                        }}
                    >
                        <Text style={{ marginLeft: SIZES.padding,
                        color: COLORS.white, ...FONTS.h2}}>Trending
                        </Text>
                        <FlatList
                            contentContainerStyle={{marginTop: SIZES.base}}
                            data={trending}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                </ImageBackground>
                
            </View>

              
        )
    }

    function renderAlert() {
        return (
            <PriceAlert/>
        )
    }

    function renderNotice() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 20,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.secondary,
                    ...styles.shadow
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h3}}
                >Noticias</Text>
                <Text style={{ marginTop: SIZES.base, color: COLORS.
                white, ...FONTS.body4, lineHeight: 18 }}>Es muy
                difícil cronometrar una inversión, especialmente cuando el
                el mercado es volátil. Aprende a usar el conteo de dólares
                promediando a su favor.</Text>

                <TouchableOpacity
                    style={{
                        marginTop: SIZES.base
                    }}
                    onPress={() => console.log("Learn More")}
                >
                    <Text style={{ textDecorationLine: 'underline',
                    color: COLORS.green, ...FONTS.h3 }}>Saber mas</Text>

                </TouchableOpacity>

            </View>
        )
    }

    function renderTransactionHistory() {
        return (
            <TransactionHistory
                customContainerStyle={{ ...styles.shadow }}
                history={transactionHistory}
            />
        )
    }

    function renderCreateWallet() {
        return (
            <CreateWallet/>
        )
    }

    function renderLogOut() {
        return (
            <View style={styles.container}>
                <Text style={{marginTop: 50}}>Email: {auth.currentUser?.email}</Text>
                <TouchableOpacity
                    onPress={handleSignOut}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
            </View>
        )
    }
  

    return (
        <ScrollView>
            <View style={{flex: 1, paddingBottom: 130 }}>
                {renderHeader()}
                {renderAlert()}
                {renderNotice()}
                {renderTransactionHistory()}
                {renderCreateWallet()}
                {renderLogOut()}
                
             
    
                
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    button: {
     backgroundColor: '#5D2DFD',
     width: '60%',
     padding: 15,
     borderRadius: 10,
     alignItems: 'center',
     marginTop: 40,
   },
   buttonText: {
     color: 'white',
     fontWeight: '700',
     fontSize: 16,
   },
})

export default Home;