import React, { FC } from 'react'
import {Alert, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

interface ICardItemProps{
    imgUrl:string;
    name:string;
    price:string |number
}
const CardItem: FC<ICardItemProps> = ({imgUrl,name,price}) => {

    const handlePress = ()=>{
        Alert.alert('Вы выбрали',name)
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
            <Image style={styles.image} source={{uri:imgUrl}}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}$</Text>
        </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
      image:{
          marginTop:15,
          width:"100%",
          height:170,
          borderRadius:4,
      },
      btn:{
           width:"45%",
          marginTop:15,

      },
      price:{
          fontSize:20,
          color:'black',
      },
      name:{
              fontSize:22,
          fontWeight:'700',
              color:'black'
      }
  })
export default CardItem