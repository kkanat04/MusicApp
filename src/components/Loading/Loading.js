import {  View, Dimensions } from 'react-native';
import {Image} from "react-native";


export default function Loading() {

    return (
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#171147', opacity: 0.8 }}>
            <Image style={{width: '50%', resizeMode: 'contain'}} source={require('../../../assets/loadingGif.gif')} />
        </View>
    );
}