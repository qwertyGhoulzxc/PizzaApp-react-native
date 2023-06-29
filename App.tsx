import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CardItem from "./src/components/CardItem";
import SearchIcon from "./src/assets/icons/SearchIcon";




function App(): JSX.Element {

  const pizzaData = [
    {id:1,name:'Карбонара',price:24,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/0a496a3d8b87415dbc3d3647ff8f3db8_292x292.webp',},
    {id:2,name:'Мясной Микс',price:33,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/52dbe108268645729540c44a60f21b8a_292x292.webp',},
    {id:3,name:'Бургер-пицца',price:21,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/13434cfa6b7f49ff993cdab77446fb4f_292x292.webp',},
    {id:4,name:'Итальянский цыпленок',price:44,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/04fc5dcfe88344669a4c432b42a3141b_292x292.webp',},
    {id:5,name:'Аррива!',price:22,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/6d2d06f2ab3d4711b917fb7c262f57aa_292x292.webp',},
    {id:6,name:'Четыре сезона',price:41,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/f05b3d7ed33647a985d383d68a94bf09_292x292.webp',},
    {id:7,name:'Дон Бекон',price:34,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/f2294b1900404729a18ad543716a33a9_292x292.webp',},
    {id:8,name:'Цыпленок карри',price:25,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/db4b32eed52a4eda888a5e3f847093d7_292x292.webp',},
    {id:9,name:'Додо Микс',price:14,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/19d5e8d134984d4f800a2ed42d4ef3d2_292x292.webp',},
    {id:10,name:'Пепперони',price:32,image:'https://dodopizza-a.akamaihd.net/static/Img/Products/70834e6311c0483493bf2279dbc1718d_292x292.webp',},
  ]
  const [product,setProduct] = useState<string>('')
  const [search,setSearch] = useState<string>('')

  return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <ScrollView style={styles.container}>
     <Text style={styles.text}>Магазин пиццы</Text>
     <Text style={styles.textDes}>Самая вкусна пицца на планете {'\n'} в dominos pizza</Text>

          <View>
          <TextInput style={styles.searchInput}
                     onChangeText={(text:string)=>setProduct(text)}
                     value={product}
          />
          <TouchableOpacity onPress={()=>setSearch(product)} style={styles.iconsContainer}>
          <SearchIcon height={26} width={26}/>
          </TouchableOpacity>
          </View>

          {search&&<Text>Вы икали {search}</Text>}


          <View style={styles.imageContainer}>
            {pizzaData?.map(i=>{
              return <CardItem key={i.id} price={i.price} imgUrl={i.image} name={i.name}/>
            })}

          </View>

          <TouchableOpacity style={styles.orderBtn}>
            <Text style={{textAlign:'center',color:'#fff',fontSize:16,fontWeight:"600"}}>Создать заказ</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:15,
    paddingHorizontal:15,
  },
  text:{
    fontSize:24,
    fontWeight:"700",
    color:'black'
  },
  textDes:{
    marginTop:15,
    fontSize:16,
    color:'gray',
  },

  imageContainer:{
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-between",
    flexWrap:"wrap",

  },
  orderBtn:{
    backgroundColor:'orange',
    width:"100%",
    paddingVertical:16,
    borderRadius:8,
    marginVertical:30
  },
  searchInput:{
    height:40,
    marginTop:12,
    borderWidth:1,
    borderColor:'orange'
  },
  iconsContainer:{
    position:"absolute",
    top:20,
    right:5,
  }
})

export default App;
