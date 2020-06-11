
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const CardItem = props => {
  return (
        <View style={styles.CardContainer}>
            {props.dataP.isOpenNow ? null : <View style={styles.OpenView}><Text style={styles.OpenText}>CLOSED NOW</Text></View>}
            
            <Image style={styles.RestaurantImage} source={{uri:props.dataP.image}} />
            <View style={styles.CardInfo}>
            <View style={styles.CardTexts}>
            <View style={styles.TitleAndFireIcon}>
            <Text>{props.dataP.name}</Text>
            {
            props.dataP.isPopular ? 
            <Image style={styles.FireIcon} source={require("../assets/fireIcon.png")}/>
            : null
            }
            </View>
            <Text style={styles.locationText}>{props.dataP.location}</Text>
            </View>
            <View style={styles.CardLikes}>
            <Image style={styles.likeHeart} source={require("../assets/likeHeart.png")}/>
            <Text>{props.dataP.likes}</Text>
            </View>
            </View>
        </View>  
  );
};

const styles = StyleSheet.create({
    CardContainer: {
    flex:1,
    height:Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.8,
    alignSelf:"center",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    backgroundColor:"#e0e0e0",
    marginVertical:5
  },
  RestaurantImage:{
      flex:10,
      resizeMode:"stretch"
  },
  CardInfo:{
      flex:3,
      flexDirection:"row",
      paddingHorizontal:10
  },
  CardTexts:{
      flex:1,
      flexDirection:"column",
      justifyContent:"center"
  },
  CardLikes:{
      flexDirection:"row",
      alignItems:"center"
  },
  locationText:{
      fontSize:10,
      fontWeight:"300",
      color:"#707070"
  },
  likeHeart:{
      width:20,
      height:20,
      resizeMode:"contain",
      marginRight:5
  },
  FireIcon:{
    width:20,
    height:20,
    resizeMode:"contain",
    marginLeft:5
  },
  TitleAndFireIcon:{
      flexDirection:"row"
  },
  OpenView:{
      flex:1,
      position:"absolute",
      zIndex:2,
      width:Dimensions.get("window").width * 0.8,
      height:Dimensions.get("window").height * 0.04,
      marginTop:Dimensions.get("window").height * 0.1,
      borderTopColor:"red",
      borderBottomColor:"red",
      borderTopWidth:3,
      borderBottomWidth:3,
      alignItems:"center",
      justifyContent:"center"
  },
  OpenText:{
      fontSize:20,
      fontStyle:"italic",
      color:"red"
  }
});

export  {CardItem};
